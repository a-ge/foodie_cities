import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDbBookmarks } from '../../actions/bookmarkActions';
import CityButtons from '../restaurants/CityButtons';
import Bookmarks from '../bookmarks/Bookmarks';


const Home = () => {
  const dispatch = useDispatch();
  const getBkmks = (user) => dispatch(getDbBookmarks(user));

  useEffect(() => {
    getBkmks('ashleyg');
  }, [])

    return (
        <div className='home-container'>
          <div>
            <CityButtons />
          </div>
          <div id='bookmarks-container'>
            <Bookmarks />
          </div>
        </div>
    )
}

export default Home
