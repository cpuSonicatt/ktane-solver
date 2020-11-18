const Bomb = require("./bomb.js")

const Wires = require("./module_solutions/wire/wire.js")
const Button = require("./module_solutions/button/button.js")
const Keypad = require("./module_solutions/keypad/keypad.js")
const SimonSays = require("./module_solutions/simonsays/simonsays.js")
const WhosOnFirst = require("./module_solutions/whosonfirst/whosonfirst.js")
const Memory = require("./module_solutions/memory/memory.js")
const Morse = require("./module_solutions/morse/morse.js")
const Complicated = require("./module_solutions/complicated/complicated.js")
const Maze = require("./module_solutions/maze/maze.js")
const Sequence = require("./module_solutions/sequence/sequence.js")
const Password = require("./module_solutions/password/password.js")
const Knob = require("./module_solutions/knob/knob.js")



let bomb = Bomb.bomb_check()

// Wires.solve("red blue blue", bomb)

// Button.solve("red", "detonate", bomb)
// Button.solve("blue", "abort", bomb)


// SimonSays.solve("red red blue", bomb)

// Keypad.solve("cat, curly h, at, backwards c")

// WhosOnFirst.solve("says")

// Memory.solve("41342", bomb)
// Memory.solve("33124", bomb)
// Memory.solve("43124", bomb)
// Memory.solve("22413", bomb)
// Memory.solve("22413", bomb)

// Morse.solve("dot dot dot, dot dot dot dot, dot, dot dash dot dot, dot dash dot dot")

// Complicated.solve("white star, red star, red star, blue star, blue light star, red white light star", bomb)

// Sequence.solve("black a, black b", bomb)
// Sequence.solve("red c, red a, red c", bomb)
// Sequence.solve("red a", bomb)
// Sequence.solve("blue b, red a, blue b", bomb)

// down first, then along
Maze.solve([0,1], [2,2], [0,1])

// Password.solve("kqtfhy, hwjfus, rinybk, ynukj, ipkxvc")

// Knob.solve("101100111010")


/* todo:
- "grammars" for all modules
*/