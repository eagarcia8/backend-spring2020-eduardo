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

