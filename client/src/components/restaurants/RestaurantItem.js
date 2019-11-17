import React from 'react';

const RestaurantItem = ({ restaurant }) => {
  console.log("restaurant", restaurant)
  const restaurantId = Object.keys(restaurant)[0]
  console.log("restaurantId", restaurantId)

  const restaurantData = restaurant[restaurantId]
  console.log("restaurantData", restaurantData)
  return (
    <div>
      <div>
        {restaurantData.name}
      </div>
      <div>
        <img src={restaurantData.image_url} alt="Not available" height="42" width="42" />
      </div>
      <div>
        Rating: {restaurantData.rating}
      </div>
      <div>
        Review Count: {restaurantData.review_count}
      </div>
      <br/>
    </div>
  );
};

export default RestaurantItem
