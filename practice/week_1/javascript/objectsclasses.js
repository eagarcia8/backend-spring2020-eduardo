// Simple JavaScript Objects

// Formatting for an object with multiple PROPERTIES.
let employee0 = {
    "name": "Eduardo",
    address: "123 Some City, CA, 99999",
    "salary": 170000
};

employee0.address;

// Acceptable format for an object with a single PROPERTY.
let myOtherObject = {"isTrue": true};


// Nesting objects within objects example.
let employee2 = {
    "name": "Angie",
    address: {
        "street": "124 Some City",
        "state": "CA",
        "zip": "99999"
    },
    "salary": 170000
};

employee2.address.zip;

// let employee1 = {
//     "address": "some place",
//     "salary": 80000
// };


// Classes, "fancy" objects.

class Car {
    //static version = "100";
    constructor(valueOfAge) {
        //bonus: figure out what non-this variables go to.
        this.age = valueOfAge;
    }
}

let someNumber = 190;

let myFirstCar = new Car(50);
let mySecondCar = new Car(someNumber);
let soldCar = new Car(12);

console.log(Car.version);

Math.random()

// let myFirstCar = {};

console.log(myFirstCar, mySecondCar, soldCar);