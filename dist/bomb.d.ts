import { ButtonColour, ButtonPressAction, ButtonReleaseAction, ButtonText } from "./module/button/enum/button_enums";
import { WiresColour, WireCut } from "./module/wires/enum/wires_enums";
export default class Bomb {
    #private;
    digit: number;
    vowel: boolean;
    car: boolean;
    frk: boolean;
    pport: boolean;
    batteries: number;
    strikes: number;
    constructor(digit?: number, vowel?: boolean, car?: boolean, frk?: boolean, pport?: boolean, batteries?: number);
    solveButton(colour: ButtonColour, text?: ButtonText): ButtonPressAction | ButtonReleaseAction;
    solveWires(wires: WiresColour[]): WireCut;
    info(): {
        digit: number;
        vowel: boolean;
        car: boolean;
        frk: boolean;
        pport: boolean;
        batteries: number;
    };
    required(): any[];
    addStrike(): void;
    resetStrikes(): void;
    resetMemory(): void;
    resetSequence(): void;
}
