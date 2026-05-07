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


function findDuplicates(arr) {
  let seen=new Set();//creating a varibale .
  let result=[];
  for(let num of arr){
      if(seen.has(num)){//this checks if elem is already existed.
      result.push(num);
      }
      seen.add(num);//it will add the value to set if value does not exist.
     
  }
  return result;
}

let arr=[10, 20, 30, 10, 40];
console.log(findDuplicates(arr));
module.exports = findDuplicates;

