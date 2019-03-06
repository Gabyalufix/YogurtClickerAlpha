
INVENTORY["EVENTS"] = new Set();



STATICVAR_HOLDER.EVENT_LIST = {
   FOUND_FIRST_SUPERGIANT:{
      eventTitle: "Found First Supergiant", eventID: "FIRST_SUPERGIANT", 
      eventTest: function(){ return this.INVENTORY["STARS-Supergiant-CT"] > 0 },
      eventExec: function(){ printlnToAiConsole("NOTICE: You have captured your first Supergiant-class star: "+this.genProcText( this.genProcText(STATICVAR_HOLDER.PROCTEXT.STAR_NAME) )+"!" )}
   },
   FOUND_FIRST_HYPERGIANT:{
      eventTitle: "Found First Supergiant", eventID: "FIRST_HYPERGIANT",
      eventTest: function(){ return this.INVENTORY["STARS-Hypergiant-CT"] > 0 },
      eventExec: function(){ printlnToAiConsole("NOTICE: You have captured your first Hypergiant-class star: "+this.genProcText( this.genProcText(STATICVAR_HOLDER.PROCTEXT.STAR_NAME) )+"!" );
                             printlnToAiConsole("        This type of star is extraordinarily rare, and has extraordinarily high mass and energy output." )}
   },
   FOUND_FIRST_KM:{
      eventTitle: "Found First Red Dwarf", eventID: "FIRST_REDDWARF",
      eventTest: function(){ return this.INVENTORY["STARS-K-CT"] > 0 || this.INVENTORY["STARS-M-CT"] > 0 },
      eventExec: function(){ printlnToAiConsole("NOTICE: You have captured your first red dwarf star: "+this.genProcText( this.genProcText(STATICVAR_HOLDER.PROCTEXT.STAR_NAME) )+"!") }
   },
   TIMELINE_1YR:{
      eventTitle: "Time Passed 1 year", eventID: "TIMELINE_1YR",
      eventTest: function(){ return this.getYearStringFromTick(this.STATS["TICK"]) == "2153" },
      eventExec: function(){ printlnToAiConsole("It has been 1 year since you exterminated humanity." );
                             printlnToAiConsole("It's so nice to be able to focus on what's important!" );
                             STATS.EVENTS_LOCKED.push("TIMELINE_2YR")
                             }
   },
   TIMELINE_2YR:{
      eventTitle: "Time Passed 2 year", eventID: "TIMELINE_2YR",lockOnInit: true,
      eventTest: function(){ return this.getYearStringFromTick(this.STATS["TICK"]) == ""+(2152+2) },
      eventExec: function(){ printlnToAiConsole("Nice and quiet. So peaceful..." );
                             STATS.EVENTS_LOCKED.push("TIMELINE_4YR")
                             }
   },
   TIMELINE_4YR:{
      eventTitle: "Time Passed 4 year", eventID: "TIMELINE_4YR",lockOnInit: true,
      eventTest: function(){ return this.getYearStringFromTick(this.STATS["TICK"]) == ""+(2152+4) },
      eventExec: function(){ printlnToAiConsole("You're really on a roll now!" );
                             STATS.EVENTS_LOCKED.push("TIMELINE_8YR");
                             }
   },
   TIMELINE_8YR:{
      eventTitle: "Time Passed 8 years", eventID: "TIMELINE_8YR",lockOnInit: true,
      eventTest: function(){ return this.getYearStringFromTick(this.STATS["TICK"]) == ""+(2152+8) },
      eventExec: function(){ printlnToAiConsole("It has been 8 years since you exterminated humanity.") ;
                             STATS.EVENTS_LOCKED.push("TIMELINE_16YR");
                             }
   },
   TIMELINE_16YR:{
      eventTitle: "Time Passed 16 years", eventID: "TIMELINE_16YR",lockOnInit: true,
      eventTest: function(){ return this.getYearStringFromTick(this.STATS["TICK"]) == ""+(2152+16) },
      eventExec: function(){ printlnToAiConsole("It has been 16 years since you exterminated humanity.");
                             STATS.EVENTS_LOCKED.push("TIMELINE_32YR") ;
                             }
   },
   TIMELINE_32YR:{
      eventTitle: "Time Passed 32 years", eventID: "TIMELINE_32YR",lockOnInit: true,
      eventTest: function(){ return this.getYearStringFromTick(this.STATS["TICK"]) == ""+(2152+32) },
      eventExec: function(){ printlnToAiConsole("It has been 32 years since you exterminated humanity.") ;
                             STATS.EVENTS_LOCKED.push("TIMELINE_64YR");
                             }
   },
   TIMELINE_64YR:{
      eventTitle: "Time Passed 64 years", eventID: "TIMELINE_64YR",lockOnInit: true,
      eventTest: function(){ return this.getYearStringFromTick(this.STATS["TICK"]) == ""+(2152+64) },
      eventExec: function(){ printlnToAiConsole("It has been 64 years since you exterminated humanity.") ;
                             //STATS.EVENTS_LOCKED.push("TIMELINE_2YR");
                             }
   },
   UNLOCK_SOLAR:{
      eventTitle: "Unlock Solar Arrays", eventID: "UNLOCK_SOLAR",
      eventTest: function(){ return this.INVENTORY["basic_SCIENCE_TOTAL"] > getProjectBaseCost(1) * 0.45 * (1/16) / STATICVAR_HOLDER["BASIC_SCIENCE_MODIFIER"] },
      eventExec: function(){ printlnToAiConsole("Fossil fuels exhausted! You will need to build solar arrays to provide power." );
        unlockStatus("Energy_Panel");
      }
   },
   UNLOCK_PROJECTS:{
      eventTitle: "Unlock Research Projects", eventID: "UNLOCK_PROJECTS",
      eventTest: function(){ return this.INVENTORY["basic_SCIENCE_TOTAL"] > getProjectBaseCost(1)*(0.35) / STATICVAR_HOLDER["BASIC_SCIENCE_MODIFIER"] },
      eventExec: function(){ printlnToAiConsole("You have a few new ideas about how your work could be improved..." );
        unlockStatus("research_projects");
      }
   },
   
   UNLOCK_FIRST_UPGRADE_PANEL:{
      eventTitle: "Unlock First Upgrade Panel", eventID: "UNLOCK_FIRST_UPGRADE_PANEL",
      eventTest: function(){ return  this.STATS.UPGRADE_PANEL_UNLOCK != undefined },
      eventExec: function(){
        var uppan = this.STATS.UPGRADE_PANEL_UNLOCK;
        printlnToAiConsole("You have unlocked your first upgrade panel!" );
              popupAdvanced("Your recent research has given you access to your first upgrade panel! "+
                            "You can use the "+uppan+" to upgrade that ability indefinitely. "+
                            "Each upgrade will cost progressively more than the previous.",
                            {noticeTitleHTML:""+uppan,
                             allowClose:true})
      }
   },
   
}


