import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ title, icon }) => {

  const isLogged = useSelector((state) => state.users.isLogged);
  console.log("navbar isLogged", isLogged)

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
          <li>
          {isLogged ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>}
          </li>
          <li>
          {isLogged ? '' : <Link to='/register'>Register</Link>}
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
