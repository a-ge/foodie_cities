import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbBookmarks } from '../../actions/bookmarkActions';
import CityButtons from '../restaurants/CityButtons';
import Bookmarks from '../bookmarks/Bookmarks';
import LoggedOutBookmarks from '../bookmarks/LoggedOutBookmarks';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const user = useSelector((state) => state.users.user);
  const isLogged = useSelector((state) => state.users.isLogged);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const getBookmarks = (username) => dispatch(getDbBookmarks(user));
      getBookmarks(user);
    }
  }, [user, dispatch]);

  return (
    <Row>
      <Col xs={11} md={7}>
        <CityButtons />
      </Col>
      <Col xs={7} md={5}>
        {isLogged ? <Bookmarks /> : <LoggedOutBookmarks />}
      </Col>
    </Row>
  );
};

export default Home;
