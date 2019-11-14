import React from 'react';

const Register = () => {


  return (
    <div>
      <h1>
        Register
      </h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Username</label>
          <input
            id='username'
            type='text'
            name='username'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
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