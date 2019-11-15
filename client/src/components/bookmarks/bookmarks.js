import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbBookmarks } from '../../actions/bookmarkActions';
import BookmarkItem from './BookmarkItem';

const Bookmarks = () => {

  const bookmarksSelector = useSelector((state) => state.bookmarks);
  console.log("state", bookmarksSelector)

  const bookmarkArray = bookmarksSelector.bookmarks
  console.log("bookmarkArray", bookmarkArray)

  const dispatch = useDispatch();
  const getBkmks = () => dispatch(getDbBookmarks());

  useEffect(() => {
    getBkmks();
  }, [])

  return (
    <div>
      BOOKMARKS
      <ul>
        {
          bookmarkArray.map(bookmark =>
            <BookmarkItem bookmark={bookmark} key={bookmark.id} />)
        }
      </ul>
    </div>
  );
};

export default Bookmarks
