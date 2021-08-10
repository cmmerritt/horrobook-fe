import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return <header className={styles.Header}>
    <div>
      <h1>Horrobook - discover & save upcoming horror book releases</h1>
    </div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">My Favorites</NavLink>
    </nav>
  </header>;
};

export default Header;
