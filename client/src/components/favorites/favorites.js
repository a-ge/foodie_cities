import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { getFavRestaurants } from '../../actions/restaurantActions';
import axios from 'axios';


const FavRestaurants = () => {

    const [favorites, setFavorites] = useState([]);
    const [checkHeart, setCheckHeart] = useState(false);

  const toggleHeart = () => {
    axios.post('http://localhost:5000/favorites/add', 
      {restaurant_id: 1, user_id: 2, status: "went"})
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error)
      });

    setCheckHeart(!checkHeart)
    console.log("check heart is", checkHeart)
    
  }

  return (
    <div>
      <input 
        type="checkbox" 
        name="heart" 
        defaultChecked={setCheckHeart} 
        onClick={e => toggleHeart()} 
      />Heart
    </div>
  );
};

export default FavRestaurants
