import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function SemiCircle({ radius, stroke, progress, className = '' }) {
  const normalizedRadius = useRef(radius - stroke * 2);
  const circumference = useRef(normalizedRadius.current * 2 * Math.PI);

  const strokeDashoffset =
    circumference.current - (progress / 100) * circumference.current;
  return (
    <svg height={radius * 2} width={radius * 2} className={className}>
      <circle
        stroke="#83BC23"
        fill="transparent"
        strokeWidth={stroke}
        style={{ strokeDashoffset }}
        strokeDasharray={circumference.current + ' ' + circumference.current}
        r={normalizedRadius.current}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

SemiCircle.propTypes = {
  className: PropTypes.string,
};

export default SemiCircle;
