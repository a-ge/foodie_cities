import React, { useState } from 'react';
import Restaurants from '../restaurants/Restaurants';
import Bookmarks from '../bookmarks/bookmarks';


const Home = () => {



    return (
        <div className='home-container'>
          <div id='restaurants-container'>

            <Restaurants />
          </div>
          <div id='bookmarks-container'>

          </div>
        </div>
    )
}

export default Home


            // <Bookmarks />
    // const [city, setCity] = useState(0);
    // {
    //     cities.map((city_name, index) => {
    //         return <button onClick={() => setCity(index)}>{Object.keys(city_name)[0]}</button>
    //     })
    // }
