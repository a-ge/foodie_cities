import React from 'react';
import { useSelector, connect } from 'react-redux';
import { loginUser } from '../../actions/userActions';

const Login = ({ loginUser }) => {

    const isLogged = useSelector((state) => state.users.isLogged);
    console.log("login isLogged", isLogged)

    const onSubmit = async (e) => {
        e.preventDefault();

        const formUsername = document.getElementById('username').value;
        const formPassword = document.getElementById('password').value;

        const loginData = {username:formUsername, password:formPassword}

        console.log('grabbed', formUsername, formPassword)

        const res = await fetch(`http://localhost:5000/users/login/${loginData}`)

        if (res.status === 400) {
          console.log('wrong username or password!')
        } else {
          loginUser()
        }
      };
    
  return (
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

      {isLogged ? <h3>You are logged in</h3> : <h3>You are not logged in</h3>}

    </div>
  );

  }

export default connect(null, { loginUser })(Login);