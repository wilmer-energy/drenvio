const dotenv = require('dotenv');

// Models
const { Product } = require('../models/product.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

dotenv.config({ path: './config.env' });

const getProducts = catchAsync(async (req, res, next) => {
	const products = await Product.find({ inStock: true });

	res.status(200).json({
		status: 'success',
		data: { products },
	});
});

const createProduct = catchAsync(async (req, res, next) => {
	const { name, price, inStock } = req.body;
	const newProduct = await Product.create({
		name,
		price,
		inStock
	});
	res.status(201).json({
		status: 'success',
		data: { newProduct },
	});
});

module.exports = {
	getProducts,
	createProduct
};
