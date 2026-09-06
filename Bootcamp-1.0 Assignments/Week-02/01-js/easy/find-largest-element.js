/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
        
  let max=arr[0];
  for(let i=1;i<arr.length;i++){
      if(arr[i]>max){
          max=arr[i]
  }
}
 return max;
 
}

console.log(findLargestElement([10,20,30,40,50,20,10]));

// You can also use max=-Infinity.

module.exports = findLargestElement;