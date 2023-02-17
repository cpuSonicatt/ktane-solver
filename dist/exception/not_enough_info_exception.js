"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotEnoughInfoException = void 0;
class NotEnoughInfoException extends Error {
    constructor(m, s) {
        super(`Cannot solve ${m} module with current bomb information. Required: ${s.join(", ")} `);
        Object.setPrototypeOf(this, NotEnoughInfoException.prototype);
        this.required = s;
    }
}
exports.NotEnoughInfoException = NotEnoughInfoException;
