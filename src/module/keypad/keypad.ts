import { KeypadSymbol } from "./enums/keypad_enums";

export default class Keypad {

    static check: Function = (arr: KeypadSymbol[], input: KeypadSymbol[]) => {
        return input.every(s => arr.includes(s))
    }

    static solutions: KeypadSymbol[][] = [
        [KeypadSymbol.BALLOON, KeypadSymbol.AT, KeypadSymbol.LAMBDA, KeypadSymbol.LIGHTNING, KeypadSymbol.KITTY, KeypadSymbol.CURLY_H, KeypadSymbol.REVERSE_C],
        [KeypadSymbol.EURO, KeypadSymbol.BALLOON, KeypadSymbol.REVERSE_C, KeypadSymbol.PIG_TAIL, KeypadSymbol.WHITE_STAR, KeypadSymbol.CURLY_H, KeypadSymbol.QUESTION],
        [KeypadSymbol.COPYRIGHT, KeypadSymbol.BUTT, KeypadSymbol.PIG_TAIL, KeypadSymbol.DOUBLE_K, KeypadSymbol.HALF_THREE, KeypadSymbol.LAMBDA, KeypadSymbol.WHITE_STAR],
        [KeypadSymbol.SIX, KeypadSymbol.PARAGRAPH, KeypadSymbol.B, KeypadSymbol.KITTY, KeypadSymbol.DOUBLE_K, KeypadSymbol.QUESTION, KeypadSymbol.SMILEY],
        [KeypadSymbol.FORK, KeypadSymbol.SMILEY, KeypadSymbol.B, KeypadSymbol.C_WITH_DOT, KeypadSymbol.PARAGRAPH, KeypadSymbol.DRAGON, KeypadSymbol.BLACK_STAR],
        [KeypadSymbol.SIX, KeypadSymbol.EURO, KeypadSymbol.STITCH, KeypadSymbol.ASH, KeypadSymbol.FORK, KeypadSymbol.LETTER_N, KeypadSymbol.OMEGA]
    ]

    static solve(symbols: KeypadSymbol[]): KeypadSymbol[] {
        let solution: KeypadSymbol[] = []
        for (let possSolution of this.solutions) {
            if (this.check(possSolution, symbols)) {
                solution = possSolution.filter(x => symbols.includes(x))
            }
        }
        return solution.length == 4 ? solution : []
    }
}