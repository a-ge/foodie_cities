import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbBookmarks } from '../../actions/bookmarkActions';
import CityButtons from '../restaurants/CityButtons';
import Bookmarks from '../bookmarks/Bookmarks';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const isLogged = useSelector((state) => state.users.isLogged);
  const loading = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();
  const getBookmarks = (user) => dispatch(getDbBookmarks(user));

  useEffect(() => {
    getBookmarks('ashleyg');
  }, [isLogged]);

  return (
    <Row>
      <Col xs={12} md={8}>
        <CityButtons />
      </Col>
      <Col xs={6} md={4}>
        {
          loading ? <div>loading...</div> :
            isLogged ? <Bookmarks /> : <div>Please log in to save bookmarks.</div>
        }
      </Col>
    </Row>
  );
};

export default Home;
