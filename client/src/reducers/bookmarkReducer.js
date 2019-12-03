import {
  GET_DB_BOOKMARKS,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  CLEAR_BOOKMARKS
} from '../actions/types';

const initialState = {
  bookmarks: []
};

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_DB_BOOKMARKS:
      return {
        bookmarks: action.payload.bookmarks
      };

    case ADD_BOOKMARK:
      return {
        bookmarks: action.payload.bookmarks
      };

    case DELETE_BOOKMARK:
      return {
        bookmarks: action.payload.bookmarks
      };

    case CLEAR_BOOKMARKS:
      return {
        bookmarks: []
      };

    default:
      return state;
  };
};
