// const repeatString = function (string, num) {
//   let result = "";
//   if (num < 0) {
//     return `Please enter a valid number!`;
//   } else {
//     for (i = 0; i < num; i++) {
//       string += num;
//     }
//     return result;
//   }
// };

// console.log(repeatString("hey", 3));

const repeatString = function (str, num) {
  let result = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

console.log(repeatString("hey", 3)); // Output: hellohellohello
console.log(repeatString("hello", 10));
console.log(repeatString("hi", 1));
console.log(repeatString("bye", 0));
console.log(repeatString("goodbye", -1));

// Do not edit below this line
module.exports = repeatString;
