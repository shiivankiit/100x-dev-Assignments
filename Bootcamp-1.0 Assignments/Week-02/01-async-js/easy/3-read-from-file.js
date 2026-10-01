// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

//To read and write the file we use fs library ....libray contains lot of code which is writen by 
//someone else and we are just using it in our code.

const fs=require('fs');
const path=require('path');

const filepath=path.join(__dirname,"a.txt")


//To read content of the file we use readfile.
function readcontentfile(filepath,encoding){
    fs.readFile(filepath,encoding,((err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
}))
}
readcontentfile(filepath,'utf-8');

//expensive operation means a heavy-cpu-intensive task.
for(let i=0;i<1000000000;i++){
    console.log(i);
}