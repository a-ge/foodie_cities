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

        console.log('grabbed', formUsername, formPassword)

        const res = await fetch(`http://localhost:5000/users/login`)
        // .then(loginUser())
        // .catch(err => console.log(err))

        if (res.status === 400) {
          console.log('wrong username or password!')
        } else {
          loginUser()
        }
      };
    
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
          </div> }  
    
    </div>
  );

  }

export default connect(null, { loginUser })(Login);