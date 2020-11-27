import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result;
  const a = Big(numberOne);
  const b = Big(numberTwo);

  if (operation === '+') {
    result = (a.plus(b)).toString();
  } else if (operation === '-') {
    result = (a.minus(b)).toString();
  } else if (operation === 'X') {
    result = (a.times(b)).toString();
  } else if (operation === '/') {
    if (numberTwo !== '0') {
      result = (a.div(b)).toString();
    } else {
      return 'Error';
    }
  } else if (operation === '%') {
    result = (a.div(100)).toString();
  }
  return result;
}
