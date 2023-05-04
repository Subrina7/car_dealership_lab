const Dealership = require(`./dealership`);
const Car = require(`./car`)

let dealership1;
let jag;
beforeEach(() => {
    dealership1 = new Dealership("Auto Trader", 100)
    jag = new Car("Land Rover", 70000, "V8");
    range = new Car("Land Rover", 80000, "V8");
    landRover = new Car("Land Rover", 80000, "V8");
    dealership1.addStock(jag);
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

test("update max number of cars", () => {
    dealership1.maxNoOfCar = 105;
    expected = 105;
    expect(dealership1.maxNoOfCars).toBe(105)
})

test("check stock", () => {
    const expected = 1
    expect(dealership1.numberOfCarsInStock()).toBe(1);
})

test("Check add stock method", () =>{
    dealership1.addStock(landRover);
    dealership1.addStock(range);
    expect(dealership1.numberOfCarsInStock()).toBe(3);
})