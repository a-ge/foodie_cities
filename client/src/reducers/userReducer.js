import { REGISTER_USER,
         REGISTER_ERROR,
         LOGIN_USER,
         LOGIN_ERROR,
         SET_LOADING
} from '../actions/types';

const initialState = {
users: null,
loading: false,
error: null,
isLogged: false
};


export default (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false
            }
        case REGISTER_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case LOGIN_USER:
            return {
                ...state,
                loading: false,
                isLogged: true
            }
        case LOGIN_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};


  