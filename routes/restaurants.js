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
    const image_url = req.body.image_url;
    const yelp_url = req.body.url;
    const isCurrentTop = true ;

    const newRestaurant = new Restaurant({
      cityName,
      restaurants
    });

    newRestaurant.save()
    .then(() => res.json('Restaurant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
