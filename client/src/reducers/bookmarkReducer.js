import {
  SET_LOADING,
  GET_DB_BOOKMARKS,
  BOOKMARKS_ERROR,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  CLEAR_BOOKMARKS,
  CLEAR_BOOKMARKS_ERROR
} from '../actions/types';

const initialState = {
  bookmarks: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_DB_BOOKMARKS:
      return {
        bookmarks: action.payload.bookmarks,
        loading: false,
        error: null
      };

    case BOOKMARKS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    case ADD_BOOKMARK:
      return {
        bookmarks: action.payload.bookmarks,
        loading: false,
        error: null
      };

    case DELETE_BOOKMARK:
      return {
        bookmarks: action.payload.bookmarks,
        loading: false,
        error: null
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case CLEAR_BOOKMARKS:
      return {
        bookmarks: [],
        loading:false,
        error: null
      };

    case CLEAR_BOOKMARKS_ERROR:
      return {
        ...state,
        error: action.payload
        };

    default:
      return state;
  };
};
