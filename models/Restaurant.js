const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {type: String, required: true},
    yelp_id: {type: String, required: true},
    image_url: {type: String, required: true},
    yelp_url: {type: String, required: true},
    isTop: {type: Boolean, required: true}
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