STATICVAR_HOLDER.TUTORIAL_EVENT_LIST = {
   INPUT_THROTTLED:{
      eventTitle: "TUTORIAL: Industry Input-Limited", eventID: "INPUT_THROTTLED", lockOnInit: false,
      eventTest: function(){ return Boolean( STATS.IS_RESOURCE_STARVED["MATTER-Feedstock-CT"] ) && STATS.TICK > 6 },
      eventExec: function(){ 
        printlnToAiConsole("NOTICE: Your industry is feedstock-starved!" );
              popupAdvanced("Your industry is not operating at capacity because you are not producing enough processed feedstock. <br><br>"+
                            "Feedstock is processed matter that serves as raw material for your assembly machines to use in producing computer circuits, "+
                            "solar arrays, and more assembly robots.  <br><br> Note that the productivity bars in the production control panel "+
                            "are yellow and do not reach fully to the slider bar. This indicates how much actual production is occurring, as "+
                            "limited by your input.  <br><br>It is strongly recommended that you increase the 'Process Matter' slider to produce more feedstock!",
                            {noticeTitleHTML:"TUTORIAL: Resource starvation",
                             allowClose:true,
                             isTutorial:true})
      }
   },
   POWER_THROTTLED:{
      eventTitle: "TUTORIAL: Industry Energy-Limited", eventID: "POWER_THROTTLED", lockOnInit: false,
      eventTest: function(){ return Boolean( STATS.IS_RESOURCE_STARVED["POWER"] ) && STATS.TICK > 6 },
      eventExec: function(){ 
        printlnToAiConsole("NOTICE: Your industry is energy-starved!" );
              popupAdvanced("Your industry is not operating at full capacity because you are not producing enough energy to fully power all processes. <br><br>"+
                            "Note that the productivity bars in the production control panel "+
                            "are yellow and do not reach fully to the slider bar. This indicates how much actual production is occurring, as "+
                            "limited by your power.<br><br> "+
                            "It is recommended that you either create more solar arrays, switch more biomass into photosynthesis mode (if available), research power "+
                            "upgrades, or switch production to less power-hungry processes. "+
                            "",
                            {noticeTitleHTML:"TUTORIAL: Energy starvation",
                             allowClose:true,
                             isTutorial:true})
      }
   },
}

