var fs = require("fs");
var data = "# made using JavaSkript, the JavaScript compiler for Skript!\n";
var currentTabValue = "";
let debugMode = false;

// OTHER
function debugModeOn() {debugMode = true};
function debugModeOff() {debugMode = false};

// EFFECTS
function broadcast(text) {
    data = data + ("\n" + currentTabValue + "broadcast \"" + text + "\"");
}

function branch(num,func) {
    for(var x = 0; x<num;x++) {
        func();
    }
}

// COMMAND
function command(commandWithoutSlash,description,usage,permission,permissionMessage,usableBy,code) {
    data = data + "\n" + currentTabValue + `command /${commandWithoutSlash}:`
    currentTabValue = currentTabValue + "    ";
    data = data + "\n" + currentTabValue + `description: ${description}`;
    data = data + "\n" + currentTabValue + `usage: ${usage}`;
    data = data + "\n" + currentTabValue + `permission: ${permission}`;
    data = data + "\n" + currentTabValue + `permission message: ${permissionMessage}`;
    data = data + "\n" + currentTabValue + `executable by: ${usableBy}`;
    data = data + "\n" + currentTabValue + `trigger:`;

    currentTabValue = currentTabValue + "    ";
    code();
    currentTabValue = "";
    data = data + "\n";
}



// This effect bans the player with a non-required reason and time.
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


// EXPRESSIONS
function registerRecipe(type,output,items) {
    // @param type, it can be one of 3 things: shaped , shapeless , or furnace 
    data = data + "\n" + currentTabValue + `register new custom ${type} recipe for ${output} using ${items[0]} ${items[1]} ${items[2]} ${items[3]} ${items[4]} ${items[5]} ${items[6]} ${items[7]} ${items[8]}`

}

function actionBar(text,player) {
    data = data + "\n" + currentTabValue + `send action bar with text \"${text}\" to ${player}`
}

// EVENTS
function onLoad(func) {
    data = data + "\non load:"
    currentTabValue = "    ";
    func();
    currentTabValue = "";
    data = data + "\n";
};

function onPlayerJoin (func) {
    data = data + "\non player join:"
    currentTabValue = "    ";
    func();
    currentTabValue = "";
    data = data + "\n";
}



// FINISH
function finish() {
    fs.writeFileSync("C:/JavaSkript/out/output.sk", data);
    console.log("Finished update of \"output.sk\". the value of data is:\n\n" + data);
};


module.exports = {broadcast,onLoad,onPlayerJoin,branch,command,actionBar,registerRecipe,ban,unban,finish};