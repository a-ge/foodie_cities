import React, { useState, useEffect } from 'react';
import Marker from '../Marker';

const RestaurantItem = ({ restaurant, bookmarksArray }) => {
const [ mark, setMark ] = useState(false)

const checkBookmarks = async (bookmarksArray) => {
  const idsArray = await bookmarksArray.map((bookmark) => bookmark.yelpId);
  setMark(idsArray.includes(restaurant.id))
  };

useEffect(()=> {
  checkBookmarks(bookmarksArray);
}, [restaurant, bookmarksArray])

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
