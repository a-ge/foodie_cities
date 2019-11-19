import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Marker from '../Marker';

const RestaurantItem = ({ restaurant }) => {
    const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
    const ids = bookmarksArray.map(item => item.yelpId)
    const isMarked = ids.includes(restaurant.id)

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
        <Marker restaurant={restaurant} mark={isMarked} />
        <br/>
      </div>
    )
};

export default RestaurantItem
