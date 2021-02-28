let numFirst = +prompt('Введите первое число');
let numSecond = +prompt('Введите второе число');
let operator = prompt('Введите знак операции');

function calcResult(numFirst, numSecond, operator) {
  return eval(`${numFirst}` + operator + `${numSecond}`);
}

alert(calcResult(numFirst, numSecond, operator));