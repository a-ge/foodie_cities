import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const citiesArray = useSelector((state) => state.restaurants.restaurants);

  let history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const bookmarks = await citiesArray.map((cityObject) => ({
      city: cityObject.cityName,
      restaurants: []
    }))

    const newUser = {
      username,
      email,
      password,
      bookmarks
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
          <label htmlFor='name'>Username</label>&nbsp;
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
          <label htmlFor='email'>Email Address</label>&nbsp;
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
          <label htmlFor='password'>Password</label>&nbsp;
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength='6'
            autoComplete="on"
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
