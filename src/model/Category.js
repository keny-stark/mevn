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
    category:{
       type: ObjectId,
        ref: 'Product'
    }
});

module.exports = model('Category', schema);