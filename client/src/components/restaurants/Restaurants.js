import React from 'react';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ cityRestaurants, bookmarksArray }) => {

  return (
    <div   id='restaurants-container'>
      <ul>
        {
          cityRestaurants.map((restaurant, index) =>
            <RestaurantItem restaurant={restaurant} bookmarksArray={bookmarksArray} key={index} />)
        }
      </ul>
    </div>
  )
}

export default Restaurants
