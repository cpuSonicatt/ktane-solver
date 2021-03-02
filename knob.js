class Knob {

    static solve(lights) {
        switch (lights) {
            case "001011111101":
            case "101010011011":
                return "UP"

            case "011001111101":
            case "010101010001":
                return "DOWN"

            case "000010100111":
            case "000010000110":
                return "LEFT"

            case "101111111010":
            case "101100111010":
                return "RIGHT"
            
            default:
                throw "Unexpected light sequence, got " + lights

        }
    }

}

export default Knob