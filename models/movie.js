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
    downloadUrl : {
        type : Array,
        require : 'Atleast one download link is require'
    }
});

module.exports = mongoose.model('Movie',movieSchema);