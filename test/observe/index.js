const observe = require('../../lib/Vue/observeObject')

const arr = [1,2,{l:12},4];
const obj = {q:1,w:2,u:{e:12}};

observe(arr, (type,value) => {
    console.log(`set handle from ${type}, value is ${value}`);
})

observe(obj, (type,value) => {
    console.log(`set handle from ${type}, value is ${value}`);
},false)

obj.u = 14;

// arr.pop();
// arr.push("12")
// arr.shift();
// arr.unshift("24");
// arr.sort();
