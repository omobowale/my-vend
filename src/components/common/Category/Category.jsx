import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = props => {
  const { data } = props;
  return (
    <li className="services_list--item">
      <Link title={data.category} to={data.url}>
        <img src={data.icon} alt={data.category} className="icon" />
        <p className="services_list--item--name">{data.name}</p>
      </Link>
    </li>
  );
};

Category.propTypes = {
  data: PropTypes.object
};

export default Category;
