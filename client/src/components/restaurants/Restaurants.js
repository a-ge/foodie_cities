import React from 'react';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ cityRestaurants, cityName }) => {

  return (
    <div   id='restaurants-container'>
      <ul>
        {
          cityRestaurants.map((restaurant, index) =>
            <RestaurantItem restaurant={restaurant} cityName={cityName} key={index} />)
        }
      </ul>
    </div>
  )
}

export default Restaurants
