// Problem Description – delay(ms, value, callback)
//
// You are required to write a function named delay that takes a time duration
// in milliseconds, a value, and a callback function.
// The function should wait for the given time and then invoke the callback
// with `null` as the first argument and the provided value as the second argument.

//Revisiting the assignment again.

function delay(ms,value,callback){
  setTimeout(()=>{
    callback(null,value);
  },ms);
}
//This is a callback function.
function callback(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
}
delay(4000,'Hello',callback);
module.exports = delay;
