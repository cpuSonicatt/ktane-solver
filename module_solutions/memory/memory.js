// todo: stop being stupid

class Memory {

    static solve(numbers, bomb) {
        let toPress = ""
        let numberArr = numbers.split("")

        let pos = 0
        let label = 0

        let topNumber = numberArr[0]
        numberArr.shift() // [1, 2, 3, 4]
        bomb.memoryStage++
        
        switch(bomb.memoryStage) {
            case 1:
                if (topNumber == 1) {
                    toPress = numberArr[1]

                } else if (topNumber == 2) {
                    toPress = numberArr[1]

                } else if (topNumber == 3) {
                    toPress = numberArr[2]

                } else if (topNumber == 4) {
                    toPress = numberArr[3]

                }
                break;

            case 2:
                if (topNumber == 1) {
                    toPress = "4"

                } else if (topNumber == 2) {
                    toPress = numberArr[bomb.memoryHistory[0].p]

                } else if (topNumber == 3) {
                    toPress = numberArr[0]

                } else if (topNumber == 4) {
                    toPress = numberArr[bomb.memoryHistory[0].p]

                }
                break;

            case 3:
                if (topNumber == 1) {
                    toPress = bomb.memoryHistory[1].l

                } else if (topNumber == 2) {
                    toPress = bomb.memoryHistory[0].l

                } else if (topNumber == 3) {
                    toPress = numberArr[2]
                   
                } else if (topNumber == 4) {
                    toPress = "4"
                   
                }
                break;

            case 4:
                if (topNumber == 1) {
                    toPress = numberArr[bomb.memoryHistory[0].p]

                } else if (topNumber == 2) {
                    toPress = numberArr[0]

                } else if (topNumber == 3) {
                    toPress = numberArr[bomb.memoryHistory[1].p]

                } else if (topNumber == 4) {
                    toPress = numberArr[bomb.memoryHistory[1].p]

                }
                break; 

            case 5:
                this.stage = 0
                if (topNumber == 1) {
                    toPress = bomb.memoryHistory[0].l

                } else if (topNumber == 2) {
                    toPress = bomb.memoryHistory[1].l

                } else if (topNumber == 3) {
                    toPress = bomb.memoryHistory[2].l

                } else if (topNumber == 4) {
                    toPress = bomb.memoryHistory[3].l

                }

                break;
        }

        bomb.memoryHistory.push({l: parseInt(toPress), p: numberArr.indexOf(toPress)})

        console.log("Press " + toPress)
    }
}

module.exports = Memory