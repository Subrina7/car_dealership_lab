const Dealership = function (name, maxNoOfCars, carsInStock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.carsInStock = [];

}

const { access } = require("fs");
const Car = require(`./car`);

Dealership.prototype.numberOfCarsInStock = function(){
    return this.carsInStock.length;
}

Dealership.prototype.addStock = function(newCar){
    this.carsInStock.push(newCar);
}

Dealership.prototype.manufacturersName = function(){
   const manufacturer = this.carsInStock.map(car  => car.manufacturer);
   return manufacturer;
}

// Dealership.prototype.getCarByManufacturer = function(){
//     const filteredCars = this.carsInStock.filter( cars => cars.manufacturer);
//     return filteredCars;
// }

// Dealership.prototype.totalValue = function(){
//     const totalVal = Car.reduce((accumulator, car.price) => {
//     return accumulator + totalVal;
//     },0)}

// module.exports = Dealership;


