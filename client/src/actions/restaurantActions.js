import {
  GET_DB_RESTAURANTS,
  SET_LOADING,
  DB_RESTAURANTS_ERROR} from './types';

export const getDbRestaurants = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('http://localhost:5000/restaurants/');
    const data = await res.json();

    dispatch({
      type: GET_DB_RESTAURANTS,
      payload: data
    });

  } catch (err) {
    dispatch({
      type: DB_RESTAURANTS_ERROR,
      payload: err.response
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
