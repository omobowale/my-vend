import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ closeSidebar, signup }) {
  const location = useLocation();
  return (
    <Fragment>
      <li className="nav-item" onClick={closeSidebar}>
        <Link
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        >
          Sign In
        </Link>
      </li>
      <li className="nav-item" onClick={closeSidebar}>
        <a href="#0" onClick={signup} className="butn butn--green">
          Sign up
        </a>
      </li>
      <li className="nav-item" onClick={closeSidebar}>
        <Link to="/workstore/create">Post a Job</Link>
      </li>
      <li className="nav-item" onClick={closeSidebar}>
        <Link to="/workstore">WorkStore</Link>
      </li>
      <li className="nav-item" onClick={closeSidebar}>
        <Link to="/promo">PromoStore</Link>
      </li>
    </Fragment>
  );
}

export default Sidebar;
