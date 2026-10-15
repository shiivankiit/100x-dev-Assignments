// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.


 function fn(){
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      resolve("Data recieved");
     },3000);
  })
 }

 function retryOnce(fn){
    return function(){
      async function main(){
        try{
          const result=await fn();
          return result;
        }catch(err){
          const result=await fn();
          return result;
        }
      }
      return main();
    }
 }

 const fncall=retryOnce(fn);
fncall()
.then((result) => {
   console.log(result);
   
}).catch((err) => {
  console.log(err);
});


module.exports = retryOnce;