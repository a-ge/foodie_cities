import {
  GET_DB_BOOKMARKS,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  CLEAR_BOOKMARKS
} from './types';

// Get user's bookmarks from database.
export const getDbBookmarks = user => async dispatch => {
  const res = await fetch(`http://localhost:5000/bookmarks/${user}`);
  const data = await res.json();

  dispatch({
    type: GET_DB_BOOKMARKS,
    payload: data
  });
};

// Add bookmark for user.
export const addBookmark = restaurant => async dispatch => {
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
};

// Delete bookmark for user.
export const deleteBookmark = restaurant => async dispatch => {
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
};

// Clearout bookmarks when user logs out.
export const clearBookmarksLogout = () => dispatch => {
  dispatch({
    type: CLEAR_BOOKMARKS
  });
};
