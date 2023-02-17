"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Bomb_instances, _Bomb_memory, _Bomb_sequence, _Bomb_hasRequiredBombInfo;
Object.defineProperty(exports, "__esModule", { value: true });
const bomb_info_1 = require("./common/bomb_info");
const button_1 = require("./module/button/button");
const wires_1 = require("./module/wires/wires");
const not_enough_info_exception_1 = require("./exception/not_enough_info_exception");
const unexpected_wire_amount_exception_1 = require("./exception/unexpected_wire_amount_exception");
class Bomb {
    constructor(digit = null, vowel = null, car = null, frk = null, pport = null, batteries = null) {
        _Bomb_instances.add(this);
        _Bomb_memory.set(this, void 0);
        _Bomb_sequence.set(this, void 0);
        this.digit = digit;
        this.vowel = vowel;
        this.car = car;
        this.frk = frk;
        this.pport = pport;
        this.batteries = batteries;
        this.strikes = 0;
        __classPrivateFieldSet(this, _Bomb_memory, {
            history: [],
            stage: 0
        }, "f");
        __classPrivateFieldSet(this, _Bomb_sequence, {
            reds: 0,
            blues: 0,
            blacks: 0,
            stage: 0
        }, "f");
    }
    solveButton(colour, text = null) {
        if (__classPrivateFieldGet(this, _Bomb_instances, "m", _Bomb_hasRequiredBombInfo).call(this, button_1.default.required)) {
            return text ?
                button_1.default.solveButton(colour, text, this) :
                button_1.default.solveStrip(colour);
        }
        else {
            throw new not_enough_info_exception_1.NotEnoughInfoException("Button", button_1.default.required);
        }
    }
    solveWires(wires) {
        if (wires.length == 3) {
            return wires_1.default.solveThree(wires);
        }
        else if (__classPrivateFieldGet(this, _Bomb_instances, "m", _Bomb_hasRequiredBombInfo).call(this, wires_1.default.required)) {
            if (wires.length == 4) {
                return wires_1.default.solveFour(wires, this);
            }
            else if (wires.length == 5) {
                return wires_1.default.solveFive(wires, this);
            }
            else if (wires.length == 6) {
                return wires_1.default.solveSix(wires, this);
            }
            else {
                throw new unexpected_wire_amount_exception_1.UnexpectedWireAmountExcepton(wires.length);
            }
        }
        else {
            throw new not_enough_info_exception_1.NotEnoughInfoException("Wires", wires_1.default.required);
        }
    }
    info() {
        return {
            [bomb_info_1.BombInfo.DIGIT]: this.digit,
            [bomb_info_1.BombInfo.VOWEL]: this.vowel,
            [bomb_info_1.BombInfo.CAR]: this.car,
            [bomb_info_1.BombInfo.FRK]: this.frk,
            [bomb_info_1.BombInfo.PPORT]: this.pport,
            [bomb_info_1.BombInfo.BATTERIES]: this.batteries
        };
    }
    required() {
        let required = [];
        Object.entries(this.info()).forEach(([k, v]) => {
            v == null && required.push(k);
        });
        return required;
    }
    addStrike() {
        this.strikes += 1;
    }
    resetStrikes() {
        this.strikes = 0;
    }
    resetMemory() {
        __classPrivateFieldSet(this, _Bomb_memory, { history: [], stage: 0 }, "f");
    }
    resetSequence() {
        __classPrivateFieldSet(this, _Bomb_sequence, { reds: 0, blues: 0, blacks: 0, stage: 0 }, "f");
    }
}
exports.default = Bomb;
_Bomb_memory = new WeakMap(), _Bomb_sequence = new WeakMap(), _Bomb_instances = new WeakSet(), _Bomb_hasRequiredBombInfo = function _Bomb_hasRequiredBombInfo(required) {
    return !this.required().some(x => required.includes(x));
};
