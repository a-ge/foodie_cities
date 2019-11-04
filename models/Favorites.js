const moongoose = require('mongoose');

const Schema = mongoose.Schema

const favoriteSchema = new Schema({
    restaurant_id: {type: Number, required: true},
    user_id: {type: Number, required: true},
    status: {type: String, required: true}
});

const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;