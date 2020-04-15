
// function has only one parameter with the name of option.
function myFunction(option, option2) {

    let product = option * option2;

    console.log(product);

    console.log("The value of the option parameter is " + option);

    if (option === 0) {
        console.log("Everything is good!");
    } else if (option === 1) {
        console.log("An error happened!");
    } else if (option === -1) {
        console.log("Everything is bad!");
    }

}

myFunction(1, 11);
myFunction(2, 200);

// add another parameter to myFunction, and the function will console.log the product of both values of the parameters.