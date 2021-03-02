const wordsMap = {
    "ready" : "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY",
    "first" : "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST",
    "no" : "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO",
    "blank" : "WAIT, RIGHT, OKAY, MIDDLE, BLANK",
    "nothing" : "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING",
    "yes" : "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES",
    "what" : "UHHH, WHAT",
    "uhhh" : "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH",
    "left" : "RIGHT, LEFT",
    "right" : "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT",
    "middle" : "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE",
    "okay" : "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY",
    "wait" : "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT",
    "press" : "RIGHT, MIDDLE, YES, READY, PRESS",
    "you" : "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU",
    "you are" : "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE",
    "your" : "UH UH, YOU ARE, UH HUH, YOUR",
    "you're" : "YOU, YOU'RE",
    "ur" : "DONE, U, UR",
    "u" : "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U",
    "uh huh" : "UH HUH",
    "uh uh" : "UR, U, YOU ARE, YOU'RE, NEXT, UH UH",
    "what?" : "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?",
    "done" : "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE",
    "next" : "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT",
    "hold" : "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD",
    "sure" : "YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE",
    "like" : "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE"
}

class WhosOnFirst {

    static solvePartOne(word) {

        word = word.toLowerCase()
        
        switch(word) {
            case "ur":
                return "TL"
    
            case "first": case "okay": case "c":
                return "TR"
    
            case "yes": case "nothing": case "they are": case "led":
                return "ML"
                
            case "blank": case "read": case "red": case "you": case "your": case "you're": case "their":
                return "MR"
                
            case "empty": case "reed": case "leed": case "they're":
                return "BL"
                
            case "display": case "says": case "no": case "lead": case "hold on": case "you are": case "there": case "see": case "cee":
                return "BR"
            
            default:
                throw "Unexpected word, got " + word
                
        }
        
    }

    static solvePartTwo(word) {
        word = word.toLowerCase()
        let solution = wordsMap[word]
        if (solution) {
            return solution
        } else {
            throw "Unexpected word, got " + word
        }

    }

}

export default WhosOnFirst