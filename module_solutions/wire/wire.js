class Wires {

    static solve(wires, bomb) {
        let wiresArr = wires.split(" ")
        wiresArr.count = function(element) {
            return wiresArr.filter(n => n === element).length
        }
        let isOdd = bomb.digit % 2 != 0
        switch (wiresArr.length) {
            case 3:
                if (!wiresArr.includes("red")) {
                    console.log("Cut 2nd")

                } else if (wiresArr[2] === "white") {
                    console.log("Cut 3rd")

                } else if (wiresArr.count("blue") > 1) {
                    console.log("Cut " + ordinal_suffix_of(wiresArr.lastIndexOf("blue") + 1))

                } else {
                    console.log("Cut 3rd")
                }
                break;
            case 4:
                if (wiresArr.count("red") > 1 && isOdd) {
                console.log("Cut " + ordinal_suffix_of(wiresArr.lastIndexOf("red") + 1))

                } else if (wiresArr[3] === "yellow" && wiresArr.filter(n => n === "red").length == 0) {
                    console.log("Cut 1st")

                } else if (wiresArr.filter(n => n === "blue").length == 1) {
                    console.log("Cut 1st")

                } else if (wiresArr.filter(n => n === "yellow").length > 1) {
                    console.log("Cut 4th")

                } else {
                    console.log("Cut 2nd")
                }
                break;
            case 5:
                if (wiresArr[4] === "black" && isOdd) {
                    console.log("Cut 4th")
                } else if (wiresArr.count("red") == 1 && wiresArr.count("yellow") > 1) {
                    console.log("Cut 1st")
                } else if (!wiresArr.includes("black")) {
                    console.log("Cut 2nd")
                } else {
                    console.log("Cut 1st")
                }
                break;
            case 6:
                if (!wiresArr.includes("yellow") && isOdd) {
                    console.log("Cut 3rd")
                } else if (wiresArr.filter(n => n === "yellow").length == 1 && wiresArr.filter(n => n === "white").length > 1) {
                    console.log("Cut 4th")
                } else if (!wiresArr.includes("red")) {
                    console.log("Cut 6th")
                } else {
                    console.log("Cut 4th")
                }
                break;
        }
    } 
}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}


module.exports = Wires