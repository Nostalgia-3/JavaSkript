const {broadcast,onLoad} = require("../src/JavaSkript");


onLoad(() => {
    broadcast("Hello, world!");
});
