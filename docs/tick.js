
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///MAIN TICK CYCLE:
var bgCanvas = document.getElementById("BACKGROUND_CANVAS");
bgCanvas.RUN_STATIC = true;

var TICK_TIMESTAMP
var secTimer = 0
var midTimer = 0;
window.setInterval(function(){
    TICK_TIMESTAMP = Date.now()
    TICK_readUserInputs()
    TICK_updateStats()
    TICK_scoutSystems()
    TICK_captureSystems()
    TICK_calcWar()
    TICK_constructWorlds()
    TICK_updateWorldCounts()
    TICK_calcIndustry();
    secTimer++;
    if (secTimer >= 250){
      secTimer = 0;
      calculateSlowTick();
    }
    SLOWTICK_makeCrazy();

    document.getElementById("BACKGROUND_STATIC").style.height = document.getElementById("ALL_CONTENT_CONTAINER").offsetHeight + "px"
    document.getElementById("BACKGROUND_CANVAS").style.height = document.getElementById("ALL_CONTENT_CONTAINER").offsetHeight + "px"

    midTimer++;
    if(midTimer >= 5){
        midTimer = 0;
      if(bgCanvas.RUN_STATIC){

         requestAnimFrame(tvStatic_render);
      }
    }
    /*staticCanvas(bgCanvas)*/


},10);


var varNumTicksSoFar = 0
function calculateSlowTick(){
    varNumTicksSoFar = varNumTicksSoFar + 1
    /*printlnToAiConsole("" + varNumTicksSoFar+" secTimer = "+secTimer)*/

}
//SETTINGS["bio"+"_FRACTION"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TICK FUNCTIONS:


function TICK_readUserInputs(){
  //Percent sliders:
  for(var i =0; i<PCTSLIDER_FIELDS.length; i++){
    var fid = PCTSLIDER_FIELDS[i]
    SETTINGS[fid+"_FRACTION"] = [];
    for(var j=0;j<PCTSLIDERS[fid]["displayElem"].length;j++){
      SETTINGS[fid+"_FRACTION"][j] = parseFloat( PCTSLIDERS[fid]["sliderElem"][j].value ) / 10000
    }
  }


}


//STATS["CONVERSIONS"]["sunToByte"] = 1243912971288
//STATS["CONVERSIONS"]["opToIdent"] = 0.000000001
//STATS["CONVERSIONS"]["sunToOp"] =   3745454516355
//STATS["CONVERSIONS"]["opToByte"]

//PRODUCTIVITY_STATS = ["bot","psy","green","bio","eng","psy","think","soul"]
//STATS["PRODUCTIVITY_RATING"] = {}
//STATS["PRODUCTIVITY_MULT"] = {}
STATS["PRODUCTIVITY"] = {};

function TICK_updateStats(){

  STATS["PRODUCTIVITY_RATING"]["bot"]   = INVENTORY["WORLDS-Bot-CT"] * STATS["PRODUCTIVITY_MULT"]["bot"]
  STATS["PRODUCTIVITY_RATING"]["green"]   = INVENTORY["WORLDS-Green-CT"] * STATS["PRODUCTIVITY_MULT"]["green"]
  STATS["PRODUCTIVITY_RATING"]["comp"]   = INVENTORY["WORLDS-Comp-CT"] * STATS["PRODUCTIVITY_MULT"]["comp"]

  STATS["PRODUCTIVITY_RATING"]["ship"]   = STATS["PRODUCTIVITY_RATING"]["bot"] * SETTINGS["bot_FRACTION"][4]
  STATS["PRODUCTIVITY_RATING"]["think"] = STATS["CONVERSIONS"]["sunToOp"]   * STATS["PRODUCTIVITY_RATING"]["comp"]
  STATS["PRODUCTIVITY_RATING"]["bio"]   = STATS["CONVERSIONS"]["sunToByte"] * STATS["PRODUCTIVITY_RATING"]["green"] * SETTINGS["green_FRACTION"][0]
  STATS["PRODUCTIVITY_RATING"]["eng"]   = STATS["CONVERSIONS"]["opToByte"]  * STATS["PRODUCTIVITY_RATING"]["think"] * SETTINGS["think_FRACTION"][1]
  STATS["PRODUCTIVITY_RATING"]["psy"]   = STATS["CONVERSIONS"]["opToSoul"]  * STATS["PRODUCTIVITY_MULT"]["soul"] * SETTINGS["soul_FRACTION"][0]

  for(var sfi = 0; sfi < PCTSLIDER_FIELDS.length; sfi++){
      var fid = PCTSLIDER_FIELDS[sfi]
      var fsi = fmtSIunits( STATS["PRODUCTIVITY_RATING"][fid] * STATS["PRODUCTIVITY_MULT"][fid])
      document.getElementById(fid+"_PRODUCTIVITY_DISPLAY").innerHTML = fsi[0]+" "+fsi[1]+PCTSLIDER_DISPLAYUNITS[fid]
      updatePctSliderDisplay(PCTSLIDERS[fid]["sliderElem"][0])
  }
  document.getElementById("DEBUG_CRAZY_LEVEL_DISPLAY").innerHTML = STATS["CRAZY_LEVEL"]
}




