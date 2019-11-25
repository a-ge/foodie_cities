const router = require('express').Router();
let User = require('../models/User');

const findUserBookmarks = async (username) => {
  let userBookmarks = await User.findOne({ username: username }, 'bookmarks');
  return userBookmarks;
};

router.route('/:user').get(async (req, res) => {
  const username = req.params.user;

  try {
    let query = await findUserBookmarks(username);
    return res.json(query);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.route('/add').post(async (req, res) => {
  try {
    const user =  req.body.user;
    const cityName = req.body.cityName;
    const yelpId = req.body.yelpId;
    const yelpUrl = req.body.yelpUrl;
    const restaurantName = req.body.restaurantName;
    const imageUrl = req.body.imageUrl;

    const bookmark = {
      yelpId,
      yelpUrl,
      restaurantName,
      imageUrl
    };

    const userBookmarkAdd = await User.findOneAndUpdate(
      { username: user, "bookmarks.city": cityName },
      { $push: { "bookmarks.$.restaurants": bookmark }}
    );

    if (!userBookmarkAdd) {
      return res.json('User not found.');
    }

    userBookmarkAdd.save(async (err, obj) => {
      if (err) {
        res.send(err);
      }

      let query = await findUserBookmarks(user);
      return res.json(query);
    })

  } catch (err) {
    console.error(err.message);
  }
});

router.route('/delete').post(async (req, res) => {
  try {
    const user = req.body.user;
    const cityName = req.body.cityName;
    const yelpId = req.body.yelpId;

    const userBookmarkDelete = await User.findOneAndUpdate(
      { username: user, "bookmarks.city": cityName},
      { $pull: { "bookmarks.$.restaurants": { yelpId: yelpId } }}
    );

    if (!userBookmarkDelete) {
      return res.json('Bookmark not found.');
    }

    userBookmarkDelete.save(async (err, obj) => {
      if (err) {
        res.send(err);
      }

      let query = await findUserBookmarks(user);
      return res.json(query);
    })

  } catch (err) {
    console.error(err.message)
  }
});

module.exports = router;
