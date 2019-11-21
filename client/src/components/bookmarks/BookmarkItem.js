import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookmark } from '../../actions/bookmarkActions';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
        <Card className='bookmark-container' style={{ width: '18rem' }}>
          <Row>
            <Col md="5">
              <Card.Link href={bookmark.yelpUrl}>
                <Card.Img className='bookmark-image' variant="top" src={bookmark.imageUrl} />
              </Card.Link>
            </Col>
            <Col md="5">
              <Card.Body className='bookmark-body'>
                <Card.Title>{bookmark.restaurantName}</Card.Title>
                <Button className='btn btn-danger btn-sm' onClick={deleteMark}>Delete</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default BookmarkItem
