import React from 'react';
import RestaurantItem from './RestaurantItem';

import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Modal from 'react-bootstrap/Modal'

const Restaurants = ({ cityRestaurants, cityName }) => {

  return (
    <Modal.Body style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>
      <Container>
        <CardDeck>
          {
            cityRestaurants.map((restaurant, index) =>
              <RestaurantItem restaurant={restaurant} cityName={cityName} key={index} />
            )
          }
        </CardDeck>
      </Container>
    </Modal.Body>
  );
};

export default Restaurants;
