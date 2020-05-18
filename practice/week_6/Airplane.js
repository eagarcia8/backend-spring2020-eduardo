const Vehicle = require("./Vehicle.js");

class Airplane extends Vehicle {
    constructor() {
        super();
        this.model = null;
        this.engineCount = null;
        this.seats = null;
        this.maxCapacityLB = null;
        this.fuelEconomy = null;
    }
}

module.exports = Airplane;