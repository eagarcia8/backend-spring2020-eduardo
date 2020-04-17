// setTimeout: first argument is what to run, second value is how long to wait for in milliseconds.

function dpSetTimeout(instructions, timeoutLength, count = 1, pause = 0) {

    // seperated out from line 20 so we don't crowd the if conditional statement. Generally would be added into that if statement.
    if (typeof timeoutLength === "number" && typeof count === "number" && typeof pause === "number") {

    } else {
        return 1;
    }
    
    if (timeoutLength < 0) {
        timeoutLength = 0;
    }
    
    if (pause < 0) {
        pause = 0;
    }

    // Tests to make sure that what we have in our parameters can be used in the true code block.
    if (typeof instructions === "function" && typeof timeoutLength === "number") {

        for (let i = 0; i < count; i++) {

            let pauseLength = pause * i;

            setTimeout(instructions, timeoutLength + pauseLength);

        }
        //return a 0 if all is good.
        return 0;
    } else {
        //return a 1 if something happened, generally "failed."
        return 1;
    }

}


// An example definition of a function that we pass to dpSetTimeout to run.
function mySpecialFunction() {
    console.log("running something here");
}

//HW: allow the dpSetTimeout to handle negative numbers.
dpSetTimeout(mySpecialFunction, 2000, 6, 1000);


// dpSetTimeout(function () {
//     console.log("this is the anonymous version.");
// }, 3000);


// let savedFunction = dpSetTimeout(function () {console.log("display data")}, "hello");

// if (savedFunction === 0) {
//     console.log("dpSetTimeout ran successfully");
// } else {
//     console.log("something went wrong");
// }




// Tells us when the program "ended".
console.log("The script has finished!");