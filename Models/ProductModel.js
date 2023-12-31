const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productModel = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('product', productModel);

module.exports = Product;