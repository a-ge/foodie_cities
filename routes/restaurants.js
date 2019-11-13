const router = require('express').Router();
let Restaurant = require('../models/Restaurant');

router.route('/').get((req, res) => {
  Restaurant.find({})
  .then(restaurants => res.json(restaurants))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const yelp_id = req.body.id;
    const image_url = req.body.image_url;
    const yelp_url = req.body.url;
    const isCurrentTop = true ;

    const newRestaurant = new Restaurant({
      name,
      yelp_id,
      image_url,
      yelp_url,
      isCurrentTop
    });

    newRestaurant.save()
    .then(() => res.json('Restaurant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
