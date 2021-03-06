import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

export default function ButtonDisplay({ clickHandler }) {
  return (
    <div className="btn-dsp">
      <div className="grp-1">
        <Button name="AC" clickHandler={clickHandler} />
        <Button name="+/-" clickHandler={clickHandler} />
        <Button name="%" clickHandler={clickHandler} />
        <Button name="/" color="#F5923F" clickHandler={clickHandler} />
      </div>
      <div className="grp-2">
        <Button name="7" clickHandler={clickHandler} />
        <Button name="8" clickHandler={clickHandler} />
        <Button name="9" clickHandler={clickHandler} />
        <Button name="X" color="#F5923F" clickHandler={clickHandler} />
      </div>
      <div className="grp-3">
        <Button name="4" clickHandler={clickHandler} />
        <Button name="5" clickHandler={clickHandler} />
        <Button name="6" clickHandler={clickHandler} />
        <Button name="-" color="#F5923F" clickHandler={clickHandler} />
      </div>
      <div className="grp-4">
        <Button name="1" clickHandler={clickHandler} />
        <Button name="2" clickHandler={clickHandler} />
        <Button name="3" clickHandler={clickHandler} />
        <Button name="+" color="#F5923F" clickHandler={clickHandler} />
      </div>
      <div className="grp-5">
        <Button name="0" wide clickHandler={clickHandler} />
        <Button name="." clickHandler={clickHandler} />
        <Button name="=" color="#F5923F" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

ButtonDisplay.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
