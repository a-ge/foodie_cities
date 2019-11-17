const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    cityName: {type: String, required: true},
    restaurants: {type: Array, required: true}
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
