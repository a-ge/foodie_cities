import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Marker from '../Marker';

const RestaurantItem = ({ restaurant, bookmarksArray }) => {
  const [ bookmarks, setBookmarks ] = useState([])

  const mark = () => {
    setBookmarks(bookmarksArray)
    const idsArray = bookmarks.map((bookmark) => bookmark.yelpId)
    return idsArray.includes(restaurant.id)
  }

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
};

export default RestaurantItem
