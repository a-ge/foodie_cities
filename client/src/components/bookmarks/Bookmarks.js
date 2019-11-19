import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbBookmarks } from '../../actions/bookmarkActions';
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