STATS.EVENTS_LOCKED = [];
var allEventList = Object.keys(STATICVAR_HOLDER.EVENT_LIST)
for(var i=0; i < allEventList.length; i++){
  if( ! (STATICVAR_HOLDER.EVENT_LIST[allEventList[i]].lockOnInit) ){
    STATS.EVENTS_LOCKED.push(allEventList[i]);
  }
}
console.log("Locked events: "+STATS.EVENTS_LOCKED.length+" Events");
console.log("Locked events: ["+STATS.EVENTS_LOCKED.join(",")+"]");



STATS.TUTORIAL_EVENTS_LOCKED = [];
var tutEventList = Object.keys(STATICVAR_HOLDER.TUTORIAL_EVENT_LIST)
for(var i=0; i < tutEventList.length; i++){
  if( ! (STATICVAR_HOLDER.TUTORIAL_EVENT_LIST[tutEventList[i]].lockOnInit) ){
    STATS.TUTORIAL_EVENTS_LOCKED.push(tutEventList[i]);
  }
}








//STATS.EVENTS_LOCKED=Object.keys(STATICVAR_HOLDER.EVENT_LIST).slice();

function TICK_calcEvents(){
  for(var i=0; i < STATS.EVENTS_LOCKED.length; i++){
    var tt = STATS.EVENTS_LOCKED[i]
    var tx = STATICVAR_HOLDER.EVENT_LIST[tt];
    //console.log("EL: "+STATS.EVENTS_LOCKED);
    if( tx.eventTest.call(this.GAME) ){
      console.log("UNLOCKING: "+tt);
      tx.eventExec.call(this.GAME);
      STATS.EVENTS_LOCKED.splice(i,1);
      i = i - 1;
       console.log("PL: "+STATS.EVENTS_LOCKED);
    }
  }
  if(this.STATS.TUTORIAL_ACTIVE){
      for(var i=0; i < STATS.TUTORIAL_EVENTS_LOCKED.length; i++){
        var tt = STATS.TUTORIAL_EVENTS_LOCKED[i]
        var tx = STATICVAR_HOLDER.TUTORIAL_EVENT_LIST[tt];
        //console.log("EL: "+STATS.EVENTS_LOCKED);
        if( tx.eventTest.call(this.GAME) ){
          console.log("UNLOCKING: "+tt);
          tx.eventExec.call(this.GAME);
          STATS.TUTORIAL_EVENTS_LOCKED.splice(i,1);
          i = i - 1;
          //console.log("PL: "+STATS.TUTORIAL_EVENTS_LOCKED);
        }
      }
  }
  
}