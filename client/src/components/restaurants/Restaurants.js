import React from 'react';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ restaurants }) => {
  console.log("restcity", restaurants)

  return (
    <div   id='restaurants-container'>
      <ul>
        {
          restaurants.map((restaurant, index) =>
            <RestaurantItem restaurant={restaurant} key={index} />)
        }
      </ul>
    </div>
  )
}

export default Restaurants
