import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
  return (
    <nav className="nav d-flex">
      <h3>Book store</h3>
      <ul className="nav-links d-flex">
        <li>
          <Link to="/">Book list</Link>
        </li>
        <li>
          <Link to="/category">category</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
