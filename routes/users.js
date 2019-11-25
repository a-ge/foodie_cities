const express = require('express');
const router = express.Router();
let User = require('../models/User');

// Add user
router.route('/add').post((req, res) => {
  console.log('logged test')
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


// Get user. If user exists, check valid password
router.route('/login').post(async (req, res) => {

  // console.log(req.body)
  const usernameInput = req.body.username;
  const passwordInput = req.body.password;


  // console.log("username and pw is", usernameInput, passwordInput)

  try {
    let findUser = await User.find({ username: usernameInput });
    // console.log("user object is", findUser)

    if (!findUser) {
      return res.status(400).json({ msg: 'Invalid findUser Credentials' });
    }

    console.log("password input is", passwordInput)
    console.log(typeof passwordInput)
    console.log("object password is", findUser[0].password)
    console.log(typeof findUser[0].password)

    if (passwordInput !== findUser[0].password) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    } else {
      return res.json('user found');
    }

    // const isMatch = passwordInput == findUser[0].password;

    // if (!isMatch) {
    //   return res.status(400).json({ msg: 'Invalid Credentials' });
    // }


    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

module.exports = router;
