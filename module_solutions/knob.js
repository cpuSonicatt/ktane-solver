class Knob {

    static solve(lights) {
        switch (lights) {
            case "001011111101":
            case "101010011011":
                console.log("Up")
                break

            case "011001111101":
            case "010101010001":
                console.log("Down")
                break

            case "000010100111":
            case "000010000110":
                console.log("Left")
                break

            case "101111111010":
            case "101100111010":
                console.log("Right")
                break

        }
    }

}

module.exports = Knob