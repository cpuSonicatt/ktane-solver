choices = [
    "ae",
    "at",
    "b",
    "backwards c",
    "balloon",
    "black star",
    "butt",
    "c with dot",
    "kitty",
    "copyright",
    "curly h",
    "double k",
    "dragon",
    "euro",
    "fork",
    "half three",
    "lambda",
    "letter n",
    "lightning",
    "omega",
    "paragraph",
    "pig tail",
    "question",
    "six",
    "smiley",
    "stitch",
    "white star"
]

solutions = [
    ["balloon", "at", "lambda", "lightning", "kitty", "curly h", "backwards c"],
    ["euro", "balloon", "backwards c", "pig tail", "white star", "curly h", "question"],
    ["copyright", "butt", "pig tail", "double k", "half three", "lambda", "white star"],
    ["six", "paragraph", "b", "kitty", "double k", "question", "smiley"],
    ["fork", "smiley", "b", "c with dot", "paragraph", "dragon", "black star"],
    ["six", "euro", "stitch", "ae", "fork", "letter n", "omega"]
]

class Keypad {

    static solve(symbols) {
        
        let checker = (arr, target) => target.every(v => arr.includes(v));

        for (let x = 0; x < 6; x++) {
            if (checker(solutions[x], symbols)) {
                return solutions[x].filter(x => symbols.includes(x))
            }
        }
        symbols = symbols.filter(x => !choices.includes(x))
        throw "Unexpected symbol" + (symbols.length > 1 ? "s" : "") + ", got " + symbols

    }
}

module.exports = Keypad

