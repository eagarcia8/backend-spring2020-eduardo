// first argument is what to run, second value is how long to wait for in milliseconds.

function dpSetTimeout(instructions, timeoutLength, count = 1) {

    if (typeof instructions === "function" && typeof timeoutLength === "number") {

        for (let i = 0; i < count; i++) {
            setTimeout(instructions, timeoutLength);

        }

        return 0;
    } else {
        return 1;
    }

}



function mySpecialFunction() {
    console.log("running something here");
}

dpSetTimeout(mySpecialFunction, 2000, 3);


// dpSetTimeout(function () {
//     console.log("this is the anonymous version.");
// }, 3000);


// let savedFunction = dpSetTimeout(function () {console.log("display data")}, "hello");

// if (savedFunction === 0) {
//     console.log("dpSetTimeout ran successfully");
// } else {
//     console.log("something went wrong");
// }





console.log("The script has finished!");