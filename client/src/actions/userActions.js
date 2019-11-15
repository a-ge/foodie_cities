import {
    REGISTER_USER,
    REGISTER_ERROR,
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
      const data = await res.json();
  
      dispatch({
        type: REGISTER_USER,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response
      });
    }
  };


  // Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};



  
