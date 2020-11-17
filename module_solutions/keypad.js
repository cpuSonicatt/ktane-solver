choices = [
    "copyright",
    "black star",
    "white star",
    "smiley",
    "double k",
    "omega",
    "cat",
    "butt",
    "curly h",
    "six",
    "lightning",
    "at",
    "ae",
    "half three",
    "euro",
    "letter n",
    "dragon",
    "question",
    "paragraph",
    "c with dot",
    "backwards c",
    "fork",
    "pig tail",
    "stitch",
    "balloon",
    "lambda",
    "b"]

solutions = [
    ["balloon", "at", "lambda", "lightning", "cat", "curly h", "backwards c"],
    ["euro", "balloon", "backwards c", "pig tail", "white star", "curly h", "question"],
    ["copyright", "butt", "pig tail", "double k", "half three", "lambda", "white star"],
    ["six", "paragraph", "b", "cat", "double k", "question", "smiley"],
    ["fork", "smiley", "b", "c with dot", "paragraph", "dragon", "black star"],
    ["six", "euro", "stitch", "ae", "fork", "letter n", "omega"]
]

class Keypad {

    static solve(symbols) {
        let symbolsArr = symbols.split(", ")
        let checker = (arr, target) => target.every(v => arr.includes(v));

        for (let x = 0; x < 6; x++) {
            if (checker(solutions[x], symbolsArr)) {
                console.log(solutions[x].filter(x => symbolsArr.includes(x)).join(", "))
            }
        }

    }
}

module.exports = Keypad

