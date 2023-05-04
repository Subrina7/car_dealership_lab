const exp = require("constants");
const Car = require(`./car`)

let ferrari;

beforeEach(() => {
    ferrari = new Car("Ferrari", 250000, "Colombo");

})

test('has manufacturer', () => {
    const expected = "Ferrari"
    expect(ferrari.manufacturer).toBe(expected);

})

test('update manufacturer', () => {
    ferrari.manufacturer = "Volvo"
    expect(ferrari.manufacturer).toBe("Volvo")
})

test('has price', () => {
    const expected = 250000
    expect(ferrari.price).toBe(250000);

})

test('update price', () => {
    ferrari.price = 200000
    expect(ferrari.price).toBe(200000)
})

test('has engine', () => {
    const expected = "Colombo"
    expect(ferrari.engineType).toBe(expected)
})

test('update engine', () => {
    ferrari.engineType = "V8"
    expect(ferrari.engineType).toBe("V8")
})