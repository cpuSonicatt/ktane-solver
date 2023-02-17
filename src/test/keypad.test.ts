import Bomb from "../bomb"

import { NoSolutionFoundException } from "../exception/no_solution_found_exception"
import { KeypadSymbol } from "../module/keypad/enums/keypad_enums"

let bomb = new Bomb()

describe("Keypad Module", () => {
    test("Valid solution", () => {
        expect(bomb.solveKeypad([KeypadSymbol.KITTY, KeypadSymbol.CURLY_H, KeypadSymbol.AT, KeypadSymbol.REVERSE_C]))
        .toEqual([KeypadSymbol.AT, KeypadSymbol.KITTY, KeypadSymbol.CURLY_H, KeypadSymbol.REVERSE_C])
    })

    test("No solution", () => {
        expect(() => bomb.solveKeypad([KeypadSymbol.BLACK_STAR, KeypadSymbol.CURLY_H, KeypadSymbol.AT, KeypadSymbol.REVERSE_C]))
        .toThrow(NoSolutionFoundException)
    })

    test("Too few symbols", () => {
        expect(() => bomb.solveKeypad([KeypadSymbol.BLACK_STAR, KeypadSymbol.CURLY_H, KeypadSymbol.AT]))
        .toThrow(NoSolutionFoundException)
    })

    test("Too many symbols", () => {
        expect(() => bomb.solveKeypad([KeypadSymbol.BLACK_STAR, KeypadSymbol.CURLY_H, KeypadSymbol.AT, KeypadSymbol.REVERSE_C, KeypadSymbol.ASH]))
        .toThrow(NoSolutionFoundException)
    })

    test("Same symbols", () => {
        expect(() => bomb.solveKeypad([KeypadSymbol.KITTY, KeypadSymbol.KITTY, KeypadSymbol.KITTY, KeypadSymbol.KITTY]))
        .toThrow(NoSolutionFoundException)
    })
})