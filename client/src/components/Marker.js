import React, { useState } from 'react';

const Marker = ({mark}) => {
  console.log("mark", mark)
  const [isClicked, setIsClicked] = useState(mark)

  console.log("checkbox", isClicked)

    return (
        <div className='marker'>
          <input className='marker-button' type='checkbox' onClick={() => isClicked ? setIsClicked(false) : setIsClicked(true)}checked={isClicked}>
          </input>
        </div>
    )
}

export default Marker
