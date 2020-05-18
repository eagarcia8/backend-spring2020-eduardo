const myUsername = "User";
const myPassword = "123456";
const realPI = "3.14";
const notAccessible = 100;

function helperFunction() {
    console.log("helping!");
}

function mathify(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}

function reallyCoolFunction() {
    console.log("This really cool function ran!");
    helperFunction();
}

function countString(string) {
    return string.length;
}

function find(array, item, add) {
    if (Array.isArray(array) === false) {
        return -1;
    } 

    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }

    if (add) {
        array.push(item)
    return array.length - 1;
    } else {
        return -1;
    }
}

// If you want other files to access any of these functions/variables, you must put them inside of this object. the key or property is the name that other files must use, and the value, is what is running when they call that name.
module.exports = {
    realPI,
    password: myPassword,
    username: myUsername,
    find: find,
    countString,
    mathify: mathify,
    cool: reallyCoolFunction
};