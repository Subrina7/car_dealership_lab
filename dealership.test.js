const Dealership = require(`./dealership`);
const Car = require(`./car`);
const exp = require("constants");

let dealership1;
let jag;
beforeEach(() => {
    dealership1 = new Dealership("Auto Trader", 100)
    jag = new Car("Land Rover", 10000, "V8");
    range = new Car("Land Rover", 10000, "V8");
    landRover = new Car("Land Rover", 10000, "V8");
    ferrari = new Car("Ferrari", 10000, "Colombo");
    dealership1.addStock(jag);
    dealership1.addStock(ferrari);
})

test("has name", () => {
    const expected = "Auto Trader";
    expect(dealership1.name).toBe(expected)
})

test("update name", () => {
    dealership1.name = "London Motors";
    expect(dealership1.name).toBe("London Motors")
})

test("has max number of cars", () => {
    const expected = 100;
    expect(dealership1.maxNoOfCars).toBe(expected)
})

// test("update max number of cars", () => {
//     dealership1.maxNoOfCar = 105;
//     expected = 105;
//     expect(dealership1.maxNoOfCars).toBe(105)
// })

test("check stock", () => {
    const expected = 1
    expect(dealership1.numberOfCarsInStock()).toBe(2);
})

test("Check add stock method", () =>{
    dealership1.addStock(landRover);
    dealership1.addStock(range);
    expect(dealership1.numberOfCarsInStock()).toBe(4);
})

// test("returns manufacturer", () =>{
//     expect(jag.manufacturersName()).toBe("Land Rover");
// })

test("returns manufacturer", () =>{
    expected = ["Land Rover", "Ferrari"]
    actual = dealership1.manufacturersName()
    expect(actual).toEqual(expected);
})

// test("filters car by manufacturer", () => {
//     expected = [jag, range, landRover]
//     actual = dealership1.getCarByManufacturer("Land Rover")
//     expect(actual).toBe(expected);
// })

// test("adds total", () => {
//     const expected = 40000;
//     actual = dealership1.totalValue()
//     expect(actual).toBe(expected);
// })