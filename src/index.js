const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3000;

const Film = mongoose.model('Film', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
});

// Retorna a lista dos filmes
app.get('/film', async (req, res) => {
    const films = await Film.find();

    res.send(films);
});

// Retorna os dados de um filme
app.get('/film/:id', async (req, res) => {
    const film = await Film.findById(req.params.id);

    res.send(film);
});

// Cria um novo filme
app.post('/film', async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
    });

    await film.save();
    res.send(film);
});

// Altera os dados de um filme
app.put('/film/:id', async (req, res) => {
    const film = await Film.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
    }, {
        new: true
    });

    res.send(film);
});

// Deleta um filme
app.delete('/film/:id', async (req, res) => {
    const film = await Film.findByIdAndDelete(req.params.id);

    res.send(film);
});

// Rota de início da API
app.get('/', (req, res) => {
    res.send('Bem vindo a API Node.js com Express.js!');
});

app.listen(port, () => {
    // Conexão com MongoDB
    mongoose.connect('mongodb://mongo:27017/myapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));
    db.once('open', () => {
        console.log('Conexão com MongoDB bem sucedida.');
    });

    console.log(`Servidor rodando em http://localhost:${port}`);
});
