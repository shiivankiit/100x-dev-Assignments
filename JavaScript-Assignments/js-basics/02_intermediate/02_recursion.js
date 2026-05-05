function traverse(obj) {
    for (let key in obj) {
        let value = obj[key];
        console.log(value);

        if (typeof value === "object") {
            traverse(value);   // go deeper
        } else {
            console.log(key, value);
        }
    }
}

let obj = {
  a: { b: { c: 1 } }
};
console.log(traverse(obj));

// traverse({a:{b:{c:1}}})
//  → traverse({b:{c:1}})
//    → traverse({c:1})
//      → print c 1


// 10. **Remove deeply nested key from object**
//     - Input:{ a: { b: { c: 1, d: 2 } } }, remove "c"
//     - Output:{ a: { b: { d: 2 } } }


function traversel(obj1,deleteKey){
    for(let key in obj1){
        let value=obj1[key];
        if(key===deleteKey){
            delete obj1[key];
        } else if(typeof value === "object" && value != null){
            traversel(value,deleteKey);
        }
    }
    return obj1;
}

let obj1={ a: { b: { c: 1, d: 2 } } };
console.log(traversel(obj1,"c"));


