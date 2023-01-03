const Movie = require('../models/movie');

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json({
      responseCode: 200,
      status: "success",
      responseMsg: "Get All Movies successfully",
      totalMovies : movies.length,
      movies: movies,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const createMovie = async (req,res)=> {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json({
            responseCode: 200,
            status: "success",
            responseMsg: "Movie Added Successfully",
            movie:movie,
            });
    } catch (error) {
        res.status(500).json({error});
    }
};

const getMovie = async (req, res) => {
  try {
    const { id: moviesID } = req.params;
    const movie = await Movie.findOne({_id: moviesID});
    if (!movie) {
       return res.status(404).json({
        responseCode: 404,
        status: "failed",
        responseMsg: `Movie not found from id : ${moviesID}`,
        });
    }
    res.status(200).json({
      responseCode: 200,
      status: "success",
      responseMsg: "Get Movie successfully",
      movie: movie,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateMovie = async (req, res) => {
    try {
      const { id: moviesID } = req.params;
      const movie = await Movie.findOneAndUpdate({_id: moviesID},req.body,{
        new : true,
        runValidators : true
      });
      if (!movie) {
         return res.status(404).json({
          responseCode: 404,
          status: "failed",
          responseMsg: `Movie not found from id : ${moviesID}`,
          });
      }
      res.status(200).json({
        responseCode: 200,
        status: "success",
        responseMsg: "Movie Updated successfully",
        movie: movie,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  const deleteMovie = async (req, res) => {
    try {
      const { id: moviesID } = req.params;
      const movie = await Movie.findOneAndDelete({_id: moviesID});
      if (!movie) {
         return res.status(404).json({
          responseCode: 404,
          status: "failed",
          responseMsg: `Movie not found from id : ${moviesID}`,
          });
      }
      res.status(200).json({
        responseCode: 200,
        status: "success",
        responseMsg: "Movie Deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  



module.exports = {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
