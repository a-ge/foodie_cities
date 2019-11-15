const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookmarkSchema = new Schema({
    yelpId: {type: String, required: true},
    yelpUrl: {type: String, required: true},
    restaurantName: {type: String, required: true},
    imageUrl: {type: String, required: true}
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
