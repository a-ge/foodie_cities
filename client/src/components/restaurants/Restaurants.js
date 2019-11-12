import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbRestaurants } from '../../actions/restaurantActions';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ city }) => {
  console.log("city", city) //need to plug in

  const restaurantsSelector = useSelector((state) => state.restaurants);
  console.log("state", restaurantsSelector)

  const cityRestaurantsData = restaurantsSelector.restaurants
  console.log("rests", cityRestaurantsData)

  const dispatch = useDispatch();
  const getRests = () => dispatch(getDbRestaurants());

  useEffect(() => {
    getRests();
  }, [city])

  return (
    <div>
      <ul>
        {
          cityRestaurantsData.map(restaurant =>
            <RestaurantItem restaurant={restaurant} key={restaurant.id} />)
        }
      </ul>
    </div>
  );
};

export default Restaurants
