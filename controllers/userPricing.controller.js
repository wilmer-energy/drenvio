const dotenv = require('dotenv');

// Models
const { UserPricing } = require('../models/userPricing.model');
const { Product } = require('../models/product.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

dotenv.config({ path: './config.env' });

const getPrice = catchAsync(async (req, res, next) => {
	const { user_id, product_name } = req.params;
	const userPricingResponse = await UserPricing.findOne({ user_id, product_name });
	if (userPricingResponse) {
		res.json({ price: userPricingResponse.specialPrice });
	} else {
		// If no special price is found, return the base price from the Product model
		const productResponse = await Product.findOne({ name: product_name });
		if (productResponse) {
			res.json({ price: productResponse.price });
		} else {
			res.status(404).json({ error: 'Product not found' });
		}
	}
});

const createUserPricing = catchAsync(async (req, res, next) => {
	const { user_id, product_name, specialPrice } = req.body;
	const UserPricingResponse = await UserPricing.create({
		user_id,
		product_name,
		specialPrice
	});
	res.status(201).json({
		status: 'success',
		data: { UserPricingResponse },
	});
});

module.exports = {
	getPrice,
	createUserPricing
};
