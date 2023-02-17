import { WOFPosition as Pos,
    WOFDisplayWords as Disp,
    WOFPadWords as Pad } from "./enums/whosonfirst_enums";

export default class WhosOnFirst {

    static solutions = {
        [Pad.READY] : [Pad.YES, Pad.OKAY, Pad.WHAT, Pad.MIDDLE, Pad.LEFT, Pad.PRESS, Pad.RIGHT, Pad.BLANK, Pad.READY],
        [Pad.FIRST] : [Pad.LEFT, Pad.OKAY, Pad.YES, Pad.MIDDLE, Pad.NO, Pad.RIGHT, Pad.NOTHING, Pad.UHHH, Pad.WAIT, Pad.READY, Pad.BLANK, Pad.WHAT, Pad.PRESS, Pad.FIRST],
        [Pad.NO] : [Pad.BLANK, Pad.UHHH, Pad.WAIT, Pad.FIRST, Pad.WHAT, Pad.READY, Pad.RIGHT, Pad.YES, Pad.NOTHING, Pad.LEFT, Pad.PRESS, Pad.OKAY, Pad.NO],
        [Pad.BLANK] : [Pad.WAIT, Pad.RIGHT, Pad.OKAY, Pad.MIDDLE, Pad.BLANK],
        [Pad.NOTHING] : [Pad.UHHH, Pad.RIGHT, Pad.OKAY, Pad.MIDDLE, Pad.YES, Pad.BLANK, Pad.NO, Pad.PRESS, Pad.LEFT, Pad.WHAT, Pad.WAIT, Pad.FIRST, Pad.NOTHING],
        [Pad.YES] : [Pad.OKAY, Pad.RIGHT, Pad.UHHH, Pad.MIDDLE, Pad.FIRST, Pad.WHAT, Pad.PRESS, Pad.READY, Pad.NOTHING, Pad.YES],
        [Pad.WHAT] : [Pad.UHHH, Pad.WHAT],
        [Pad.UHHH] : [Pad.READY, Pad.NOTHING, Pad.LEFT, Pad.WHAT, (Pad.OKAY), Pad.YES, Pad.RIGHT, Pad.NO, Pad.PRESS, Pad.BLANK, Pad.UHHH],
        [Pad.LEFT] : [Pad.RIGHT, Pad.LEFT],
        [Pad.RIGHT] : [Pad.YES, Pad.NOTHING, Pad.READY, Pad.PRESS, Pad.NO, Pad.WAIT, Pad.WHAT, Pad.RIGHT],
        [Pad.MIDDLE] : [Pad.BLANK, Pad.READY, Pad.OKAY, Pad.WHAT, Pad.NOTHING, Pad.PRESS, Pad.NO, Pad.WAIT, Pad.LEFT, Pad.MIDDLE],
        [Pad.OKAY] : [Pad.MIDDLE, Pad.NO, Pad.FIRST, Pad.YES, Pad.UHHH, Pad.NOTHING, Pad.WAIT, Pad.OKAY],
        [Pad.WAIT] : [Pad.UHHH, Pad.NO, Pad.BLANK, Pad.OKAY, Pad.YES, Pad.LEFT, Pad.FIRST, Pad.PRESS, Pad.WHAT, Pad.WAIT],
        [Pad.PRESS] : [Pad.RIGHT, Pad.MIDDLE, Pad.YES, Pad.READY, Pad.PRESS],
        [Pad.YOU] : [Pad.SURE, Pad.YOU_ARE, Pad.YOUR, Pad.YOURE, Pad.NEXT, Pad.UH_HUH, Pad.UR, Pad.HOLD, Pad.WHATQ, Pad.YOU],
        [Pad.YOU_ARE] : [Pad.YOUR, Pad.NEXT, Pad.LIKE, Pad.UH_HUH, Pad.WHATQ, Pad.DONE, Pad.UH_UH, Pad.HOLD, Pad.YOU, Pad.U, Pad.YOURE, Pad.SURE, Pad.UR, Pad.YOU_ARE],
        [Pad.YOUR] : [Pad.UH_UH, Pad.YOU_ARE, Pad.UH_HUH, Pad.YOUR],
        [Pad.YOURE] : [Pad.YOU, Pad.YOURE],
        [Pad.UR] : [Pad.DONE, Pad.U, Pad.UR],
        [Pad.U] : [Pad.UH_HUH, Pad.SURE, Pad.NEXT, Pad.WHATQ, Pad.YOURE, Pad.UR, Pad.UH_UH, Pad.DONE, Pad.U],
        [Pad.UH_HUH] : [Pad.UH_HUH],
        [Pad.UH_UH] : [Pad.UR, Pad.U, Pad.YOU_ARE, Pad.YOURE, Pad.NEXT, Pad.UH_UH],
        [Pad.WHATQ] : [Pad.YOU, Pad.HOLD, Pad.YOURE, Pad.YOUR, Pad.U, Pad.DONE, Pad.UH_UH, Pad.LIKE, Pad.YOU_ARE, Pad.UH_HUH, Pad.UR, Pad.NEXT, Pad.WHATQ],
        [Pad.DONE] : [Pad.SURE, Pad.UH_HUH, Pad.NEXT, Pad.WHATQ, Pad.YOUR, Pad.UR, Pad.YOURE, Pad.HOLD, Pad.LIKE, Pad.YOU, Pad.U, Pad.YOU_ARE, Pad.UH_UH, Pad.DONE],
        [Pad.NEXT] : [Pad.WHATQ, Pad.UH_HUH, Pad.UH_UH, Pad.YOUR, Pad.HOLD, Pad.SURE, Pad.NEXT],
        [Pad.HOLD] : [Pad.YOU_ARE, Pad.U, Pad.DONE, Pad.UH_UH, Pad.YOU, Pad.UR, Pad.SURE, Pad.WHATQ, Pad.YOURE, Pad.NEXT, Pad.HOLD],
        [Pad.SURE] : [Pad.YOU_ARE, Pad.DONE, Pad.LIKE, Pad.YOURE, Pad.YOU, Pad.HOLD, Pad.UH_HUH, Pad.UR, Pad.SURE],
        [Pad.LIKE] : [Pad.YOURE, Pad.NEXT, Pad.U, Pad.UR, Pad.HOLD, Pad.DONE, Pad.UH_UH, Pad.WHATQ, Pad.UH_HUH, Pad.YOU, Pad.LIKE]
    }

