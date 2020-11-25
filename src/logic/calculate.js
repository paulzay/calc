import operate from './operate';

export default function calculate(buttonName, calculator) {
  let { total, next, operation } = calculator;
  const operands = ['+', '-', '÷', 'x', '%'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (buttonName === '+/-') {
    (total *= -1);
    (next *= -1);
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '%') {
    (total /= 100);
    operation = '%';
  }

  if (operands.includes(buttonName)) {
    operation = buttonName;
  } else if (operation && digits.includes(buttonName)) {
    next = next ? next + buttonName : buttonName;
  } else if (digits.includes(buttonName)) {
    total = total ? total + buttonName : buttonName;
  }

  return { total, next, operation };
}
