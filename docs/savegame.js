






function getCurrentSavegameObject(){
     var out = {
       SETTINGS:SETTINGS,
       INVENTORY:INVENTORY,
       STATS:STATS,
       CONSTRUCTION_BUFFER:CONSTRUCTION_BUFFER,
       UNLOCKS:UNLOCKS
     }
     return out;
}

function loadSavegameObject(obj){
   SETTINGS = obj["SETTINGS"];
   INVENTORY = obj["INVENTORY"];
   STATS = obj["STATS"];
   CONSTRUCTION_BUFFER = obj["CONSTRUCTION_BUFFER"];
   UNLOCKS = obj["UNLOCKS"];
   GAME_GLOBAL.SETTINGS=SETTINGS;
   GAME_GLOBAL.INVENTORY=INVENTORY;
   GAME_GLOBAL.STATS=STATS;
   GAME_GLOBAL.CONSTRUCTION_BUFFER=CONSTRUCTION_BUFFER;
   GAME_GLOBAL.UNLOCKS=UNLOCKS;
   querySavegamesAndUpdate();
}

function writeSavegameObject(obj,id){
   localStorage.setItem("savegame_"+id,JSON.stringify(obj));
   querySavegamesAndUpdate();
}

function getSavegameObject(id){
   return JSON.parse(localStorage.getItem("savegame_"+id));
}
function clearSavegameObject(id){
   return localStorage.removeItem("savegame_"+id);
}


/*

                    <select name="SAVED_GAME_SLOT_LIST" style="width:100px">
                       <option value="slot1"> slot1 </option>
                       <option value="slot2"> slot2 </option>
                       <option value="slot3"> slot3 </option>
                    </select>
                    <button class = "button2" id ="SAVE_GAME" > SAVE </button>
                    <button class = "button2" id ="LOAD_GAME" > LOAD </button>
                    <br><br>
                    <button class = "button2" id ="CLEAR_SAVEGAMES" > <h2> CLEAR ALL SAVEGAMES </h2> </button>

*/


function querySavegamesAndUpdate(){
     var saveSlotList = document.getElementById("SAVED_GAME_SLOT_LIST")
     var opts = saveSlotList.getElementsByTagName("option")
     for(var i=0;i<opts.length;i++){
        var id = opts[i].value;
        var infoDiv = document.getElementById("SAVEGAMEINFO_"+id);
        var saveObj = getSavegameObject(id);
        if(saveObj != null){
          var date = getDateStringFromTick(saveObj.STATS.TICK);
          var seed = Math.floor( saveObj.INVENTORY["WORLDS-"+"Fallow"+"-CT"]);
          var bots = Math.floor( saveObj.INVENTORY["WORLDS-"+"Bot"+"-CT"]);
          var gren = Math.floor( saveObj.INVENTORY["WORLDS-"+"Green"+"-CT"]);
          var shipct = Math.floor(saveObj.INVENTORY["SHIPS-"+"scout"+"-CT"]) + Math.floor(saveObj.INVENTORY["SHIPS-"+"battleplate"+"-CT"]) + Math.floor(saveObj.INVENTORY["SHIPS-"+"seedship"+"-CT"]) + INVENTORY["seedship-transit-CT"]
          var yog = fmtSIunits( saveObj.INVENTORY["MATTER-Yogurt-CT"] );

          infoDiv.innerHTML = opts[i].value+"<br>"+
                                    "&nbsp&nbsp&nbsp DATE: "+date+"<br>"+
                                    "&nbsp&nbsp&nbsp # WORLDS: "+(bots+gren+seed)+"<br>"+
                                    "&nbsp&nbsp&nbsp # SHIPS: "+shipct+"<br>"+
                                    "&nbsp&nbsp&nbsp YOGURT: "+yog[0]+yog[1]+"<br>"
        } else {
          infoDiv.innerHTML = opts[i].value+": NO SAVE FOUND";
        }
     }
}



var SAVE_GAME_COMMAND_FLAG = [];

document.getElementById("SAVE_GAME").onclick = function(){
     var saveSlot = document.getElementById("SAVED_GAME_SLOT_LIST").value;
     SAVE_GAME_COMMAND_FLAG = ["SAVE",saveSlot];
   }
document.getElementById("LOAD_GAME").onclick = function(){
     var saveSlot = document.getElementById("SAVED_GAME_SLOT_LIST").value;
     SAVE_GAME_COMMAND_FLAG = ["LOAD",saveSlot];
   }
document.getElementById("CLEAR_SAVEGAMES").onclick = function(){
     var saveSlotList = document.getElementById("SAVED_GAME_SLOT_LIST")
     var opts = saveSlotList.getElementsByTagName("option")
     for(var i=0;i<opts.length;i++){
        clearSavegameObject(opts[i].value)
     }
     querySavegamesAndUpdate();
   }

document.getElementById("QUERY_SAVEGAMES").onclick = function(){
     querySavegamesAndUpdate();
   }











