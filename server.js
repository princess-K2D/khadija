// server.js
const express = require('express');
const connectDB = require('../config/dbConfig');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connexion à MongoDB
connectDB();

// Middleware pour accepter le format JSON
app.use(express.json());

// Routes pour les films
app.use('/films', movieRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours sur http://localhost:${port}`);
});
