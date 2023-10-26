const { body, validationResult } = require('express-validator');

// Utils
const { AppError } = require('../utils/appError.util');

const checkValidations = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		// [{ ..., msg }] -> [msg, msg, ...] -> 'msg. msg. msg. msg'
		const errorMessages = errors.array().map(err => err.msg);

		const message = errorMessages.join('. ');

		return next(new AppError(message, 400));
	}

	next();
};

const createUserValidators = [
	body('name')
		.isString()
		.withMessage('Name must be a string')
		.notEmpty()
		.withMessage('Name cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Name must be at least 3 characters'),
	body('email').isEmail().withMessage('Must provide a valid email'),
	body('password')
		.isString()
		.withMessage('Password must be a string')
		.notEmpty()
		.withMessage('Password cannot be empty')
		.isLength({ min: 8 })
		.withMessage('Password must be at least 8 characters'),
	checkValidations,
];

const createProductValidators = [
	body('name')
		.isString()
		.withMessage('Name must be a string')
		.notEmpty()
		.withMessage('Name cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Name must be at least 3 characters'),
	body('price').isNumeric().withMessage('Must provide a valid number'),
	body('inStock')
		.isBoolean()
		.withMessage('inStock must be a boolean')
		.notEmpty()
		.withMessage('inStock cannot be empty'),
	checkValidations,
];

const createUserPricingValidators = [
	body('user_id')
		.isString()
		.withMessage('user_id must be a string')
		.notEmpty()
		.withMessage('user_id cannot be empty'),
	body('specialPrice').isNumeric().withMessage('specialPrice provide a valid number'),
	body('product_name')
		.isString()
		.withMessage('product_name must be a string')
		.notEmpty()
		.withMessage('product_name cannot be empty'),
	checkValidations,
];

module.exports = { createUserValidators, createProductValidators, createUserPricingValidators };
