# JavaSkript
## How to add an event
An Event in Skript is something that happens, it triggers code by adding a callback in a function. This is how you do it:

```js
function onSomething(func) {
    addToData(`on something:`);
    addToTab();
    func();
    takeFromTab();
}
```

then add the `onSomething` to the `module.exports`. The code below is how to do it
```js
module.exports = {
    onSomething
}
```

***
This is really important if you ever want to add something to it and as always, thank you for reading.
