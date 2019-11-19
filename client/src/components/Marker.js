import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark, deleteBookmark } from '../actions/bookmarkActions'

const Marker = ({ restaurant, mark }) => {
  console.log("test", mark)

  const [isMarked, setisMarked] = useState(mark)
  console.log(restaurant)
  console.log("isMarked", isMarked)
  const dispatch = useDispatch();

  const addMark = (restaurant) => {
    const restaurantData = {
      "user": "ashleyg",
      "yelpId": restaurant.id,
      "yelpUrl": restaurant.url,
      "restaurantName": restaurant.name,
      "imageUrl": restaurant.image_url
    }

    dispatch(addBookmark(restaurantData));
    setisMarked(true);
  };

  const deleteMark = (restaurant) => {
    const restaurantData = {
      "user": "ashleyg",
      "yelpId": restaurant.yelpId
    }

    dispatch(deleteBookmark(restaurantData));
    setisMarked(false);
  };

    return (
        <div className='marker'>
          <input className='marker-button' type='checkbox' checked={isMarked}
            onChange={() => isMarked ? deleteMark(restaurant) : addMark(restaurant)}>
          </input>
        </div>
    )
}

export default Marker
