var fs = require("fs");
var data = "";
var currentTabValue = "";

// EFFECTS
function broadcast(text) {
    data = data + ("\n" + currentTabValue + "broadcast \"" + text + "\"");
}

function branch(num,func) {
    for(var x = 0; x<num;x++) {
        func();
    }
}

function ban(player,reason=null,time=null) {
    let banMessage = `ban ${player} `;

    if (reason !=null) {
        banMessage = banMessage + `due to "${reason}"`;
    }
    if (time != null) {
        banMessage = banMessage + ` for ${time}`;
    }
    
    console.log(`ban-effect found: banMessage:${banMessage}, currentTabValue:${currentTabValue.length}`);

    data = data + "\n" + currentTabValue + banMessage;
};

function unban(player) {
    data = data + "\n" + currentTabValue + `unban ${player}`
};

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

module.exports = {broadcast,onLoad,onPlayerJoin,branch,ban,unban,finish};
