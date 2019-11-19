import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookmark } from '../../actions/bookmarkActions'
import Marker from '../Marker';

const BookmarkItem = ({ bookmark }) => {
  const dispatch = useDispatch();

  const deleteMark = () => {
    const restaurantData = {
      "user": "ashleyg",
      "yelpId": bookmark.yelpId
    }

    dispatch(deleteBookmark(restaurantData));
  };

  return (
    <div>
      <div>
        {bookmark.restaurantName}
      </div>
      <input className='marker-button' type='checkbox' checked={true}
        onChange={deleteMark}>
      </input>
      <br/>
    </div>
  );
};

export default BookmarkItem
