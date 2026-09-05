/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/

let str="Sumana";
let arr=str.split("");

     let left=0;
     let right=str.length-1;
     
     while(left<right){
       let mid= arr[left];
       arr[left]=arr[right];
       arr[right]=mid;

      left++;
      right--;
     }
     console.log(arr.join());

// function reverseString(str) {
//   // Your code here
// }

