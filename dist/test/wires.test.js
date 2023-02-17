"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bomb_1 = require("../bomb");
const wires_1 = require("../module/wires/wires");
const wires_enums_1 = require("../module/wires/enum/wires_enums");
const not_enough_info_exception_1 = require("../exception/not_enough_info_exception");
const unexpected_wire_amount_exception_1 = require("../exception/unexpected_wire_amount_exception");
let evenBomb = new bomb_1.default(2);
let oddBomb = new bomb_1.default(3);
let noDigitBomb = new bomb_1.default();
describe("Wires Module", () => {
    test("2 wires", () => {
        expect.hasAssertions();
        try {
            evenBomb.solveWires([wires_enums_1.WiresColour.BLACK, wires_enums_1.WiresColour.RED]);
        }
        catch (err) {
            expect(err).toBeInstanceOf(unexpected_wire_amount_exception_1.UnexpectedWireAmountExcepton);
            expect(err.message).toMatch("got 2");
        }
    });
    test("3 wires", () => {
        expect(evenBomb.solveWires([wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.BLUE])).toEqual(wires_enums_1.WireCut.THIRD);
        expect(noDigitBomb.solveWires([wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.BLUE])).toEqual(wires_enums_1.WireCut.THIRD);
    });
    test("6 wires", () => {
        expect(evenBomb.solveWires([wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.BLUE])).toEqual(wires_enums_1.WireCut.FOURTH);
    });
    test("7 wires", () => {
        expect.hasAssertions();
        try {
            evenBomb.solveWires([wires_enums_1.WiresColour.BLACK, wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.WHITE, wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.YELLOW]);
        }
        catch (err) {
            expect(err).toBeInstanceOf(unexpected_wire_amount_exception_1.UnexpectedWireAmountExcepton);
            expect(err.message).toMatch("got 7");
        }
    });
    test("Even serial digit", () => {
        expect(evenBomb.solveWires([wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.YELLOW])).toEqual(wires_enums_1.WireCut.FIRST);
    });
    test("Odd serial digit", () => {
        expect(oddBomb.solveWires([wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.BLUE, wires_enums_1.WiresColour.YELLOW])).toEqual(wires_enums_1.WireCut.SECOND);
    });
    test("Not having enough information about the bomb", () => {
        expect.hasAssertions();
        try {
            noDigitBomb.solveWires([wires_enums_1.WiresColour.BLACK, wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.RED, wires_enums_1.WiresColour.YELLOW]);
        }
        catch (err) {
            expect(err).toBeInstanceOf(not_enough_info_exception_1.NotEnoughInfoException);
            expect(err.required).toEqual(wires_1.default.required);
        }
    });
});
