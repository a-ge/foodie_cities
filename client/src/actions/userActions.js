import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER
} from './types';

// Register User to server
export const addUser = user => async dispatch => {
    await fetch('http://localhost:3000/users/add', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({
      type: REGISTER_USER,
      payload: user.username
    });
};

// Login the user if passed check
export const loginUser = (username) => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: username
  });
};

// Logout the user
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
