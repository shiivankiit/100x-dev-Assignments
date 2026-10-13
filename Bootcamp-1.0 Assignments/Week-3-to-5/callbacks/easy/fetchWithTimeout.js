// Problem Description – fetchWithTimeout(url, ms, callback)
// Step-1
// You are required to write a function named fetchWithTimeout that accepts a URL,
// a time limit in milliseconds, and a callback function.
// The function attempts to fetch data from the given URL.
// Step-2
// If the request completes within the specified time, the callback is invoked with
// null as the first argument and the fetched data as the second argument.
// Step-3
// If the operation exceeds the time limit, the callback is invoked with an Error
// whose message is "Request Timed Out".

//Doubt:-How will you track time of any operation .... How much time the operation is taking and
// and to check if the operation execed the time limit.


function fetchWithTimeout(url,ms,callback){

    let Promise1=fetch(url)
    .then(response=>{
        if(!response.ok) throw new Error("Network was not ok");
        return response.json();
    })
    let Promise2=new Promise((reject)=>{
        setTimeout(()=>{
            reject(new Error('Request timed out'));
        },ms)
    })

    Promise.race([Promise1,Promise2])
     .then(data=>callback(null,data))
     .catch(err=>callback(err));
}

function callback(err,data){
    if(err){
        console.log("Error",err);
    }else{
        console.log(data);
    }
}
fetchWithTimeout('https://randomuser.me/api/',4000,callback)
module.exports = fetchWithTimeout;
