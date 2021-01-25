var fs = require("fs");
var data = "# made using JavaSkript, the JavaScript compiler for Skript!\n";
var currentTabValue = "";
let debugMode = false;

// OTHER
function debugModeOn() {debugMode = true};
function debugModeOff() {debugMode = false};
function addToData(thing) {
    data = data + "\n" + currentTabValue + thing;
}
function addToTab() {
    currentTabValue = currentTabValue + "    ";
}
function resetTabValue() {
    currentTabValue = "";
}

// EFFECTS
function broadcast(text) {
    addToData(`broadcast \"${text}\"`);
}

// COMMAND
function command(commandWithoutSlash,description,usage,permission,permissionMessage,usableBy,code) {
    resetTabValue();
    addToData(`command /${commandWithoutSlash}:`); // Adds 'command /%command_name%:'
    addToTab();
    addToData(`description: ${description}`);
    addToData(`usage: ${usage}`);
    addToData(`permission: ${permission}`);
    addToData(`permission message: ${permissionMessage}`);
    addToData(`executable by: ${usableBy}`);
    addToData(`trigger:`);
    addToTab();
    code();
    resetTabValue();
    addToData("\n");
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
    
    if (debugMode) {console.log(`ban-effect found: banMessage:${banMessage}, currentTabValue:${currentTabValue.length}`);};
    addToData(banMessage);
};


function branch(num,func) {
    for(var x = 0; x<num;x++) {
        func();
    }
}

function unban(player) {
    addToData(`unban ${player}`);
};

// EXPRESSIONS
function registerRecipe(type,output,items) {
    // @param type, it can be one of 3 things: shaped , shapeless , or furnace 
    addToData(`register new custom ${type} recipe for ${output} using ${items[0]} ${items[1]} ${items[2]} ${items[3]} ${items[4]} ${items[5]} ${items[6]} ${items[7]} ${items[8]}`);
}

function registerEnchantment(id) {
    addToData(`register a new custom enchantment with id ${id}`);
}

function actionBar(text,player) {
    addToData(`send action bar with text \"${text}\" to ${player}`);
}





// EVENTS
function onLoad(func) {
    addToData("on load:");
    addToTab();
    func();
    resetTabValue();
};

function onPlayerJoin (func) {
    addToData("on player join:");
    addToTab();
    func();
    resetTabValue();
}



// FINISH
function finish() {
    fs.writeFileSync("C:/JavaSkript/out/output.sk", data);
    console.log("Finished update of \"output.sk\". the value of data is:\n\n" + data);
};

module.exports = {broadcast,onLoad,onPlayerJoin,branch,command,actionBar,registerRecipe,ban,unban,finish};
