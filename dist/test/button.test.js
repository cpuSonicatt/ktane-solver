"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bomb_1 = require("../bomb");
const button_1 = require("../module/button/button");
const button_enums_1 = require("../module/button/enum/button_enums");
const not_enough_info_exception_1 = require("../exception/not_enough_info_exception");
let happyBomb = new bomb_1.default(2, true, false, false, true, 1);
let unhappyBomb = new bomb_1.default();
describe("Button Module", () => {
    test("Pressing and holding the button", () => {
        expect(happyBomb.solveButton(button_enums_1.ButtonColour.BLUE, button_enums_1.ButtonText.ABORT)).toEqual(button_enums_1.ButtonPressAction.HOLD);
    });
    test("Pressing and releasing the button", () => {
        expect(happyBomb.solveButton(button_enums_1.ButtonColour.RED, button_enums_1.ButtonText.HOLD)).toEqual(button_enums_1.ButtonPressAction.RELEASE);
    });
    test("Not having enough information about the bomb", () => {
        expect.hasAssertions();
        try {
            unhappyBomb.solveButton(button_enums_1.ButtonColour.WHITE, button_enums_1.ButtonText.DETONATE);
        }
        catch (err) {
            expect(err).toBeInstanceOf(not_enough_info_exception_1.NotEnoughInfoException);
            expect(err.required).toEqual(button_1.default.required);
        }
    });
    test("A blue strip after holding the button", () => {
        expect(happyBomb.solveButton(button_enums_1.ButtonColour.BLUE)).toEqual(button_enums_1.ButtonReleaseAction.FOUR);
    });
    test("A yellow strip after holding the button", () => {
        expect(happyBomb.solveButton(button_enums_1.ButtonColour.YELLOW)).toEqual(button_enums_1.ButtonReleaseAction.FIVE);
    });
    test("A different coloured strip after holding the button", () => {
        expect(happyBomb.solveButton(button_enums_1.ButtonColour.RED)).toEqual(button_enums_1.ButtonReleaseAction.ONE);
    });
});
