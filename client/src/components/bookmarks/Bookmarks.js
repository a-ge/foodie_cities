import React from 'react';
import { useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItem';

const Bookmarks = () => {
  const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);

  return (
    <div>
      BOOKMARKS
      <ul>
        {
          bookmarksArray.map((bookmark, index) =>
            <BookmarkItem bookmark={bookmark} key={index} />)
        }
      </ul>
    </div>
  );
};

export default Bookmarks
