import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbBookmarks } from '../../actions/bookmarkActions';
import CityButtons from '../restaurants/CityButtons';
import Bookmarks from '../bookmarks/Bookmarks';


const Home = () => {
  const bookmarksSelector = useSelector((state) => state.bookmarks);
  const bookmarksArray = bookmarksSelector.bookmarks

  const dispatch = useDispatch();
  const getBkmks = (user) => dispatch(getDbBookmarks(user));

  useEffect(() => {
    getBkmks('ashleyg');
  }, [])

    return (
        <div className='home-container'>
          <div>
            <CityButtons bookmarksArray={bookmarksArray} />
          </div>
          <div id='bookmarks-container'>
            <Bookmarks bookmarksArray={bookmarksArray} />
          </div>
        </div>
    )
}

export default Home
