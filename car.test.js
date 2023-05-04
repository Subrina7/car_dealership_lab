const Car = require(`./car`)

let ferrari;

beforeEach(() => {
    ferrari = new Car("Ferrari", 250000, "Colombo");

})


test('has manufacturer', () => {
    const expected = "Ferrari"
    expect(ferrari.manufacturer).toBe(expected);

});

test('update manufacturer', () => {
    ferrari.manufacturer = "Volvo"
    expect(ferrari.manufacturer).toBe("Volvo")
})