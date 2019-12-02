import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookmark } from '../../actions/bookmarkActions';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookmarkItem = ({ bookmark, cityName }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const deleteMark = () => {
    const restaurantData = {
      "user": user,
      "cityName": cityName,
      "yelpId": bookmark.yelpId
    }

    dispatch(deleteBookmark(restaurantData));
  };

  return (
    <Container >
      <Card>
        <Row>
          <Col xs={6} md={4}>
            <Card.Link href={bookmark.yelpUrl}>
              <Card.Img variant="top" src={bookmark.imageUrl} />
            </Card.Link>
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Link href={bookmark.yelpUrl}>
                <Card.Title>{bookmark.restaurantName}</Card.Title>
              </Card.Link>
              <Button className='btn btn-danger btn-sm' onClick={deleteMark}>Delete</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default BookmarkItem;