function TICK_updateWorldCounts(){
    for( var i = 0; i < WORLD_TYPE_LIST.length; i++){
        var worldType = WORLD_TYPE_LIST[i]
        var worldCountLine = fmtSIint(INVENTORY["WORLDS-"+WORLD_TYPE_LIST[i]+"-CT"])
        if( CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] > 0 ){
          worldCountLine = worldCountLine + " (building: "+fmtSIint(CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType])+")"
        }
        if( CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] > 0 ){
          worldCountLine = worldCountLine + " (breaking: "+fmtSIint(CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType])+")"
        }
        var countDisplay = document.getElementById(WORLD_TYPE_LIST[i] + "_CT")
        if(countDisplay != null){
          countDisplay.innerHTML = worldCountLine
        }
    }
}

function TICK_scoutSystems(){

    if(INVENTORY["WORLDS-Neutral-CT"] > 0){
      var oldDisc = INVENTORY["WORLDS-Neutral-CT"]
      var discoverWorlds = STATS["WORLDS-Total-CT"] * ( Math.random()/2500 )
      INVENTORY["WORLDS-Neutral-CT"] = INVENTORY["WORLDS-Neutral-CT"] + discoverWorlds
      var newDiscWorlds = Math.floor(INVENTORY["WORLDS-Neutral-CT"]) - Math.floor(oldDisc)
      STATS["WORLDS-Total-CT"] = STATS["WORLDS-Total-CT"] + discoverWorlds
      /*INVENTORY["MATTER-Discovered-CT"] = INVENTORY["MATTER-Discovered-CT"] + newDiscWorlds * STATS["CONVERSIONS"]["gramsPerWorld"]*/
    }
    if(INVENTORY["WORLDS-Hostile-CT"] > 0){
      var oldDisc = INVENTORY["WORLDS-Hostile-CT"]
      var discoverWorlds = STATS["WORLDS-Total-CT"] * ( Math.random()/2500 )
      INVENTORY["WORLDS-Hostile-CT"] = INVENTORY["WORLDS-Hostile-CT"] + discoverWorlds
      var newDiscWorlds = Math.floor(INVENTORY["WORLDS-Hostile-CT"]) - Math.floor(oldDisc)
      STATS["WORLDS-Total-CT"] = STATS["WORLDS-Total-CT"] + discoverWorlds
      /*INVENTORY["MATTER-Discovered-CT"] = INVENTORY["MATTER-Discovered-CT"] + newDiscWorlds * STATS["CONVERSIONS"]["gramsPerWorld"]*/
    }

}


function TICK_calcIndustry(){



    document.getElementById("SHIPCONSTRUCTBUFFER_DISPLAY_DIV").innerHTML = INVENTORY["SHIP-CONSTRUCT-BUFFER"]
/*

    addConstructionRequest("MATTER-Collected-CT",
                           (STATS["CONVERSIONS"]["collectPerSunPerTick"] * STATS["PRODUCTIVITY_RATING"]["bot"] * SETTINGS["bot_FRACTION"][0]) ,
                           STATS["COST-MATTER-Collected"])

    addConstructionRequest("MATTER-Processed-CT",
                           (STATS["CONVERSIONS"]["processPerSunPerTick"] * STATS["PRODUCTIVITY_RATING"]["bot"] * SETTINGS["bot_FRACTION"][1]) ,
                           STATS["COST-MATTER-Processed"] )
    addConstructionRequest("SHIP-CONSTRUCT-BUFFER",
                           (STATS["CONVERSIONS"]["shipPerSunPerTick"] * STATS["PRODUCTIVITY_RATING"]["bot"] * SETTINGS["bot_FRACTION"][4]) ,
                           STATS["COST-MATTER-Ship"])

    executeAllConstructionRequests()
*/

   for( var i = 0; i < MATTER_TYPE_LIST.length; i++){
        var matterType = MATTER_TYPE_LIST[i]
        var fmtsi = fmtSIunits(INVENTORY["MATTER-"+matterType+"-CT"])
        var sd = INVENTORY["MATTER-"+matterType+"-DISPLAY"]
        sd.innerHTML = fmtsi[0]
        sd.displayUnits.innerHTML = fmtsi[1]+"g"
        sd.displayDiv.title = "grams: basic unit of mass\n"+fmtsi[4]
    }

    /*
    STATS["CONVERSIONS"]["gramPerSunShip"]
    INVENTORY["SHIP-CONSTRUCT-BUFFER"]
    STATS["CONVERSIONS"]["shipPerSunPerTick"]
    INVENTORY[]
    addConstructionRequest(inventoryItemName, requestCt, unitCost)
    MATTER_TYPE_LIST = ["Discovered","Collected","Processed","Waste","Heat","Yogurt"]


    STATS["CONVERSIONS"]["collectPerSunPerTick"]
    STATS["CONVERSIONS"]["processPerSunPerTick"]
    */
    /*var matterCollected = STATS["CONVERSIONS"]["collectPerSunPerTick"] * STATS["PRODUCTIVITY_RATING"]["bot"] * SETTINGS["bot_FRACTION"][0]
    matterCollected = Math.min( INVENTORY["MATTER-Raw-CT"] );
    INVENTORY["MATTER-Collected-CT"] = INVENTORY["MATTER-Collected-CT"] + matterCollected;
    var matterProcessed = STATS["CONVERSIONS"]["collectPerSunPerTick"] * STATS["PRODUCTIVITY_RATING"]["bot"] * SETTINGS["bot_FRACTION"][0]*/
}



