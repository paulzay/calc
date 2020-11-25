import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result;
  const a = Big(numberOne);
  const b = Big(numberTwo);

  if (operation === '+') {
    result = a.plus(b);
  } else if (operation === '-') {
    result = a.minus(b);
  } else if (operation === 'x') {
    result = a.times(b);
  } else if (operation === '÷') {
    if (numberTwo !== '0') {
      result = a.div(b);
    } else {
      return 'Error';
    }
  } else if (operation === '%') {
    result = a.div(100);
  }

  return result;
}
