const {onLoad, broadcast, ban, unban, finish} = require("../src/JavaSkript");


onLoad(() => {
    broadcast("Hello, world!");
});

finish();