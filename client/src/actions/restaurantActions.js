import { GET_RESTAURANTS, SET_LOADING, RESTAURANTS_ERROR } from './types';

export const getRestaurants = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/restaurants');
    const data = await res.json();

    dispatch({
      type: GET_RESTAURANTS,
      payload: data
    });

  } catch (err) {
    dispatch({
      type: RESTAURANTS_ERROR,
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
