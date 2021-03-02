class Complicated {

    static solve(wires, bomb) {
        wires = wires.map(v => v.toLowerCase());
        let solution = []

        let s = bomb.digit % 2 == 0
        let b = bomb.batteries >= 2
        let p = bomb.pport

        wires.forEach(wire => {
            let wireInformation = wire.split(" ")

            let colour
            if (wireInformation.includes("red") && wireInformation.includes("blue")) {
                colour = "red blue"
            } else if ((wireInformation.includes("red") && wireInformation.includes("white")) || wireInformation.includes("red")) {
                colour = "red"
            } else if ((wireInformation.includes("blue") && wireInformation.includes("white")) || wireInformation.includes("blue")) {
                colour = "blue"
            } else {
                throw "Unexpected wire colour, got " + wireInformation
            }

            let light = wireInformation.includes("light")
            let star = wireInformation.includes("star")

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