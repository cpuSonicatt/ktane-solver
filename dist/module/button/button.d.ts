import Bomb from "../../bomb";
import { BombInfo } from "../../common/bomb_info";
import { ButtonColour, ButtonPressAction, ButtonReleaseAction, ButtonText } from "./enum/button_enums";
export default class Button {
    static required: BombInfo[];
    static solveButton(colour: ButtonColour, text: ButtonText, bomb: Bomb): ButtonPressAction;
    static solveStrip(colour: ButtonColour): ButtonReleaseAction;
}
