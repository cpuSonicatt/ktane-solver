# KTaNE Bomb Expert

A collection of JavaScript files to solve bomb modules from [Keep Talking and Nobody Explodes](https://keeptalkinggame.com/).



At some point, [when browsers finally implement their Web Speech API](https://platform-status.mozilla.org/#webspeech-recognition), this project will accept speech commands and speak solutions to the modules. In most cases, `<Module>.solve()` input parameters equate to voice input, and `console.log()` calls equate to voice output. In examples, a hash (#) equates to the user input.



## Terms

- **Bomb** - the device which holds an amount of modules.
- **Modules** - a device which contains a single, solvable puzzle which needs to be solved by the Defuser.
- **Needy Modules** - a device which contains a single, unsolvable puzzle which needs to be regularly tended to by the Defuser.
- **Stage** - a section or part of a module, indicated by a green LED on the right side of the module.
- **Defuser** - the person which has sole access to the bomb.
- **Expert** - the person/people which has sole access to the Bomb Defusal Manual.
- **"bomb check"** - the process of gathering information about the bomb.
- **"display number" or "display letter"** - the big number/letter at the top of some modules.




## Bomb

In order to solve some modules, information about the bomb is required:

- The last digit in the serial code.
- If the serial code has a vowel.
- If the bomb has a CAR lit indicator.
- If the bomb has a FRK lit indicator.
- If the bomb has a parallel port.
- How many batteries the bomb has.

The method `Bomb.bomb_check()` will return an instance of the bomb object. This would be where the user would speak the information about the bomb.



## Modules

Each module has a `<Module>.solve()` method which displays the solution to the module to the console (for now). More information about the modules, as well as how to solve them, can be found at the [Bomb Defusal Manual](https://www.bombmanual.com/)



### Wires

##### Description

The Wires module contains between 3 and 6 wires coloured red, blue, yellow, white, or black. One wire must be cut in order to solve the module.



##### Input

- `wires: String` - a String with each wire colour, delimited by a space.
- `bomb: Object` - an instance of the bomb object.



##### Example

```javascript
const Wires = require("./module_solutions/wire.js")

let bomb = Bomb.bomb_check()

Wires.solve("red blue blue", bomb)
```

```shell
>> Cut 3rd
```



 ### Button

##### Description

The Button module has a colour and text which determines when the button should be released.

This module contains a mocked user input. In this case, it is the colour of the strip after holding the button.

##### Input

- `colour: String` - the colour of the button.

- `text: String` - the text written on the button.

- `bomb: Object` - an instance of the bomb object.

  

**Examples**

Press and release example.

```javascript
const Button = require("./module_solutions/button.js")

let bomb = Bomb.bomb_check()

Button.solve("red", "detonate", bomb)
```

```shell
>> Press and release
```



Press and hold example.

```js
const Button = require("./module_solutions/button.js")

let bomb = Bomb.bomb_check()

Button.solve("blue", "abort", bomb)
```

```shell
>> Press and hold
#blue
>> 4 in any position
```



### Keypad

##### Description

The Keypad module contains 4 symbols which must be pressed in the right order.


##### Input
 - `symbols: String` - a String with each symbol description, delimited by a comma and a space.




##### Example
```javascript
const Keypad = require("./module_solutions/keypad.js")

Keypad.solve("cat, curly h, at, backwards c")
```

```shell
>> at, cat, curly h, backwards c
```



### Simon Says

##### Description

The Simon Says module contains 4 coloured buttons (red, blue, yellow, and green) which must be pressed given the correct colour mapping.



##### Input

- `colours: String`  - a String with each colour, delimited by a space.
- `bomb: Object` - an instance of the bomb object.



##### Example

```js
const SimonSays = require("./module_solutions/simonsays.js")

let bomb = Bomb.bomb_check()

SimonSays.solve("red red blue", bomb)
```

```shell
>> blue blue red
```



### Who's On First

**Description**

The Who's On First module contains 6 labelled buttons; one of which should be pressed depending on both the top display word, and the label of one of the 6 buttons.

This module contains a mocked user input. In this case, it is the word based on the position as requested by the Expert.

##### Input

- `word: String` - the display word.



##### Example

```js
const WhosOnFirst = require("./module_solutions/whosonfirst.js")

WhosOnFirst.solve("says")
```

```shell
>> Bottom right
#right
>> YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST
```



### Memory

**Description**

The Memory module contains 4 labelled buttons; one of which should be pressed depending on both the top display number, and the position or label from previous stages.

This module requires continuous calls in order to function properly, as information from previous stages are required to solve this module.

##### Input

- `numbers: String` -  a String of the numbers, starting with the display number, and numbers below, in order from left-to-right.
- `bomb: Object` - an instance of the bomb object.



##### Example

```js
const Memory = require("./module_solutions/memory.js")

let bomb = Bomb.bomb_check()

Memory.solve("41342", bomb)
Memory.solve("33124", bomb)
Memory.solve("43124", bomb)
Memory.solve("22413", bomb)
Memory.solve("22413", bomb)
```

```shell
>> Press 2
>> Press 3
>> Press 4
>> Press 2
>> Press 3
```



### Morse Code

**Description**

The Morse Code module contains a blinking light which spells a word in [Morse Code](https://en.wikipedia.org/wiki/Morse_code), which translates to a frequency.



##### Input

- `morse: String` -  a String of Morse Code characters, delimited by a comma and a space.



##### Example

```js
const Morse = require("./module_solutions/morse.js")

Morse.solve("dot dot dot, dot dot dot dot, dot, dot dash dot dot, dot dash dot dot")
```

```shell
>> 3.505 MHz
```



### Complicated Wires

**Description**

The Complicated Wires module contains 6 wires with 3 different attributes (colour, star, and LED). Any amount of wires on this module may be cut in order to solve.



##### Input

- `wires: String` - a String containing the wire colour(s), if there's a star, and if the light is on, delimited by a comma and a space. If there is no star, or the light is not on, then do not include "star" or "light" in the string respectively.
- `bomb: Object` an instance of the bomb object.



##### Example

```js
const Complicated = require("./module_solutions/complicated.js")

let bomb = Bomb.bomb_check()

Complicated.solve("white star, red star, red star, blue star, blue light star, red white light star", bomb)
```

```shell
>> yes yes yes no no yes
```





### Maze (work in progress)

**Description**

The Maze module contains a maze with invisible walls, white light that the Defuser controls, a red triangle that the white light must get to, and two green circles.

(this module sucks, i hate it, my brain can't deal with 2D arrays lol)

##### Input

_work in progress_



##### Example

_work in progress_



### Wire Sequence

**Description**

The Wire Sequence module contains between 4 and 12 coloured wires that route to letters. Any amount of wires on this module may be cut in order to solve.

This module requires continuous calls in order to function properly, as information from previous stages are required to solve this module.



##### Input

- `wires: String` - A String containing the wire colour, and the letter it routes to, delimited by a comma and a space.
- `bomb: Object` an instance of the bomb object.



**Example**

```js
const Sequence = require("./module_solutions/sequence.js")

let bomb = Bomb.bomb_check()

Sequence.solve("black a, black b", bomb)
Sequence.solve("red c, red a, red c", bomb)
Sequence.solve("red a", bomb)
Sequence.solve("blue b, red a, blue b", bomb)
```

```shell
>> yes no 
>> yes no no 
>> yes 
>> yes no no 
```



### Password

**Description**

The Password module contains a row of 5 letters; each letter can be cycled through.



**Input**

- `letters: String` - a String containing each letter in the cycle, delimited by a comma and a space.



##### Example

```js
const Password = require("./module_solutions/password.js")

Password.solve("kqtfhy, hwjfus, rinybk, ynukj, ipkxvc")
```

```shell
>> think
```





## Needy Modules

Only one module, Knob, requires any logic. Venting Gas, and Capacitor Discharge can be "solved" by the Defuser.



### Knob

**Description**

The Knob module contains a knob, and 12 lights which dictates which direction the knob should point.



##### Input

- `lights: String` - the condition of each light (1 for on; 0 for off), top-to-bottom, left-to-right.



##### Example

```js
const Knob = require("./module_solutions/knob.js")

Knob.solve("101100111010")
```

```shell
>> Right
```





todo:

- two images/GIFs of each module for the example
  - before solving
  - after solving

- images for any graphical modules (Keypad for example)
