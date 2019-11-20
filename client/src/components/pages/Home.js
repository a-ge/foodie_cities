import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbBookmarks } from '../../actions/bookmarkActions';
import CityButtons from '../restaurants/CityButtons';
import Bookmarks from '../bookmarks/Bookmarks';

const Home = () => {
  // const isLogged = useSelector((state) => state.users.isLogged);
  const isLogged = true
  const dispatch = useDispatch();
  const getBkmks = (user) => dispatch(getDbBookmarks(user));

  useEffect(() => {
    getBkmks('ashleyg');
  }, [])

  return (
      <div className='home-container'>
        <div id='restaurants-container'>
          <CityButtons />
        </div>
        <div id='bookmarks-container'>
          {isLogged ? <Bookmarks /> :  <div>Please log in to save bookmarks.</div>}
        </div>
      </div>
  )
}

export default Home
