import React from 'react';
import RestaurantItem from './RestaurantItem';
import restaurants_data from '../../restaurants_data.json';

const Restaurants = ({ city }) => {
  const city_restaurants = restaurants_data[city]

  return (
    <div>
    item

    </div>
  );
};

export default Restaurants
// <ul>
//   {
//     city_restaurants.map(restaurant =>
//       <RestaurantItem restaurant={restaurant.name} key={restaurant.id} />)
//   }
//   </ul>
