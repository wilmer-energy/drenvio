const express = require('express');

// Controllers
const {
	createProduct,
	getProducts
} = require('../controllers/products.controller');

// Middlewares
const {
	createProductValidators,
} = require('../middlewares/validators.middlewares');

const productsRouter = express.Router();

productsRouter.post('/new-product', createProductValidators, createProduct);
productsRouter.get('/products', getProducts);
module.exports = { productsRouter };
