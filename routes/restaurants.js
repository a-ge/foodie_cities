const router = require('express').Router();
let Restaurant = require('../models/Restaurant');

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const image_url = req.body.image_url;
    const yelp_url = req.body.yelp_url;
  
    const newRestaurant = new Restaurant({
      name,
      image_url,
      yelp_url
    });
  
    newRestaurant.save()
    .then(() => res.json('Restaurant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;