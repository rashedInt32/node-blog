import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
  <nav className="navbar navbar-dark bg-dark">
    <div className="navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav navbar-right">
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Log Out</Link>
        </li>
      </ul>
    </div>
  </nav>

export default Header;
