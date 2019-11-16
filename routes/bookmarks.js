const router = require('express').Router();
let User = require('../models/User');
let Bookmark = require('../models/Bookmark');

router.route('/').get((req, res) => {
    Bookmark.find()
    .then(bookmark => res.json(bookmark))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
    try {
      const user =  req.body.user;
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

      const userBookmarkUpdate = await User.findOneAndUpdate(
        {username: user},
        {$push: {bookmarks: bookmark}}
      )

      if (!userBookmarkUpdate) {
        return res.json('User not found');
      }

      userBookmarkUpdate.save()
        .then(() => res.json('User bookmarks updated!'))
        .catch(err => res.status(400).json('Error: ' + err));

      const foundBookmark = await Bookmark.findOne({yelpid})

      if (foundBookmark) {
        console.log('Bookmark already in database.')
      }
      else {
        const newBookmark = await new Bookmark(bookmarkItem);

        newBookmark.save()
          .then(() => res.json('Bookmark added!'))
          .catch(err => res.status(400).json('Error: ' + err));
      }
    }
    catch (err) {
      console.error(err.message)
    }

});

module.exports = router;
