// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Route GET pour récupérer tous les films
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route POST pour ajouter un nouveau film
router.post('/', async (req, res) => {
  const { title, director, year } = req.body;
  const newMovie = new Movie({ title, director, year });

  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
