import React from 'react';
import PropTypes from 'prop-types';

import './PageTitle.scss';

const PageTitle = (props) => {
  return (
    <section className="new-page-title">
      <div className="container">
        <h1 className={props.capitalize ? 'capitalize' : null}>
          {props.title}
        </h1>
        <h2> {props.sub} </h2>
      </div>
    </section>
  );
};

PageTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  sub: PropTypes.string,
  capitalize: PropTypes.bool,
};

export default PageTitle;
