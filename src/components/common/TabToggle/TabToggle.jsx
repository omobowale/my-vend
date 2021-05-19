import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

function TabToggle({ tabs, active }) {
  return (
    <div className="tab">
      <ul>
        {tabs.map((tab, index) => {
          return index === active ? (
            <li className="active" key={shortid.generate()}>
              {' '}
              {tab.name}{' '}
            </li>
          ) : (
            <li className="inactive" key={shortid.generate()}>
              <Link to={tab.url}> {tab.name} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

TabToggle.propTypes = {
  tabs: PropTypes.array,
  active: PropTypes.number,
};

export default TabToggle;
