const Dealership = function (name, maxNoOfCars, carsInStock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.carsInStock = [];

}

Dealership.prototype.numberOfCarsInStock = function(){
    return this.carsInStock.length;
}

Dealership.prototype.addStock = function(newCar){
    this.carsInStock.push(newCar);
}

module.exports = Dealership;


