import Bomb from "../../bomb"

import { ButtonColour, ButtonPressAction, ButtonReleaseAction, ButtonText } from "./enums/button_enums"

export default class Button {

    static solveButton(colour: ButtonColour, text: ButtonText, bomb: Bomb): ButtonPressAction {

        let { car, frk, batteries } = bomb

        if (colour === ButtonColour.BLUE && text === ButtonText.ABORT)
            return ButtonPressAction.HOLD
        else if (batteries > 1 && text === ButtonText.DETONATE)
            return ButtonPressAction.RELEASE
        else if (colour === ButtonColour.WHITE && car)
            return ButtonPressAction.HOLD
        else if (batteries > 2 && frk)
            return ButtonPressAction.RELEASE
        else if (colour === ButtonColour.YELLOW)
            return ButtonPressAction.HOLD
        else if (colour === ButtonColour.RED && text === ButtonText.HOLD)
            return ButtonPressAction.RELEASE
        else
            return ButtonPressAction.HOLD
    }

    static solveStrip(colour: ButtonColour): ButtonReleaseAction {        
        if (colour === ButtonColour.BLUE)
            return ButtonReleaseAction.FOUR
        else if (colour === ButtonColour.YELLOW)
            return ButtonReleaseAction.FIVE
        else
            return ButtonReleaseAction.ONE
    }
    
}