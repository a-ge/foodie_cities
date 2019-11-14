import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import bookmarkReducer from './bookmarkReducer';

export default combineReducers({

  restaurants: restaurantReducer,
  bookmarks: bookmarkReducer
});
