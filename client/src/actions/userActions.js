import {
  REGISTER_USER,
  REGISTER_ERROR,
  LOGIN_USER,
  LOGIN_ERROR,
  LOGOUT_USER,
  LOGOUT_ERROR,
  SET_LOADING
} from './types';

// Register User to server
export const addUser = user => async dispatch => {
  try {
    setLoading();

    const res = await fetch('http://localhost:3000/users/add', {
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

  } catch (err) {
    dispatch({
      type: REGISTER_ERROR,
      payload: err.response
    });
  }
};

// Login the user if passed check
export const loginUser = () => dispatch => {
  try {
    setLoading();

    dispatch({
      type: LOGIN_USER
    });

  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err.response.statusText
    });
  }
};

// Logout the user
export const logoutUser = () => dispatch => {
  try {
    setLoading();

    dispatch({
      type: LOGOUT_USER
    });

  } catch (err) {
    dispatch({
      type: LOGOUT_ERROR,
      payload: err.response.statusText
    });
  }
};

  // Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
