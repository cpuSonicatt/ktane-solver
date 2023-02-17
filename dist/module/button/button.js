"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bomb_info_1 = require("../../common/bomb_info");
const button_enums_1 = require("./enum/button_enums");
class Button {
    static solveButton(colour, text, bomb) {
        if (colour === button_enums_1.ButtonColour.BLUE && text === button_enums_1.ButtonText.ABORT)
            return button_enums_1.ButtonPressAction.HOLD;
        else if (bomb.batteries > 1 && text === button_enums_1.ButtonText.DETONATE)
            return button_enums_1.ButtonPressAction.RELEASE;
        else if (colour === button_enums_1.ButtonColour.WHITE && bomb.car)
            return button_enums_1.ButtonPressAction.HOLD;
        else if (bomb.batteries > 2 && bomb.frk)
            return button_enums_1.ButtonPressAction.RELEASE;
        else if (colour === button_enums_1.ButtonColour.YELLOW)
            return button_enums_1.ButtonPressAction.HOLD;
        else if (colour === button_enums_1.ButtonColour.RED && text === button_enums_1.ButtonText.HOLD)
            return button_enums_1.ButtonPressAction.RELEASE;
        else
            return button_enums_1.ButtonPressAction.HOLD;
    }
    static solveStrip(colour) {
        if (colour === button_enums_1.ButtonColour.BLUE)
            return button_enums_1.ButtonReleaseAction.FOUR;
        else if (colour === button_enums_1.ButtonColour.YELLOW)
            return button_enums_1.ButtonReleaseAction.FIVE;
        else
            return button_enums_1.ButtonReleaseAction.ONE;
    }
}
exports.default = Button;
Button.required = [bomb_info_1.BombInfo.CAR, bomb_info_1.BombInfo.FRK, bomb_info_1.BombInfo.BATTERIES];
