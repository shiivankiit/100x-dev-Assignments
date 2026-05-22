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

//9-Some more practice question on object inversion.
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

// 10-. **Build index of ids grouped by category**
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

