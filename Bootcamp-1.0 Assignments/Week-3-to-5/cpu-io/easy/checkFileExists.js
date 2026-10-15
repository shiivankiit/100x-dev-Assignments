// Problem Description – Check File Exists
//
// Your task is to implement an asynchronous function `checkFileExists(path)`
// that returns `true` if a file exists and `false` otherwise.
//
// Requirements:
// 1. Use the `fs.promises` API.
// 2. Do NOT use `fs.existsSync` (which is synchronous).
// 3. Hint: Use `fs.promises.access()` and handle the error if it doesn't exist.

const path = require("path");

const fs = require("fs").promises;

const path1=path.join(__dirname,'a.txt');

async function checkFileExists(path1) {
    try{
        await fs.access(path1);
        return true;
    }
    catch(error){
        return false;
    }
}
checkFileExists(path1)
.then(result=>{console.log(result);
})

module.exports = checkFileExists;
