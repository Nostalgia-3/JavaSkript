var fs = require("fs");
var data = "";
var currentTabValue = "";

// Commands

function broadcast(text) {
    data = data + ("\n" + currentTabValue + "broadcast \"" + text + "\"");
}

// EVENTS
function onLoad(func) {
    data = data + "\n\non load:"
    currentTabValue = "    ";
    func();
    currentTabValue = "";
};

function onPlayerJoin (func) {
    data = data + "\n\non player join:"
    currentTabValue = "    ";
    func();
    currentTabValue = "";
}



// FINISH
function finish() {
    fs.writeFileSync("C:/JavaSkript/out/output.sk", data);
    console.log("Finished update of \"output.sk\". DO NOT MAKE MORE LINES OF CODE AFTER THIS AS IT DOES NOT SAVE");
};

module.exports = {broadcast,onLoad,onPlayerJoin,finish};