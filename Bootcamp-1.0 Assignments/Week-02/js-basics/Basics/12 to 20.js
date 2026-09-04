
// 12. **Sort object entries by values (ascending)**
//     - Input:{ a: 3, b: 1, c: 2 }
//     - Output:[["b",1], ["c",2], ["a",3]]
/*
let obj={a:3,b:1,c:2}

let value=Object.entries(obj);
let all=value.sort((a,b)=>a[1]-b[1]);
console.log(all);
*/



// 13. **Count number of keys in object**
//     - Input:{ a: 1, b: 2, c: 3 }
//     - Output:3

/*
let obj={a:1,b:2,c:3}
let count=0;
for(let key in obj){
   count++;
}
console.log(count);
*/

// 14. **Capitalize string values inside object**
//     - Input:{ name: "alice", city: "delhi" }
//     - Output:{ name: "Alice", city: "Delhi" }
/*
let obj={name:"alice",city:"delhi"}

let result={};
for(let key in obj){
    if(typeof obj[key] === 'string'){
        obj[key]=obj[key][0].toUpperCase()+obj[key].slice(1);
    }
}
console.log(obj);
*/

// 15. **Convert object to query string**
//     - Input:{ name: "Alice", age: 25 }
//     - Output:"name=Alice&age=25".
/*
let obj={name:'Alice',age:25}

let querystring= new URLSearchParams(obj).toString();
console.log(querystring);
*/


// 16. **Count even and odd numbers in array**
//     - Input:[1,2,3,4,5,6]
//     - Output:{ even: 3, odd: 3 }
/*
let obj=[1,2,3,4,5,6];

let result={};
let even=0;
let odd=0;
for(let elem of obj){
    if(elem%2==0){
        even++;
    }else{
        odd++;
    }
    result.even=even;
    result.odd=odd;
}
console.log(result);
*/

// 17. **Find common keys between two objects**
//     - Input:{ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }       
//     - Output:["b","c"]
/*
let obj1={a:1,b:2,c:3};
let obj2={b:4,c:5,d:6};

let result=[];

for(let key in obj1){
    for(let value in obj2){
        if(key===value){
            result.push(key);
        }
    }
}
console.log(result);
*/


// 18. **Convert array of objects to lookup by id**
//     - Input:[{ id: 1, name: "A" }, { id: 2, name: "B" }]
//     - Output:{ 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
/*
let obj=[{ id: 1, name: "A" }, { id: 2, name: "B" }]

let result={};
for(let key of obj){
    result[key.id]=key;
}
console.log(result);
*/

// 19. **Check if all values in object are numbers**
//     - Input:
//         { a: 1, b: "hello", c: 3 }
//     - Output:false
/*
let input={a:1,b:'hello',c:3};
let result=true;
for(let key in input){
    if(typeof input[key] !== 'number'){
         result = false;
         break;
    }
}
console.log(result);
*/