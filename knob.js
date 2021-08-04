class Knob {

    static solve(lights) {
        switch (lights) {
            case "001111":
            case "101011":
                return "UP"

            case "011111":
            case "101010":
                return "DOWN"

            case "000100":
            case "000000":
                return "LEFT"

            case "101111":
                return "RIGHT"
            
            default:
                throw "Unexpected light sequence, got " + lights

        }
    }

}

export default Knob