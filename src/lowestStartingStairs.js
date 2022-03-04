const readingInputs = require("./readingInputs");

const LowerStartingStair = (jumps) => {
  let _total = jumps.length;
  jumps.forEach((element) => {
    _total += element;
  });
  if (_total <= 0) {
    _total = -_total + (jumps.length + 1);
  }
  return _total;
};

let jumps1 = [1, -4, -2, 3]; //6
let jumps2 = [-5, 4, -2, 3, 1, -1, -6, -1, 0, 5]; //8
let jumps3 = [-5, 4, -2, 3, 1]; //6
let jumps4 = [-5, 4, -2, 3, 1, -1, -6, -1, 0, -5]; //13
