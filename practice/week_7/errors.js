var someVariable = 10;

// The try block attempts to run the code provided, if it gets an error, it will pass that error object to the catch block. If there is no error then it will skip the catch block.
try {
    console.log(nonExistingVariable);
    //throw "Something bad";

// The error will be stored inside of the "error" variable defined inside the parenthesis.
} catch (error) {
    console.log("We tried to access this variable, but we couldn't so we do this instead");
    console.log(error);
// The finally block will always run whether we have an error or not. If we have an error, we will run this code BEFORE the error terminates our script.
} finally {
    console.log("The attempt to read a variable is done!");
}


// We can throw custom errors in our code for specific purposes.
throw new Error();