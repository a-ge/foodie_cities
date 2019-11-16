const express = require('express');
const router = express.Router();
let User = require('../models/User');


router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const bookmarks = [];

  const newUser = new User({
    username,
    email,
    password,
    bookmarks
  });

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
