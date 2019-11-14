import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbRestaurants } from '../../actions/restaurantActions';
import RestaurantItem from './RestaurantItem';

const Restaurants = () => {

  // const [city, setCity] = useState(0);

  const restaurantsSelector = useSelector((state) => state.restaurants.restaurants[0]);
  console.log("state", restaurantsSelector)

  // const cities = Object.keys(restaurantsSelector)
  // console.log("cities", cities)
  // const restaurantArray = restaurantsSelector["San Francisco, CA"]
  // console.log("restaurantArray", restaurantArray)

  const dispatch = useDispatch();
  const getRests = () => dispatch(getDbRestaurants());

  useEffect(() => {
    getRests();
  }, [])

  return (
    <div>
      <div>
        {
            // cities.map((city_name, index) => {
            //     return <button onClick={() => setCity(index)}>{Object.keys(city_name)[0]}</button>
            // })
        }
      </div>
      <ul>
        {
          // restaurantArray.map(restaurant =>
          //   <RestaurantItem restaurant={restaurant} key={restaurant.id} />)
        }
      </ul>
    </div>
  );
};

export default Restaurants
