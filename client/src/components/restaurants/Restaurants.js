import React from 'react';
import RestaurantItem from './RestaurantItem';
import { useSelector, connect } from 'react-redux';

const Restaurants = ({ cityRestaurants }) => {

  const loading = useSelector((state) => state.users.loading);

  return (
    <div   id='restaurants-container'>
      {loading ? <div>loading...</div>:
      <ul>
        {
          cityRestaurants.map((restaurant, index) =>
            <RestaurantItem restaurant={restaurant} key={index} />)
        }
      </ul>
        }
    </div>
  )
}

export default Restaurants
