import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark, deleteBookmark } from '../actions/bookmarkActions'

const Marker = ({ restaurant, mark }) => {
  const [isMarked, setisMarked] = useState(mark)
  console.log("isMarked", isMarked)
  const dispatch = useDispatch();

  const addMark = (restaurant) => {
    const restaurantData = {
      "user": "ashleyg",
      "yelpId": "lJAGnYzku5zSaLnQ_T6_GQ",
      "yelpUrl": "https://www.yelp.com/biz/brendas-french-soul-food-san-francisco-5?adjust_creative=tFd1Luf2rm830mcXSUl8mg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=tFd1Luf2rm830mcXSUl8mg",
      "restaurantName": "Brenda's French Soul Food",
      "imageUrl": "https://s3-media3.fl.yelpcdn.com/bphoto/sNIJnePGDenUOyewsD8tLg/o.jpg"
    }
    dispatch(addBookmark(restaurantData));
    setisMarked(true);
  };

  const deleteMark = (restaurant) => {
    const restaurantData = {
      user: "ashleyg",
      yelpId: "lJAGnYzku5zSaLnQ_T6_GQ"
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
