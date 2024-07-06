const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));
db.once('open', () => {
    console.log('Conexão com MongoDB bem sucedida.');
});

module.exports = db;