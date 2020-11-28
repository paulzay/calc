import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ total, next, operation }) {
  return (
    <div className="result">
      {operation ? next : total}
    </div>
  );
}

Display.defaultProps = {
  total: '0',
  next: null,
  operation: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
