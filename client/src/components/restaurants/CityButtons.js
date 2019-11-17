import React, { useState, useEffect } from 'react';
import Restaurants from './Restaurants';

const CityButtons = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch('http://localhost:4000/restaurants/');
      const data = await response.json();
      setRestaurants(data);
    }
    fetchRestaurants()
  }, []);

  if (restaurants === null) {
    return <div>No cities</div>
  } else {
    const cityObject = restaurants[cityIndex]

    if (cityObject) {
      const cityName = Object.keys(cityObject)[0]
      const cityRestaurants = cityObject[cityName]

      return (
        <div>
          <ul>
            {
              restaurants.map((cityData, index) => {
                    return <button key={index} onClick={() => setCityIndex(index)}> {Object.keys(cityData)[0]} </button>
              })
            }
          </ul>
          <Restaurants cityRestaurants={cityRestaurants} />
        </div>
      )
    } else {
      return <div>No restaurants</div>
    }
  }
}

export default CityButtons
