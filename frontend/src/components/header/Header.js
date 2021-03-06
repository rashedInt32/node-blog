import React from 'react';
import { Link, matchPath } from 'react-router-dom';

const Header = (props) => {
  const match = matchPath(props.pathname, {
    path: "/post/:id",
    exact: true,
    strict: false
  });

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-collapse" id="navbarNavDropdown">
        <ul className="justify-content-end nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/logout"
              onClick={props.onLogout}
            >
              Log Out
            </Link>
          </li>
          {match
            ? <li className="nav-item">
              <Link
                className="nav-link"
                to="/post/edit"
                onClick={props.onEditPost}
              >
                Edit post
              </Link>
            </li>
            : ''
          }

        </ul>
      </div>
    </nav>
  )
}


export default Header;
