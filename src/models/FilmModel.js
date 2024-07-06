const BaseModel = require('./BaseModel');

class FilmModel extends BaseModel {
    constructor() {
        super('Film', {
            title: String,
            description: String,
            image_url: String,
            trailer_url: String,
        });
    }
}

module.exports = new FilmModel();