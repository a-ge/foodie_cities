import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Restaurants from '../restaurants/Restaurants';
import restaurants_data from '../../restaurants_data.json';
import Bookmarks from '../bookmarks/bookmarks';

const Home = () => {

    const [city, setCity] = useState(0);
    const name = db_restaurants_city + setCity(city)
    console.log(name)
    const city_data = useSelector((state) => state.name)
    return (
        <div>
            {
                restaurants_data.map((city_data, index) => {
                    return <button onClick={() => setCity(index)}>{Object.keys(city_data)[0]}</button>
                })
            }
            <Restaurants city={city}/>
            {/* <Bookmarks /> */}
        </div>
    )
}

export default Home
