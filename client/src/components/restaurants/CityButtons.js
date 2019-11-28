import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDbRestaurants } from '../../actions/restaurantActions';
import Restaurants from './Restaurants';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const CityButtons = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const citiesArray = useSelector((state) => state.restaurants.restaurants);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const getRestaurants = () => dispatch(getDbRestaurants());
    getRestaurants();
  }, [dispatch]);

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
        <Tabs id="city-tabs" activeKey={cityIndex} onSelect={k => setCityIndex(k)}>
          {
            citiesArray.map((city, index) => {
              return (
                <Tab eventKey={index} title={city.cityName} key={index}>
                  <Restaurants cityName={cityName} cityRestaurants={cityRestaurants} />
                </Tab>
              )
            })
          }
        </Tabs>
      )};
  };
};

export default CityButtons;
