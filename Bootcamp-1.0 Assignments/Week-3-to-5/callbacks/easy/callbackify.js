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
const fs = require("fs");

function fn(filename) {

    return new Promise((resolve, reject) => {

        fs.readFile(filename, "utf8", (error, data) => {

            if (error) {
                reject(error);
                return;
            }

            resolve(data);
        });

    });
}
function callbackify(fn) {

    return function (...args) {

        const callback = args.pop();

        fn(...args)
            .then((result) => {
                callback(null, result);
            })
            .catch((error) => {
                callback(error, null);
            });

    };
}


const readFileWithCallback = callbackify(fn);


readFileWithCallback("a.txt", (error, data) => {

    if (error) {
        console.log("Error:", error);
        return;
    }

    console.log("File content:", data);
});

module.exports = callbackify;
