import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookmark } from '../../actions/bookmarkActions'

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
      <button className='btn btn-danger btn-sm' onClick={deleteMark}>Delete</button>
      <br/>
    </div>
  );
};

export default BookmarkItem
// <input className='marker-button' type='checkbox' class="filled-in" checked={true}
//   onChange={deleteMark}>
// </input>
