import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './Pagination.scss';
import shortid from 'shortid';

function Pagination(props) {
  const renderPagination = () => {
    const paginationJsx = [];
    for (let i = 0; i < props.count; i++) {
      const active = i === props.active - 1 ? 'active' : '';
      paginationJsx.push(
        <li key={shortid.generate()}>
          <a className={active} href="#0" onClick={() => props.action(i + 1)}>
            {i + 1}
          </a>
        </li>
      );
    }
    return paginationJsx;
  };
  return (
    props.count > 1 && (
      <ul className="pagintion">
        <li>
          <a
            href="#0"
            className={`previous ${props.active === 1 ? 'disabled' : ''}`}
            onClick={() => props.action(parseInt(props.active) - 1)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </li>
        {renderPagination()}
        <li>
          <a
            href="#0"
            className={`${props.active === props.count ? 'disabled' : ''} next`}
            onClick={() => props.action(parseInt(props.active) + 1)}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </li>
      </ul>
    )
  );
}

Pagination.propTypes = {
  count: PropTypes.number,
  url: PropTypes.string,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  action: PropTypes.func,
};

export default Pagination;
