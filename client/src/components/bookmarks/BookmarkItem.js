import React from 'react';
import Marker from '../Marker';

const BookmarkItem = ({ bookmark }) => {

  return (
    <div>
      <div>
        {bookmark.restaurantName}
      </div>
        <Marker restaurant={bookmark} mark={true}/>
      <br/>
    </div>
  );
};

export default BookmarkItem
