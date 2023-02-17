import { Colour } from "../../../common/colour";

export enum ButtonColour {
    RED = Colour.RED,
    YELLOW = Colour.YELLOW,
    BLUE = Colour.BLUE,
    BLACK = Colour.BLACK,
    WHITE = Colour.WHITE
}

export enum ButtonPressAction {
    HOLD = "hold",
    RELEASE = "release"
}

export enum ButtonReleaseAction {
    FOUR = "4",
    FIVE = "5",
    ONE = "1"
}
export enum ButtonText {
    ABORT = "abort",
    DETONATE = "detonate",
    HOLD = "hold",
    PRESS = "press"
}