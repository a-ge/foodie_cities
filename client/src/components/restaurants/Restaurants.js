import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RestaurantItem from './RestaurantItem';
import { getRestaurants } from '../../actions/restaurantActions';

const Restaurants = ({ restaurant: { restaurants, loading }, getRestaurants }) => {
  useEffect(() => {
    getRestaurants();
    // eslint-disable-next-line
  }, []);

  if (loading || restaurants === null) {
    return <div>...loading...</div>;
  }

  return (
    <div>
      {!loading && restaurants.length === 0 ? (
        <p className='center'>No restaurants to show...</p>
      ) : (
        restaurants.map(restaurant => <RestaurantItem restaurant={restaurant} key={restaurant.id} />)
      )}
    </div>
  );
};



const mapStateToProps = state => ({
    restaurant: state.restaurant
});

export default connect(
  mapStateToProps,
  { getRestaurants }
)(Restaurants);
