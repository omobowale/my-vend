import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ closeSidebar, openAuthPage }) {
  const location = useLocation();
  return (
    <Fragment>
      <li className="nav-item" onClick={closeSidebar}>
          <Link to="/">Request Quantity Survey</Link>
      </li>
      <li className="nav-item" onClick={closeSidebar}>
          <Link to="/">
              Construction Consultation
          </Link>
      </li>
      <li className="nav-item" onClick={closeSidebar}>
          <a href="javascript: false"
              onClick={() => openAuthPage('login')}
          >
              Sign in
          </a>
      </li>
    </Fragment>
  );
}

export default Sidebar;
