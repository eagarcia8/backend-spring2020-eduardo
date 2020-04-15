// Creating variables
var myFirstVar = true;
var mySecondVariable = null;
// let and const
let myRealFirstVar = true;

// const cannot be changed once value is set, one confusion is that you can update the objects within const (which is allowed).You need to initialize all const variables.

//const MYFIRSTCONST;

const MYCONSTOBJECT = {};
MYCONSTOBJECT.firstArgument = "something";

console.log("Before loops");


// if statement
if (myFirstVar) {}

// loop statement

while (false) {

}

for (var counter = 0; counter < 10; counter = counter + 1) {

}

// This loop will always run the code block first, and then test the condition to see if it should continue.
do {} while (false);

console.log("after loops");

// object
var myObject = {
    "my": "my value for the key",
    "my second key": null
};

// function
// arguments are the values that go into the parameters.
// parameters are the variables that only exist for that exist for that specific function INSTANCE.
function myFunction(myVar, myVar2, myVar3) {

    console.log(myVar);

    console.log(myVar2, myVar3);
}

// console.log(myVar);


// camparitors, comparison symbols
// == vs =
// = is for assignment
// == compares both sides and create a boolean. If the same value, it becomes true, if is not the same value it becomes false.

// 19 == 30

// === compares both sides for value AND data type. if either of these are not the same, it is false.

100 == "100";
console.log(10 == "10");

100 === "100";
console.log(10 === "10");

// < and >, if one value is larger than the other side, then it becomes true.

// <= >=, same as above but allows to be equal.
// <== >==, same as above but must be the same datatype. (not available in JS)

// != Should NOT be the same on both sides TO BE TRUE.
// !== same as above but must be the same datatype.

"t" < 10;
20 < 10;
74 < 10;

"hello" 
 "hello";
"t" != 10;
"t" != 74;

true != false;

// Careful with the following. Both are true, and datatype comparison is situational.
console.log("t" !== 10);
console.log(74 !== 10);

// Mathematical Operators
// +
// -
// *
// /
// %

// 1 + 1, 1 - 1, 1 * 1, 1 / 1, 1 % 1;

// --
// ++
100--; // 99
100 - 1;

100++; // 101
100 + 1;


// +=
// -=
// *=
// /=
var something = 10;

something += 10;
something = something + 10;

// Logical Operators.

// || && !

// ||
true || false;

// &&
true && true; // true
true && false; // false
!true // false
!false // true
!!false;

true && false && true; // false
true || false || true; // true
