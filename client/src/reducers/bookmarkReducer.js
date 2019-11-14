import {
  GET_DB_BOOKMARKS,
  SET_LOADING,
  DB_BOOKMARKS_ERROR} from '../actions/types';

const initialState = {
  restaurants: [],
  bookmarks: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_DB_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case DB_BOOKMARKS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
