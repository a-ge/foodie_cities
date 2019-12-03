import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/types';

const initialState = {
  user: null,
  isLogged: false
};

export default (state = initialState, action) => {
  switch(action.type) {

    case REGISTER_USER:
      return {
        user: action.payload,
        isLogged: true
      };

    case LOGIN_USER:
      return {
        user: action.payload,
        isLogged: true
      };

    case LOGOUT_USER:
      return {
        user: null,
        isLogged: false
      };

    default:
      return state;
  };
};
