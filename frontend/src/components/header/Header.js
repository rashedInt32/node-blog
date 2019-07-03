import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
  <nav className="navbar navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Pricing</Link>
        </li>
      </ul>
    </div>

  </nav>

export default Header;
