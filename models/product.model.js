const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: String,
    price: Number,
    inStock: Boolean,
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };