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

function performCalculation(operation: string, a: any, b: any): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parameters must be numbers');
    }

  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      throw new Error('Invalid operation');
  }
}

let result = performCalculation('add', 5, 3); // 8
result = performCalculation('subtract', 10, 4); // 6
result = performCalculation('multiply', 7, 2); // 14
result = performCalculation('divide', 15, 3); // 5

//This will throw an error now because of runtime type checking
//result = performCalculation('add', '5', 3); 