const {onLoad, broadcast, ban, unban, finish} = require("../src/JavaSkript");


onLoad(() => {
    broadcast("Hello, world!");
    ban("notch","being the creator of minecraft","10 days");
    unban("notch");
});

finish();