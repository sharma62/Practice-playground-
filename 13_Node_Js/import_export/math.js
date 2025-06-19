let a = 10;

let sum = (a, b) => {
  return a + b;
};
let mult = (a, b) => {
  return a * b;
};
let minus = (a, b) => {
  return a > b ? a - b : b - a;
};
let div = (a, b) => {
  return a > b ? a / b : b / a;
};
let x = 20;
let y = 30;
module.exports = {
  sum,minus,mult,div,x,y
  // Exporting the functions
};
