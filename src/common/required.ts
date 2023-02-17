import { BombInfo } from "./bomb_info";
import { Module } from "./module";

export const Required = {
    [Module.BUTTON]: [BombInfo.CAR, BombInfo.FRK, BombInfo.BATTERIES],
    [Module.WIRES]: [BombInfo.DIGIT],
    [Module.KEYPAD]: [],
    [Module.SIMON_SAYS]: [BombInfo.VOWEL],
    [Module.WHOS_ON_FIRST]: [],
    [Module.MEMORY]: [],
    [Module.MORSE_CODE]: [],
    [Module.COMPLICATED_WIRES]: [BombInfo.DIGIT, BombInfo.BATTERIES, BombInfo.PPORT],
    [Module.MAZE]: [],
    [Module.WIRE_SEQUENCE]: [],
    [Module.PASSWORD]: [],
    [Module.KNOB]: []
}