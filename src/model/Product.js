const {model, Shema, Schema:{Types:{ObjectId}}} = require('mongoose');

const schema = new Shema({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: Text,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        default: ''
    },
    category:{
        type: ObjectId,
        ref: 'Category'
    }
});

module.exports = model('Product', schema);