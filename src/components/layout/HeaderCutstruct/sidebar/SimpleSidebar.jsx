import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ closeSidebar, items=[] }) {
  const location = useLocation();
  return (
    <Fragment>
        {items.map(item => (
            <li className="nav-item" onClick={closeSidebar}>
                {item}
          </li>
        ))}
    </Fragment>
  );
}

export default Sidebar;
