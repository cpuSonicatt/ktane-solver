import { Module } from "../common/module"

export class NoSolutionFoundException extends Error {
    constructor(m: Module, s: any[]) {
        super(`No solution found for ${m} module for input ${s.join(", ")}`)
        Object.setPrototypeOf(this, NoSolutionFoundException.prototype)
    }
}