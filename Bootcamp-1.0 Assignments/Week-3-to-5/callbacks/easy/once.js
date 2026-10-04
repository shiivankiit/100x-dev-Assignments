// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.


const fs = require('fs');

function once(fn) {
    let called=false;

    return function(){
        if(called){
            return;
        }
        called=true;
        console.log('hello');
         fn('a.txt','utf-8',((err,data)=>{
         if(err){
        console.log(err);
         }else{
        console.log(data);
    }
}))
   
}
}
function fn(filename,encoding,callback){
    fs.readFile(filename,encoding,((err,data)=>{
        callback(err,data);
    }))
}
const onlyonce=once(fn);
onlyonce();
onlyonce();


module.exports = once;
onlyOnce();
onlyonce();

//Doubt:- How to make function prevent from multiple calling ..what if i want to call a fn
// only once.
