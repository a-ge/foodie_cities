import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import bookmarkReducer from './bookmarkReducer';
import userReducer from './userReducer'

export default combineReducers({

  restaurants: restaurantReducer,
  bookmarks: bookmarkReducer,
  users: userReducer
});
