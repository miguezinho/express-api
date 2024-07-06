const mongoose = require('mongoose');

class BaseModel {
    constructor(collectionName, schemaDefinition) {
        this.collectionName = collectionName;
        this.schema = new mongoose.Schema(schemaDefinition);
        this.model = mongoose.model(collectionName, this.schema);
    }

    async getAll() {
        return await this.model.find();
    }

    async getById(id) {
        return await this.model.findById(id);
    }

    async create(data) {
        const instance = new this.model(data);
        return await instance.save();
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

module.exports = BaseModel;
