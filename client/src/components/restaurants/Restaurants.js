import React from 'react';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ cityRestaurants }) => {

  return (
    <div   id='restaurants-container'>
      <ul>
        {
          cityRestaurants.map((restaurant, index) =>
            <RestaurantItem restaurant={restaurant} key={index} />)
        }
      </ul>
    </div>
  )
}

export default Restaurants
