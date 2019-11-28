import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const isLogged = useSelector((state) => state.users.isLogged);

  const dispatch = useDispatch();
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formUsername = document.getElementById('username').value;
    const formPassword = document.getElementById('password').value;

    const formData = {"username": formUsername, "password": formPassword}

    fetch(`http://localhost:5000/users/login`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {'Content-Type': 'application/json'}
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      dispatch(loginUser(formUsername));
      history.push('/');
    })

      // const response = await fetch(`http://localhost:5000/users/login`, {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {'Content-Type': 'application/json'}
      // })

      // const json = await response.json()
      // console.log(json)

      // reroute to Home
    }

  return (
    <div>
      {isLogged ? <div> You are logged in </div> :
        <div className='form-container'>
          <h1>
            Account <span className='text-primary'>Login</span>
          </h1>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                id='username'
                type='username'
                name='username'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                name='password'
                required
              />
            </div>
            <input
              type='submit'
              value='Login'
            />
          </form>
        </div>
      }
    </div>
  );
};

export default Login;
