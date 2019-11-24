import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbRestaurants } from '../../actions/restaurantActions';
import Restaurants from './Restaurants';

const CityButtons = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const citiesArray = useSelector((state) => state.restaurants.restaurants);

  const dispatch = useDispatch();
  const getRests = () => dispatch(getDbRestaurants());

  useEffect(() => {
    getRests();
  }, [cityIndex])

  if (!citiesArray) {
    return <div>No cities</div>
  } else {
    const cityObject = citiesArray[cityIndex]

    if (!cityObject) {
      return <div>No restaurants</div>
    } else {
      const cityName = cityObject.cityName
      const cityRestaurants = cityObject.restaurants

      return (
        <div>
          <ul>
            {
              citiesArray.map((city, index) => {
                    return <button onClick={() => setCityIndex(index)} key={index}>{city.cityName}</button>
              })
            }
          </ul>
          <Restaurants cityName={cityName} cityRestaurants={cityRestaurants} />
        </div>
      )
    }
  }
}

export default CityButtons
