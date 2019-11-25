import {
  SET_LOADING,
  GET_DB_BOOKMARKS,
  BOOKMARKS_ERROR,
  ADD_BOOKMARK,
  DELETE_BOOKMARK
} from '../actions/types';

const initialState = {
  restaurants: [],
  bookmarks: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_DB_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload.bookmarks,
        loading: false
      };

    case BOOKMARKS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: action.payload.bookmarks,
        loading: false
      };

    case DELETE_BOOKMARK:
      return {
        ...state,
        bookmarks: action.payload.bookmarks,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  };
};
