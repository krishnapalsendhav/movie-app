const express = require('express');
const router = express.Router();
const controller = require('../controller/movie2');


router.route('/').get(controller.getAllMovies).post(controller.createMovie);
router.route('/:id').get(controller.getMovie).patch(controller.updateMovie).delete(controller.deleteMovie);

module.exports = router;