import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getNotifications as getSellerNotifications } from '../../../../modules/seller/service';
import { getNotifications as getBuyerNotifications } from '../../../../modules/buyer/service';
import SimpleSpinner from '../../../common/Spinner/SimpleSpinner';
import Notification from './Notification';

function Headlines({ show, toggleShow, notifications, application, dispatch }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const getNotifications =
      application === 'buyer' ? getBuyerNotifications : getSellerNotifications;
    if (!notifications) {
      dispatch(getNotifications());
    }
  }, [application, dispatch, notifications]);

  function useOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          toggleShow();
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutside(wrapperRef);

  return (
    <div className={`headlines ${show ? 'show' : ''}`}>
      <div className="side-content" ref={wrapperRef}>
        <div className="bar-title">
          <h4>Headlines</h4>
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            onClick={toggleShow}
            className="close"
          />
        </div>
        <nav className="sidebar-nav">
          {notifications ? (
            notifications.map((noty) => (
              <Notification
                notification={noty}
                application={application}
                key={noty.id}
              />
            ))
          ) : (
            <SimpleSpinner />
          )}
          {}
        </nav>
      </div>
    </div>
  );
}

Headlines.propTypes = {
  application: PropTypes.string.isRequired,
  notifications: PropTypes.array,
};

Headlines.defaultProps = {
  notifications: null,
};

export default Headlines;
