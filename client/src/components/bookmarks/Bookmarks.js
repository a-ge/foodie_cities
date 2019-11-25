import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItem';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Bookmarks = () => {
  const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
  const [ bookmarks, setBookmarks] = useState();

  const getBookmarks = () => {
    let table = [];

    for (let i=0; i < bookmarksArray.length; i++) {
      if (bookmarksArray[i]) {
        table.push(
          <Card>
            <Card.Title>{bookmarksArray[i].city}</Card.Title>
              {bookmarksArray[i].restaurants.map((bookmark, index) =>
                <BookmarkItem bookmark={bookmark} cityName={bookmarksArray[i].city} key={index} />
              )}
          </Card>
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
      <strong>BOOKMARKS</strong>
      <Container>
        {bookmarks}
      </Container>
    </div>
  );
};

export default Bookmarks;
