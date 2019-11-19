import React from 'react';
import { useSelector, connect } from 'react-redux';
import { logoutUser } from '../../actions/userActions';

const Logout = ({ logoutUser }) => {

    const isLogged = useSelector((state) => state.users.isLogged);
    console.log("login isLogged", isLogged)

    const onSubmit = async (e) => {
        e.preventDefault();

          logoutUser()
      };
    
  return (
    <div>
    {isLogged ? 
      <div className='form-container'>
        <h1>
          Are you sure you want to log out?
        </h1>
        <form onSubmit={onSubmit}>
          
          <input
            type='submit'
            value='Logout'
          />
        </form>
        </div>

      : <h3>You are not logged in</h3>}

   
    </div>
  );

  }

export default connect(null, { logoutUser })(Logout);