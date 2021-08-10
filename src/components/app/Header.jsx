import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return <header>
    <div>
      <h1>Horrobook - discover upcoming horror book releases</h1>
    </div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">My Favorites</NavLink>
    </nav>
  </header>;
};

export default Header;
