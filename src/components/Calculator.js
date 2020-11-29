import '../App.css';
import { Component } from 'react';
import ButtonDisplay from './ButtonDisplay';
import Display from './Display';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculator = calculate(this.state, buttonName);
    this.setState(calculator);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display operation={operation} next={next || '0'} total={total || '0'} />
        <ButtonDisplay clickHandler={this.handleClick} />
      </div>
    );
  }
}
