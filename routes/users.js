const express = require('express');
const router = express.Router();
let User = require('../models/User');

// Add user
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const bookmarks = req.body.bookmarks;

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

// Get user. If user exists, check valid password
router.route('/login').post(async (req, res) => {
  const usernameInput = req.body.username;
  const passwordInput = req.body.password;

  try {
    let findUser = await User.find({ username: usernameInput });

    if (!findUser) {
      return res.status(400).json('Invalid Username');
    }

    if (passwordInput !== findUser[0].password) {
      return res.status(400).json('Invalid Password');

    } else {
      return res.json('User Found');
      }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

module.exports = router;
