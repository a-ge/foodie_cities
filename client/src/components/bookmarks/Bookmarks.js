import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItem';

const Bookmarks = () => {
  const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
  const [ bookmarks, setBookmarks] = useState([]);

  const getBookmarks = () => {
    let table = [];

    for (let i=0; i < bookmarksArray.length; i++){
      if (bookmarksArray[i]) {
        table.push(bookmarksArray[i].restaurants)
      }
    }

    setBookmarks(table.flat())
  }

  useEffect(() => {
    getBookmarks();
  }, [bookmarksArray])

  return (
    <div>
      BOOKMARKS
      <ul>
        {
          bookmarks.map((bookmark, index) =>
            <BookmarkItem bookmark={bookmark} key={index} />)
        }
      </ul>
    </div>
  );
};

export default Bookmarks
