import {
  GET_DB_RESTAURANTS
} from '../actions/types';

const initialState = {
  restaurants: []
};

export default (state = initialState, action) => {
  switch(action.type) {

    case GET_DB_RESTAURANTS:
      return {
        restaurants: action.payload
      };

    default:
      return state;
  };
};
