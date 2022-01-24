import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      Navbar Component
      <ul>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/coins">Cryptocurrencies</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
