/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/

function nonrepeat(str) {
  let count={};

  for(let value of str){
    count[value]=(count[value]||0)+1;

    if(count[value]===1){
      return value;
    }
  }
  return null;
}
module.exports = nonrepeat;
