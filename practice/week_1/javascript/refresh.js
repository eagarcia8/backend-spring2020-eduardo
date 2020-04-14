// Creating variables
var myFirstVar = true;
var mySecondVariable = null;
// let and const
let myRealFirstVar = true;

// const cannot be changed once value is set, one confusion is that you can update the objects within const (which is allowed).
const MYFIRSTCONST = 10;

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