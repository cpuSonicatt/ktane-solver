class Bomb {
    
    constructor(digit, vowel, car, frk, pport, batteries) {
        this.digit = digit
        this.vowel = vowel
        this.car = car
        this.frk = frk
        this.pport = pport
        this.batteries = batteries
        this.strikes = 0

        this.memoryHistory = []
        this.memoryStage = 0

        this.redCount = 0
        this.blueCount = 0
        this.blackCount = 0
        this.sequenceStage = 0

    }

    add_strike() {
        this.strikes++
    }

    reset_memory() {
        this.memoryHistory = []
        this.memoryStage = 0
    }

    reset_sequence() {
        this.redCount = 0
        this.blueCount = 0
        this.blackCount = 0
        this.sequenceStage = 0
    }

}

module.exports = Bomb