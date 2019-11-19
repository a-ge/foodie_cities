const router = require('express').Router();
let User = require('../models/User');
let Bookmark = require('../models/Bookmark');

router.route('/:user').get(async (req, res) => {
  const username = req.params.user;

  try {
    let findUser = await User.findOne({ username: username }, 'bookmarks');

    return res.json(findUser)

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
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

      const userBookmarkAdd = await User.findOneAndUpdate(
        { username: user },
        { $push: { bookmarks: bookmark }}
      )

      if (!userBookmarkAdd) {
        return res.json('User not found.');
      }

      userBookmarkAdd.save()
        .then(() => res.json('User bookmarks updated!'))
        .catch(err => res.status(400).json('Error: ' + err));

      const foundBookmark = await Bookmark.findOne({yelpid})

      if (foundBookmark) {
        console.log('Bookmark already in database.');
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

router.route('/delete').post(async (req, res) => {
  try {
    const user = req.body.user;
    const yelpId = req.body.yelpId;

    const userBookmarkDelete = await User.findOneAndUpdate(
      { username: user },
      { $pull: { bookmarks: { yelpId: yelpId }}}
    )

    if (!userBookmarkDelete) {
      return res.json('Bookmark not found.');
    }

    userBookmarkDelete.save()
      .then(() => res.json('Bookmark deleted!'))
      .catch(err => res.status(400).json('Error: ' + err));
  }

  catch (err) {
    console.error(err.message)
  }
});

module.exports = router;
