import React, { useState } from 'react';
import Restaurants from '../restaurants/Restaurants';
import restaurants_data from '../../restaurants_data.json';

const Home = () => {

    const [city, setCity] = useState(null);

    return (
        <div>
            {
                restaurants_data.map((value, index) => {
                    return <button onClick={() => setCity(index)}>{value[0].location.city}</button>
                })
            }
            <Restaurants city={city}/>
        </div>
    )
}

export default Home
