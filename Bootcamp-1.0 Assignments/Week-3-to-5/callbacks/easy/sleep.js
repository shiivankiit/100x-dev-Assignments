// Problem Description – sleep(ms, callback)
//
// You are required to write a function named sleep that accepts a time duration
// in milliseconds and a callback function.
// The function should wait for the specified time and then invoke the callback.

function sleep(millis, callback) {
    setTimeout(()=>{
        callback(null,'Sleep done');
    },millis);
}

function callback(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}

sleep(4000,callback);

module.exports = sleep;

