import React, { useEffect } from 'react';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ restaurants }) => {
  useEffect(() => {
  }, []);


  return (
    <div>
      {
        restaurants.map(restaurant => <RestaurantItem restaurant={restaurant.name} key={restaurant.id} />)
      }
    </div>
  );
};

export default Restaurants
