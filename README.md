# JavaSkript

A library that allows you to code Javascript into Skript (a minecraft plugin that allows you to code).

## How to use JavaSkript
The JavaSkript library is made in one file, the `JavaSkript.js` file, and this file contains all of the code.
An example of a JavaSkript project looks like this:
```javascript
const { onLoad, broadcast,finish } = require("../src/JavaSkript");
onLoad(() => {
    broadcast("Hello World");
})

finish();
```
It begins in the onLoad event, this gets compiled to `on load`. It runs the broadcast Effect and gets compiled into `broadcast "text"`. The finish function below compiles the code (and the term 'compile' isn't really a good thing but I am using it) to a file in a folder in the area: `C:/JavaSkript/out/output.sk`.

## Documentation
The documentation is in the wiki area, you can also go through [here](github.com/LegotronForce/JavaSkript/Home].
