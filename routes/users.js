const express = require('express');
const router = express.Router();
let User = require('../models/User');

// Add user
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email
  const password = req.body.password

  const newUser = new User({
    username,
    email,
    password
  });

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Get user if exists and check valid password
router.route('/login/:data').get(async (req, res) => {
  const usernameInput = req.params.data.username;
  const passwordInput = req.params.data.password;

  // const input = req.params.data
  // req.params = {data: {username:formUsername, password:formPassword}}
  // input = {username:formUsername, password:formPassword}
  

  try {
    let findUser = await User.findOne({ usernameInput });

    if (!findUser) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = passwordInput === findUser.password;

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }


  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

})

module.exports = router;
