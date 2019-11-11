// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';

// const Bookmarks = () => {

//   const [favorites, setFavorites] = useState([]);
//   const [checkHeart, setCheckHeart] = useState(false);

//   const toggleHeart = () => {
//     axios.post('http://localhost:5000/favorites/add',
//       {restaurant_id: 67, user_id: 2, status: "went"});
//     setCheckHeart(!checkHeart);
//   };

//   async function fetchData() {
//     const response = await axios.get('http://localhost:5000/favorites/')
//     const resp = response.data
//     setFavorites(resp.map(fave => fave.restaurant_id));
//   };

//   useEffect(() => {
//     fetchData()
//   }, [checkHeart]);

//   return (
//     <div>
//       <input
//         type="checkbox"
//         name="heart"
//         defaultChecked={setCheckHeart}
//         onClick={e => toggleHeart()}
//       />Heart
//       <div>
//       test...{favorites}
//       </div>
//     </div>
//   );
// };

// export default Bookmarks
