const router = require('express').Router();
let Bookmarks = require('../models/Bookmarks');

router.route('/').get((req, res) => {
    Bookmarks.find()
    .then(bookmarks => res.json(bookmarks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const yelpId = req.body.yelpId;
    const yelpUrl = req.body.yelpUrl;
    const restaurantName = req.body.restaurantName;
    const imageUrl = req.body.imageUrl;

    const newBookmarks = new Bookmarks({
        yelpId,
        yelpUrl,
        restaurantName,
        imageUrl
    });

    newBookmarks.save()
    .then(() => res.json('Bookmark added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
