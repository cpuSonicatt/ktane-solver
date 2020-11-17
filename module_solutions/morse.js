morseList = [
    "dot dash",
    "dash dot dot dot",
    "dash dot dash dot",
    "dash dot dot",
    "dot",
    "dot dot dash dot",
    "dash dash dot",
    "dot dot dot dot",
    "dot dot",
    "dot dash dash dash",
    "dash dot dash",
    "dot dash dot dot",
    "dash dash",
    "dash dot",
    "dash dash dash",
    "dot dash dash dot",
    "dash dash dot dash",
    "dot dash dot",
    "dot dot dot",
    "dash",
    "dot dot dash",
    "dot dot dot dash",
    "dot dash dash",
    "dash dot dot dash",
    "dash dot dash dash",
    "dash dash dot dot"
]


class Morse {

    static solve(morse) {
        let word = ""
        let morseArr = morse.split(", ")
        morseArr.forEach(letter => {
            word += String.fromCharCode(morseList.indexOf(letter) + 97)
        });
        
        switch (word) {
            case "shell":
                console.log("3.505 MHz")
                break;
            case "halls":
                console.log("3.515 MHz")
                break;
            case "slick":
                console.log("3.522 MHz")
                break;
            case "trick":
                console.log("3.532 MHz")
                break;
            case "boxes":
                console.log("3.535 MHz")
                break;
            case "leaks":
                console.log("3.542 MHz")
                break;
            case "strobe":
                console.log("3.545 MHz")
                break;
            case "bistro":
                console.log("3.552 MHz")
                break;
            case "flick":
                console.log("3.555 MHz")
                break;
            case "bombs":
                console.log("3.565 MHz")
                break;
            case "break":
                console.log("3.572 MHz")
                break;
            case "brick":
                console.log("3.575 MHz")
                break;
            case "steak":
                console.log("3.582 MHz")
                break;
            case "string":
                console.log("3.592 MHz")
                break;
            case "vector":
                console.log("3.595 MHz")
                break;
            case "beats":
                console.log("3.600 MHz")
                break;
        }
    }

}

module.exports = Morse