import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItem';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Bookmarks = () => {
  const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
  const [ bookmarks, setBookmarks] = useState();

  const getBookmarks = () => {
    let table = [];

    for (let i=0; i < bookmarksArray.length; i++) {
      if (bookmarksArray[i]) {
        table.push(<Row>{bookmarksArray[i].city}</Row>)

        const restaurants = bookmarksArray[i].restaurants.map((bookmark, index) =>
          <Row><BookmarkItem bookmark={bookmark} key={index} /></Row>
        )
        table.push(restaurants)
      }
    }

    setBookmarks(table)
  }

  useEffect(() => {
    getBookmarks();
  }, [bookmarksArray])

  return (
    <div>
      BOOKMARKS
      <Container>
        {bookmarks}
      </Container>
    </div>
  );
};

export default Bookmarks
