import Bomb from "../bomb"

import { ButtonColour, ButtonPressAction, ButtonReleaseAction, ButtonText } from "../module/button/enums/button_enums"

import { NotEnoughInfoException } from "../exception/not_enough_info_exception"

let happyBomb = new Bomb(2)
let unhappyBomb = new Bomb()

describe("Button Module", () => {
    test("Pressing and holding the button", () => {
        expect(happyBomb.solveButton(ButtonColour.RED, ButtonText.ABORT)).toEqual(ButtonPressAction.HOLD)
    })
    
    test("Pressing and releasing the button", () => {
        expect(happyBomb.solveButton(ButtonColour.RED, ButtonText.HOLD)).toEqual(ButtonPressAction.RELEASE)
    })
    
    test("Not having enough information about the bomb", () => {
        expect.hasAssertions()
        try {
            unhappyBomb.solveButton(ButtonColour.WHITE, ButtonText.DETONATE)
        } catch (err) {
            expect(err).toBeInstanceOf(NotEnoughInfoException)
        }
    })
    
    test("A blue strip after holding the button", () => {
        expect(happyBomb.solveButton(ButtonColour.BLUE)).toEqual(ButtonReleaseAction.FOUR)
    })
    
    test("A yellow strip after holding the button", () => {
        expect(happyBomb.solveButton(ButtonColour.YELLOW)).toEqual(ButtonReleaseAction.FIVE)
    })
    
    test("A different coloured strip after holding the button", () => {
        expect(happyBomb.solveButton(ButtonColour.RED)).toEqual(ButtonReleaseAction.ONE)
    })
    
})
