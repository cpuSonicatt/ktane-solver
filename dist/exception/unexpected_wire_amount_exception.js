"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedWireAmountExcepton = void 0;
class UnexpectedWireAmountExcepton extends Error {
    constructor(s) {
        super(`Cannot solve Wires module with passed arguments. Expected 3 to 6 wires, got ${s}`);
        Object.setPrototypeOf(this, UnexpectedWireAmountExcepton.prototype);
    }
}
exports.UnexpectedWireAmountExcepton = UnexpectedWireAmountExcepton;
