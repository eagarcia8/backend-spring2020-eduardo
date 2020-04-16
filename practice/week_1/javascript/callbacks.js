// callbacks and functions

// Defining a function.
function functionName() {
    let text = "Hello there!";
    // On line 7, everything created in here is destroyed.
}

// Calling a function (multiple times)
functionName();
functionName();
functionName();

// return Keyword
function anotherFunction() {
    let number = 105;
    let text = "Some other text";
    let otherTextToSurvive = "Very important!";
    return [otherTextToSurvive, text, number];
}

let myArray = anotherFunction();

let results = ( 10 * myArray[2] ) + 100;

console.log(results);
//NaN
//undefined
//null
//0
//""
//false


// parameters and arguments

// Paremeters are only defined in the paranthesis of the FUNCTION DEFINITION.
function argumentPractice(shouldIRun) {

    if (shouldIRun === 10) {
        console.log("This function ran.");
    }

}

argumentPractice();

// Arguments are provided in the parenthesis of the FUNCTION CALL.
argumentPractice(true);

console.log("hello");

// CALLBACKS

//$(document).ready( function () {} );

// examples of methods, or functions that belong to objects.
console.log();
Math.random();

function callBackReader(parameter) {

    console.log("callBackReader has started.");

    // console.log("Our only parameter was given the value: " + parameter);

    if (typeof parameter === "function") {
        console.log("The datatype of this value is a function.");

        setTimeout(parameter, 3000);

    } else {
        console.log("The parameter is holding something else, should only be a function.");
    }

    console.log("callBackReader has ended.");
}

let mySpecialFunction = function () {
    console.log("My special function ran!");
}

// mySpecialFunction actually holds a definition of a function, and we pass that definition to callBackReader, in callBackReader we store this function definition in the parameter called parameter. We then decide what we want to do with this definition inside of callBackReader.
callBackReader(mySpecialFunction);

// typeof keyword, returns a string that describes the datatype of the item after it.

console.log(typeof "something");

// Testing arrays is a little special compared to the typeof keyword
console.log(Array.isArray(myArray));
