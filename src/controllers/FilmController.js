const FilmModel = require('../models/FilmModel');

class FilmController {
  async getFilms(req, res) {
    try {
      const films = await FilmModel.getAll();
      res.send(films);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getFilmById(req, res) {
    try {
      const film = await FilmModel.getById(req.params.id);
      if (!film) {
        return res.status(404).json({ message: 'Filme não encontrado' });
      }
      res.send(film);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createFilm(req, res) {
    try {
      const film = await FilmModel.create(req.body);
      res.status(201).send(film);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateFilm(req, res) {
    try {
      const film = await FilmModel.update(req.params.id, req.body);
      if (!film) {
        return res.status(404).json({ message: 'Filme não encontrado' });
      }
      res.send(film);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteFilm(req, res) {
    try {
      const film = await FilmModel.delete(req.params.id);
      if (!film) {
        return res.status(404).json({ message: 'Filme não encontrado' });
      }
      res.send(film);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new FilmController();