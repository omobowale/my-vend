import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Auth from '../../../utils/Auth';
import { useHistory } from 'react-router-dom';
import { sellerApp } from '../../../utils/sellerApp';
import Notify from '../../../utils/notify';

function Switchbar({ show, hideSwitchbar, buyer, seller, application }) {
  const user = application === 'seller' ? seller || buyer : buyer;
  const auth = new Auth();
  const history = useHistory();

  const wrapperRef = useRef(null);

  function useOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          hideSwitchbar();
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

  const switchToSeller = () => {
    if (application === 'buyer') {
      hideSwitchbar();
      sellerApp();

      return true;
    }
    Notify.success('You are already in Selling Mode');
    return false;
  };

  const switchToBuyer = () => {
    if (application === 'seller') {
      hideSwitchbar();
      history.push('/');
      return;
    }
    Notify.success('You are already in Buying Mode');
  };

  return (
    <div className={`switchbar ${show ? 'show' : ''}`}>
      <div className="side-content" ref={wrapperRef}>
        <FontAwesomeIcon
          icon={faTimes}
          size="lg"
          onClick={hideSwitchbar}
          className="close"
        />
        <nav className="sidebar-nav">
          <div className="user-info">
            <img
              src={`${
                application === 'buyer'
                  ? user['logo_or_profile_pic']
                  : user.avatar
              }`}
              alt="user"
            />
            <li className="user-nav-item">
              <span className="user-info-name">{user?.username}</span>
              <span className="user-info-email grey-text"> {user?.email}</span>
              <div className="user-info-actions" onClick={hideSwitchbar}>
                <a
                  href={`${
                    application === 'seller' ? '/services' : ''
                  }/personal-info`}
                  className="nav-action green-text"
                >
                  Personal Info
                </a>
                <span className="nav-action green-text" onClick={auth.Logout}>
                  Logout
                </span>
              </div>
            </li>
          </div>
          <hr />
          <li className="app-nav">
            <div className="app-nav-title" onClick={switchToBuyer}>
              <h4>Buying</h4>
              {application === 'buyer' && (
                <span className="active-app">Active</span>
              )}
            </div>

            <p className="app-desc">
              Explore the marketplace. Search, hire, work with & pay vetted
              freelance professionals.
            </p>
          </li>
          <li className="app-nav">
            <div className="app-nav-title blue" onClick={switchToSeller}>
              <h4>Selling</h4>
              {application === 'seller' && (
                <span className="active-app">Active</span>
              )}
            </div>
            <p className="app-desc">
              Freelance professional's back office to manage portfolio, new
              orders, payments etc.
            </p>
          </li>
        </nav>
      </div>
    </div>
  );
}

Switchbar.propTypes = {
  show: PropTypes.bool,
  hideSwitchbar: PropTypes.func,
};

export default Switchbar;
