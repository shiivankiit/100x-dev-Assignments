//--------------------------------------This file contains 5 questions of object and array----------

// 12. **Sort object entries by values (ascending)**
//     - Input:{ a: 3, b: 1, c: 2 }
//     - Output:[["b",1], ["c",2], ["a",3]]

let obj={a:3,b:1,c:2};
let array=Object.entries(obj);
let finalarray=array.sort((a,b)=>a[1]-b[1]);
console.log(finalarray);

// 13. **Count number of keys in object**
//     - Input:{ a: 1, b: 2, c: 3 }
//     - Output:3

let obj1={a:1,b:2,c:3}
let Count=0
for(let key in obj){
    if(key){
        Count++;
    }
}
console.log(Count);;

// 14. **Capitalize string values inside object**
//     - Input:{ name: "alice", city: "delhi" }
//     - Output:{ name: "Alice", city: "Delhi" }

let input={name:"alice",city:"delhi"}
let result={};
for(let key in input){
    let value=input[key];
    let capitalized=value.charAt(0).toUpperCase()+value.slice(1);
    result[key]=capitalized;
}
console.log(result);


// 15. **Convert object to query string**
//     - Input:{ name: "Alice", age: 25 }
//     - Output:"name=Alice&age=25"

let input1={name:"Alice",age:25}
let queryString=new URLSearchParams(input1).toString();
console.log(queryString);

// 16. **Count even and odd numbers in array**
//     - Input:[1,2,3,4,5,6]    
//     - Output:{ even: 3, odd: 3 }

let arr=[1,2,3,4,5,6]
let results={}  
 let even=0;
let odd=0;
for(let value of arr){
    if(value%2==0){
        even++;
    } else{
        odd++;
    }
    results.even= even;
    results.odd=odd;
}
console.log(results);

