import Button from "../button.js"
import Bomb from "../bomb.js"

test("Press and hold button", () => {
    expect(Button.solve("blue abort", getBomb())).toEqual("HOLD")
})

test("Press and release button", () => {
    expect(Button.solve("red hold", getBomb())).toEqual("RELEASE")
})

test("MiXeD cAsE", () => {
    expect(Button.solve("BLUE aBoRt", getBomb())).toEqual("HOLD")
})

test("No colour or text", () => {
    expect(() => Button.solve("", getBomb())).toThrow("Expected colour and text, got: colour - ; text - ")
})

test("No colour", () => {
    expect(() => Button.solve(" abort", getBomb())).toThrow("Expected colour and text, got: colour - ; text - abort")
})


test("No text", () => {
    expect(() => Button.solve("red", getBomb())).toThrow("Expected colour and text, got: colour - red; text - ")
})

test("Blue strip", () => {
    expect(Button.solve("blue")).toEqual("4")
})

test("Yellow strip", () => {
    expect(Button.solve("yellow")).toEqual("5")
})

test("Different colour strip", () => {
    expect(Button.solve("red")).toEqual("1")
})

function getBomb() {
    return new Bomb(2, true, false, false, true, 1)
}
