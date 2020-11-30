import operate from '../logic/operate';
import calculate from '../logic/calculate';

it('adds numbers', () => {
  const result = operate(1, 2, '+');
  expect(result).toEqual('3');
});

it('multiplies numbers', () => {
  const result = operate(2, 2, 'X');
  expect(result).toEqual('4');
});

it('subtracts numbers', () => {
  const result = operate(4, 2, '/');
  expect(result).toEqual('2');
});

it('divides numbers', () => {
  const result = operate(4, 2, '-');
  expect(result).toEqual('2');
});

it('returns percentage of a number', () => {
  const result = calculate({
    total: '6', next: '100', operation: '%',
  }, '=');
  expect(result).toEqual({
    total: '0.06', next: null, operation: null,
  });
});
