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
  }, [])

  if (citiesArray === null) {
    return <div>No cities</div>
  }
  else {
    const cityObject = citiesArray[cityIndex]

    if (cityObject) {
      const cityNameString = Object.keys(cityObject)[0]
      const restaurants = cityObject[cityNameString]

      return (
        <div>
          <ul>
            {
              citiesArray.map((cityName, index) => {
                    return <button key={index} onClick={() => setCityIndex(index)}> {Object.keys(cityName)[0]} </button>
              })
            }
          </ul>
          <Restaurants restaurants={restaurants} />
        </div>
      )
    }
    else {
      return <div>No restaurants</div>
    }
  }
}

export default CityButtons
