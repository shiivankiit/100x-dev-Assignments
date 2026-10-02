// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs= require("fs");
const path=require("path");

const filepath=path.join(__dirname,'a1.txt');

function ReadandWrite(filepath,encoding){
    fs.readFile(filepath,encoding,(err,data)=>{
        if(err){
            console.log(err);
        }else{
           const data1 = data.replace(/\s+/g, " ").trim();
            fs.writeFile(filepath,data1,(err)=>{
                if(err){
                    console.log(err);
                    return;
                }else{
                    console.log('Data trimmed succesfully');
                }
            })
        }
    })
}
ReadandWrite(filepath,'utf-8');