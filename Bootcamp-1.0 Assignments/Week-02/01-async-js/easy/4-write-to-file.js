// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs');
const path=require('path');

const filepath=path.join(__dirname,"b.txt")


//To read content of the file we use readfile.
function readcontentfile(filepath){
    fs.writeFile(filepath,"Hello js",((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File written succesfully");
    }
}))
}
readcontentfile(filepath);
