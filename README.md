# DISCLAMER
~~This project is has semi-stopped and commits are slowing down. It has **NOT** ended, I am just taking a break.~~ This project has ended. I have lost all of my effor on this project, and althought it was a cool idea, I a lot less skill. Hey, maybe I'll make a refactored, new and improved thing.

# JavaSkript

A library that allows you to code Javascript into Skript (a minecraft plugin that allows you to code).

## How to use JavaSkript
The JavaSkript library is made in one file, the `JavaSkript.js` file, and this file contains all of the code.
An example of a JavaSkript project looks like this:
```javascript
const { onLoad, broadcast} = require("../src/JavaSkript");
onLoad(() => {
    broadcast("Hello World");
})
```
It begins in the onLoad event, this gets compiled to `on load`. It runs the broadcast Effect and gets compiled into `broadcast "text"`. The finish function below compiles the code (and the term 'compile' isn't really a good thing but I am using it) to a file in a folder in the area: `C:/JavaSkript/out/output.sk`.

## Documentation
The documentation is in the wiki area, you can also go through [here](https://github.com/LegotronForce/JavaSkript/wiki/).
