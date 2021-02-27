const redRule = ["c", "b", "a", "ac", "b", "ac", "abc", "ab", "b"]

const blueRule = ["b", "ac", "b", "a", "b", "bc", "c", "ac", "a"]

const blackRule = ["abc", "ac", "b", "ac", "b", "bc", "ab", "c", "c"]

class Sequence {

    static solve(wires, bomb) {
        
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
                rule = redRule
            } else if (wireInfo[0].includes("blue")) {
                index = bomb.blueCount++
                rule = blueRule
            } else if (wireInfo[0].includes("black")) {
                index = bomb.blackCount++
                rule = blackRule
            }

            for (let letter of rule[index].split("")) {
                solution.push(wireInfo[1].includes(letter) ? true : false)
            }
        });

        if (bomb.stage == 4) {
            // reset
            bomb.reset_sequence()
        }

        return solution
    }

}

module.exports = Sequence