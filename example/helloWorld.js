const {onLoad, broadcast, finish} = require("../src/JavaSkript");


onLoad(() => {
    broadcast("Hello, world!");
});