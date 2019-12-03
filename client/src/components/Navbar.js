import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mySvg from '../food.svg'

const Navbar = ({ title, icon }) => {
  const isLogged = useSelector((state) => state.users.isLogged);

  return (
    <div className='navbar'>
      <h1>
        <img src={mySvg} style={{width:55, height:55, padding: '5px'}} alt='Unavailable'/>
        {title}
      </h1>
      <br></br>
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
