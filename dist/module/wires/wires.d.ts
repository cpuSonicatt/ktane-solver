import Bomb from "../../bomb";
import { BombInfo } from "../../common/bomb_info";
import { WiresColour, WireCut } from "./enum/wires_enums";
export default class Wires {
    static required: BombInfo[];
    static solveThree(wires: WiresColour[]): WireCut;
    static solveFour(wires: WiresColour[], bomb: Bomb): WireCut;
    static solveFive(wires: WiresColour[], bomb: Bomb): WireCut;
    static solveSix(wires: WiresColour[], bomb: Bomb): WireCut;
}
