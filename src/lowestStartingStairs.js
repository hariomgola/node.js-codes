const stair= require("../test/lowestStartingStairs");

const LowerStartingStair = (jumps) => {
  let _total = jumps.length;
  jumps.forEach((element) => {
    _total += Number(element);
  });
  if (_total <= 0) {
    _total = -_total + (jumps.length + 1);
  }
  return _total;
};

console.log(LowerStartingStair(stair.stairData.jumps5))
