import {
  GET_DB_RESTAURANTS
} from './types';

export const getDbRestaurants = () => async dispatch => {
  const res = await fetch('http://localhost:5000/restaurants/');
  const data = await res.json();

  dispatch({
    type: GET_DB_RESTAURANTS,
    payload: data
  });
};
