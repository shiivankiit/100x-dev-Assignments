// 1. **Sum all transactions per user**
//     - Input:
//         [
//           { user: "A", amount: 100 },
//           { user: "B", amount: 200 },
//           { user: "A", amount: 50 }
//         ]
//     - Output:{ A: 150, B: 200 }

/*
let obj=[
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
  {user:"B", amount:50}
]

let result={};
let sum=0;
for(let value of obj){
    let user=value.user;
    let amount=value.amount;
     sum=sum+amount;
     
    if(!result[user]){
        result[user]=0;
    }
    result[user]=result[user]+amount;
    
}
console.log(result);
*/

// 2. **Transform API response to object (id → name)**
//     - Input:
//         [
//           { id: 1, name: "Alice" },
//           { id: 2, name: "Bob" }
//         ]
//     - Output:{ 1: "Alice", 2: "Bob" };

/*
let arr=[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

let result={}
for(let value of arr){
    let id=value.id;
    let name=value.name;
    
    if(!result[id]){
        result[id]=name;
    }
}
console.log(result);
*/


// 3. **Remove falsy values from object**
//     - Input:{ a: 0, b: null, c: "hello", d: undefined, e: 5 }
//     - Output:{ c: "hello", e: 5 }

/*
let input={ a: 0, b: null, c: "hello", d: undefined, e: 5 }

let result={}

for(let key in input){
    if(input[key]){
        result[key]=input[key];
    }
}
console.log(result);
*/


// 4. Check for permissions from roles
//     - Input:roles={ admin:["read","write"], user:["read"], staff: ["write"]}
//             checkRole="user",
//             action="write"
//     - Output:false.

/*
let roles = {
    admin: ["read", "write"],
    user: ["read"],
    staff: ["write"]
};

let checkRole = "user";
let action = "write";

console.log(roles[checkRole].includes(action));
*/


// 5. **Transform array of orders into revenue per category**
//     - Input:
//         [
//           { id: 1, category: "electronics", price: 100 },
//           { id: 2, category: "clothes", price: 50 },
//           { id: 3, category: "electronics", price: 200 }
//         ]      
//     - Output:{ electronics: 300, clothes: 50 }

/*
let obj=[
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

let result={};
for(let value of obj){
    let category = value.category;
    let price=value.price;

    if(!result[category]){
        result[category]=0;
    }
    result[category]=result[category]+price;
}
console.log(result);
*/

// 6. **Remove duplicate objects by id**
//     - Input:[
//           { id: 1, name: "A" },
//           { id: 2, name: "B" },
//           { id: 1, name: "A" }
//         ]
//     - Output:[
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]

/*
let arr=[
          { id: 1, name: "A" },
          { id: 2, name: "B" },
          { id: 1, name: "A" },
          { id: 2, name: "B" },
        ]

let result={};
for(let value of arr){

    let id=value.id;

    if(!result[id]){
        result[id]=value;
    }    
}
console.log(Object.values(result));
*/

// 7. **Chunk object entries into groups of size**
//     - Input:{ a: 1, b: 2, c: 3, d: 4 }, size=2
//     - Output:[ [["a",1],["b",2]], [["c",3],["d",4]] ]

/*
let obj={ a: 1, b: 2, c: 3, d: 4 }
let size=2;

let entries=Object.entries(obj);
let result=[];
for(let i=0;i<entries.length;i+=size){
   result.push(entries.slice(i,i+size));
}
console.log(result);
*/

// 1. **Find longest string among object values**
//     - Input:
//         { a: "apple", b: "banana", c: "kiwi" }
//     - Output:banana
/*

let obj={ a: "apple", b: "banana", c: "kiwi" };

let size=0;
let longstr='';
for(let value in obj){
    let str=obj[value];
    let length=str.length;
    if(size<length){
        size=length;
    }
    if(str.length>longstr.length){
        longstr=str;
    }

}
console.log(size);
console.log(longstr);
*/


// - Input:
//     {
//       en: { hello: "Hello", bye: "Goodbye" },
//       fr: { hello: "Bonjour", bye: "Au revoir" },
//       es: { hello: "Hola" }
//     }
// - Output:{
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }

/*
let input={
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}
*/


// 9. **Build index of ids grouped by category**
//     - Input:
//         [
//           { id: 1, category: "fruit" },
//           { id: 2, category: "veggie" },
//           { id: 3, category: "fruit" }
//         ]
//     - Output:{ fruit: [1,3], veggie: [2] }

/*

let input=[
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]

let result={};

for(let value of input){
    let id=value.id;
    let category=value.category;

    if(!result[category]){
        //Now you need to put vlaue inside this array.
        result[category]=[];
    }
    result[category].push(id);
}
console.log(result);
*/

// 10. **Remove deeply nested key from object**
//     - Input:
//         { a: { b: { c: 1, d: 2 } } }, remove "c"
//     - Output:{ a: { b: { d: 2 } } }

/*
let obj={ a: { b: { c: 1, d: 2 } } };

for(let key in obj){
    let value=obj[key];
    for(let obj in value){
        console.log(obj);
        console.log(value[obj]);
        
        
    }
}
*/

// 11. **Check if two objects are deeply equal**
//     - Input:
//         { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }
//     - Output:true;

let obj1={ a: { x: 1, y: 2 } };
let obj2={ a: { x: 1, y: 2 } };

for(let key in obj1){
    for(let value in obj2){
        console.log(key);
        console.log(value);
        
        
       if(key == value && obj1[key] == obj2[value]){
        console.log(true);
       }else{
        console.log(false);
       }
    }
}