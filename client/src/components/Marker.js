import React, { useState } from 'react';

const Marker = () => {
  const [isClicked, setIsClicked] = useState(true)
  // pass in state of marker from parent component (RestaurantItem or BookmarkItem)
  // all bookmarks will be isClicked
  // restaurants' will depend if their yelpid is in bookmarks array in store

  // {isLogged ? <h3>You are logged in</h3> : <h3>You are not logged in</h3>}
  // isClicked ? setIsClicked(false) : setIsClicked(true)
  console.log(isClicked)
  // function handleClick() {
  //   if (isClicked === true) {
  //     setIsClicked(false);
  //     console.log("button", isClicked)
  //
  //   }
  //   setIsClicked(true);
  //   console.log("button", isClicked)
  //
  // }
    return (
        <div className='marker'>
          <input className='marker-button' type='checkbox' onClick={() => isClicked ? setIsClicked(false) : setIsClicked(true)}checked={isClicked}>
          </input>
        </div>
    )
}

export default Marker
