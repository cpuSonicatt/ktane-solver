"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bomb_info_1 = require("../../common/bomb_info");
const wires_enums_1 = require("./enum/wires_enums");
class Wires {
    static solveThree(wires) {
        if (!wires.includes(wires_enums_1.WiresColour.RED))
            return wires_enums_1.WireCut.SECOND;
        else if (wires[2] === wires_enums_1.WiresColour.WHITE)
            return wires_enums_1.WireCut.THIRD;
        else if (count(wires, wires_enums_1.WiresColour.BLUE) > 1)
            return wires.lastIndexOf(wires_enums_1.WiresColour.BLUE);
        else
            return wires_enums_1.WireCut.THIRD;
    }
    static solveFour(wires, bomb) {
        let isOdd = bomb.digit % 2 != 0;
        if (count(wires, wires_enums_1.WiresColour.RED) > 1 && isOdd)
            return wires.lastIndexOf(wires_enums_1.WiresColour.RED);
        else if ((wires[3] === wires_enums_1.WiresColour.YELLOW && count(wires, wires_enums_1.WiresColour.RED) == 0) || count(wires, wires_enums_1.WiresColour.BLUE) == 1)
            return wires_enums_1.WireCut.FIRST;
        else if (count(wires, wires_enums_1.WiresColour.YELLOW) > 1)
            return wires_enums_1.WireCut.FOURTH;
        else
            return wires_enums_1.WireCut.SECOND;
    }
    static solveFive(wires, bomb) {
        let isOdd = bomb.digit % 2 != 0;
        if (wires[4] === wires_enums_1.WiresColour.BLACK && isOdd)
            return wires_enums_1.WireCut.FOURTH;
        else if (count(wires, wires_enums_1.WiresColour.RED) == 1 && count(wires, wires_enums_1.WiresColour.YELLOW) > 1)
            return wires_enums_1.WireCut.FIRST;
        else if (!wires.includes(wires_enums_1.WiresColour.BLACK))
            return wires_enums_1.WireCut.SECOND;
        else
            return wires_enums_1.WireCut.FIRST;
    }
    static solveSix(wires, bomb) {
        let isOdd = bomb.digit % 2 != 0;
        if (!wires.includes(wires_enums_1.WiresColour.YELLOW) && isOdd)
            return wires_enums_1.WireCut.THIRD;
        else if (count(wires, wires_enums_1.WiresColour.YELLOW) == 1 && count(wires, wires_enums_1.WiresColour.WHITE) > 1)
            return wires_enums_1.WireCut.FOURTH;
        else if (!wires.includes(wires_enums_1.WiresColour.RED))
            return wires_enums_1.WireCut.SIXTH;
        else
            return wires_enums_1.WireCut.FOURTH;
    }
}
exports.default = Wires;
Wires.required = [bomb_info_1.BombInfo.DIGIT];
function count(arr, e) {
    return arr.filter((n) => n === e).length;
}
