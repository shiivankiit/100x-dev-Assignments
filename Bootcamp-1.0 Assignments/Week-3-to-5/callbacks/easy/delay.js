// Problem Description – delay(ms, value, callback)
//
// You are required to write a function named delay that takes a time duration
// in milliseconds, a value, and a callback function.
// The function should wait for the given time and then invoke the callback
// with `null` as the first argument and the provided value as the second argument.

function delay(ms, value, callback) {
  setTimeout(function () {
    callback(null, value);
  }, ms);
}
function callback(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
}
delay(4000, 'hello', callback);
module.exports = delay;
