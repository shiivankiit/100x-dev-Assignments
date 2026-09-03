
/*1:--let foodobj={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// Output:{ food: 60, travel: 20, bills: 100 }.
let result={};
for(let key in foodobj){
    let sum=0;
    for(let arr of foodobj[key]){
       sum=sum+arr
    } 
    result[key]=sum;
}
console.log(result);*/


// 2. **Count word occurrences in array**
//     - Input:
//         ["apple", "banana", "apple", "orange", "banana", "apple"]

//     - Output:{ apple: 3, banana: 2, orange: 1 }

/*let fruits=  ["apple", "banana", "apple", "orange", "banana", "apple"];

let result={};

for(let fruit of fruits){
    result[fruit]=(result[fruit]||0)+1;
}
console.log(result);
*/

// 3. **Swap keys and values of object**
//     - Input:{ a: "x", b: "y", c: "z" }        
//     - Output:{ x: "a", y: "b", z: "c" }

/*let values={ a: "x", b: "y", c: "z" };

let result={};
for(let key in values){
   
    let value=values[key];
    result[value]=key;
}
console.log(result);
*/

// 4. **Find the largest value key**
//     - Input:{ a: 10, b: 50, c: 20 }
//     - Output:b

/*let largevalue={a:10,b:50,c:20};

let max=0;
let maxkey;
for(let key in largevalue){
 
    let maxvalue=largevalue[key];

    if(max<maxvalue){
        max=maxvalue;
        maxkey=key;
    }
}
console.log(maxkey);
*/

// 5. **Flatten object of arrays into one array**
//     - Input:
        
//         ```jsx
//         { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
        
//         ```
        
//     - Output:["apple", "banana", "carrot", "pea"]

// let obj={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

//Two ways to do it.

/*let result=[];
for(let key in obj){
    result.push(...obj[key]);
}
console.log(result);

//2nd.

let result2=Object.values(obj).flat();
console.log(result2);*/


// 6. **Group people by city**
//     - Input:
//         [
//           { name: "A", city: "Delhi" },
//           { name: "B", city: "Mumbai" },
//           { name: "C", city: "Delhi" }
//         ]       
//     - Output:
//         { Delhi: ["A", "C"], Mumbai: ["B"] }
        
/*
let group=[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

let result={};


for(let key of group){
    let name=key.name;
    let city=key.city;

    if(!result[city]){
        result[city]=[];
    }

    result[city].push(name);
}
console.log(result);
*/



// 7. **Filter object by values > 50**
//     - Input:{ a: 20, b: 60, c: 40, d: 90 }
//     - Output:{ b: 60, d: 90 }

/*let obj={ a: 20, b: 60, c: 40, d: 90 };

let result={};
for(let key in obj){
    if(obj[key]>50){
        result[key]=obj[key];
    }
}
console.log(result);
*/

// 8. Find student with highest average mark
//     - Input:
        
//         ```jsx
//         { A: [80, 90], B: [70, 75, 85] }
//         ```
        
//     - Output:A
/*
let marks={ A: [80, 90], B: [70, 75, 85] }

 let avrg=0;
 let studentkey;
for(let value in marks){
    let sum=0;
    for(let mark of marks[value]){
        sum+=mark
    }
    let studavrg=sum/marks[value].length;
    if(studavrg>avrg){
        avrg=studavrg;
        studentkey=value;
    }
}
console.log(studentkey);
*/

// 9. **Unique values across all object arrays**
    //     - Input:{ x: [1,2,3], y: [2,3,4], z: [4,5] }
    //     - Output:[1,2,3,4,5]
/*
let obj={ x: [1,2,3], y: [2,3,4], z: [4,5] }

   let result=[];
for(let key in obj){

    for(let value of obj[key]){
       
        if(!result.includes(value)){
            result.push(value)
        }
    }
}
console.log(result);

//using reduce.
let all=Object.values(obj).flat();
let result1=all.reduce((acc,curr)=>{
      if(!acc.includes(curr)){
        acc.push(curr);
      }
      return acc;
},[])
console.log(result);
*/


// 10. **Pick only given keys from object**
//     - Input:{ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
//     - Output:{ name: "Rahul", city: "Noida" }

/*
let obj = { name: "Rahul", age: 23, city: "Noida" };
let keys = ["name", "city"];

let result={};
for(let key of keys){
    console.log(key);
    console.log(obj[key]);
    
    
    result[key]=obj[key];
}
console.log(result);
*/




















