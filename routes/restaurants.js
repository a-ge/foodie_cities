const router = require('express').Router();
let Restaurant = require('../models/Restaurant');

router.route('/').get((req, res) => {
  Restaurant.find({})
  .then(restaurants => res.json(restaurants))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const cityName = req.body.cityName;
    const restaurants = req.body.restaurants;

    const newRestaurant = new Restaurant({
      cityName,
      restaurants
    });

    newRestaurant.save()
    .then(() => res.json('Restaurant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
