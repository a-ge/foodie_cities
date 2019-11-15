import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbRestaurants } from '../../actions/restaurantActions';
import Restaurants from './Restaurants';

const CityButtons = () => {

  const [cityIndex, setCityIndex] = useState(0);

  const citiesArray = useSelector((state) => state.restaurants.restaurants);
  console.log("citiesArray", citiesArray)

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
    console.log("cityObject", cityObject)

    if (cityObject) {
      const cityNameString = Object.keys(cityObject)[0]
      console.log("cityNameString", cityNameString)

      const restaurants = cityObject[cityNameString]
      console.log("restaurants", restaurants)

      return (
        <div>
          <ul>
            {
              citiesArray.map((cityName, index) => {
                    return <button onClick={() => setCityIndex(index)}> {Object.keys(cityName)[0]} </button>
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
