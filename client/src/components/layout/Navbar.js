import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {

  return (
    <div className='navbar'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/about'>About</Link>
          </li>
      </ul>
    </div>
  );
};


Navbar.defaultProps = {
  title: 'Foodie Cities',
  icon: ''
};

export default Navbar;
