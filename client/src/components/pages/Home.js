import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbBookmarks } from '../../actions/bookmarkActions';
import CityButtons from '../restaurants/CityButtons';
import Bookmarks from '../bookmarks/Bookmarks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const isLogged = useSelector((state) => state.users.isLogged);

  const dispatch = useDispatch();
  const getBkmks = (user) => dispatch(getDbBookmarks(user));

  useEffect(() => {
    getBkmks('ashleyg');
  }, [])

  return (
      <Container className='home-container' flex-wrap='nowrap'>
        <Row>
          <Col xs={12} md={8}>
              <CityButtons />
          </Col>
          <Col xs={6} md={4}>
              {isLogged ? <Bookmarks /> :  <div>Please log in to save bookmarks.</div>}
          </Col>
        </Row>
      </Container>
  )
}

export default Home
