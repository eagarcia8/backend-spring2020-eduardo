const Car = require("./Cars.js");
const Airplane = require("./Airplane.js");

let firstAirplane = new Airplane();

console.log(firstAirplane);

let firstCar = new Car("Honda", "Accord", "black", "gasoline", 14.8, 25, 155, 5);

firstCar.setLicense("8HEX859");

console.log(firstCar);

firstCar.range();

firstCar.travel(2);

firstCar.travel(200);
firstCar.getCurrentFuel();
firstCar.refuel(10);
firstCar.refuel(5);
firstCar.travel(100);
firstCar.getCurrentFuel();

let secondCar = new Car("BMW", "328i", "blue", "gasoline", 15, 20, 110, 4);

console.log(secondCar);

secondCar.travel(50);
secondCar.getCurrentFuel();


secondCar.setCurrentFuel(0);

secondCar.refuelUsing(firstCar);

firstCar.getCurrentFuel();
secondCar.getCurrentFuel();