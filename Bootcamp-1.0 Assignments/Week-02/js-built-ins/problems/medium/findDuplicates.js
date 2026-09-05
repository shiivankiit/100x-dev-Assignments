/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/
function findDuplicates(arr){
  let count={};
  let duplicate=[];

for(let value of arr){
    count[value]=(count[value]||0)+1;
    if(count[value]===2){
      duplicate.push(value);
    }
}
return duplicate;
}
let arr=[10,20,30,40,10]
findDuplicates(arr);

module.exports = findDuplicates;

