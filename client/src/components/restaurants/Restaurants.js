import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantItem from './RestaurantItem';

import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Modal from 'react-bootstrap/Modal'

const Restaurants = ({ cityRestaurants, cityName }) => {
  const loading = useSelector((state) => state.users.loading);

  return (
    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
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
    </Modal.Body>
  );
};

export default Restaurants;
