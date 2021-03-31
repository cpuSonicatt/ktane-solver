# ktane-solver

A JavaScript library to solve the vanilla bomb modules from [Keep Talking and Nobody Explodes](https://keeptalkinggame.com/).


## 📥 Installing

`npm i ktane-solver`


## 📖: Terms

- **Bomb** - the device which holds an amount of modules.
- **Modules** - a device which contains a single, solvable puzzle which needs to be solved by the Defuser.
- **Needy Modules** - a device which contains a single, unsolvable puzzle which needs to be regularly tended to by the Defuser.
- **Stage** - a section or part of a module, indicated by a green LED on the right side of the module.
- **Defuser** - the person that has sole access to the bomb.
- **Expert(s)** - the person/people that has/have sole access to the Bomb Defusal Manual.
- **"bomb check"** - the process of gathering information about the bomb.
- **"display number" or "display letter"** - the big number/letter at the top of some modules.




## 💣 The Bomb object

Some modules require information about the bomb in order to solve.

- `digit: int` - the last digit of the serial code.
- `vowel: boolean` - if the serial code contains a vowel.
- `car: boolean` - if the bomb has a CAR lit indicator.
- `frk: boolean` - if the bomb has a FRK lit indicator.
- `pport: boolean` - if the bomb has a parallel port.
- `batteries: int` - the amount of batteries on the bomb.



**Methods**

- `add_strike()` - Add a strike to the bomb.
- `reset_strikes` - Reset the bomb's strike count.
- `reset_memory()` - Reset the Memory module. This is called automatically after solving the Memory module. 
- `reset_sequence()` - Reset the Sequence module. This is called automatically after solving the Sequence module. 



**Example**

```js
let bomb = new Bomb(2, true, false, true, true, 1)
```
This creates a bomb instance that has:
- A serial code with a vowel, and an even number as the last digit
  - For example: `AWXYZ2`
- No CAR lit indicator
- A FRK lit indicator
- A parallel port
- 1 battery

---

## 🧩: Modules

More information about the modules, as well as how to solve them, can be found at the [Bomb Defusal Manual](https://www.bombmanual.com/).



### ✂️ Wires

**Input**

- `wires: Array<String>` - a String array with each wire colour.
  - Possible colours: `red`, `blue`, `yellow`, `black`, `white`
- `bomb: Object` - an instance of the bomb object.

**Output**

- The index of the wire that should be cut.

**Throws**

- If the amount of wires is incorrect.



**Example**

```javascript
import Bomb from "ktane-solver/bomb"
import Wires from "ktane-solver/wires"

let bomb = new Bomb(2, true, false, false, true, 1)

Wires.solve(["red", "blue", "blue"], bomb)

>> 2
```

---

### 🔴 Button

**Input for part 1**

- `button: String` - a String describing the button's colour and text, in that order.
  - Possible colours: `red`, `blue`, `yellow`, `black`, `white`
  - Possible texts: `abort`, `detonate`, `hold`, `press`
- `bomb: Object` - an instance of the bomb object.

**Output for part 1**

- What the Defuser should with the button after pressing it.
  - `"HOLD"` - the button should be pressed and held.
  - `"RELEASE"` - the button should be pressed and immediately released.

**Throws**

- If either `colour` or `text` are undefined.



**Input for part 2**

- `strip: String` - a String describing the colour of the strip.
  - Possible colours: `red`, `blue`, `yellow`, `white`

**Output for part 2**

- When the button should be released.
  - `"1"` - the button should be released when the countdown timer has a 1 in any position.
  - `"4"` - the button should be released when the countdown timer has a 4 in any position.
  - `"5"` - the button should be released when the countdown timer has a 5 in any position.



**Examples**

*Part 1 example*

```javascript
import Bomb from "ktane-solver/bomb"
import Wires from "ktane-solver/button"

let bomb = new Bomb(2, true, false, false, true, 1)

Button.solve("red detonate", bomb)

>> "HOLD"
```



*Part 2 example*

```js
import Bomb from "ktane-solver/bomb"
import Wires from "ktane-solver/button"

let bomb = new Bomb(2, true, false, false, true, 1)

Button.solve("blue")

>> 4
```

---

### 🔑 Keypad


**Input**
 - `symbols: Array<String>` - a String array with each symbol description
    - A list of [each symbol, and their name, can be found here](./resources/moreinfo.md).

**Output**

- The order at which the symbols should be pressed.

**Throws**

- If exactly 4 symbols aren't passed.
- If any symbol(s) aren't recognised.
- If a solution for the given symbols isn't found.




**Example**
```javascript
import Keypad from "ktane-solver/keypad"

Keypad.solve(["kitty", "curly h", "at", "backwards c"])

>> ["at", "kitty", "curly h", "backwards c"]
```

---

### 💬 Simon Says

**Input**

- `colours: Array<String>`  - a String array with each colour.
  - Possible colours: `red`, `blue`, `yellow`, `green`
- `bomb: Object` - an instance of the bomb object.

**Output**

- The colours that the Defuser should press, in order.



**Example**

```js
import Bomb from "ktane-solver/bomb"
import SimonSays from "ktane-solver/simonsays"

let bomb = new Bomb(2, true, false, false, true, 1)

SimonSays.solve(["red", "red", "blue"], bomb)

>> [ "blue", "blue", "red" ]
```

---

### 🗒️ Who's On First

**Input**

- `word: String` - the display word.

**Output for part 1**

- The position of the word on the module, that should be the input for part 2.
  - Possible positions: `TL` (top left), `TR` (top right), `ML` (middle left), `MR` (middle right), `BL` (bottom left), `BR` (bottom right)

**Throws**

- If a word is unrecognised.



**Input for part 2**

- `word: String` - the word, based on the position output from part 1.

**Output for part 2**

- A list of possible words, in order. The first word that both appears on the list, and on the module, should be pressed by the Defuser.

**Throws**

- If a word is unrecognised.



**Examples**

*Part 1 example*

```js
import WhosOnFirst from "ktane-solver/whosonfirst"

WhosOnFirst.solvePartOne("says")

>> "BR"
```



*Part 2 example*

```js
import WhosOnFirst from "ktane-solver/whosonfirst"

WhosOnFirst.solvePartTwo("right")

>> "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT"
```

---

### 🧠 Memory

**Input**

- `numbers: Array<int>` -  an int array of the module's numbers, starting with the display number, and numbers below, in order from left-to-right.
- `bomb: Object` - an instance of the bomb object.

**Output**

- The label of the button that the Defuser should press.

**Throws**

- If the passed array has more than 5 elements.
- If the passed array contains a number that isn't 1, 2, 3, or 4.



**Notes**

- This module requires knowledge of previous stages, which is held in the bomb object. Make sure to pass the same bomb object in for each stage.



**Example**

```js
import Bomb from "ktane-solver/bomb"
import Memory from "ktane-solver/memory"

let bomb = new Bomb(2, true, false, false, true, 1)

Memory.solve([4,1,3,4,2], bomb)
Memory.solve([3,3,1,2,4], bomb)
Memory.solve([4,3,1,2,4], bomb)
Memory.solve([2,2,4,1,3], bomb)
Memory.solve([2,2,4,1,3], bomb)

>> 2
>> 3
>> 4
>> 2
>> 3
```

 ---

### 💡 Morse Code

**Input**

- `morse: Array<String>` -  a String array of Morse Code characters.

**Output**

- The value of the frequency that the Defuser should press.

**Throws**

- If the translated word doesn't match to a frequency.



**Example**

```js
import Morse from "ktane-solver/morse"

Morse.solve(["dot dot dot", "dot dot dot dot", "dot", "dot dash dot dot", "dot dash dot dot"])

>> 3.505
```

---

### 🐍 Complicated Wires

**Input**

- `wires: Array<String>` - a String array describing the wire colour(s), if there's a star, and if the light is on.
  - Possible colours, up to 2 at once: `red`, `white`, `blue`
- `bomb: Object` an instance of the bomb object.

**Output**

- A list of Booleans describing if each wire should be cut.
  - `true` - cut the wire.
  - `false` - don't cut the wire.

**Throws**

- If a colour is unrecognised.



**Notes**

- If there's no star, you don't need to include "star" in the wire description.

- If the light isn't on, you don't need to include "light" in the wire description.

- The order of each wire description doesn't matter. i.e. `light red star`, `red star light`, and `star light red` are all equivalent and valid inputs.

- The order of each wire colour doesn't matter. i.e. `red blue` and `blue red` are the both equivalent and valid inputs.



**Example**

```js
import Bomb from "ktane-solver/bomb"
import Complicated from "ktane-solver/complicated"

let bomb = new Bomb(2, true, false, false, true, 1)

Complicated.solve(["white star", "red star", "red star", "blue star", "light blue star", "light red white star"], bomb)

>> [ true, true, true, false, false, true ]
```

---

### 🌽 Maze

**Input**

- `ind: Array<int>` - an int array of the position of either green indicator.
- `start: Array<int>` - an int array of the position of the white light.
- `end: Array<int>` - an int array of the position of the red triangle.

**Output**

- A list of directions that the Defuser should input into the module.
  - Possible directions: `UP`, `DOWN`, `LEFT`, `RIGHT`

**Throws**

- If the green indicator is unrecognised.



**Notes**

- Each position counts from 1.
- The position follows the following notation: across first, then down.
- Only one green indicator is required to identify the correct maze.
- This solution uses a modified version of [this maze-solving algorithm](https://stackoverflow.com/a/52146134/12865020). Thank you trincot.



**Example**

```js
import Maze from "ktane-solver/maze"

Maze.solve([3, 5], [6, 4], [1, 5])

>> ['DOWN', 'LEFT', 'UP', 'UP', 'RIGHT', 'UP', 'UP', 'LEFT', 'DOWN', 'LEFT', 'DOWN', 'DOWN', 'DOWN', 'DOWN', 'LEFT', 'LEFT', 'LEFT', 'UP'
]
```

*Based on this maze configuration:*

![](/resources/mazeexample.png)

---

### 🌈 Wire Sequence

**Input**

- `wires: Array<String>` - a String array describing the wire colour, and the letter it routes to.
  - Possible colours: `red`, `black`, `blue`
  - Possible letters: `A`, `B`, `C`
- `bomb: Object` an instance of the bomb object.

**Output**

- A list of Booleans describing if each wire should be cut.
  - `true` - cut the wire.
  - `false` - don't cut the wire.

**Throws**

- If a colour is unrecognised.
- If a letter is unrecognised.



**Notes**

- The number on the left side of the module is not required to solve. 
- This module requires knowledge of previous stages, which is held in the bomb object. Make sure to pass the same bomb object in for each stage.



**Example**

```js
import Bomb from "ktane-solver/bomb"
import Sequence from "ktane-solver/sequence"

let bomb = new Bomb(2, true, false, false, true, 1)

Sequence.solve(["black a", "black b"], bomb)
Sequence.solve(["red c", "red a", "red c"], bomb)
Sequence.solve(["red a"], bomb)
Sequence.solve(["blue b", "red a", "blue b"], bomb)

>> [ true, false ]
>> [ true, false, false ]
>> [ true ]
>> [ true, false, false ]
```

---

### ⌨️ Password

**Input**

- `letters: Array<String>` - a String array describing each letter in each cycle.

**Output**

- The correct password.

**Throws**

- If more than 1 possible password is found.



**Example**

```js
import Password from "ktane-solver/password"

Password.solve(["kqtfhy", "hwjfus", "rinybk", "ynukj", "ipkxvc"])

>> "THINK"
```

---

## 🍞 Needy Modules

Only one module, Knob, requires any logic. Venting Gas, and Capacitor Discharge can be handled by the Defuser.



### 🎛️ Knob

**Input**

- `lights: String` - the condition of each light.
  - `1` - the light is on.
  - `0` - the light is off.

**Output**

- The direction that the knob should be pointed.

**Throws**

- If a light sequence is unrecognised.



**Notes**

- The order should be left-to-right, top-to-bottom.



**Example**

```js
import Knob from "ktane-solver/knob"

Knob.solve("101100111010")

>> RIGHT
```
