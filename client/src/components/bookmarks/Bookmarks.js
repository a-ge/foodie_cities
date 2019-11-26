import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItem';

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const Bookmarks = () => {
  const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
  const [ bookmarks, setBookmarks] = useState();

  const getBookmarks = () => {
    let table = [];

    for (let i=0; i < bookmarksArray.length; i++) {
      if (bookmarksArray[i]) {
        table.push(
          <tr>
            <Card>
              <Card.Title>{bookmarksArray[i].city}</Card.Title>
              {
                bookmarksArray[i].restaurants.map((bookmark, index) =>
                  <BookmarkItem bookmark={bookmark} cityName={bookmarksArray[i].city} key={index} />
                )
              }
            </Card>
          </tr>
        );
      };
    };
    setBookmarks(table);
  };

  useEffect(() => {
    getBookmarks();
  }, [bookmarksArray]);

  return (
    <div>
      <Table>
        <thead>
          <h4>BOOKMARKS</h4>
        </thead>
        <tbody>
          {bookmarks}
        </tbody>
      </Table>
    </div>
  );
};

export default Bookmarks;
