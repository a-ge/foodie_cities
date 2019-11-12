import React, { useState } from 'react';
import Restaurants from '../restaurants/Restaurants';
import cities from '../../restaurants_data.json';
import Bookmarks from '../bookmarks/bookmarks';


const Home = () => {

    const [city, setCity] = useState(0);

    return (
        <div>
            {
                cities.map((city_name, index) => {
                    return <button onClick={() => setCity(index)}>{Object.keys(city_name)[0]}</button>
                })
            }
            <Restaurants city={city}/>
            {/* <Bookmarks /> */}
        </div>
    )
}

export default Home
