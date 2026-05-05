// 17. **Find common keys between two objects**
//     - Input:{ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 } 
//     - Output:["b","c"]

let obj1={ a: 1, b: 2, c: 3 };
let obj2={ b: 4, c: 5, d: 6 } ;

let commonkeys=Object.keys(obj1).filter(key=>key in obj2);
console.log(commonkeys);

// 18. **Convert array of objects to lookup by id**
//     - Input:[{ id: 1, name: "A" }, { id: 2, name: "B" }]
//     - Output:{ 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }

let arr=[{ id: 1, name: "A" }, { id: 2, name: "B" }];

let result={};
for(let value of arr){
    let key=value.id;
    result[key]=value;
}
console.log(result);

//we can also do the same question using reduce.
const result2=arr.reduce((acc,curr)=>{
    acc[curr.id]=curr;
    return acc;
},{});
console.log(result2);

// 19. **Check if all values in object are numbers**
//     - Input:{ a: 1, b: "hello", c: 3 }
//     - Output:false

let obj={a:1,b:"hello",c:3}


let allno=true;
for(let key in obj){
    if(typeof obj[key]!== "number"){
        allno=false;
        break;
    }
}
console.log(allno);

