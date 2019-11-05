import { GET_FAV_RESTAURANTS, SET_LOADING, FAV_RESTAURANTS_ERROR } from './types';

export const getRestaurants = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/restaurants');
    const data = await res.json();

    dispatch({
      type: GET_FAV_RESTAURANTS,
      payload: data
    });

  } catch (err) {
    dispatch({
      type: FAV_RESTAURANTS_ERROR,
      payload: err.response.data
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}