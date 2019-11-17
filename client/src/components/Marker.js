import React, { useState } from 'react';

const Marker = ({ mark }) => {
  const [isMarked, setisMarked] = useState(mark)
  console.log("isMarked", isMarked)

    return (
        <div className='marker'>
          <input className='marker-button' type='checkbox' checked={isMarked}
            onChange={() => isMarked ? setisMarked(false) : setisMarked(true)}>
          </input>
        </div>
    )
}

export default Marker
