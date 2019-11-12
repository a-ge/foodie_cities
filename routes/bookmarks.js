const router = require('express').Router();
let Bookmarks = require('../models/Bookmarks');

router.route('/').get((req, res) => {
    Bookmarks.find()
    .then(bookmarks => res.json(bookmarks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const restaurant_id = Number(req.body.restaurant_id);
    const user_id = Number(req.body.user_id);
    const isVisited = req.body.isVisited;
    const isBooked = req.body.isBooked;

    const newBookmarks = new Bookmarks({
        restaurant_id,
        user_id,
        isVisited,
        isBooked
});

    newBookmarks.save()
    .then(() => res.json('Bookmark added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
