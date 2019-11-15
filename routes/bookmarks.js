const router = require('express').Router();
let User = require('../models/User');
let Bookmark = require('../models/Bookmark');

router.route('/').get((req, res) => {
    Bookmark.find()
    .then(bookmark => res.json(bookmark))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const user =  req.body.username;
    const yelpId = req.body.yelpId;
    const yelpUrl = req.body.yelpUrl;
    const restaurantName = req.body.restaurantName;
    const imageUrl = req.body.imageUrl;

    const bookmark = {
        yelpId,
        yelpUrl,
        restaurantName,
        imageUrl
    }

    async function saving(bookmarkItem) {
      let userBookmarkUpdate = await User.findOneAndUpdate(
        {username: user},
        {$push: {bookmarks: bookmarkItem}}
      )

      userBookmarkUpdate.save()
        .then(() => res.json('User bookmarks updated!'))
        .catch(err => res.status(400).json('Error: ' + err));

      const newBookmark = await new Bookmark(bookmarkItem);

      newBookmark.save()
        .then(() => res.json('Bookmark added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }

    saving(bookmark)
});

module.exports = router;
