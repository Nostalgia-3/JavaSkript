const {broadcast,onLoad,finish} = require("../src/JavaSkript-new-features");


onLoad(() => {
    broadcast("Hello, world!");
});

finish();