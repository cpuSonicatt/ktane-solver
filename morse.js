const morseList = [
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

        morse = morse.map(v => v.toLowerCase());

        let word = ""
        morse.forEach(letter => {
            word += String.fromCharCode(morseList.indexOf(letter) + 97)
        });
        
        switch (word) {
            case "shell":
                return "3.505"
                
            case "halls":
                return "3.515"
                
            case "slick":
                return "3.522"
                
            case "trick":
                return "3.532"
                
            case "boxes":
                return "3.535"
                
            case "leaks":
                return "3.542"
                
            case "strobe":
                return "3.545"
                
            case "bistro":
                return "3.552"
                
            case "flick":
                return "3.555"
                
            case "bombs":
                return "3.565"
                
            case "break":
                return "3.572"
                
            case "brick":
                return "3.575"
                
            case "steak":
                return "3.582"
                
            case "string":
                return "3.592"
                
            case "vector":
                return "3.595"
                
            case "beats":
                return "3.600"

            default: 
                throw "Unexpected word passed, got " + word
                
        }
    }

}

export default Morse