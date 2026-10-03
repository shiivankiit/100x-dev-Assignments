// Problem Description – fetchWithTimeout(url, ms, callback)
//
// You are required to write a function named fetchWithTimeout that accepts a URL,
// a time limit in milliseconds, and a callback function.
// The function attempts to fetch data from the given URL.
// If the request completes within the specified time, the callback is invoked with
// null as the first argument and the fetched data as the second argument.
// If the operation exceeds the time limit, the callback is invoked with an Error
// whose message is "Request Timed Out".

function fetchWithTimeout(url, ms, callback) {
    const fetchPromise = fetch(url)
        .then(response => response.json());

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timed Out"));
        }, ms);
    });

    Promise.race([fetchPromise, timeoutPromise])
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error);
        });
}
function callback(err, data) {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log("Data:", data);
    }
}

fetchWithTimeout(
    "https://jsonplaceholder.typicode.com/users",
    4000,
    callback
);
module.exports = fetchWithTimeout;
