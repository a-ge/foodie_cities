import { REGISTER_USER,
         REGISTER_ERROR,
         LOGIN_USER,
         LOGIN_ERROR,
         LOGOUT_USER,
         LOGOUT_ERROR,
         SET_LOADING
} from '../actions/types';

const initialState = {
user: null,
loading: false,
error: null,
isLogged: false
};


export default (state = initialState, action) => {
  switch(action.type) {

    case REGISTER_USER:
      return {
          user: action.payload,
          loading: false,
          error: null,
          isLogged: true
      };

    case REGISTER_ERROR:
      console.error(action.payload);
      return {
          ...state,
          error: action.payload,
          loading: false
      };

    case LOGIN_USER:
      return {
        user: action.payload,
        loading: false,
        error: null,
        isLogged: true
      };

    case LOGIN_ERROR:
      console.error(action.payload);
      return {
          ...state,
          error: action.payload,
          loading: false
      };

    case LOGOUT_USER:
      return {
        user: null,
        loading: false,
        error: null,
        isLogged: false
      };

    case LOGOUT_ERROR:
      console.error(action.payload);
      return {
          ...state,
          error: action.payload,
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
