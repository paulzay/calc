import React from 'react';
import Button from './Button';

export default function ButtonDisplay() {
  return (
    <>
      <div className="grp-1">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="/" />
      </div>
      <div className="grp-2">
        <Button name={7} />
        <Button name={8} />
        <Button name={9} />
        <Button name="X" />
      </div>
      <div className="grp-3">
        <Button name={4} />
        <Button name={5} />
        <Button name={6} />
        <Button name="-" />
      </div>
      <div className="grp-4">
        <Button name={1} />
        <Button name={2} />
        <Button name={2} />
        <Button name="+" />
      </div>
      <div className="grp-5">
        <Button name={0} />
        <Button name="." />
        <Button name="=" />
      </div>
    </>
  );
}
