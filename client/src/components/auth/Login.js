import React from 'react';
import { useSelector, connect } from 'react-redux';
import { loginUser } from '../../actions/userActions';

import axios from 'axios';
// const fetch = require("node-fetch")


// class EasyHTTP {
//   async post(url, data) {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {'Content-type': 'application/json'},
//       body: JSON.stringify(data)
//     });

//     const resData = await response.json();
//     return resData;
//   }
// }

// const http = new EasyHTTP;

const Login = ({ loginUser }) => {

    const isLogged = useSelector((state) => state.users.isLogged);
    console.log("login isLogged", isLogged)

    const onSubmit = (e) => {
        e.preventDefault();

        const formUsername = document.getElementById('username').value;
        const formPassword = document.getElementById('password').value;

        const formData = {"username": formUsername, "password": formPassword}


        function postUserFormData() {



          axios({
            method: 'post',
            url: '/users/login',
            data: {username: formUsername, password: formPassword}
          });


          // const config = {
          //   headers: {
          //     'Content-Type': 'application/json'
          //   }
          // };

          // axios.post('http://localhost:5000/users/login', formData, config)
          // .then((res) =>  console.log("data is", res.data))
          // .catch((err) => console.log(err))




      
          //   http.post('http://localhost:5000/users/login', formData)
          //   .then(data =>  console.log("data is", data))
          //   // .then(loginUser())
          //   .catch(err => console.log(err))
          // }

            
      };
      postUserFormData()
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
          </div> }  
    
    </div>
  );

  }

export default connect(null, { loginUser })(Login);