    static solve(display: Disp, padWords: Pad[]): Pad {
        let position = this.solveForPosition(display)
        let possible = this.solveForWords(padWords[Object.keys(Pos).indexOf(position)])
        return possible.filter(w => padWords.includes(w))[0]
    }

    static solveForPosition(word: Disp): Pos {
        switch(word) {
            case Disp.UR:
                return Pos.TOP_LEFT
            case Disp.FIRST: case Disp.OKAY: case Disp.C:
                return Pos.TOP_RIGHT
            case Disp.YES: case Disp.NOTHING: case Disp.THEY_ARE: case Disp.LED:
                return Pos.MIDDLE_LEFT
            case Disp.BLANK: case Disp.READ: case Disp.RED: case Disp.YOU: case Disp.YOUR: case Disp.YOURE: case Disp.THEIR:
                return Pos.MIDDLE_RIGHT
            case Disp._EMPTY: case Disp.REED: case Disp.LEED: case Disp.THEYRE:
                return Pos.BOTTOM_LEFT
            case Disp.DISPLAY: case Disp.SAYS: case Disp.NO: case Disp.LEAD: case Disp.HOLD_ON: case Disp.YOU_ARE: case Disp.THERE: case Disp.SEE: case Disp.CEE:
                return Pos.BOTTOM_RIGHT
        }
    }

    static solveForWords(word: Pad): Pad[] {
        return this.solutions[word]
    }
}