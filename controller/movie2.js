const Movie2 = require('../models/movie2');


const getAllMovies = async (req, res) => {
    try {
      const movies = await Movie2.find({});
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
        console.log(`Http request recieved : createMovies`);
        const movie = await Movie2.create(req.body);
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
      const movie = await Movie2.findOne({_id: moviesID});
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
        const movie = await Movie2.findOneAndUpdate({_id: moviesID},req.body,{
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
        const movie = await Movie2.findOneAndDelete({_id: moviesID});
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
    createMovie,
    getAllMovies,
    getMovie,
    updateMovie,
    deleteMovie
};