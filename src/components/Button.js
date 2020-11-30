import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  name, color, wide, clickHandler,
}) {
  const style = {
    width: wide ? '350px' : '175px',
    backgroundColor: color,
  };
  return (
    <div>
      <button type="button" style={style} onClick={() => { clickHandler(name); }}>{name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#E0E0E0',
  wide: false,
};
