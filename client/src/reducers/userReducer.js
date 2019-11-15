import { REGISTER_USER,
         REGISTER_ERROR,
         SET_LOADING
} from '../actions/types';

const initialState = {
users: null,
loading: false,
error: null
};


export default (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                userss: [...state.users, action.payload],
                loading: false
            }
        case REGISTER_ERROR:
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

// const initialState = {
//     isAuthenticated: null,
//     loading: true,
//     user: null,
//     error: null
//   };

// export default (state = initialState, action) => {
//     switch (action.type) {
//       case REGISTER_SUCCESS:
//         return {
//           ...state,
//           ...action.payload,
//           isAuthenticated: true,
//           loading: false
//         };
//       default:
//         return state;
//     }
//   };
  