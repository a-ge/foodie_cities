import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavRestaurants } from '../../actions/restaurantActions';
import restaurants_data from '../../restaurants_data.json';

const FavRestaurants = () => {



  return (
    <div>
      <input type="checkbox" name="heart" value="Heart" />Heart
    </div>
  );
};

export default FavRestaurants
