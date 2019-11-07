const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookmarksSchema = new Schema({
    restaurant_id: {type: Number, required: true},
    user_id: {type: Number, required: true},
    isVisited: {type: Boolean, required: true},
    isBooked: {type: Boolean, required: true}
});

const Bookmarks = mongoose.model('Bookmarks', bookmarksSchema);

module.exports = Bookmarks;
