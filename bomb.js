class Bomb {
    
    constructor(digit, vowel, car, frk, pport, batteries) {
        // information regarding the bomb itself
        this.digit = digit
        this.vowel = vowel
        this.car = car
        this.frk = frk
        this.pport = pport
        this.batteries = batteries
        this.strikes = 0

        // information regarding the Memory module
        this.memoryHistory = []
        this.memoryStage = 0

        // information regarding the Sequence module
        this.redCount = 0
        this.blueCount = 0
        this.blackCount = 0
        this.sequenceStage = 0

    }

    add_strike() {
        this.strikes += 1
    }
    
    reset_strikes() {
        this.strikes = 0   
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

export default Bomb
