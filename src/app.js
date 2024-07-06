const express = require('express');
const filmRoutes = require('./routes/filmRoutes');
require('./config/database');

const app = express();

app.use(express.json());
app.use('/film', filmRoutes);

app.get('/', (req, res) => {
    res.send('Bem vindo a API Node.js com Express.js!');
});

module.exports = app;