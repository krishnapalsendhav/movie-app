const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title : {
        type : String,
        require : 'Title is required',
        trim : true
    },
    imageUrl : {
        type : String,
        require : 'Image is must',
    },
    year : String,
    imdbRate : Number,
    downloadUrl : [
        {
            title : String,
            size : String,
            url : {
                type : String,
                require : 'Download url is required'
            }
        }
    ],
    trailerUrl : {
        type : String,
    },
    castAndCrew :[
        {
            imageUrl : String,
            name : String,
        }
    ],
    description : {
        type : String,
    }
});

module.exports = mongoose.model('Movie2',movieSchema);