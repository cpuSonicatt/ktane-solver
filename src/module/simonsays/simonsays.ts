import Bomb from "../../bomb";
import { SimonSaysColour as S } from "./enums/simonsays_enums";

export default class SimonSays {

    static translateVowel: Function = (s: number): S[] => {
        switch (s) {
            case 0:
                return [
                        S.RED,
                    S.BLUE, S.GREEN,
                        S.YELLOW
                    ]
            case 1:
                return [
                        S.GREEN,
                    S.YELLOW, S.RED,
                        S.BLUE
                ]
            case 2:
                return [
                        S.YELLOW,
                    S.BLUE, S.GREEN,
                        S.RED
                ]
        }
    }

    static translateNoVowel: Function = (s: number) => {
        switch (s) {
            case 0:
                return [
                        S.YELLOW,
                    S.BLUE, S.RED,
                        S.GREEN
                    ]
            case 1:
                return [
                        S.BLUE,
                    S.RED, S.GREEN,
                        S.YELLOW
                ]
            case 2:
                return [
                        S.GREEN,
                    S.YELLOW, S.RED,
                        S.BLUE
                ]
        }
    }

    static solve(colours: S[], bomb: Bomb) {

        let { vowel, strikes } = bomb
        let solution: S[] = []
        let board = vowel ? this.translateVowel(strikes) : this.translateNoVowel(strikes)
        
        colours.forEach(colour => {
            switch (colour) {
                case S.BLUE:
                    solution.push(board[0])
                    break
                case S.RED:
                    solution.push(board[1])
                    break
                case S.YELLOW:
                    solution.push(board[2])
                    break
                case S.GREEN:
                    solution.push(board[3])
                    break
            }
        })
        return solution
    }
}