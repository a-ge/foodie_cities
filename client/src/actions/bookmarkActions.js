import {
  SET_LOADING,
  GET_DB_BOOKMARKS,
  BOOKMARKS_ERROR,
  ADD_BOOKMARK,
  DELETE_BOOKMARK
} from './types';

export const getDbBookmarks = user => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:5000/bookmarks/${user}`);
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

    const res = await fetch(`http://localhost:5000/bookmarks/add`, {
      method: 'POST',
      body: JSON.stringify(restaurant),
      headers: {'Content-Type': 'application/json'}
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

export const deleteBookmark = restaurant => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:5000/bookmarks/delete`, {
      method: 'POST',
      body: JSON.stringify(restaurant),
      headers: {'Content-Type': 'application/json'}
    });

    const data = await res.json();

    dispatch({
      type: DELETE_BOOKMARK,
      payload: data
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
