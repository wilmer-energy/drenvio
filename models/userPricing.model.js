const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userPricingSchema = Schema({
    user_id: String,
    product_name: String,
    specialPrice: Number,
  });
  
  const UserPricing = mongoose.model('UserPricing', userPricingSchema);

  module.exports = { UserPricing };