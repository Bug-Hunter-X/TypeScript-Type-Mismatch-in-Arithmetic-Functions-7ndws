function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result = add(5, 3); // 8
result = subtract(10, 4); // 6
result = multiply(7, 2); // 14
result = divide(15, 3); // 5

//Uncommon error: What happens if the parameter type isn't a number?