import React from 'react';
import Marker from '../Marker';

const BookmarkItem = ({ bookmark }) => {

  return (
    <div>
      <div>
        {bookmark.restaurantName}
      </div>
        <Marker mark={true}/>
      <br/>
    </div>
  );
};

export default BookmarkItem
