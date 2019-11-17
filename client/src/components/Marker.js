import React, { useState } from 'react';

const Marker = ({ mark }) => {
  const [isClicked, setIsClicked] = useState(mark)
  console.log("checkbox", isClicked)

    return (
        <div className='marker'>
          <input className='marker-button' type='checkbox' checked={isClicked}
            onChange={() => isClicked ? setIsClicked(false) : setIsClicked(true)}>
          </input>
        </div>
    )
}

export default Marker
