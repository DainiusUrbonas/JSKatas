/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

//My solution
const binaryArrayToNumber = arr => {
  // your code
  var strToConvert = ''
  for(let e of arr){
    strToConvert += e
  }
  return parseInt(parseInt(strToConvert, 2), 10)
};

//Best practices
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);