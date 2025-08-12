import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="site-header" role="banner">
      <nav aria-label="Main navigation">
        <ul className="nav">
          <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : undefined}>About</NavLink></li>
          <li><NavLink to="/attractions" className={({isActive}) => isActive ? 'active' : undefined}>Attractions</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : undefined}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
