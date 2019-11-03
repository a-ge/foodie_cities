import React from 'react';
import Restaurants from '../restaurants/Restaurants';
import restaurants_data from '../../restaurants_data.json';

const Home = () => {
    return (
        <div>
            This is our Home
            <Restaurants />
        </div>
    )
}

export default Home
