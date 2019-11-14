import {
  GET_DB_BOOKMARKS,
  SET_LOADING,
  DB_BOOKMARKS_ERROR} from './types';

export const getDbBookmarks = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('http://localhost:4000/bookmarks');
    const data = await res.json();

    dispatch({
      type: GET_DB_BOOKMARKS,
      payload: data
    });

  } catch (err) {
    dispatch({
      type: DB_BOOKMARKS_ERROR,
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
