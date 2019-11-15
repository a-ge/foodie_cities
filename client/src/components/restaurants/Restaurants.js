import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbRestaurants } from '../../actions/restaurantActions';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ restaurants }) => {
  console.log("restcity", restaurants)

  return (
    <div   id='restaurants-container'>
      <ul>
        {
          restaurants.map(restaurant =>
            <RestaurantItem restaurant={restaurant} key={restaurant.id} />)
        }
      </ul>
    </div>
  )
}

export default Restaurants
