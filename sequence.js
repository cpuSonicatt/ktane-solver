const RED_RULE = ["c", "b", "a", "ac", "b", "ac", "abc", "ab", "b"]

const BLUE_RULE = ["b", "ac", "b", "a", "b", "bc", "c", "ac", "a"]

const BLACK_RULE = ["abc", "ac", "b", "ac", "b", "bc", "ab", "c", "c"]

class Sequence {

    static solve(wires, bomb) {

        wires = wires.map(v => v.toLowerCase())
        
        let solution = []
        bomb.sequenceStage++
        wires.forEach(wire => {
            let wireInfo = wire.split(" ")


            if (wireInfo[0] !== "red" && wireInfo[0] !== "blue" && wireInfo[0] !== "black") {
                throw "Unexpected wire colour, got " + wireInfo[0]
            }

            if (wireInfo[1] !== "a" && wireInfo[1] !== "b" && wireInfo[1] !== "c") {
                throw "Unexpected wire letter, got " + wireInfo[1]
            }
            
            let index
            let rule
            if (wireInfo[0].includes("red")) {
                index = bomb.redCount++
                rule = RED_RULE
            } else if (wireInfo[0].includes("blue")) {
                index = bomb.blueCount++
                rule = BLUE_RULE
            } else if (wireInfo[0].includes("black")) {
                index = bomb.blackCount++
                rule = BLACK_RULE
            }

            solution.push(rule[index].includes(wireInfo[1]) ? true : false)
        });

        if (bomb.stage == 4) {
            // reset
            bomb.reset_sequence()
        }

        return solution
    }

}

export default Sequence