
class Memory {

    static solve(numbers, bomb) {
        let toPress = ""

        if (numbers.length != 5) {
            throw "Expected array length of 5, got " + numbers.length
        }

        if (!numbers.includes([1,2,3,4])) {
            throw "Unexpected number, got " + numbers.filter(x => x > 4)
        }

        let topNumber = numbers[0]
        numbers.shift() // [1, 2, 3, 4]
        bomb.memoryStage++
        
        switch(bomb.memoryStage) {
            case 1:
                if (topNumber == 1) {
                    toPress = numbers[1]
                } else if (topNumber == 2) {
                    toPress = numbers[1]
                } else if (topNumber == 3) {
                    toPress = numbers[2]
                } else if (topNumber == 4) {
                    toPress = numbers[3]
                }
                break;

            case 2:
                if (topNumber == 1) {
                    toPress = 4
                } else if (topNumber == 2) {
                    toPress = numbers[bomb.memoryHistory[0].p]
                } else if (topNumber == 3) {
                    toPress = numbers[0]
                } else if (topNumber == 4) {
                    toPress = numbers[bomb.memoryHistory[0].p]
                }
                break;

            case 3:
                if (topNumber == 1) {
                    toPress = bomb.memoryHistory[1].l
                } else if (topNumber == 2) {
                    toPress = bomb.memoryHistory[0].l
                } else if (topNumber == 3) {
                    toPress = numbers[2]
                } else if (topNumber == 4) {
                    toPress = 4
                }
                break;

            case 4:
                if (topNumber == 1) {
                    toPress = numbers[bomb.memoryHistory[0].p]
                } else if (topNumber == 2) {
                    toPress = numbers[0]
                } else if (topNumber == 3) {
                    toPress = numbers[bomb.memoryHistory[1].p]
                } else if (topNumber == 4) {
                    toPress = numbers[bomb.memoryHistory[1].p]
                }
                break; 

            case 5:
                if (topNumber == 1) {
                    toPress = bomb.memoryHistory[0].l
                } else if (topNumber == 2) {
                    toPress = bomb.memoryHistory[1].l
                } else if (topNumber == 3) {
                    toPress = bomb.memoryHistory[3].l
                } else if (topNumber == 4) {
                    toPress = bomb.memoryHistory[2].l
                }
                break;
        }

        bomb.memoryHistory.push({l: parseInt(toPress), p: numbers.indexOf(toPress)})
        if (bomb.memoryStage == 5) {
            bomb.reset_memory()
        }
        return toPress
    }
}

export default Memory