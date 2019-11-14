import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbRestaurants } from '../../actions/restaurantActions';
import RestaurantItem from './RestaurantItem';
import restaurants_data from '../../restaurants_data.json';

const Restaurants = ({ city }) => {
  // console.log("city", city) //need to plug in

  // const restaurantsSelector = useSelector((state) => state.restaurants.restaurants[city]);
  // console.log("state", restaurantsSelector)
  // console.log("type", typeof restaurantsSelector)

  // const changeToJSObj = JSON.parse(restaurantsSelector)
  // console.log('parsed', changeToJSObj)

  // const city_name = Object.keys(changeToJSObj)
  // const test = changeToJSObj[city_name]
  // console.log("test is", test)


  // console.log(city_name)
  // const actual = city_name[0]
  // const cityRestaurantsData = restaurantsSelector[actual]
  // console.log("rests", cityRestaurantsData)

  
  const city_name = Object.keys(restaurants_data[city])[0]
  const city_restaurants = restaurants_data[city][city_name]

  // const dispatch = useDispatch();
  // const getRests = () => dispatch(getDbRestaurants());

  // useEffect(() => {
  //   getRests();
  // }, [city])

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
