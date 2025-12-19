const sumAll = function (min, max) {
  // Error handling for non-integer and negative parameters
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";

  // Sort min and max
  const start = Math.min(min, max);
  const end = Math.max(min, max);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(2, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(2.5, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
