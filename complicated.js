import Bomb from "./bomb.js"

class Complicated {

    static solve(wires, bomb) {
        wires = wires.map(v => v.toLowerCase());
        let solution = []

        let s = bomb.digit % 2 == 0
        let b = bomb.batteries >= 2
        let p = bomb.pport

        wires.forEach(wire => {
            let colour

            // mixed white colour not required to know to solve
            if (wire.includes("red") && wire.includes("blue")) {
                colour = "red blue"
            } else if ((wire.includes("red") && wire.includes("white")) || wire.includes("red")) {
                colour = "red"
            } else if ((wire.includes("blue") && wire.includes("white")) || wire.includes("blue")) {
                colour = "blue"
            } else if (wire.includes("white")) {
                colour = "white"
            } else {
                throw "Unexpected wire colour, got " + wire
            }

            let light = wire.includes("light")
            let star = wire.includes("star")

            switch (colour) {
                case "white":
                    if (light && star) {
                        solution.push(b ? true : false)
                    } else if (light) {
                        solution.push(false)
                    } else if (star) {
                        solution.push(true)
                    } else {
                        solution.push(true)
                    }
                    break
                case "red":
                    if (light && star) {
                        solution.push(b ? true : false)
                    } else if (light) {
                        solution.push(b ? true : false)
                    } else if (star) {
                        solution.push(true)
                    } else {
                        solution.push(s ? true : false)
                    }
                    break
                case "blue":
                    if (light && star) {
                        solution.push(p ? true : false)
                    } else if (light) {
                        solution.push(p ? true : false)
                    } else if (star) {
                        solution.push(false)
                    } else {
                        solution.push(s ? true : false)
                    }
                    break
                case "red blue":
                    if (light && star) {
                        solution.push(false)
                    } else if (light) {
                        solution.push(s ? true : false)
                    } else if (star) {
                        solution.push(p ? true : false)
                    } else {
                        solution.push(s ? true : false )
                    }
                    break
            }
            

        })
        return solution

    }

}

export default Complicated