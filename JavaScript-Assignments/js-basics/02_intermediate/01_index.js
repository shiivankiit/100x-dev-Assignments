// // 1. **Sum all transactions per user**
// //     - Input:
// //         [
// //           { user: "A", amount: 100 },
// //           { user: "B", amount: 200 },
// //           { user: "A", amount: 50 }
// //         ]
// //     - Output:{ A: 150, B: 200 };

// let arr=[
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// ]
// let result={};
// for(let value of arr){
//     let users=value.user;
//     let amount=value.amount;
   

//     if(!result[users]){
//        result[users]=amount;
//     }else{
//         result[users]+=amount;
//     }
   
// }
// console.log(result);

// // 2. **Transform API response to object (id → name)**
// //     - Input:
// //         [
// //           { id: 1, name: "Alice" },
// //           { id: 2, name: "Bob" }
// //         ]        
// //     - Output:
// //         { 1: "Alice", 2: "Bob" }


// let arr1= [
//           { id: 1, name: "Alice" },
//           { id: 2, name: "Bob" }
//          ]  
//         let result1={};
//          for(let value of arr1){
//             let key=value.id;
//             let name=value.name;
            
//             result1[key]=name;
//          }
//          console.log(result1);
         
// // 3. **Remove falsy values from object**
// //     - Input: { a: 0, b: null, c: "hello", d: undefined, e: 5 }
// //     - Output:{ c: "hello", e: 5 }

// let obj={ a: 0, b: null, c: "hello", d: undefined, e: 5 };
// let result2={};
// for(let key in obj){
//     let value=obj[key];
//     if(value){
//         result2[key]=value
//     }
// }
// console.log(result2);

// 4. Check for permissions from roles
//     - Input:
//         roles={ admin:["read","write"], user:["read"], staff: ["write"]}
//         checkRole="user",
//         action="write"
//     - Output:false;

// let roles={ admin:["read","write"], user:["read"], staff: ["write"]};
// let checkRole="user";
// let action="write";

// for(let key in roles){
//     if('checkRole'=="user" || 'action'=="read"){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }



// 5. **Transform array of orders into revenue per category**
//     - Input:[
//           { id: 1, category: "electronics", price: 100 },
//           { id: 2, category: "clothes", price: 50 },
//           { id: 3, category: "electronics", price: 200 }
//         ]
//     - Output:{ electronics: 300, clothes: 50 }

// let arr2=[
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ]

// let result3={};
// for(let value of arr2){
//     let category=value.category;
//     let price=value.price;
//     if(!result3[category]){
//         result3[category]=price
//     }else{
//         result3[category]+=price
//     }
// }
// console.log(result3);


// 6. **Remove duplicate objects by id**
//     - Input:
//         [
//           { id: 1, name: "A" },
//           { id: 2, name: "B" },
//           { id: 1, name: "A" }
//         ]
//     - Output:[
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]

// let arr3=[
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ]

// let seen=new Set();
// let final=arr3.filter(
//     obj=>{
//         if(seen.has(obj.id)) return false;
//         seen.add(obj.id); return true;
//     }
// )
// console.log(final);

// 7. **Chunk object entries into groups of size**
//     - Input:
//         { a: 1, b: 2, c: 3, d: 4 }, size=2
//     -Output:[ [["a",1],["b",2]], [["c",3],["d",4]] ]

// let object= { a: 1, b: 2, c: 3, d: 4 };
// let arr4=Object.entries(object);//cnvrts the object into array.
// //We need to create a new array and push element inside into them.
// let result4=[];
// let size=2;
// for(let i=0;i<arr4.length;i+=size){
//       let Chunk=arr4.slice(i,i+size)
//       result4.push(Chunk);
// }
// let flat1=result4.flat();
// console.log(flat1);

// 1. **Find longest string among object values**
//     - Input:{ a: "apple", b: "banana", c: "kiwi" }
//     - Output:banana

// let str={ a: "apple", b: "banana", c: "kiwi" };
// let longest="";
// for(let key in str){
//     if(str[key].length>longest.length){
//         longest=str[key];
//     }
// }
// console.log(longest);


// 8. Convert the object where **languages** are the top-level keys, and inside each are **translation strings by key into** an object where **translation keys** are the top-level keys, and inside each you store values per language [HARD**]
//     - Input:
//         {
//           en: { hello: "Hello", bye: "Goodbye" },
//           fr: { hello: "Bonjour", bye: "Au revoir" },
//           es: { hello: "Hola" }
//         }
//     - Output:{
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }

// let obj={
//   en: { hello: "Hello", bye: "Goodbye" },
//   fr: { hello: "Bonjour", bye: "Au revoir" },
//   es: { hello: "Hola" }
// }
// let result={};
// for(let lang in obj){
//    let inner=obj[lang]
//    for(let word in inner){
//     if(!result[word]){
//         result[word]={};
//     }
//     result[word][lang]=inner[word];
//    }
// }
// console.log(result);

//----------------------------------------------------------------------------------------

//Some more practice question on object inversion.
// {
//   admin: ["user1", "user3"],
//   user: ["user2"]
// }
// let obj1 = {
//   user1: { role: "admin" },
//   user2: { role: "user" },
//   user3: { role: "admin" }
// };
// let result5={};
// for(let user in obj1){
//     let role=obj1[user];
//    for(let key in role){
//      let value=role[key];
//      if(!result5[value]){
//         result5[value]=[];
//      }
//      result5[value].push(user);//add user
//    }
// }
// console.log(result5);


//---------------------------------------------------------------------------------------------

// 9. **Build index of ids grouped by category**
//     - Input:
//         [
//           { id: 1, category: "fruit" },
//           { id: 2, category: "veggie" },
//           { id: 3, category: "fruit" }
//         ]
//     - Output:{ fruit: [1,3], veggie: [2] }

let arr5= [
          { id: 1, category: "fruit" },
          { id: 2, category: "veggie" },
          { id: 3, category: "fruit" }
        ]
let result={};
for(let value of arr5){
    let id=value.id;
    let category=value.category;

    if(!result[category]){
        result[category]=[];
    } 
    result[category].push(id);
    
}
console.log(result);

