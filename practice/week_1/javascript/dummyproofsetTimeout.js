// first argument is what to run, second value is how long to wait for in milliseconds.

function dpSetTimeout(instructions, timeoutLength, count = 1, pause = 0) {

    if (typeof instructions === "function" && typeof timeoutLength === "number") {

        for (let i = 0; i < count; i++) {

            let pauseLength = pause * i;

            setTimeout(instructions, timeoutLength + pauseLength);

        }

        return 0;
    } else {
        return 1;
    }

}



function mySpecialFunction() {
    console.log("running something here");
}

//HW: allow the dpSetTimeout to handle negative numbers.
dpSetTimeout(mySpecialFunction, -2000, -6, -1000);


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