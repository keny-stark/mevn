const boom = require('boom');
const genericCrud = (model) => ({
    async get({params: {id}}) {
        try {
            return await model.findById(id)
        }catch (err) {
            throw boom.boomify(err)
        }
    },
    async getAll() {
        try {
            return await model.find()
        }catch (err) {
            throw boom.boomify(err)
        }
    },
    async create({body}) {
        try {
            const item = new model(body);
            const newItem = await item.save();
            return newItem
        }catch (err) {
            throw boom.boomify(err)
        }
    },
    async update({params:{id}, body}) {
        try {
            const item = await model.findByIdAndUpdate(id, body, {new: true});
            return item
        }catch (err) {
            throw boom.boomify(err)
        }
    },
    async delete({params: {id}}) {
        try {
            await model.findByIdAndDelete(id);
            return {status: 'OK', message: 'удалено'}
        }catch (err) {
            throw boom.boomify(err)
        }
    },
});

module.exports = genericCrud;