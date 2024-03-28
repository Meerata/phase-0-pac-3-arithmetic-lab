// Define a function called add that takes two parameters and returns their sum
function add(a, b) {
  return a + b;
}

// Define a function called subtract that takes two parameters and returns the result of subtracting the second parameter from the first
function subtract(a, b) {
  return a - b;
}

// Define a function called multiply that takes two parameters and returns their product
function multiply(a, b) {
  return a * b;
}

// Define a function called divide that takes two parameters and returns the result of dividing the first parameter by the second
function divide(a, b) {
  return a / b;
}

// Define a function called increment that takes in a number and increments it by 1, returning the result
function increment(n) {
  return ++n;
}

// Define a function called decrement that takes in a number and decrements it by 1, returning the result
function decrement(n) {
  return --n;
}

// Define a function called makeInt that takes in a string and parses it into an integer, returning the parsed integer
function makeInt(string) {
  return parseInt(string, 10);
}

// Define a function called preserveDecimal that takes in a string and parses it into a floating point number, returning the parsed number
function preserveDecimal(string) {
  return parseFloat(string);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  increment,
  decrement,
  makeInt,
  preserveDecimal,
};
