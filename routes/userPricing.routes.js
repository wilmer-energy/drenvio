const express = require('express');

// Controllers
const {
	createUserPricing,
	getPrice
} = require('../controllers/userPricing.controller');

// Middlewares
const {
	createUserPricingValidators,
} = require('../middlewares/validators.middlewares');

const userPricingRouter = express.Router();

userPricingRouter.post('/new-price', createUserPricingValidators, createUserPricing);
userPricingRouter.get('/price/:user_id/:product_name', getPrice);
module.exports = { userPricingRouter };
