class Button {

    static solve(colour, text, bomb) {

        if (colour === "blue" && text === "abort") {
            console.log(hold())
        } else if (bomb.batteries > 1 && text === "detonate") {
            console.log("Press and release")
        } else if (colour === "white" && bomb.car) {
            console.log(hold())
        } else if (bomb.batteries > 2 && bomb.frk) {
            console.log("Press and release")
        } else if (colour === "yellow") {
            console.log(hold())
        } else if (colour === "red" && text === "hold") {
            console.log("Press and release")
        } else {
            console.log(hold())
        }

    }

}

function hold() {
    console.log("Press and hold")
    let strip = "blue" // mocked user input
    if (strip === "blue") {
        return "4 in any position"
    } else if (strip === "yellow") {
        return "5 in any position"
    } else {
        return "1 in any position"
    }
}


module.exports = Button