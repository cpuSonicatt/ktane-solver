import { BombInfo } from "./common/bomb_info"

import Button from "./module/button/button"
import { ButtonColour, ButtonPressAction, ButtonReleaseAction, ButtonText } from "./module/button/enums/button_enums"

import Wires from "./module/wires/wires";
import { WiresColour, WireCut } from "./module/wires/enums/wires_enums";

import { NotEnoughInfoException } from './exception/not_enough_info_exception';
import { UnexpectedInputExcepton } from "./exception/unexpected_input_exception";
import { Required } from "./common/required";
import { Module } from "./common/module";
import { KeypadSymbol } from "./module/keypad/enums/keypad_enums";
import Keypad from "./module/keypad/keypad";
import { NoSolutionFoundException } from "./exception/no_solution_found_exception";
import { SimonSaysColour } from "./module/simonsays/enums/simonsays_enums";
import SimonSays from "./module/simonsays/simonsays";
import { WOFPosition as Pos,
    WOFDisplayWords as Disp,
    WOFPadWords as Pad } from "./module/whosonfirst/enums/whosonfirst_enums";
import WhosOnFirst from "./module/whosonfirst/whosonfirst";


export default class Bomb {

    digit: number
    vowel: boolean
    car: boolean
    frk: boolean
    pport: boolean
    batteries: number

    strikes: number

    #memory: { history: string[]; stage: number }

    #sequence: { reds: number; blues: number; blacks: number; stage: number }

    constructor(digit: number = null, vowel: boolean = null,
                car: boolean = null, frk: boolean = null,
                pport: boolean = null, batteries: number = null) {

        this.digit = digit
        this.vowel = vowel
        this.car = car
        this.frk = frk
        this.pport = pport
        this.batteries = batteries
        this.strikes = 0
        this.#memory = {
            history: [],
            stage: 0
        }
        this.#sequence = {
            reds: 0,
            blues: 0,
            blacks: 0,
            stage: 0
        }
    }

    solveButton(colour: ButtonColour, text: ButtonText = null): ButtonPressAction | ButtonReleaseAction {
        if (!text) { 
            return Button.solveStrip(colour)
        } else if (this.#hasRequiredBombInfo(Required[Module.BUTTON])) {
            return Button.solveButton(colour, text, this)
        } else {
            throw new NotEnoughInfoException(Module.BUTTON)
        }
    }

    solveWires(wires: WiresColour[]): WireCut {
        if (wires.length == 3) {
            return Wires.solveThree(wires)
        } else if (this.#hasRequiredBombInfo(Required[Module.WIRES])) {
            if (wires.length == 4) {
                return Wires.solveFour(wires, this)
            } else if (wires.length == 5) {
                return Wires.solveFive(wires, this)
            } else if (wires.length == 6) {
                return Wires.solveSix(wires, this)
            } else {
                throw new UnexpectedInputExcepton(Module.WIRES, "3 to 6 wires", wires.length)
            }
        } else {
            throw new NotEnoughInfoException(Module.WIRES)
        }
    }

    solveKeypad(symbols: KeypadSymbol[]): KeypadSymbol[] {
        let solution = Keypad.solve(symbols)
        if (solution.length == 0) {
            throw new NoSolutionFoundException(Module.KEYPAD, symbols)
        }
        return solution
    }

    solveSimonSays(colours: SimonSaysColour[]): SimonSaysColour[] {
        if (this.#hasRequiredBombInfo(Required[Module.SIMON_SAYS])) {
            return SimonSays.solve(colours, this)
        } else {
            throw new NotEnoughInfoException(Module.SIMON_SAYS)
        }
    }

    solveWhosOnFirstSmart(display: Disp, padWords: Pad[]) {
        return WhosOnFirst.solve(display, padWords)
    }

    solveWhosOnFirst

    bombInfo() {
        return {
            [BombInfo.DIGIT]: this.digit,
            [BombInfo.VOWEL]: this.vowel,
            [BombInfo.CAR]: this.car,
            [BombInfo.FRK]: this.frk,
            [BombInfo.PPORT]: this.pport,
            [BombInfo.BATTERIES]: this.batteries
        }
    }

    bombRequired() {
        let required = []
        Object.entries(this.bombInfo()).forEach(([k,v]) => {
            v == null && required.push(k)
        })
        return required
    }

    #hasRequiredBombInfo(required: BombInfo[]): boolean {
        return !this.bombRequired().some(x => required.includes(x))
    }

    getRequiredForModule(m: Module) {
        return Required[m]
    }

    addStrike() {
        this.strikes += 1
    }
    
    resetStrikes() {
        this.strikes = 0   
    }

    resetMemory() {
        this.#memory = {history: [], stage: 0}
    }

    resetSequence() {
        this.#sequence = {reds: 0, blues: 0, blacks: 0, stage: 0}
    }

}

// let b = new Bomb()
// console.log(b.solveWOF(Disp.DISPLAY, [Pad.YOU, Pad.UH_HUH, Pad.YOUR, Pad.SURE, Pad.NEXT, Pad.LIKE]))