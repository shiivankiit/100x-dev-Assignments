// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.


// Ek function fn hai jo Promise return kar raha hai. callbackify(fn) ko ek naya function return karna hai. 
// Us naye function ka last argument callback hoga. Woh fn ko call karega, aur jab Promise resolve/reject hoga
// , tab callback ko result/error ke saath call karega.

const fs=require('fs');

function callbackify(fn){
    return function(...args){
        let callback=args.pop();
        fn(...args)
        .then((data)=>{
            callback(null,data)
        })
        .catch((err)=>{
            callback(null,err)
        })
    }
}

function fn(filename,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,encoding,((err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        }))
    })
}

const readfiledata=callbackify(fn);

readfiledata("a.txt",'utf-8',(err,data)=>{
    if(err){
        console.log("Error while reading the file");
    }else{
        console.log("File reading done",data);
    }
})

module.exports = callbackify;
