import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Marker from '../Marker';

const RestaurantItem = ({ restaurant }) => {
  const bookmarksSelector = useSelector((state) => state.bookmarks);
  const bookmarksArray = bookmarksSelector.bookmarks

  if (!bookmarksArray) {
    return <div>No bookmarks</div>
  } else {
    const idsArray = bookmarksArray.map(item => item.id)
    console.log("idsArray", idsArray)
    const mark = idsArray.includes(restaurant.id)
    console.log("id", restaurant.id)

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
        <Marker mark={mark}/>
        <br/>
      </div>
    )
  }
};

export default RestaurantItem
