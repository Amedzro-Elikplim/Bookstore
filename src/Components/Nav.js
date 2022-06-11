import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
  return (
    <nav className="nav d-flex">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="nav-links d-flex">
        <li>
          <Link className="no-underline" to="/">BOOKS</Link>
        </li>
        <li>
          <Link className="no-underline" to="/category">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
