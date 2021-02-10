const {broadcast,onLoad,onPlayerJoin,branch,command,actionBar,debugModeOff,debugModeOn,registerRecipe,ban,unban} = require("../src/JavaSkript");

debugModeOff();


onLoad(() => {
    broadcast("Hello, world!");
    onLoad(()=>{
        broadcast("This is broken ;)")
    });
    broadcast("This works, slightly...")
});

command("tes","/tes","/tes","gakerstudios.javaskript.test.tes","You don't have permissions to use this command.","players",() => {
    actionBar("This is an actionBar","%player%");
    actionBar("SECOND!","%player%");
});
