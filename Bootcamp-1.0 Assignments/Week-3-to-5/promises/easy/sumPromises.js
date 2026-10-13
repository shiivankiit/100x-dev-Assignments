// Problem Description – Sum of Two Promises

// You are given two Promises that each resolve to numeric values. 
// Your task is to return a new Promise that resolves to the sum of these two numbers. 
// Both Promises should be executed in parallel using Promise.all to avoid unnecessary waiting.

function p1(a){
    return new Promise((resolve)=>{
         resolve(a);
    })
}
function p2(b){
    return new Promise((resolve)=>{
         resolve(b);
    })
}
async function sumPromises(p1, p2) {
    const value=await Promise.all([p1,p2])
    return value[0]+value[1];
}
sumPromises(p1(10),p2(20))
.then(sum=>{console.log(sum);
})

module.exports = sumPromises;

