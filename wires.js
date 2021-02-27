class Wires {

    static solve(wires, bomb) {
        wires.count = function(element) {
            return wires.filter(n => n === element).length
        }
        let isOdd = bomb.digit % 2 != 0
        switch (wires.length) {
            case 3:
                if (!wires.includes("red")) {
                    return 1
                } else if (wires[2] === "white") {
                    return 2
                } else if (wires.count("blue") > 1) {
                    return wires.lastIndexOf("blue")
                } else {
                    return 2
                }
            case 4:
                if (wires.count("red") > 1 && isOdd) {
                    return wires.lastIndexOf("red")
                } else if (wires[3] === "yellow" && wires.count("red") == 0) {
                    return 0
                } else if (wires.count("blue") == 1) {
                    return 0
                } else if (wires.count("yellow") > 1) {
                    return 3
                } else {
                    return 1
                }
            case 5:
                if (wires[4] === "black" && isOdd) {
                    return 3
                } else if (wires.count("red") == 1 && wires.count("yellow") > 1) {
                    return
                } else if (!wires.includes("black")) {
                    return 1
                } else {
                    return 0
                }
            case 6:
                if (!wires.includes("yellow") && isOdd) {
                    return 2
                } else if (wires.count("yellow") == 1 && wires.count("white") > 1) {
                    return 3
                } else if (!wires.includes("red")) {
                    return 5
                } else {
                    return 3
                }
            default:
                throw "Expected between 3 and 6 wires, got " + wires.length
        }
    } 
}

module.exports = Wires