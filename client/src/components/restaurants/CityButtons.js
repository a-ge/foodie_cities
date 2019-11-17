import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getDbRestaurants } from '../../actions/restaurantActions';
import Restaurants from './Restaurants';

const CityButtons = () => {

  const [cityIndex, setCityIndex] = useState(0);
  const [cityRestaurants, setCityRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch('http://localhost:4000/restaurants/');
      const data = await response.json();
            console.log("response", data);
      setCityRestaurants(data);
    }
    fetchRestaurants()
  }, []);

  if (cityRestaurants === null) {
    return <div>No cities</div>
  }
  else {
    // const cityObject = cityRestaurants[cityIndex]
    // console.log("cityObject", cityObject)
    // if (cityObject) {
    //   const cityNameString = Object.keys(cityObject)[0]
    //   console.log("cityNameString", cityNameString)
    //   const restaurantsArray = cityObject[cityNameString]
    //   console.log("restaurantsArray", restaurantsArray)
      return (
        <div>
          <ul>
            {
              cityRestaurants.map((cityData, index) => {
                    return <button key={index} onClick={() => setCityIndex(index)}> {Object.keys(cityData)[0]} </button>
              })
            }
          </ul>
          <Restaurants restaurants={cityRestaurants} />
        </div>
      )
    }
    // else {
    //   return <div>No restaurants</div>
    // }
  // }
}

export default CityButtons
