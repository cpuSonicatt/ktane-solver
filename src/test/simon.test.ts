import Bomb from "../bomb"
import { SimonSaysColour } from "../module/simonsays/enums/simonsays_enums"

describe("Simon Says Module", () => {
    test("Valid solution, 0 strikes", () => {
        let vowelBomb = new Bomb(null, true)
        let noVowelBomb = new Bomb(null, false)

        expect(vowelBomb.solveSimonSays([SimonSaysColour.RED, SimonSaysColour.RED, SimonSaysColour.BLUE]))
        .toEqual([SimonSaysColour.BLUE, SimonSaysColour.BLUE, SimonSaysColour.RED])

        expect(noVowelBomb.solveSimonSays([SimonSaysColour.RED, SimonSaysColour.RED, SimonSaysColour.BLUE]))
        .toEqual([SimonSaysColour.BLUE, SimonSaysColour.BLUE, SimonSaysColour.YELLOW])
    })

    test("Valid solution, 1 strike", () => {
        let vowelBomb = new Bomb(null, true)
        let noVowelBomb = new Bomb(null, false)

        vowelBomb.strikes = 1
        noVowelBomb.strikes = 1

        expect(vowelBomb.solveSimonSays([SimonSaysColour.RED, SimonSaysColour.RED, SimonSaysColour.BLUE]))
        .toEqual([SimonSaysColour.YELLOW, SimonSaysColour.YELLOW, SimonSaysColour.GREEN])

        expect(noVowelBomb.solveSimonSays([SimonSaysColour.RED, SimonSaysColour.RED, SimonSaysColour.BLUE]))
        .toEqual([SimonSaysColour.RED, SimonSaysColour.RED, SimonSaysColour.BLUE])
    })

    test("Valid solution, 2 strikes", () => {
        let vowelBomb = new Bomb(null, true)
        let noVowelBomb = new Bomb(null, false)

        vowelBomb.strikes = 2
        noVowelBomb.strikes = 2

        expect(vowelBomb.solveSimonSays([SimonSaysColour.RED, SimonSaysColour.RED, SimonSaysColour.BLUE]))
        .toEqual([SimonSaysColour.BLUE, SimonSaysColour.BLUE, SimonSaysColour.YELLOW])

        expect(noVowelBomb.solveSimonSays([SimonSaysColour.RED, SimonSaysColour.RED, SimonSaysColour.BLUE]))
        .toEqual([SimonSaysColour.YELLOW, SimonSaysColour.YELLOW, SimonSaysColour.GREEN])
    })
})