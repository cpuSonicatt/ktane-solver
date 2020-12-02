class SimonSays {

    static solve(colours, bomb) {
        let board = choose_translate(bomb)
        
        let solution = []
        colours.forEach(colour => {
            switch (colour) {
                case "blue":
                    solution.push(board[0])
                    break;
                case "red":
                    solution.push(board[1])
                    break;
                case "yellow":
                    solution.push(board[2])
                    break;
                case "green":
                    solution.push(board[3])
                    break;
            }
        });
        return solution
    }

}

function choose_translate(bomb) {
    if (bomb.vowel) {
        switch (bomb.strikes) {
            case 0:
                return [ // v0
                    "red", 
                "blue", "green",
                    "yellow"
                ]
            case 1:
                return [ // v1
                    "green", 
                "yellow", "red",
                    "blue"
                ]
            case 2:
                return [ // v2
                    "yellow", 
                "blue", "green",
                    "red"
                ]
        }
    } else {
        switch (bomb.strikes) {
            case 0:
                return [ // nv0
                    "yellow", 
                "blue", "red",
                    "green"
                ]
            case 1:
                return [ // nv1
                    "blue", 
                "red", "green",
                    "yellow"
                ]
            case 2:
                return [ // nv2
                    "green", 
                "yellow", "red",
                    "blue"
                ]
        }
    }
}

module.exports = SimonSays