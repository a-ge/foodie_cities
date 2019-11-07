import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const FavRestaurants = () => {

  const [favorites, setFavorites] = useState([]);
  const [checkHeart, setCheckHeart] = useState(false);

  const toggleHeart = () => {
    axios.post('http://localhost:5000/favorites/add', {restaurant_id: 1, user_id: 2, status: "went"});
    setCheckHeart(!checkHeart);
    console.log("check heart is", checkHeart);
    fetchData()
  };

  async function fetchData() {
    const res = await axios.get('http://localhost:5000/favorites/')
    setFavorites(res.data.map(c => c.data));
  }

  useEffect(() => {
    console.log(favorites)
  }, [favorites]);

  return (
    <div>
      <input
        type="checkbox"
        name="heart"
        defaultChecked={setCheckHeart}
        onClick={e => toggleHeart()}
      />Heart
      <div>
      test...
      </div>
    </div>
  );
};

export default FavRestaurants
