import React from 'react';
import RestaurantItem from './RestaurantItem';
import restaurants_data from '../../restaurants_data.json';

const Restaurants = ({ city }) => {

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
