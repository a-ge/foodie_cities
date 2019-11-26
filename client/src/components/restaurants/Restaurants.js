import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantItem from './RestaurantItem';

import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';

const Restaurants = ({ cityRestaurants, cityName }) => {
  const loading = useSelector((state) => state.users.loading);

  return (
    <Container>
      {loading ? <div>loading...</div> :
        <CardDeck>
          {
            cityRestaurants.map((restaurant, index) =>
              <RestaurantItem restaurant={restaurant} cityName={cityName} key={index} />
            )
          }
        </CardDeck>
      }
    </Container>
  );
};

export default Restaurants;
