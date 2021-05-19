import React from 'react';
import './WorkStoreCard.scss';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';

const WorkStoreCard = ({ workstore, className, myPost }) => {
  const isClosed = workstore.stage !== 'Open';

  return (
    <div className={`${className} stack-item`}>
      <div className="card-wrapper">
        <div className="workstore-displayInfo-header">
          <div className="workstore-displayInfo-tooltip">
            <div className={`info-open ${isClosed ? 'closed' : ''}`}>
              <p>{workstore.stage || 'Open'}</p>
            </div>
          </div>
          <div className="workstore-displayInfo-profile">
            <div className="info-profile">
              {workstore.buyer && (
                <div className="info-profile-image">
                  <img
                    src={workstore.buyer?.logo_or_profile_pic}
                    alt="profile"
                  />
                </div>
              )}

              <div className="info-profile-name">
                <p>{workstore.buyer?.username ?? workstore.buyer_username}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="workstore-displayInfo-body">
          <p style={{ height: '100px' }}>{workstore.custom_request}</p>
        </div>
        <div
          className={`workstore-displayInfo-budget ${isClosed ? 'closed' : ''}`}
        >
          <p>Budget:</p>
          <p>
            <Price price={workstore.budget} />
          </p>
        </div>
        <div className="workstore-displayInfo-category">
          <Link to={`/category/${workstore.category.category_string}`}>
            {workstore.category.category || workstore.category}
          </Link>
        </div>
        <div className="workstore-displayInfo-button">
          {myPost ? (
            <Link
              to={`/job-posts/${workstore.message_id}`}
              className="butn butn--green"
            >
              View
            </Link>
          ) : (
            <Link
              to={`/workstore/${workstore.message_id}`}
              className={`butn butn--${isClosed ? 'grey' : 'green'}`}
            >
              Reply
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkStoreCard;
