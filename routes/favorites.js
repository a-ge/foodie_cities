const router = require('express').Router();
let Favorites = require('../models/Favorites');

router.route('/').get((req, res) => {
    Favorites.find()
    .then(favorites => res.json(favorites))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const restaurant_id = Number(req.body.restaurant_id);
    const user_id = Number(req.body.user_id);
    const status = req.body.status;
  
    const newFavorites = new Favorites({
        restaurant_id,
        user_id,
        status
});
  
    newFavorites.save()
    .then(() => res.json('Favorite added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;