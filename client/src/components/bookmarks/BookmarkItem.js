import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookmark } from '../../actions/bookmarkActions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookmarkItem = ({ bookmark }) => {
  const dispatch = useDispatch();

  const deleteMark = () => {
    const restaurantData = {
      "user": "ashleyg",
      "yelpId": bookmark.yelpId
    }
    dispatch(deleteBookmark(restaurantData));
  };

  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bookmark.imageUrl} />
      <Card.Body>
        <Card.Title>{bookmark.restaurantName}</Card.Title>
        <Card.Text>
        </Card.Text>
        <button className='btn btn-danger btn-sm' onClick={deleteMark}>Delete</button>
      </Card.Body>
    </Card>
    <br/>

    </div>
  );
};

export default BookmarkItem
