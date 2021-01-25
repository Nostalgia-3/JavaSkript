const {broadcast,onLoad,onPlayerJoin,branch,command,actionBar,registerRecipe,ban,unban,finish} = require("../src/JavaSkript");


command("test","YOTATO","/test","javaskript.test.test","You don't have permissions idot", "players", () => {
    broadcast("Tomato");
});

command("actionbartest","Useful","/test","javaskript.actionbar.main","You don't have permissions :(", "players", () => {
    actionBar("Cool","%player%");
});


finish();