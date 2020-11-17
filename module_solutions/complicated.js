class Complicated {

    static solve(wires, bomb) {
        let solution = ""
        let wiresArr = wires.split(", ")

        let s = bomb.digit % 2 == 0
        let b = bomb.batteries >= 2
        let p = bomb.pport

        wiresArr.forEach(wire => {
            // colour, light, star
            let wireInformation = wire.split(" ")

            let colour
            if (wireInformation.includes("red") && wireInformation.includes("blue")) {
                colour = "red blue"
            } else if (wireInformation.includes("red") && wireInformation.includes("white")) {
                colour = "red"
            } else if (wireInformation.includes("blue") && wireInformation.includes("white")) {
                colour = "blue"
            } else {
                colour = wireInformation[0]
            }

            let light = wireInformation.includes("light")
            let star = wireInformation.includes("star")

            switch (colour) {
                case "white":
                    if (light && star) {
                        solution += b ? "yes" : "no"
                    } else if (light) {
                        solution += "no"
                    } else if (star) {
                        solution += "yes"
                    } else {
                        solution += "yes"
                    }
                    break
                case "red":
                    if (light && star) {
                        solution += b ? "yes" : "no"
                    } else if (light) {
                        solution += b ? "yes" : "no"
                    } else if (star) {
                        solution += "yes"
                    } else {
                        solution += s ? "yes" : "no"
                    }
                    break
                case "blue":
                    if (light && star) {
                        solution += p ? "yes" : "no"
                    } else if (light) {
                        solution += p ? "yes" : "no"
                    } else if (star) {
                        solution += "no"
                    } else {
                        solution += s ? "yes" : "no"
                    }
                    break
                case "red blue":
                    if (light && star) {
                        solution +=  "no"
                    } else if (light) {
                        solution += s ? "yes" : "no"
                    } else if (star) {
                        solution += p ? "yes" : "no"
                    } else {
                        solution += s ? "yes" : "no" 
                    }
                    break
            }
            solution += " "

        })
        console.log(solution)

    }

}

module.exports = Complicated