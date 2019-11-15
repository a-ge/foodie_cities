import {
  SET_LOADING,
  GET_DB_BOOKMARKS,
  BOOKMARKS_ERROR,
  ADD_BOOKMARK,
  DELETE_BOOKMARK
} from './types';

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
      type: BOOKMARKS_ERROR,
      payload: err.response
    });
  }
};

export const addBookmark = restaurant => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/bookmarks', {
      method: 'POST',
      body: JSON.stringify(restaurant),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_BOOKMARK,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: BOOKMARKS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteBookmark = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/bookmarks/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_BOOKMARK,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: BOOKMARKS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
