import {
  GET_DB_RESTAURANTS,
  SET_LOADING,
  DB_RESTAURANTS_ERROR} from '../actions/types';

const initialState = {
  restaurants: [],
  bookmarks: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_DB_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case DB_RESTAURANTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
      
    default:
      return state;
  }
}
