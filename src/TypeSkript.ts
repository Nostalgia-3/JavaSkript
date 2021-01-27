var fs = require("fs");
var data = "# made using JavaSkript, the JavaScript compiler for Skript!\n";
var currentTabValue = "";
let debugMode = false;

// INTERFACES
interface Player {
    name: String;
};

interface Entity {
    type: String;
};



// OTHER
function debugModeOn() {debugMode = true};
function debugModeOff() {debugMode = false};

function addToData(thing:String) {
    data = data + "\n" + currentTabValue + thing;
}
function addToTab() {
    currentTabValue = currentTabValue + "    ";
}
function resetTabValue() {
    currentTabValue = "";
}

function addDataToFile() {
    fs.writeFileSync("C:/JavaSkript/out/output.sk", data); // Writes data to the file
    console.log("-----------------------------");
    console.log("Set output.sk to " + data); // Shows you the file data.
};

// EFFECTS
function broadcast(text:String) {
    addToData(`broadcast \"${text}\"`);
    addDataToFile();
}

function set(variable:String,value:String|Number) {
    addToData(`set {${variable}} to ${value}`);
    addDataToFile();
}

function cancelEvent() {
    addToData(`cancel event`);
}

// COMMAND
function command(commandWithoutSlash:String,description:String,usage:String,permission:String,permissionMessage:String,usableBy:String,code:Function) {
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

    if(debugMode) {console.log(`found command.\n`)};
    addDataToFile();
}



// This effect bans the player with a non-required reason and time.
function ban(player:Player,reason:String|null=null,time:String|null=null) {
    let banMessage = `ban ${player} `;

    if (reason !=null) {
        banMessage = banMessage + `due to "${reason}"`;
    }
    if (time != null) {
        banMessage = banMessage + ` for ${time}`;
    }
    
    if (debugMode) {console.log(`ban-effect found: banMessage:${banMessage}, currentTabValue:${currentTabValue.length}\n`);};
    addToData(banMessage);
};

// Runs func num times
function branch(num:Number,func:Function) {
    for(var x = 0; x<num;x++) {
        func();
        if (debugMode) {console.log(`Branch loop, current stage: ${x}, function: ${func}\n`)};
    }
}

// unbans a player
function unban(player:Player) {
    addToData(`unban ${player}`);
    if (debugMode) {console.log(`Unban-effect, player: ${player}.\n`)};
    addDataToFile();
};

// @param type, it can be one of 3 things: shaped , shapeless , or furnace. From TuSKe
function registerRecipe(type:"shaped"|"shapeless"|"furnace",output:String,items:String[]) {
    addToData(`register new custom ${type} recipe for ${output} using ${items[0]} ${items[1]} ${items[2]} ${items[3]} ${items[4]} ${items[5]} ${items[6]} ${items[7]} ${items[8]}`);
    if (debugMode) {console.log(`found registerRecipe-effect, item array: ${items}, type: ${type}, output: ${output}\n`)}; 
    addDataToFile();
}

// The registerEnchantment is from TuSKe
function registerEnchantment(id:String) {
    addToData(`register a new custom enchantment with id ${id}`);
    if (debugMode) {console.log(`found registerEnchantment-effect, id: ${id}\n`)}; 
    addDataToFile();
}

// Makes an actionBar to the player with the text
function actionBar(text:String,player:Player) {
    addToData(`send action bar with text \"${text}\" to ${player}`);
    if (debugMode) {console.log(`found actionBar-effect, text: ${text}, player: ${player}\n`)};
    addDataToFile();
}

function kick(player:Player) {
    addToData(`kick ${player}`);
    addDataToFile();
}

// kills entity
function kill(entity:Entity) {
    addToData(`kill ${entity}`);
    addDataToFile();
}

// op's player
function op (player:Player) {
    addToData(`op ${player}`);
    addDataToFile();
}

// deops player
function deop (player:Player) {
    addToData(`deop ${player}`);
    addDataToFile();
}

//CONDITIONS

// Checks if the entity is holding something.
function isHolding(entity:String,item:String,hand:String="hand") {
    addToData(`${entity} is holding ${item} in ${hand}`);
    addDataToFile();
};

// Checks if the entity is not holding something.
function isNotHolding (entity:String,item:String,hand:String="hand") {
    addToData(`${entity} isn't holding ${item} in ${hand}`);
    addDataToFile();
};


// ------------------------
// ---------EVENTS---------
// ------------------------
// Runs when the skript is loaded. Converts to 'on load:'
function onLoad(func:Function) {
    addToData("on load:");
    addToTab();
    func();
    addDataToFile();
    if (debugMode) {console.log(`found onLoad-Event, func: ${func}\n`)};
};

// Runs when a player joins
function onPlayerJoin (func:Function) {
    addToData("on player join:");
    addToTab();
    func();
    addDataToFile();
    if (debugMode) {console.log(`found onPlayerJoin-Event, func: ${func}`)};
}

// module.exports
module.exports = 
{
    // All of the Events
    onLoad,
    onPlayerJoin,
    // All of the Effects
    broadcast,
    cancelEvent,
    branch,
    command,
    actionBar,
    debugModeOn,
    debugModeOff,
    registerRecipe,
    registerEnchantment,
    isHolding,
    isNotHolding,
    set,
    kill,
    op,
    deop,
    kick,
    ban,
    unban
};