redRule = ["c", "b", "a", "ac", "b", "ac", "abc", "ab", "b"]

blueRule = ["b", "ac", "b", "a", "b", "bc", "c", "ac", "a"]

blackRule = ["abc", "ac", "b", "ac", "b", "bc", "ab", "c", "c"]

class Sequence {

    static solve(wires, bomb) {
        
        let solution = ""
        bomb.sequenceStage++
        let wireArr = wires.split(", ")
        wireArr.forEach(wire => {
            let wireInfo = wire.split(" ")
            
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
            solution += (check_rule(rule[index], wireInfo[1]) ? "yes" : "no") + " "
        });
        console.log(solution)

        if (bomb.stage == 4) {
            // reset
            bomb.reset_sequence()
        }
    }

}

function check_rule(rule, wire) {
    for (let letter of rule.split("")) {
        if (wire.includes(letter)) {
            return true
        }
    }
    return false
}

module.exports = Sequence