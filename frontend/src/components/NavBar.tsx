import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>MovieApp</Link>
      </div>
      <div className='navbar-links'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='Favorites' className='nav-link'>
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
