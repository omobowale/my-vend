import React from 'react';
import { Helmet } from 'react-helmet';

import './NotFound.scss';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="page notfound">
      <Helmet>
        <title>404! Page Not Found | Livevend</title>
      </Helmet>
      <div className="center-block">
        <h1>404</h1>
        <p>
          ...Oops! Something is missing, why not talk to us about it, or simply
          head back to our homepage
        </p>
        <div className="action-buttons">
          <Link to="/" title="home">
            <button type="button" className="butn butn--green wide-butn">
              Go Back Home
            </button>
          </Link>
          {/* <Link to="https://www.livevend.com">
            <button
              type="button"
              className="butn butn--green--outline wide-butn"
            >
              Talk to Us
            </button>
          </Link> */}
        </div>
      </div>
    </main>
  );
}

export default NotFound;
