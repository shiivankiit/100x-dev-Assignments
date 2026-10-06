// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.

  
 let attempt = 0;

function fn() {
  return new Promise((resolve, reject) => {
    attempt++;
    console.log(`fn call #${attempt}`);

    setTimeout(() => {
      if (attempt === 1) {
        reject(new Error("Pehli baar fail"));
      } else {
        resolve("Data mil gaya");
      }
    }, 1000);
  });
}

function retryOnce(fn) {
  return async function (...args) {
    try {
      return await fn(...args);
    } catch (err) {
      console.log("-> pehla attempt fail, retry kar raha hu...");
      return await fn(...args);
    }
  };
}

const safeFn = retryOnce(fn);   // wrapper banao

safeFn()                         // wrapper chalao
  .then(data => console.log("Result:", data))
  .catch(err => console.log("Final error:", err.message));
  module.exports = retryOnce;