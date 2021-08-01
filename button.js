class Button {

    // stage 1
    static solve(input, bomb) {
        input = input.toLowerCase()

        let [colour, text] = input.split(" ")

        if (!(colour && text)) {
            throw "Expected colour and text, got: colour - " + colour + "; text - " + text; 
        }

        if (colour === "blue" && text === "abort") {
            return "HOLD"
        } else if (bomb.batteries > 1 && text === "detonate") {
            return "RELEASE"
        } else if (colour === "white" && bomb.car) {
            return "HOLD"
        } else if (bomb.batteries > 2 && bomb.frk) {
            return "RELEASE"
        } else if (colour === "yellow") {
            return "HOLD"
        } else if (colour === "red" && text === "hold") {
            return "RELEASE"
        } else {
            return "HOLD"
        }

    }

    // stage 2 if stage 1 returns "HOLD"
    static solve(input) {
        input = input.toLowerCase()
        if (input === "blue") {
            return "4"
        } else if (input === "yellow") {
            return "5"
        } else {
            return "1"
        }
    }

}

export default Button