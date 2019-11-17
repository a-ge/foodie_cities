import React from 'react';

const RestaurantItem = ({ restaurant }) => {

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
      <br/>
    </div>
  );
};

export default RestaurantItem
