import { GET_FAV_RESTAURANTS, SET_LOADING, FAV_RESTAURANTS_ERROR} from '../actions/types';

const initialState = {
  restaurants: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FAV_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case FAV_RESTAURANTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
