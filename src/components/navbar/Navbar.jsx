import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="wrapper">Podcast Unila</div>
      </Link>
    </div>
  );
};

export default Navbar;
