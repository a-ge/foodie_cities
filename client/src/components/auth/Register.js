import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // const [bookmarks, setBookmarks] = useState([])
    // Needs to look like this
    // [{city: "San Francisco, CA", restaurants: []},
    // {city: "New York, NY", restaurants: []},
    // {city: "Atlanta, GA", restaurants: []}]

  const citiesArray = useSelector((state) => state.restaurants.restaurants);
  console.log("cities array outside is", citiesArray)
  // [{cityName: "San Francisco, CA", restaurants: [...]},
  // {cityName: "New York, NY", restaurants: [...]},
  // {cityName: "Atlanta, GA", restaurants: [...]}]

  // const cityObject = citiesArray[0]
  // example: {cityName: "San Francisco, CA", restaurants: []}

  // const cityName = cityObject.cityName
  // example: "San Francisco, CA"

//   function createBookmarksArray(){

//     const bookmarksArray = []

//     for (let i=0; i < citiesArray.length; i++) {
//       const cityObject = citiesArray[i]
//       const cityName = cityObject.cityName
//       const bookmarkCityObject = {city: cityName, restaurants: []}
//       bookmarksArray.push(bookmarkCityObject)
//     }
//     console.log("bkmkarray is", bookmarksArray)
//   return bookmarksArray
// }

  // setBookmarks(bookmarksArray)

  let history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    function createBookmarksArray(citiesArray){

      console.log("cities array is", citiesArray)

      const bookmarksArray = []

      console.log("bkmkarray before", bookmarksArray)
  
      for (let i=0; i < citiesArray.length; i++) {
        console.log("i is", i)
        const cityObject = citiesArray[i]
        console.log(cityObject)
        const cityName = cityObject.cityName
        console.log(cityName)
        const bookmarkCityObject = {city: cityName, restaurants: []}
        bookmarksArray.push(bookmarkCityObject)
      }
    console.log("bkmkarray after", bookmarksArray)
    return bookmarksArray
  }

    const completeBookmarksArray = createBookmarksArray(citiesArray)

    const newUser = {
      username,
      email,
      password,
      // bookmarks,
      completeBookmarksArray
    }

    dispatch(addUser(newUser))

    // Clear Fields
    setUsername('');
    setEmail('');
    setPassword('');

    // reroute to Home
    history.push('/')
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Username</label>
          <input
            id='username'
            type='text'
            name='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
        />
      </form>
    </div>
  );
};

export default Register;
