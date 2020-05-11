// Deep Copy, literally a copy of something
let variable1 = 100;

let variable2 = variable1;

variable1 = 500;

let variable3 = variable2 + 10;


console.log(variable1);
console.log(variable3);


// Shallow Copy, really means a new "reference" to "old" data.
let myObject = {
    info1: "something",
    info2: 1000
};

let myObject2 = myObject;

let myObject3 = myObject2;

myObject3.info2 = 2000;

console.log(myObject.info2);


if (myObject === myObject3) {
    console.log("tru!");
}

if ({} == {}) {
    console.log("true!!!");
}


let myObjectExactData = {
    info1: "something",
    info2: 1000
};

if (myObject == myObjectExactData) {
    console.log("These objects are the exact same thing!!!!");
}