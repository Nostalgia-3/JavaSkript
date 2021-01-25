const {broadcast,onLoad,onPlayerJoin,branch,command,actionBar,registerRecipe,ban,unban,finish} = require("../src/JavaSkript");


onLoad(() => {
    broadcast("Hello, world!");
});

command("tes","/tes","/tes","gakerstudios.javaskript.test.tes","You don't have permissions to use this command.","players",() => {
    actionBar("This is an actionBar","%player%");
});

finish();