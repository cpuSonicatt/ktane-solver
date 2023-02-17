import Bomb from "../../bomb";

import { WiresColour, WireCut } from "./enums/wires_enums";


export default class Wires {

    static solveThree(wires: WiresColour[]): WireCut {
        if (!wires.includes(WiresColour.RED))
            return WireCut.SECOND
        else if (wires[2] === WiresColour.WHITE)
            return WireCut.THIRD
        else if (count(wires, WiresColour.BLUE) > 1)
            return wires.lastIndexOf(WiresColour.BLUE)
        else
            return WireCut.THIRD
    }

    static solveFour(wires: WiresColour[], bomb: Bomb): WireCut {

        let { digit } = bomb

        let isOdd = digit % 2 != 0
        if (count(wires, WiresColour.RED) > 1 && isOdd)
            return wires.lastIndexOf(WiresColour.RED)
        else if ((wires[3] === WiresColour.YELLOW && count(wires, WiresColour.RED) == 0) || count(wires, WiresColour.BLUE) == 1)
            return WireCut.FIRST
        else if (count(wires, WiresColour.YELLOW) > 1)
            return WireCut.FOURTH
        else
            return WireCut.SECOND
    }

    static solveFive(wires: WiresColour[], bomb: Bomb): WireCut {

        let { digit } = bomb

        let isOdd = digit % 2 != 0
        if (wires[4] === WiresColour.BLACK && isOdd)
            return WireCut.FOURTH
        else if (count(wires, WiresColour.RED) == 1 && count(wires, WiresColour.YELLOW) > 1)
            return WireCut.FIRST
        else if (!wires.includes(WiresColour.BLACK))
            return WireCut.SECOND
        else 
            return WireCut.FIRST
    }

    static solveSix(wires: WiresColour[], bomb: Bomb): WireCut {

        let { digit } = bomb

        let isOdd = bomb.digit % 2 != 0
        if (!wires.includes(WiresColour.YELLOW) && isOdd)
            return WireCut.THIRD
        else if (count(wires, WiresColour.YELLOW) == 1 && count(wires, WiresColour.WHITE) > 1)
            return WireCut.FOURTH
        else if (!wires.includes(WiresColour.RED))
            return WireCut.SIXTH
        else
            return WireCut.FOURTH
    }
}

function count(arr: WiresColour[], e: WiresColour): number {
    return arr.filter((n: WiresColour) => n === e).length
}
