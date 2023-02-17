import { Module } from "../common/module"

export class UnexpectedInputExcepton extends Error {

    constructor(m: Module, e: any, g: any) {
        super(`Cannot solve ${m} module with passed arguments. Expected ${e}, got ${g}`)
        Object.setPrototypeOf(this, UnexpectedInputExcepton.prototype)
    }
    
}