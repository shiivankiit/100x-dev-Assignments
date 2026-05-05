
//This file also contains 5 questions


// 6. **Group people by city**
//     - Input:
//         [
//           { name: "A", city: "Delhi" },
//           { name: "B", city: "Mumbai" },
//           { name: "C", city: "Delhi" }
//         ]
//     - Output:{ Delhi: ["A", "C"], Mumbai: ["B"] }

let arr=[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

let result={};
for(let value of arr){
     let names=value.name;
     let cities=value.city;
     
     if(!result[cities]){
        result[cities]=[];//Array is created dynamically here.
     }
     result[cities].push(names);
}
console.log(result);


// 7. **Filter object by values > 50**
//     - Input:{ a: 20, b: 60, c: 40, d: 90 }
//     - Output:{ b: 60, d: 90 }.

let obj={a:20,b:60,c:40,d:90}

let result1={};
for(let key in obj){
    if(obj[key]>50){
        result1[key]=obj[key]
    }
}
console.log(result1);

// 8. Find student with highest average mark
//     - Input:{ A: [80, 90], B: [70, 75, 85] }
//     - Output:A

let obj2={ A: [80, 90], B: [70, 75, 85] };

let avrgMarks;
let maxavrg=0;
for(let key in obj2){
    let arr=obj2[key];
    let sum=0
    for(let value of arr){
        sum+=value; }
        avrgMarks=sum/arr.length;
        console.log(avrgMarks);
        
        if(avrgMarks>maxavrg){
        maxavrg=avrgMarks;
        maxavrg=key;
    }
  
}
console.log(maxavrg);

// 9. **Unique values across all object arrays**
//     - Input: { x: [1,2,3], y: [2,3,4], z: [4,5] }
//     - Output:[1,2,3,4,5]

let obj3={ x: [1,2,3], y: [2,3,4], z: [4,5] }
let finalobj=[...new Set(Object.values(obj3).flat())];
console.log(finalobj);

// 10. **Pick only given keys from object**
//     - Input:{ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
//     - Output:{ name: "Rahul", city: "Noida" }

let obj4={ name: "Rahul", age: 23, city: "Noida" };
let arr1=["name","city"];

let result2={};

    for(let value of arr1){
     if(!result2[value]){
        result2[value]=obj4[value]
        //result2["name"]=obj4["name"].
     }
}
console.log(result2);

