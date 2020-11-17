class Bomb {
    constructor(digit, vowel, car, frk, pport, batteries, strikes) {
        this.digit = digit
        this.vowel = vowel
        this.car = car
        this.frk = frk
        this.pport = pport
        this.batteries = batteries
        this.strikes = strikes

        this.memoryHistory = []
        this.memoryStage = 0

        this.redCount = 0
        this.blueCount = 0
        this.blackCount = 0
        this.sequenceStage = 0

    }    

    static bomb_check() {

        /* ask for:
        last serial digit?
        serial has vowel?
        CAR lit ind.?
        FRK lit ind.?
        parallel port?
        how many batteries?
        */

        return new Bomb(4, true, false, false, false, 6, 0)
    }

    add_strike() {
        this.strikes++
    }

    reset_memory() {

    }

    reset_sequence() {
        this.redCount = 0
        this.blueCount = 0
        this.blackCount = 0
        this.sequenceStage = 0
    }

}

module.exports = Bomb