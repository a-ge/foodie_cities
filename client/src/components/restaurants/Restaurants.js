import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import RestaurantItem from './RestaurantItem';
import axios from 'axios';
// import { getDbRestaurants } from '../../actions/restaurantActions' 
import restaurants_data from '../../restaurants_data.json';

const Restaurants = ({ city }) => {

  // const dispatch = useDispatch();
  // const getDbRests = () => dispatch(getDbRestaurants)
  
  async function fetchDbRests() {
    const response = await axios.get('http://localhost:5000/restaurants/')
      .then(resp => console.log(resp));
  };

  fetchDbRests();

  const city_name = Object.keys(restaurants_data[city])[0]
  const city_restaurants = restaurants_data[city][city_name]

  return (
    <div>
      <ul>
        {
          city_restaurants.map(restaurant =>
            <RestaurantItem restaurant={restaurant} key={restaurant.id} />)
        }
        </ul>
    </div>
  );
};

export default Restaurants
