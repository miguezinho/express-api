const express = require('express');
const filmController = require('../controllers/FilmController');

const router = express.Router();

router.get('/', filmController.getFilms);
router.get('/:id', filmController.getFilmById);
router.post('/', filmController.createFilm);
router.put('/:id', filmController.updateFilm);
router.delete('/:id', filmController.deleteFilm);

module.exports = router;