import {
  GET_DB_RESTAURANTS
} from './types';

export const getDbRestaurants = () => async dispatch => {
  const res = await fetch('/restaurants/');
  const data = await res.json();

  dispatch({
    type: GET_DB_RESTAURANTS,
    payload: data
  });
};
