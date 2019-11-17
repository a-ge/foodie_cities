import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbRestaurants } from '../../actions/restaurantActions';
import Restaurants from './Restaurants';

const CityButtons = ({ bookmarksArray }) => {
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
      const cityRestaurants = cityObject.restaurants

      return (
        <div>
          <ul>
            {
              citiesArray.map((cityName, index) => {
                    return <button onClick={() => setCityIndex(index)} key={index}>{cityName.cityName}</button>
              })
            }
          </ul>
          <Restaurants cityRestaurants={cityRestaurants} bookmarksArray={bookmarksArray} />
        </div>
      )
    }
  }
}

export default CityButtons
