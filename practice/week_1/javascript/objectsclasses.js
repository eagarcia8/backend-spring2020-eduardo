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
    constructor(age, valueOfMileage, valueOfColor, valueOfHP) {
        //bonus: figure out what non-this variables go to.
        this.age = age;
        this.mileage = valueOfMileage;
        this.hp = valueOfHP;
        this.color = valueOfColor;
    }

    isWorking() {
        console.log("The car is working and currently is " + this.age + " years old.")
    }
}

// same thing as the class, value cannot be changed and may be different to other objects: let myCarExample = {age: 100};

let someNumber = 190;

let myFirstCar = new Car(50, 600000, "brown", 25);
let mySecondCar = new Car(someNumber);
let soldCar = new Car(12);

console.log(Car.version);


// If a function belongs to a class, its called a method.
Math.random();


// let myFirstCar = {};

console.log(Object.getOwnPropertyNames(myFirstCar));