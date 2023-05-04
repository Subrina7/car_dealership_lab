const Dealership = function (name, maxNoOfCars, carsInStock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.carsInStock = [];

}

// const dealership1 = ("")

Dealership.prototype.addStock = function(newCar){
    this.carsInStock.push(newCar);
}



