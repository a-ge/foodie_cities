const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookmarksSchema = new Schema({
    yelpId: {type: String, required: true},
    yelpUrl: {type: String, required: true},
    restaurantName: {type: String, required: true},
    imageUrl: {type: String, required: true}
});

const Bookmarks = mongoose.model('Bookmarks', bookmarksSchema);

module.exports = Bookmarks;
