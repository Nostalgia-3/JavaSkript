var fs = require("fs");
var data = "# made using JavaSkript, the JavaScript compiler for Skript!\n";
var currentTabValue = "";
let debugMode = false;

// OTHER
function addToData(thing) { data = data + "\n" + currentTabValue + thing; }; // Adds @arg thing to the data variable
function addToTab() { currentTabValue = currentTabValue + "    "; }; // Adds a tab from the `currentTabValue`.
function takeFromTab() { currentTabValue = currentTabValue - "    "; }; // Takes a tab from the `currentTabValue`.

function addDataToFile() { fs.writeFileSync("out/output.sk", data); };

/////////////
// EFFECTS //
/////////////
// function broadcast(text) { addToData(`broadcast \"${text}\"`); addDataToFile(); };
function set(variable,value) { addToData(`set {${variable}} to ${value}`); addDataToFile(); };
function cancelEvent() { addToData(`cancel event`); addDataToFile(); };
function command(commandWithoutSlash,description,usage,permission,permissionMessage,usableBy,code) { takeFromTab(); addToData(`command /${commandWithoutSlash}:`); addToTab(); addToData(`description: ${description}`); addToData(`usage: ${usage}`); addToData(`permission: ${permission}`); addToData(`permission message: ${permissionMessage}`); addToData(`executable by: ${usableBy}`); addToData(`trigger:`); addToTab(); code(); takeFromTab(); addToData("\n"); if(debugMode) {console.log(`found command.\n`)}; addDataToFile(); };
// This effect bans the player with a non-required reason and time.
function ban(player,reason=null,time=null) { let banMessage = `ban ${player} `; if (reason !=null) { banMessage = banMessage + `due to "${reason}"`; } if (time != null) { banMessage = banMessage + ` for ${time}`; } if (debugMode) {console.log(`ban-effect found: banMessage:${banMessage}, currentTabValue:${currentTabValue.length}\n`);}; addToData(banMessage); };
// Runs func num times
function branch(num,func) { for(var x = 0; x<num;x++) { func(); if (debugMode) {console.log(`Branch loop, current stage: ${x}, function: ${func}\n`)}; } };
// unbans a player
function unban(player) { addToData(`unban ${player}`); if (debugMode) {console.log(`Unban-effect, player: ${player}.\n`)}; addDataToFile(); };
// @param type, it can be one of 3 things: shaped , shapeless , or furnace. From TuSKe
function registerRecipe(type,output,items) { addToData(`register new custom ${type} recipe for ${output} using ${items[0]} ${items[1]} ${items[2]} ${items[3]} ${items[4]} ${items[5]} ${items[6]} ${items[7]} ${items[8]}`); if (debugMode) {console.log(`found registerRecipe-effect, item array: ${items}, type: ${type}, output: ${output}\n`)};  addDataToFile(); }
// The registerEnchantment is from TuSKe
function registerEnchantment(id) { addToData(`register a new custom enchantment with id ${id}`); if (debugMode) {console.log(`found registerEnchantment-effect, id: ${id}\n`)}; addDataToFile(); }
// Makes an actionBar to the player with the text
function actionBar(text,player) { addToData(`send action bar with text \"${text}\" to ${player}`); if (debugMode) {console.log(`found actionBar-effect, text: ${text}, player: ${player}\n`)}; addDataToFile(); }
function kick(player) { addToData(`kick ${player}`); addDataToFile(); }
// kills entity
function kill(entity) { addToData(`kill ${entity}`); addDataToFile(); }
// op's player
function op (player) { addToData(`op ${player}`); addDataToFile(); }
// deops player
function deop (player) { addToData(`deop ${player}`); addDataToFile(); }
// "Makes a player see a block as another type of block (e.g. client side). Any update from the server will change it back." Gotten from Skripthub. Link: https://skripthub.net/docs/?id=3883
function clientBlock(player,blocks,blocktype) { addToData(`make ${player} see ${blocks} as ${blocktype}`); addDataToFile(); }
// Skip execution of `numberofskips` lines
function escape(numberofskips) {addToData(`escape ${numberofskips} lines`); addDataToFile();}
// Clears all recipes of everyone
function clearRecipes() { addToData(`wipe server crafting recipes`); addDataToFile(); }
// "Clears all recipes for the given items." Gotten from Skripthub
function clearItemRecipes(item) { addToData(`wipe crafting recipes for ${item}`); addDataToFile(); }
// "Makes a player see lines of a sign as the given texts (e.g. client side)." Gotten from Skripthub
function clientSign(player,blocks,stringList) { addToData(`make ${player} see lines of ${blocks} as ${stringList[0]}, ${stringList[1]}, ${stringList[2]} and ${stringList[3]}`); addDataToFile(); }

//////////////
//CONDITIONS//
//////////////

// Checks if the entity is holding something.
function isHolding(entity,item,hand="hand") { addToData(`${entity} is holding ${item} in ${hand}`); addDataToFile(); };
// Checks if the entity is not holding something.
function isNotHolding (entity,item,hand="hand") { addToData(`${entity} isn't holding ${item} in ${hand}`); addDataToFile(); };
// Classic if statement
function cif(reason,callback) { addToData(`if ${reason}:`); addToTab(); callback(); takeFromTab(); addDataToFile(); }; // This will change later, as the reason has to be made in skript.

//////////
//EVENTS//
//////////

// Runs when the skript is loaded. Converts to 'on load:'
function onLoad(func) { addToData("on load:"); addToTab(); func(); addDataToFile(); if (debugMode) {console.log(`found onLoad-Event, func: ${func}\n`)}; takeFromTab(); };
// Runs when a player joins
function onPlayerJoin (func) { addToData("on player join:"); addToTab(); func(); addDataToFile(); if (debugMode) {console.log(`found onPlayerJoin-Event, func: ${func}`)}; takeFromTab(); }
// Runs when someone enchants
function onEnchant(func) { addToData(`on enchant:`); addToTab(); func(); addDataToFile(); }


// module.exports
module.exports = 
{
    onLoad,
    onPlayerJoin,
    onEnchant,
    broadcast,
    cancelEvent,
    branch,
    command,
    clearRecipes,
    clearItemRecipes,
    actionBar,
    debugModeOn,
    debugModeOff,
    registerRecipe,
    registerEnchantment,
    clientBlock,
    clientSign,
    isHolding,
    isNotHolding,
    escape,
    set,
    kill,
    op,
    deop,
    kick,
    ban,
    unban
};