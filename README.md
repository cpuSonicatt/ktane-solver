# KTaNE Bomb Expert

A collection of JavaScript files to solve bomb module from Keep Talking and Nobody Explodes.



At some point, when browsers finally implement their Web Speech API, this project will accept speech commands and speak solutions to the modules. In most cases, `<Module>.solve()` input parameters equate to voice input, and `console.log()` calls equate to voice output.



## Bomb

In order to solve some modules, information about the bomb is required:

- The last digit in the serial code;
- If the serial code has a vowel;
- If the bomb has a CAR lit indicator;
- If the bomb has a FRK lit indicator;
- If the bomb has a parallel port;
- How many batteries the bomb has.
- 

The method `Bomb.bomb_check()` will return an instance of the bomb object. This would be where the user would speak the information about the bomb.



## Modules

Each module has a `<Module>.solve()` method which displays the solution to the module to the console (for now).



### Wires

##### Description

The Wires module contains between 3 and 6 wires coloured red, blue, yellow, white, or black. One wire must be cut in order to solve the module.



##### Input

- `wires: String` - a String with each wire colour, delimited by a space
- `bomb: Object` - an instance of the bomb object



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

The Button module contains a button colour, and button text. Depending on the colour and text, the button should either be release immediately, or if the button needs to be held, released when the timer has a number in any position.



##### Input

- `colour: String` - the colour of the button

- `text: String` - the text written on the button

- `bomb: Object` - an instance of the bomb object

  

Example

```javascript
const Button = require("./module_solutions/button.js")

let bomb = Bomb.bomb_check()

Button.solve("red", "detonate", bomb)
```

```shell
>> Press and release
```



### Keypad

##### Description

The Keypad module contains 4 weirdly-shaped symbols which needs to be pressed in the right order.



##### Input



##### Example



### Simon Says

##### Input

##### Example



### Who's On First

##### Input

##### Example



### Memory

##### Input

##### Example



### Morse

##### Input

##### Example



### Complicated Wires

##### Input

##### Example



### Maze

##### Input

##### Example



### Wire Sequence

##### Input

##### Example



### Password

##### Input

##### Example



## Needy Modules

Only one module, Knob, requires any logic. Venting Gas, and Capacitor Discharge can be "solved" by the defuser.

### Knob

##### Input

##### Example