function TICK_calcWar(){
    var captureNeutral = INVENTORY["WORLDS-Neutral-CT"] * (Math.random()/3000)
    var captureHostile = INVENTORY["WORLDS-Hostile-CT"] * (Math.random()/3000)
    INVENTORY["WORLDS-Hostile-CT"] = INVENTORY["WORLDS-Hostile-CT"] - captureHostile
    INVENTORY["WORLDS-Neutral-CT"] = INVENTORY["WORLDS-Neutral-CT"] - captureNeutral
    INVENTORY["WORLDS-Secure-CT"]  = INVENTORY["WORLDS-Secure-CT"]  + captureHostile + captureNeutral
}

function TICK_captureSystems(){
    var seedCapture = ( INVENTORY["WORLDS-Secure-CT"] * ( 1 + Math.random()/2500 ))
    seedCapture = Math.min( INVENTORY["WORLDS-Secure-CT"], seedCapture )
    INVENTORY["WORLDS-Fallow-CT"] = INVENTORY["WORLDS-Fallow-CT"] + seedCapture
    INVENTORY["WORLDS-Secure-CT"] = INVENTORY["WORLDS-Secure-CT"] - seedCapture

    /*
     NOTE: later on, allow capture of neutral systems, with risk to the seedship.
    */
}

function buildFromCost(itemId, itemCt,itemCost){
  var buildLimit = Math.abs( itemCt );
  for(var i=0;i<itemCost.length;i++){
    var cc = itemCost[i];
    if(cc[1] > 0){
      buildLimit = Math.min( Math.floor( INVENTORY[ cc[0] ] / cc[1] ), buildLimit);
    }
  }
  for(var i=0;i<itemCost.length;i++){
    var cc = itemCost[i];
    INVENTORY[ cc[0] ] = INVENTORY[ cc[0] ] - (buildLimit*cc[1]);
  }
  if(itemCt < 0){
    INVENTORY[itemId] = INVENTORY[itemId] - buildLimit
  } else {
    INVENTORY[itemId] = INVENTORY[itemId] + buildLimit
  }
  return buildLimit;
}

function TICK_constructWorlds(){

  for(var i=0;i<DYSON_TYPE_LIST.length;i++){
    var worldType = DYSON_TYPE_LIST[i]
    if(CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].length > 0){
      if(  CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][1] < Date.now() ){
        var nxtAttempt = CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][0]
        var nxt = buildFromCost("WORLDS-"+worldType+"-CT",nxtAttempt,STATS["COST-WORLDBUILD-"+worldType]);
        if(worldType == "Slag"){
          /*INVENTORY["MATTER-Available-CT"] = INVENTORY["MATTER-Available-CT"] + STATS["CONVERSIONS"]["gramsPerWorld"] * nxt;*/
        }
        if(nxt == nxtAttempt){
          var nxtbuf = CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].shift()
        } else {
          CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][1] = CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][1] - nxt;
        }
        CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] - nxt
      }
    }
    if(CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].length > 0){
      if(  CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][1] < Date.now() ){
        var nxtAttempt = CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][0]
        var nxt = buildFromCost("WORLDS-"+worldType+"-CT",-nxtAttempt,STATS["COST-WORLDDECON-"+worldType]);
        if(nxt == nxtAttempt){
          var nxtbuf = CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].shift()
        } else {
          CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][1] = CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][1] - nxt;
        }
        CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] - nxt
      }
    }
  }
}
