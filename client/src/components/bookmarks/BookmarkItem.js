import React from 'react';
import Marker from '../Marker';

const BookmarkItem = ({ restaurant, bookmark }) => {

  return (
    <div>
      <div>
        {bookmark.restaurantName}
      </div>
        <Marker restaurant={restaurant} mark={true}/>
      <br/>
    </div>
  );
};

export default BookmarkItem
