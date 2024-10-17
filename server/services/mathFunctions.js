export const divide = (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  };
  
export const multiply = (a, b) => a * b;
  
export const subtract = (a, b) => a - b;
  
export const add = (a, b) => a + b;