import React from 'react';
import { Link } from 'react-router-dom';

const Category = props => {
  const data = props.data;
  return (
    <li className="services_list--item">
      <Link title={data.name} to={data.url}>
        <img src={data.icon} alt={data.name} className="icon" />
        <p className="services_list--item--name">{data.name}</p>
      </Link>
    </li>
  );
};

export default Category;
