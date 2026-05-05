                   //This file contain 5 questions of object and array.

// Sum values in object arrays.
// Output:-{ food: 60, travel: 20, bills: 100 }


let obj={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

let result={};
for(let key in obj){
    let arr=obj[key];
    let sum=0;
    for(let value of arr){
        sum=sum+value;
    }
    result[key]=sum;
}
console.log(result);

//-----------------------------------------------------------------------

// 2. **Count word occurrences in array**
//     - Input:["apple", "banana", "apple", "orange", "banana", "apple"]
//     -- Output: { apple: 3, banana: 2, orange: 1 }

let arr=["apple", "banana", "apple", "orange", "banana", "apple"]

let result2={};
for(let value of arr){
    if(result2[value]){
        result2[value]++;
    }
    else{
        result2[value]=1;
    }
}
console.log(result2);

//----------------------------------------------------------------------

//3. 3. **Swap keys and values of object**
    // - Input:{ a: "x", b: "y", c: "z" }
    // - Output:{ x: "a", y: "b", z: "c" }

function swapkeys(obj2){
    let result3={};
    for(let key in obj2){
        let value=obj2[key];
        result3[value]=key;
    }
    return result3;
}
let obj2={a:"x",b:"y",c:"z"}
console.log(swapkeys(obj2));

//4.4. **Find the largest value key**
    // - Input: { a: 10, b: 50, c: 20 }
    // - Output:b;

function largestkey(obj3){
    let maxValue=-Infinity;
    let maxKey;
    for(let key in obj3){
        if(obj3[key]>maxValue){
            maxValue=obj3[key];
            maxKey=key
        }
    }
    return maxKey;
}
let obj3={a:10,b:50,c:20};
console.log(largestkey(obj3));

// 5. **Flatten object of arrays into one array**
//     - Input:{ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
//     - Output:["apple", "banana", "carrot", "pea"]

//We can flat it using inbuilt function.
let obj4={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
let value=Object.values(obj4).flat();
console.log(value);

