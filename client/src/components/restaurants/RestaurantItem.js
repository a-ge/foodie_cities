import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBookmark, deleteBookmark } from '../../actions/bookmarkActions';

const RestaurantItem = ({ restaurant }) => {
    const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
    const ids = bookmarksArray.map(item => item.yelpId)
    console.log("ids", ids)
    const isMarked = ids.includes(restaurant.id)

    const dispatch = useDispatch();

    const handleClick = () => {
      if (isMarked) {
        const restaurantData = {
          "user": "ashleyg",
          "yelpId": restaurant.id
        }
        console.log(restaurantData)
        dispatch(deleteBookmark(restaurantData));
        return false;
      }

      else {
        const restaurantData = {
          "user": "ashleyg",
          "yelpId": restaurant.id,
          "yelpUrl": restaurant.url,
          "restaurantName": restaurant.name,
          "imageUrl": restaurant.image_url
        }

        dispatch(addBookmark(restaurantData));
        return true;
      }
    }

    useEffect(() => {
    },
      [bookmarksArray]
    )

    return (
      <div>
        <div>
          {restaurant.name}
        </div>
        <div>
          <img src={restaurant.image_url} alt="Not available" height="42" width="42" />
        </div>
        <div>
          Rating: {restaurant.rating}
        </div>
        <div>
          Review Count: {restaurant.review_count}
        </div>
          <input className='marker-button' type='checkbox' checked={isMarked}
            onChange={handleClick}>
          </input>
        <br/>
      </div>
    )
};

export default RestaurantItem
