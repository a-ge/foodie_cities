import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';

const Register = ({ addUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password
    }

    addUser(newUser)

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

export default connect(null, { addUser })(Register);
