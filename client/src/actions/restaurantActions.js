import {
  GET_DB_RESTAURANTS,
  SET_LOADING,
  DB_RESTAURANTS_ERROR} from './types';

import restaurants_data from '../restaurants_data.json';

export const getDbRestaurants = () => async dispatch => {
  try {
    setLoading();

    const data = restaurants_data

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
