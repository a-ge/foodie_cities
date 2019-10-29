const moongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true 
    }
});

module.exports = mongoose.model('restaurant', RestaurantSchema);

