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

  if (citiesArray === null) {
    return <div>No cities</div>
  }
  else {
    const cityObject = citiesArray[cityIndex]

    if (cityObject) {
      const cityNameString = Object.keys(cityObject)[0]
      const cityRestaurants = cityObject[cityNameString]

      return (
        <div>
          <ul>
            {
              citiesArray.map((cityName, index) => {
                    return <button onClick={() => setCityIndex(index)} key={index}> {Object.keys(cityName)[0]} </button>
              })
            }
          </ul>
          <Restaurants cityRestaurants={cityRestaurants} />
        </div>
      )
    }
    else {
      return <div>No restaurants</div>
    }
  }
}

export default CityButtons
