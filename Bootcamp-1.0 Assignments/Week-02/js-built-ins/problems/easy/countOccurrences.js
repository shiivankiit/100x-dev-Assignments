/*
  Write a function `countOccurrences` which takes an array as input and returns an object representing the frequency of each element in the array.

  What is frequency?
  - The frequency of an element is the number of times it appears in the array.

  Example:
  - Input: [10, 20, 10, 30, 20, 20]
  - Output: { 10: 2, 20: 3, 30: 1 }

  - Input: [1, 2, 3, 1, 2, 1]
  - Output: { 1: 3, 2: 2, 3: 1 }

  - Input: []
  - Output: {}

  Once you've implemented the logic, test your code by running
  - `npm run test-occurrences`
*/

// let arr=[10,20,30,40,10,30,10]

// let obj={};

// for(let elem of arr){
//    obj[elem]=(obj[elem]||0)+1;
// }
// console.log(obj);

const readline=require('readline');
const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})

rl.question("Enter array",(input)=>{

  // When the user enters: [10,20,30,40,10,30,10] (as a text string)
  // JSON.parse() converts it into an actual JavaScript array that you can iterate over:


  let arr=JSON.parse(input);

  let obj={};

for(let elem of arr){
   obj[elem]=(obj[elem]||0)+1;
}
console.log(obj);
  rl.close();

})


// function countOccurrences(arr) {
//   let obj={};
//     for(let elem of arr){
//       obj[elem]=(obj[elem]||0)+1;
//     }

// }




