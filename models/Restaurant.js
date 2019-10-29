const moongoose = require('mongoose');

const UserSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model('restaurant', UserSchema);