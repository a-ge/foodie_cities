import React, { useState } from 'react';
import Restaurants from '../restaurants/Restaurants';
import restaurants_data from '../../restaurants_data.json';

const Home = () => {

    const [city, setCity] = useState(0);

    return (
        <div>
            {
                restaurants_data.map((city_data, index) => {
                    return <button onClick={() => setCity(index)}>{Object.keys(city_data)[0]}</button>
                })
            }
            <Restaurants city={city}/>
        </div>
    )
}

export default Home