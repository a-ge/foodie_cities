import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBookmark, deleteBookmark } from '../../actions/bookmarkActions';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RestaurantItem = ({ restaurant, cityName }) => {
  const user = useSelector((state) => state.users.user);
  const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
  const isLogged = useSelector((state) => state.users.isLogged);
  const [ isMarked, setIsMarked ] = useState(false);

  useEffect(() => {
    // Check to see if restaurant is in bookmarks
    const bookmarkObjects = bookmarksArray.map(item => item.restaurants).flat();
    const ids = bookmarkObjects.map(item => item.yelpId);
    setIsMarked(ids.includes(restaurant.id));
  }, [bookmarksArray, restaurant.id]);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isLogged) {
      alert("Register or log in to save as bookmark.")
      return
    }

    if (isMarked) {
      const restaurantData = {
        "user": user,
        "cityName": cityName,
        "yelpId": restaurant.id
      }

      dispatch(deleteBookmark(restaurantData));
      return false;
    } else {
        const restaurantData = {
          "user": user,
          "cityName": cityName,
          "yelpId": restaurant.id,
          "yelpUrl": restaurant.url,
          "restaurantName": restaurant.name,
          "imageUrl": restaurant.image_url
        }

        dispatch(addBookmark(restaurantData));
        return true;
      };
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={restaurant.image_url} href={restaurant.url}
          style={{ height:'15vw', objectfit:'cover' }}/>
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            <strong>Rating:</strong>

            <div className="ratings">
                <div className="empty-stars"></div>
                <div className="full-stars" style={{width:restaurant.rating|parseFloat(5*100)}}></div>
              </div>
            <br/>
            <strong>Review Count:</strong> {restaurant.review_count}
          </Card.Text>
          {
            isMarked ? <Button className='btn-danger' variant="primary" onClick={handleClick}>Marked!</Button>
              : <Button variant="primary" onClick={handleClick}>Bookmark Me!</Button>
          }
        </Card.Body>
      </Card>
      <br/>
    </div>
  );
};

export default RestaurantItem;
