const sumAll = function (min, max) {
  // Error handling for non-integer and negative parameters
  if (!Number.isInteger(min) || !Number.isInteger(max))
    return "ERROR: enter two whole numbers.";
  if (min < 0 || max < 0) return "ERROR: enter positive numbers.";

  // Sort min and max
  const start = Math.min(min, max);
  const end = Math.max(min, max);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

sumAll();
sumAll();

// Do not edit below this line
module.exports = sumAll;
