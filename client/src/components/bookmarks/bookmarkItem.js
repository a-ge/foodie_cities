import React from 'react';

const BookmarkItem = ({ bookmark }) => {

  return (
    <div>
      <div>
        {bookmark.name}
      </div>
      <br/>
    </div>
  );
};

export default BookmarkItem
