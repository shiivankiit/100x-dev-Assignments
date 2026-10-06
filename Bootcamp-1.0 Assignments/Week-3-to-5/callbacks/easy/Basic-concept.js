function greet(name){
    console.log("Hello",name);
}
//as a variable
const a=greet;
a('ankit');
//calling a function inside an array by using an index.
const list=[greet];
list[0]('Ankit');
//using callback-based approach
function run(fn){
    fn("Ankit");
}
run(greet);
//
setTimeout(greet,5000);

