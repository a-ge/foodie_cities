import React from 'react';
import Marker from '../Marker';

const BookmarkItem = ({ bookmark }) => {

  return (
    <div>
      <div>
        {bookmark.name}
      </div>
        <Marker />
      <br/>
    </div>
  );
};

export default BookmarkItem
