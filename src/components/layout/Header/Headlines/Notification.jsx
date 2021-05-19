import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Notification({ notification, application }) {
  return (
    <li className="app-nav">
      <a href={notification.href}>
        <div className={`app-nav-title ${application}`}>
          <p>{notification.title} </p>
          <span className="active-app">
            {moment(notification.created_at).fromNow()}
          </span>
        </div>
        <p className="app-desc">{notification.message}</p>
      </a>
    </li>
  );
}

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
};

export default Notification;
