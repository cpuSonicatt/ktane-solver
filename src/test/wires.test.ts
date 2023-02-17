import Bomb from "../bomb"

import { WiresColour, WireCut } from "../module/wires/enums/wires_enums";

import { NotEnoughInfoException } from "../exception/not_enough_info_exception"
import { UnexpectedInputExcepton } from "../exception/unexpected_input_exception"

describe("Wires Module", () => {
    test("2 wires", () => {
        let evenBomb = new Bomb(2)

        expect.hasAssertions()
        try {
            evenBomb.solveWires([WiresColour.BLACK, WiresColour.RED])
        } catch (err) {
            expect(err).toBeInstanceOf(UnexpectedInputExcepton)
            expect(err.message).toMatch("got 2")
        }
    })

    test("3 wires", () => {
        let evenBomb = new Bomb(2)
        let noDigitBomb = new Bomb()

        expect(evenBomb.solveWires([WiresColour.RED, WiresColour.BLUE, WiresColour.BLUE])).toEqual(WireCut.THIRD)
        expect(noDigitBomb.solveWires([WiresColour.RED, WiresColour.BLUE, WiresColour.BLUE])).toEqual(WireCut.THIRD)
    })

    test("6 wires", () => {
        let evenBomb = new Bomb(2)

        expect(evenBomb.solveWires([WiresColour.RED, WiresColour.BLUE, WiresColour.BLUE, WiresColour.RED, WiresColour.BLUE, WiresColour.BLUE])).toEqual(WireCut.FOURTH)
    })

    test("7 wires", () => {
        let evenBomb = new Bomb(2)

        expect.hasAssertions()
        try {
            evenBomb.solveWires([WiresColour.BLACK, WiresColour.RED, WiresColour.BLUE, WiresColour.BLUE, WiresColour.WHITE, WiresColour.RED, WiresColour.YELLOW])
        } catch (err) {
            expect(err).toBeInstanceOf(UnexpectedInputExcepton)
            expect(err.message).toMatch("got 7")
        }
    })

    test("Even serial digit", () => {
        let evenBomb = new Bomb(2)

        expect(evenBomb.solveWires([WiresColour.RED, WiresColour.RED, WiresColour.BLUE, WiresColour.YELLOW])).toEqual(WireCut.FIRST)
    })

    test("Odd serial digit", () => {
        let oddBomb = new Bomb(3)

        expect(oddBomb.solveWires([WiresColour.RED, WiresColour.RED, WiresColour.BLUE, WiresColour.YELLOW])).toEqual(WireCut.SECOND)
    })

    test("Not having enough information about the bomb", () => {
        let noDigitBomb = new Bomb()

        expect.hasAssertions()
        try {
            noDigitBomb.solveWires([WiresColour.BLACK, WiresColour.RED, WiresColour.RED, WiresColour.YELLOW])
        } catch (err) {
            expect(err).toBeInstanceOf(NotEnoughInfoException)
        }
    })
})