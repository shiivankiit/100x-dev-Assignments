// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let ctr=0;

function counter(){
    ctr++;
    console.log(ctr);
    setTimeout(counter,1000);
}
counter();