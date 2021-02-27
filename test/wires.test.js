const Wires = require("../wires.js")
const Bomb = require("../bomb.js")

test("2 wires", () => {
    expect(() => Wires.solve(["red", "blue"], getBomb())).toThrow("Expected between 3 and 6 wires, got 2")
})

test("3 wires", () => {
    expect(Wires.solve(["red", "blue", "blue"], getBomb())).toEqual(2)
})

test("6 wires", () => {
    expect(Wires.solve(["red", "blue", "blue", "red", "blue", "blue"], getBomb())).toEqual(3)
})

test("7 wires", () => {
    expect(() => Wires.solve(["red", "blue", "blue", "red", "blue", "blue", "red"], getBomb())).toThrow("Expected between 3 and 6 wires, got 7")
})

test("Even serial digit", () => {
    let bomb = new Bomb(2, true, false, false, true, 1)
    expect(Wires.solve(["red", "red", "blue", "yellow"], getBombOfSerial(2))).toEqual(0)
})

test("Odd serial digit", () => {
    let bomb = new Bomb(1, true, false, false, true, 1)
    expect(Wires.solve(["red", "red", "blue", "yellow"], getBombOfSerial(3))).toEqual(1)
})

function getBomb() {
    return new Bomb(2, true, false, false, true, 1)
}

function getBombOfSerial(x) {
    return new Bomb(x, true, false, false, true, 1)
}