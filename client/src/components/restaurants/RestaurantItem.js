import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBookmark, deleteBookmark } from '../../actions/bookmarkActions';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const RestaurantItem = ({ restaurant }) => {
    // const isLogged = useSelector((state) => state.users.isLogged);
    const isLogged = true
    const bookmarksArray = useSelector((state) => state.bookmarks.bookmarks);
    const ids = bookmarksArray.map(item => item.yelpId)
    const isMarked = ids.includes(restaurant.id)

    const dispatch = useDispatch();

    const handleClick = () => {
      if (isMarked) {
        const restaurantData = {
          "user": "ashleyg",
          "yelpId": restaurant.id
        }
        dispatch(deleteBookmark(restaurantData));
        return false;
      } else {
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

    return (
      <div>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={restaurant.image_url} href={restaurant.yelpUrl}/>
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
                <div>
                <strong>Rating:</strong> {restaurant.rating}
                </div>
                <div>
                  <strong>Review Count:</strong> {restaurant.review_count}
                </div>
              </Card.Text>
              <Button variant="primary">Bookmark Me!</Button>
            </Card.Body>
          </Card>
          <br/>

          {/* Need to call handle click for button */}

      </div>
    )
};

export default RestaurantItem
