const {broadcast,onLoad,finish} = require("../src/JavaSkript");


onLoad(() => {
    broadcast("Hello, world!");
});

finish();