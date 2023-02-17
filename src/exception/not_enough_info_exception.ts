import { Module } from "../common/module";
import { Required } from "../common/required";

export class NotEnoughInfoException extends Error {
    constructor(m: Module) {
        super(`Cannot solve ${m} module with current bomb information. Required: ${Required[m].join(", ")}. `)
        Object.setPrototypeOf(this, NotEnoughInfoException.prototype)
    }
}