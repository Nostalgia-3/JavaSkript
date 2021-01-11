# JS-TO-SK

A library that allows you to code Javascript into Skript (a minecraft plugin that allows you to code).

## How to use JS-TO-SK
The entire JS-TO-SK project is made inside of two files, the `compiler.js` and the `classes.js`. This will be the case for most of the time, but may go multi-file in the future. Anyways, to begin you need to require the `classes.js`, you can do this by simply typing in

```javascript
const {io,eventSystem} = require("./classes.js");
```

You see here that we get the `io` and `eventSystem` classes from the file, these are essential as they make it so you can use the `tell` and `broadcast` as well as the `on join` event and many others.

