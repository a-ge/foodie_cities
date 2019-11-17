import React  from 'react';
import CityButtons from '../restaurants/CityButtons';
import Bookmarks from '../bookmarks/Bookmarks';


const Home = () => {

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
