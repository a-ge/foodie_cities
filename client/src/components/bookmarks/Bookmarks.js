import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItem';

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'

const Bookmarks = () => {
  const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
  const [ bookmarks, setBookmarks ] = useState();

  useEffect(() => {
    const getBookmarks = () => {
      let table = [];

      for (let i=0; i < bookmarksArray.length; i++) {
        if (bookmarksArray[i]) {
          table.push(
            <tr key={i}>
              <td>
                <Card>
                  <Card.Title>{bookmarksArray[i].city}</Card.Title>
                  {
                    bookmarksArray[i].restaurants.map((bookmark, index) =>
                      <BookmarkItem bookmark={bookmark} cityName={bookmarksArray[i].city} key={index} />
                    )
                  }
                </Card>
              </td>
            </tr>
          );
        };
      };

      setBookmarks(table);
    };

    getBookmarks();
  }, [bookmarksArray]);

  return (
    <div>
      <h4>BOOKMARKS</h4>
      <Modal.Body style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>
        <Table>
          <tbody>
            {bookmarks}
          </tbody>
        </Table>
      </Modal.Body>
    </div>
  );
};

export default Bookmarks;
