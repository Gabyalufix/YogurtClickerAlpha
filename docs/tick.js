
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// SET FINAL VARS:



GAME_GLOBAL.SCIENCE_DISPLAY   = SCIENCE_DISPLAY;
GAME_GLOBAL.SCIENCE_TYPES     = SCIENCE_TYPES;
GAME_GLOBAL.SCIENCE_SUBFIELDS = SCIENCE_SUBFIELDS;

GAME_GLOBAL.STAR_TYPE_SET = STAR_TYPE_SET;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///MAIN TICK CYCLE:
//GAME_GLOBAL.TICK_scoutSystems()

var TICK_TIMESTAMP
var secTimer = 0;
var midTimer = 0;

STATS["PAUSE"] = false;

//var bgStatic = document.getElementById("BACKGROUND_STATIC")
//var vgCanvas = document.getElementById("BACKGROUND_CANVAS")
//var allContentContainer =

function resizeBackgroundCanvas(){
        GAME_GLOBAL.bgStatic.style.height = GAME_GLOBAL.ALL_CONTENT_CONTAINER.offsetHeight + "px"
        GAME_GLOBAL.bgCanvas.style.height = GAME_GLOBAL.ALL_CONTENT_CONTAINER.offsetHeight + "px"
}
window.addEventListener('resize', resizeBackgroundCanvas);
window.addEventListener('load', resizeBackgroundCanvas);

resizeBackgroundCanvas()

window.GAME = GAME_GLOBAL;

STATS["TICK_SPEEDFACTOR"] = 1;
STATS["TICK_FACTORCOUNTER"] = 1;

function TICK_runFastTick(){
    var GAME = this.GAME;
    if(GAME.STATS["TICK"] < 10){
      GAME.bgStatic.style.height = GAME.ALL_CONTENT_CONTAINER.offsetHeight + "px"
     // GAME.bgCanvas.style.height = GAME.ALL_CONTENT_CONTAINER.offsetHeight + "px"
    }

    if((! STATS["PAUSE"]) || (STATS["RUN_MANUAL_TICKS"] > 0)){

      if(STATS["TICK_FACTORCOUNTER"] < STATS["TICK_SPEEDFACTOR"]){
        STATS["TICK_FACTORCOUNTER"] = STATS["TICK_FACTORCOUNTER"] + 1;
      } else {
        STATS["TICK_FACTORCOUNTER"] = 1;
        if(STATS["RUN_MANUAL_TICKS"] > 0){
          STATS["RUN_MANUAL_TICKS"] = STATS["RUN_MANUAL_TICKS"] -1;
        }

        TICK_TIMESTAMP = Date.now()
        GAME.STATS["TICK"] = GAME.STATS["TICK"] + 1;
        GAME.TICK_readUserInputs()
        GAME.TICK_updateStats()
        GAME.TICK_copyDisplayCopies();
        //GAME.TICK_scoutSystems()
        //GAME.TICK_captureSystems()
        GAME.TICKHELPER_scoutSystems();
        GAME.TICKHELPER_updateExploreStats();
        GAME.TICKHELPER_seedShipCalcs();
        GAME.TICK_calcWar()
        GAME.TICK_constructWorlds()
        GAME.TICK_updateWorldCounts()


        GAME.TICK_INDUSTRY_calcPOWERGEN();
        GAME.TICK_INDUSTRY_addCReqs()
        GAME.executeAllConstructionRequests()
        GAME.TICK_calcIndustry();
        GAME.TICK_INDUSTRY_calcScienceGain();
        GAME.TICK_INDUSTRY_calcPowerUsage();
        GAME.TICK_INDUSTRY_calcComputation();
        GAME.TICK_calcScience();
        GAME.TICK_INDUSTRY_calcDeltas()
        GAME.TICK_calcEvents();
        GAME.TICK_calcEuphoria();

        secTimer++;
        if (secTimer >= 250){
          secTimer = 0;
          calculateSlowTick();
        }
        if(GAME.STATS["CRAZY_ON"]){
           GAME.SLOWTICK_makeCrazy();
        }

        //GAME.bgStatic.style.height = GAME.ALL_CONTENT_CONTAINER.offsetHeight + "px"
        //GAME.bgCanvas.style.height = GAME.ALL_CONTENT_CONTAINER.offsetHeight + "px"

        midTimer++;
        if(midTimer >= 5){
            midTimer = 0;
          if(bgCanvas.RUN_STATIC){
            requestAnimFrame(tvStatic_render);
          }
        }



        /*staticCanvas(bgCanvas)*/
    }}

    if(SAVE_GAME_COMMAND_FLAG.length > 0){
      if( SAVE_GAME_COMMAND_FLAG[0] == "SAVE"){
        writeSavegameObject(getCurrentSavegameObject(),SAVE_GAME_COMMAND_FLAG[1])
      } else if(SAVE_GAME_COMMAND_FLAG[0] == "LOAD"){
        loadSavegameObject(getSavegameObject(SAVE_GAME_COMMAND_FLAG[1]))
        TICK_setUserInputs();
      }
      SAVE_GAME_COMMAND_FLAG = []
    }

}

window.setInterval(TICK_runFastTick,100);


var varNumTicksSoFar = 0
function calculateSlowTick(){
    varNumTicksSoFar = varNumTicksSoFar + 1
    //TICK_calcScience();
    /*printlnToAiConsole("" + varNumTicksSoFar+" secTimer = "+secTimer)*/

}
//SETTINGS["bio"+"_FRACTION"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TICK FUNCTIONS:

function TICK_copyDisplayCopies(){
   var copyElemList = document.getElementsByClassName("COPY_VALUEDISPLAY_ELEMENT");

   for(var i=0; i < copyElemList.length;i++){
     var elemCopyFromId = copyElemList[i].id.split(".")[0]
     var elemCopyFrom = document.getElementById( elemCopyFromId );
     copyElemList[i].textContent = elemCopyFrom.textContent;
   }
}

GAME_GLOBAL.TICK_copyDisplayCopies = TICK_copyDisplayCopies;

//SETTINGS["bot"+"_FRACTION"]
function TICK_readUserInputs(){
  //Percent sliders:
  for(var i =0; i<this.PCTSLIDER_FIELDS.length; i++){
    var fid = this.PCTSLIDER_FIELDS[i]
    this.SETTINGS[fid+"_FRACTION"] = [];
    this.SETTINGS[fid+"_LOCKEDBOX"] = [];
    for(var j=0;j<this.PCTSLIDERS[fid]["displayElem"].length;j++){
      this.SETTINGS[fid+"_FRACTION"][j] = parseFloat( this.PCTSLIDERS[fid]["sliderElem"][j].value ) / 10000
      this.SETTINGS[fid+"_LOCKEDBOX"][j] = this.PCTSLIDERS[fid]["sliderElem"][j].lockbox.checked
      //this.updatePctSliderDisplay(this.PCTSLIDERS[fid]["sliderElem"][j])
    }
  }


    for(var i=0; i < STATICVAR_HOLDER.POWER_SOURCEWORLD_LIST.length; i++){
      var worldType = STATICVAR_HOLDER.POWER_SOURCEWORLD_LIST[i];
      var ppid = STATICVAR_HOLDER.POWER_SOURCE_LIST[i]
      this.SETTINGS[ppid+"_POWERLIMITFRAC"] = parseFloat(ELEMS[worldType+"PowerLimiter"].value) / 10000
    }

  this.SETTINGS["BIOMASS_PROD_FRAC"] = this.ELEMS["BIOMASS_CONTROL_SLIDER"].currValue;
  this.SETTINGS["BIOMASS_PWR_FRAC"] = 1 - this.SETTINGS["BIOMASS_PROD_FRAC"]
  this.SETTINGS["COMPUTE_soul_FRAC"] = this.ELEMS["computation_CONTROL_SLIDER"].currValue;
  this.SETTINGS["COMPUTE_think_FRAC"] = 1 - this.SETTINGS["COMPUTE_soul_FRAC"]


}

function TICK_setUserInputs(){
  //Percent sliders:
  for(var i =0; i<this.PCTSLIDER_FIELDS.length; i++){
    var fid = this.PCTSLIDER_FIELDS[i]
    for(var j=0;j<this.PCTSLIDERS[fid]["displayElem"].length;j++){
      this.PCTSLIDERS[fid]["sliderElem"][j].value = this.SETTINGS[fid+"_FRACTION"][j] * 10000;
      this.PCTSLIDERS[fid]["sliderElem"][j].lockbox.checked = this.SETTINGS[fid+"_LOCKEDBOX"][j];
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
/*

//MATTER-Botbots-CT
//MATTER-Biomass-CT
//MATTER-Compute-CT

*/
  this.STATS["PRODUCTIVITY_RATING"]["bot"]   = this.INVENTORY["MATTER-Botbots-CT"] * this.STATS["PRODUCTIVITY_MULT"]["bot"]
  this.STATS["PRODUCTIVITY_RATING"]["green"]   = this.INVENTORY["MATTER-Biomass-CT"] * this.STATS["PRODUCTIVITY_MULT"]["green"] * this.SETTINGS["BIOMASS_PROD_FRAC"]
  //this.STATS["PRODUCTIVITY_RATING"]["comp"]   = this.INVENTORY["MATTER-Compute-CT"] * this.STATS["PRODUCTIVITY_MULT"]["comp"] * this.STATS["CONVERSIONS"]["sunToOp"]
  this.STATS["PRODUCTIVITY_RATING"]["computation"]   = this.INVENTORY["MATTER-Compute-CT"] * this.STATS["PRODUCTIVITY_MULT"]["computation"]


  this.STATS["PRODUCTIVITY_RATING"]["ship"]   = this.STATS["PRODUCTIVITY_RATING"]["bot"] * SETTINGS["bot_FRACTION"][4]
  //this.STATS["PRODUCTIVITY_RATING"]["think"] = this.STATS["PRODUCTIVITY_RATING"]["comp"] * this.SETTINGS["comp_FRACTION"][0]
  ///this.STATS["PRODUCTIVITY_RATING"]["soul"] = this.STATS["PRODUCTIVITY_RATING"]["comp"] * this.SETTINGS["comp_FRACTION"][1] * this.STATS["CONVERSIONS"]["opToSoul"]

  //this.STATS["PRODUCTIVITY_RATING"]["bio"]   = this.STATS["CONVERSIONS"]["sunToByte"] * this.STATS["PRODUCTIVITY_RATING"]["green"] * this.SETTINGS["green_FRACTION"][0]
  //this.STATS["PRODUCTIVITY_RATING"]["eng"]   = this.STATS["CONVERSIONS"]["opToByte"]  * this.STATS["PRODUCTIVITY_RATING"]["think"] * this.SETTINGS["think_FRACTION"][1]
  //this.STATS["PRODUCTIVITY_RATING"]["psy"]   =  this.STATS["PRODUCTIVITY_RATING"]["soul"] * this.SETTINGS["soul_FRACTION"][0]

   this.STATS["PRODUCTIVITY_RATING"]["scout"]   = Math.floor(this.INVENTORY["SHIPS-"+"scout"+"-CT"])
   this.STATS["PRODUCTIVITY_RATING"]["battleplate"]   = Math.floor(this.INVENTORY["SHIPS-"+"battleplate"+"-CT"])
   this.STATS["PRODUCTIVITY_RATING"]["seedship"]   = Math.floor(this.INVENTORY["SHIPS-"+"seedship"+"-CT"])



  for(var sfi = 0; sfi < this.PCTSLIDER_FIELDS.length; sfi++){
      var fid = this.PCTSLIDER_FIELDS[sfi]
      if(ELEMS[fid+"_PRODUCTIVITY_DISPLAY"] != null){
        var fsi = fmtSIunits( this.STATS["PRODUCTIVITY_RATING"][fid] * this.STATS["PRODUCTIVITY_MULT"][fid] / this.STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR)
        var makeAnonFunc = function(xfid,xfsi){
          //console.log("making anon: ["+xfid+"]");
          return function(){
            //console.log("setting prodDisplay: ["+xfid+"]");
            this.GAME.ELEMS[xfid+"_PRODUCTIVITY_DISPLAY"].textContent =  xfsi[0]+" "+xfsi[1]+this.GAME.PCTSLIDER_DISPLAYUNITS[xfid]
          }
        }
        var anonFunc = makeAnonFunc(fid,fsi)
        window.requestAnimationFrame(anonFunc)
      }

      for( var i=0; i < this.PCTSLIDERS[fid]["sliderElem"].length; i++){
        this.updatePctSliderDisplayHelper( this.PCTSLIDERS[fid]["sliderElem"][i] )
      }

      //this.updatePctSliderDisplay(this.PCTSLIDERS[fid]["sliderElem"][0])
  }

  //window.requestAnimationFrame(function(){
    this.DEBUG_CRAZY_LEVEL_DISPLAY.textContent =  this.STATS["CRAZY_LEVEL"]
    //this.GAME.DATE_DISPLAY.textContent =  this.GAME.getDateStringFromTick(this.STATS["TICK"])
    this.ELEMS.DATE_DISPLAY.textContent =  this.getYearStringFromTick(this.STATS["TICK"])+","
    this.ELEMS.DATE_WEEK_DISPLAY.textContent =  this.getWeekStringFromTick(this.STATS["TICK"])
    this.MOOD_DISPLAY.textContent =  this.STATS["MOOD"]
  //})



  this["INVENTORY-PREVTICK"] = {};
  for( var i = 0; i < this.MATTER_TYPE_LIST.length; i++){
        var matterType = this.MATTER_TYPE_LIST[i]
        this["INVENTORY-PREVTICK"]["MATTER-"+matterType+"-CT"] = this.INVENTORY["MATTER-"+matterType+"-CT"]
  }


    this.ELEMS["soul_IDENT_CT"].textContent = fmtSI( INVENTORY["soul_IDENT_CT"]," ")
    //ELEMS["soul_COMPUTE_RESOURCES"]
    this.ELEMS["soul_IDENT_DIVERSITY"].textContent = fmtSI(INVENTORY["soul_DIVERSITY_CT"]," ")


    //INVENTORY["soul_DIVERSITY_CT"]
    //INVENTORY["soul_DIVERSITY_RATING"]




}
function getTimeStringFromTick(tt){
  var y =  Math.floor( tt * STATS["CONVERSIONS"]["yearPerTick"] );
  var wk = tt - y / STATS["CONVERSIONS"]["yearPerTick"];
  if(isNaN(tt)){
    return "-"
  } else {
    return (y)+ "yr, "+Math.floor(wk) +"wk"
  }
}

function getDateStringFromTick(tt){
  var y =  Math.floor( tt * STATS["CONVERSIONS"]["yearPerTick"] );
  var wk = tt - y / STATS["CONVERSIONS"]["yearPerTick"];
  return (y + STATS["CONVERSIONS"]["timeAtZero"])+ ", wk"+Math.floor(wk)
}
function getYearStringFromTick(tt){
  var y =  Math.floor( tt * STATS["CONVERSIONS"]["yearPerTick"] );
  var wk = tt - y / STATS["CONVERSIONS"]["yearPerTick"];
  return (y + STATS["CONVERSIONS"]["timeAtZero"])+""
}
function getWeekStringFromTick(tt){
  var y =  Math.floor( tt * STATS["CONVERSIONS"]["yearPerTick"] );
  var wk = Math.floor(tt - y / STATS["CONVERSIONS"]["yearPerTick"]);
  if(wk <= 9){
    return "wk0"+wk
  } else {
    return "wk"+wk
  }
}
GAME_GLOBAL.getYearStringFromTick = getYearStringFromTick
GAME_GLOBAL.getWeekStringFromTick = getWeekStringFromTick

for( var i = 0; i < this.WORLD_TYPE_LIST.length; i++){
   ELEMS[WORLD_TYPE_LIST[i] + "_CT_DISPLAY"] = document.getElementById(WORLD_TYPE_LIST[i] + "_CT");
   var cancelButton = document.getElementById("button_wf"+WORLD_TYPE_LIST[i]+"Cancel");
   if(cancelButton != null){
       ELEMS[WORLD_TYPE_LIST[i] + "_CT_DISPLAY"].cancelButton = cancelButton;
   }

}

function TICK_updateWorldCounts(){
    for( var i = 0; i < this.WORLD_TYPE_LIST.length; i++){
        var worldType = this.WORLD_TYPE_LIST[i]
        var worldCountLine = fmtSIorFrac(this.INVENTORY["WORLDS-"+WORLD_TYPE_LIST[i]+"-CT"])
        if(this.INVENTORY["WORLDS-"+WORLD_TYPE_LIST[i]+"-CT"] == 0.5){
          worldCountLine = "\u00BD;"
        }
        if( this.CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] > 0 ){
          worldCountLine = worldCountLine + " (building: "+fmtSIint(this.CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType])+")"
        }
        if( this.CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] > 0 ){
          worldCountLine = worldCountLine + " (breaking: "+fmtSIint(this.CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType])+")"
        }
        var countDisplay = this.ELEMS[WORLD_TYPE_LIST[i] + "_CT_DISPLAY"]
        if(countDisplay != null){
          countDisplay.textContent =  worldCountLine
          if(countDisplay.cancelButton != null){
              if(this.CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] > 0 && countDisplay.cancelButton.disabled){
                countDisplay.cancelButton.style.display = "block";
                countDisplay.cancelButton.disabled = false;
              } else if(this.CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] == 0 && (! countDisplay.cancelButton.disabled)) {
                countDisplay.cancelButton.style.display = "none";
                countDisplay.cancelButton.disabled = true;
              }
          }

        }
    }

    //this.INVENTORY["STARS-" + sinfo[0] +"-CT"]

    for( var i=0; i < this.STAR_TYPE_SET.length; i++){
       var sid = this.STAR_TYPE_SET[i].sid;
       var ee = ELEMS["STARCT_"+sid] ;
       var ct = this.INVENTORY["STARS-" + sid +"-CT"];
       var ff = fmtSIintNoPct(ct)
       if(ff != ee.innerHTML){


         ee.textContent =  ff;
       }
    }

}

function TICK_scoutSystems(){
    var exploreRating = this.STATS["PRODUCTIVITY_RATING"]["scout"] * this.SETTINGS["scout"+"_FRACTION"][0];
    var areaExplored = this.STATS["scout-speed"] * STATS["scout-sensorrange"] * exploreRating;
    var meanDiscovered = areaExplored * this.STATS["explore-starDensity"];
    var varDiscovered = meanDiscovered * 0.25;
    var xx = meanDiscovered + getRandomBetween(-varDiscovered,varDiscovered);
    var xxr = Math.floor(xx);
    var rem = xx - xxr;
    if(Math.random() < rem){
      xxr = xxr + 1;
    }
    this.INVENTORY["WORLDS-Neutral-CT"] = this.INVENTORY["WORLDS-Neutral-CT"] + xxr;


/*
    if(INVENTORY["WORLDS-Neutral-CT"] > 0){
      var oldDisc = INVENTORY["WORLDS-Neutral-CT"]
      var discoverWorlds = STATS["WORLDS-Total-CT"] * ( Math.random()/2500 )
      INVENTORY["WORLDS-Neutral-CT"] = INVENTORY["WORLDS-Neutral-CT"] + discoverWorlds
      var newDiscWorlds = Math.floor(INVENTORY["WORLDS-Neutral-CT"]) - Math.floor(oldDisc)
      STATS["WORLDS-Total-CT"] = STATS["WORLDS-Total-CT"] + discoverWorlds
      //INVENTORY["MATTER-Discovered-CT"] = INVENTORY["MATTER-Discovered-CT"] + newDiscWorlds * STATS["CONVERSIONS"]["gramsPerWorld"]
    }
    if(INVENTORY["WORLDS-Hostile-CT"] > 0){
      var oldDisc = INVENTORY["WORLDS-Hostile-CT"]
      var discoverWorlds = STATS["WORLDS-Total-CT"] * ( Math.random()/2500 )
      INVENTORY["WORLDS-Hostile-CT"] = INVENTORY["WORLDS-Hostile-CT"] + discoverWorlds
      var newDiscWorlds = Math.floor(INVENTORY["WORLDS-Hostile-CT"]) - Math.floor(oldDisc)
      STATS["WORLDS-Total-CT"] = STATS["WORLDS-Total-CT"] + discoverWorlds
      //INVENTORY["MATTER-Discovered-CT"] = INVENTORY["MATTER-Discovered-CT"] + newDiscWorlds * STATS["CONVERSIONS"]["gramsPerWorld"]*
    }*/



}
//MATTER_TYPE_LIST = ["FreeBot","Feedstock","Botbots","Compute","FreeGreen","Digested","Biomass","Waste","Heat","Yogurt"]
//WORLD_TYPE_LIST = ["Fallow","Pop","Omni","Bot","Green","Comp","Hub","Neutral","Hostile","Secure","Slag","Seedres"]

function cheatFunc_multScience(){
  for(var i=0; i < SCIENCE_TYPES.length; i++){
    for(var j=0; j < 3; j++){
      INVENTORY[SCIENCE_TYPES[i]+j+"_SCIENCE_TOTAL"] = INVENTORY[SCIENCE_TYPES[i]+j+"_SCIENCE_TOTAL"] *10;
      INVENTORY[SCIENCE_TYPES[i]+"_SCIENCE_TOTAL"] = INVENTORY[SCIENCE_TYPES[i]+"_SCIENCE_TOTAL"] *10;
      INVENTORY[SCIENCE_TYPES[i]+j+"_SCIENCE_FREE"] = INVENTORY[SCIENCE_TYPES[i]+j+"_SCIENCE_FREE"] *10;
      INVENTORY[SCIENCE_TYPES[i]+"_SCIENCE_FREE"] = INVENTORY[SCIENCE_TYPES[i]+"_SCIENCE_FREE"] *10;
    }
  }
  INVENTORY["basic_SCIENCE_FREE"] = INVENTORY["basic_SCIENCE_FREE"] * 10;
  INVENTORY["basic_SCIENCE_TOTAL"] = INVENTORY["basic_SCIENCE_TOTAL"] * 10;
}
document.getElementById("button_cheatMoreScience").onclick = cheatFunc_multScience

function TICK_INDUSTRY_calcPOWERGEN(){
    var wattMult = this.STATICVAR_HOLDER.WATTAGE_MULTIPLIER
    /*
     * POWER PRODUCTION:


     */
    var pwrSrc = ["Bot","Bio"];
    var dysonSrc = ["bot","green"]
    var dysonSrcCap = ["Bot","Green"]
    this.INVENTORY["POWER"] = 0;
    for(var z=0; z< pwrSrc.length; z++){
       var pc = pwrSrc[z];
       var dy = dysonSrc[z];
       this.STATS["PRODUCTIVITY_RATING"][pc+"pwrGen"] = this.STATS["PRODUCTIVITY_MULT"][pc+"pwrGen"] * this.STATS["CONVERSIONS"]["pwrFrom"+pc+"pwrPerProdPerTick"] * this.STATS["PRODUCTIVITY_MULT"][dy];
       if(pc == "Bio"){
         this.INVENTORY["POWER-"+pc+"-CAP"] = (this.INVENTORY["MATTER-Biomass-CT"] * this.SETTINGS["BIOMASS_PWR_FRAC"]) * this.STATS["PRODUCTIVITY_RATING"][pc+"pwrGen"] * this.SETTINGS[pc+"_POWERLIMITFRAC"];
       } else {
         this.INVENTORY["POWER-"+pc+"-CAP"] = this.INVENTORY["MATTER-"+pc+"pwr-CT"] * this.STATS["PRODUCTIVITY_RATING"][pc+"pwrGen"] * this.SETTINGS[pc+"_POWERLIMITFRAC"];
       }
       this.INVENTORY["POWER-"+pc+""] = Math.min(this.INVENTORY["POWER-"+pc+"-CAP"] / STATS["ENERGYRATE_MULT"][pc+"pwrGen"],this.INVENTORY["POWER-Free"+dysonSrcCap[z]+"-CT"]) * STATS["ENERGYRATE_MULT"][pc+"pwrGen"];

       this.INVENTORY["POWER"] = this.INVENTORY["POWER"] + this.INVENTORY["POWER-"+pc]

       var pwrFmt1 = fmtSIunits( Math.round( this.INVENTORY["POWER-"+pc+""]) * wattMult)
       //this.ELEMS[pc+"pwr_POWER_DISPLAY"].unitDisp.textContent =  pwrFmt1[1];

       var pp = ELEMS["POWER_PRODDISPLAY"][pc];


      this.INVENTORY["POWERGEN-"+pc+""] = this.INVENTORY["POWER-"+pc+""]

      /*

              var makeAnonFunc = function(xfid,xfsi){
                //console.log("making anon: ["+xfid+"]");
                return function(){
                  //console.log("setting prodDisplay: ["+xfid+"]");
                  this.GAME.ELEMS[xfid+"_PRODUCTIVITY_DISPLAY"].textContent =  xfsi[0]+" "+xfsi[1]+this.GAME.PCTSLIDER_DISPLAYUNITS[xfid]
                }
              }
              var anonFunc = makeAnonFunc(fid,fsi)
        window.requestAnimationFrame(anonFunc)

      */

      var makeAnonFunc2 = function(xpwrFmt1,xpp,xpc){
                return function(){
                  this.GAME.ELEMS[pc+"pwr_POWER_DISPLAY"].textContent =  xpwrFmt1[0] + xpwrFmt1[1];
                  xpp.powerCAPACITY.textContent =  xpwrFmt1[0]+xpwrFmt1[1];
                  //STATS["ENERGYRATE_MULT"][ppid+"pwrGen"]
                  xpp.effDisplay.textContent =  roundTo(100*this.GAME.STATS["ENERGYRATE_MULT"][xpc+"pwrGen"],1)
                  //this.STATS["PRODUCTIVITY_RATING"][pc+"pwrGen"]
                  xpp.prodDisplay.textContent =  fmtSIflat(this.GAME.STATS["PRODUCTIVITY_RATING"][xpc+"pwrGen"] * this.GAME.STATICVAR_HOLDER.WATTAGE_MULTIPLIER)+"W/t"
                }
      }
      var anonFunc2 = makeAnonFunc2(pwrFmt1,pp,pc)
      window.requestAnimationFrame(anonFunc2)

    }

    this.INVENTORY["POWERGEN-Hawk"] = 0;
    //console.log("HAWKENER = "+ this.INVENTORY["POWERGEN-Hawk"])
    //this.STATS["PRODUCTIVITY_RATING"]["BiopwrGen"] = this.INVENTORY["MATTER-Biopwr-CT"] * this.STATS["PRODUCTIVITY_MULT"]["BiopwrGen"] * this.STATS["CONVERSIONS"]["pwrFromBiopwrPerProdPerTick"] * this.STATS["PRODUCTIVITY_MULT"]["green"];

    //this.INVENTORY["POWER"] = this.STATS["PRODUCTIVITY_RATING"]["BotpwrGen"] + this.STATS["PRODUCTIVITY_RATING"]["BiopwrGen"]
    this.INVENTORY["POWERGEN"] = this.INVENTORY["POWER"]

}

function TICK_INDUSTRY_addCReqs(){
    INVENTORY["BUFFER-bio-CT"] = 0;
    INVENTORY["BUFFER-COMPUTE-CT"] = 0;

    //console.log("-------------------")
    for(var i=0; i<this.STATS.ACTIVE_INDUSTRY_LIST.length; i++){
       var industryID = this.STATS.ACTIVE_INDUSTRY_LIST[i];
       var iss = this.STATS.INDUSTRY[industryID];
       var productID = iss.productionItem;

       //var sliderID = iss.sliderID;
       //var sliderIDX = iss.sliderIDX;
       var prod = this.calcIndustrialProd(iss);
       iss.currRequested = prod;
       this.addConstructionRequest(iss.inventoryType+"-"+productID+"-CT",
                                   prod,
                                   this.calcIndustrialCost(iss),
                                   industryID);
    }
    //console.log("-------------------")
}


GAME_GLOBAL.TICK_INDUSTRY_calcPOWERGEN = TICK_INDUSTRY_calcPOWERGEN;
GAME_GLOBAL.TICK_INDUSTRY_addCReqs = TICK_INDUSTRY_addCReqs;




function TICK_calcIndustry(){

    var wattMult = this.STATICVAR_HOLDER.WATTAGE_MULTIPLIER
    //GAME_GLOBAL.INDUSTRY_LIST = ["Feedstock","Botbots","Botpwr","Ship","Compute","Digested","Biopwr","Yogurt","Biomass"]

    //this.executeAllConstructionRequests()

//CONSTRUCTION_REQUESTS.push( [inventoryItemName, requestCt, unitCost, requestCt]
    if(! this.STATS.STATUS_FLAG["BASIC_BIOMASS"] ){
        this.INVENTORY["MATTER-Biomass-CT"] = this.INVENTORY["MATTER-Biomass-CT"] + 4e6;
    }
    
    for(var i=0; i<this.STATS.ACTIVE_INDUSTRY_LIST.length; i++){
       var industryID = this.STATS.ACTIVE_INDUSTRY_LIST[i];

       var iss = this.STATS.INDUSTRY[industryID];
       var productID = iss.productionItem ;
       var sd   = iss.sliderID;
       var sdx  = iss.sliderIDX;
       if(sdx == null){
         //???
         var powerLim = ""+fmtSI(this.STATS["IndustryPowerDemand"][industryID] * this.STATICVAR_HOLDER.WATTAGE_MULTIPLIER," ")+"W";
         var reqCt = ""+fmtSI(this.STATS["PRODUCTION-REQ"][ industryID ] * this.STATICVAR_HOLDER.FLOPS_MULTIPLIER," ")+"FLOPs"
         var currCt = ""+fmtSI(this.STATS["PRODUCTION-CURR"][ industryID ] * this.STATICVAR_HOLDER.FLOPS_MULTIPLIER ," ")+"FLOPs"
         var pwrLimElem = this.ELEMS["computation-PRODUCTION-PWR-DISPLAY"]

         this.ELEMS["computation-PRODUCTION-REQ-DISPLAY"].textContent = reqCt
         this.ELEMS["computation-PRODUCTION-CURR-DISPLAY"].textContent = currCt
         pwrLimElem.textContent = powerLim
         var limiterID = this.STATS["LIMIT-REASON"][industryID]
         if(limiterID == "POWER"){
             pwrLimElem.style.color = "red";
             pwrLimElem.style["text-decoration-line"]= "underline";
         } else {

             pwrLimElem.style.color = null;
             pwrLimElem.style["text-decoration-line"]= "none";
         }

       } else {
         var reqCt = this.STATS["PRODUCTION-REQ"][ industryID ]
         var currCt = this.STATS["PRODUCTION-CURR"][ industryID ]
         if(null == this.PCTSLIDERS[sd].displayElem[sdx].PROD){
            console.log("NULL: "+iss.prodTitle);
            console.log("    ["+sd+" / "+sdx+"]");

         }
         var limiterString = "";
         var limiterID = this.STATS["LIMIT-REASON"][industryID]
         if( limiterID != ""  ){
            var itemTitle = this.STATICVAR_HOLDER.RESOURCE_INFO[limiterID].itemTitle;
            //limiterString = "    (insufficient "+itemTitle+")";
            //limiterString
         }
         //console.log("["+industryID+"] limited: "+limiterID)


         var repHtml = function(elm,str){
                     return function(){ elm.innerHTML = str }
         }
         var clearColoringFunc = function(elm){
                     return function(){ elm.innerHTML = elm.textContent }
         }
         var redColoringFunc = function(elm){
                     return function(){ elm.innerHTML = elm.textContent.fontcolor("red") }
         }
         //var anonFunc = makeAnonFunc(pwrFmt3,pwrFmt4,pwrFmt5,pwrFmt6);
         //window.requestAnimationFrame(anonFunc);
         //console.log( "PWR: "+industryID+ " [" +fmtSI(this.STATS["IndustryPowerDemand"][industryID])+"]")

         if(this.PCTSLIDERS[sd].displayElem[sdx].PRODINPUT != null){
          // console.log(sd +" / "+sdx+":"+industryID);
           //sd = "bot"; sdx = 1; industryID = "Botbots"

           var inputLim = ""+fmtSI(this.STATS["IndustryInputDemand"][industryID])+"t";
           var powerLim = ""+fmtSI(this.STATS["IndustryPowerDemand"][industryID] * this.STATICVAR_HOLDER.WATTAGE_MULTIPLIER)+"W";
           //var inputLimRed = false;
           //var powerLimRed = false;

           var prevInputLimElem = this.PCTSLIDERS[sd].displayElem[sdx].PRODINPUT
           var prevPowerLimElem = this.PCTSLIDERS[sd].displayElem[sdx].PRODPOWER

           if(limiterID == "POWER"){
             prevInputLimElem.style.color = null;
             prevPowerLimElem.style.color = "red";
             prevInputLimElem.style["text-decoration-line"]= "none";
             prevPowerLimElem.style["text-decoration-line"]= "underline";
           } else if(limiterID != ""){
             //console.log("["+industryID+"] RED INPUT!")
             prevInputLimElem.style.color = "red";
             prevPowerLimElem.style.color = null;
             prevInputLimElem.style["text-decoration-line"]= "underline";
             prevPowerLimElem.style["text-decoration-line"]= "none";
           } else {
             prevInputLimElem.style.color = null;
             prevPowerLimElem.style.color = null;
             prevInputLimElem.style["text-decoration-line"]= "none";
             prevPowerLimElem.style["text-decoration-line"]= "none";
           }
           prevInputLimElem.textContent = inputLim
           prevPowerLimElem.textContent = powerLim

           if(this.PCTSLIDERS[sd].displayElem[sdx].FILLBAR != null){

               var setPct = this.SETTINGS[sd+"_FRACTION"][sdx];
               var yieldPct = currCt / reqCt;
               if(reqCt == 0){
                   yieldPct = 0;
               }
               var finalPct = setPct * yieldPct * 100
               //console.log("INDUSTRY: "+industryID + " / "+roundTo(this.SETTINGS[sd+"_FRACTION"][sdx]*100,2) + " / finalPct = "+roundTo(finalPct,3));
               this.PCTSLIDERS[sd].displayElem[sdx].FILLBAR.style.width = finalPct + "%";
               if(yieldPct < 0.25){
                   this.PCTSLIDERS[sd].displayElem[sdx].FILLBAR.style["background-color"] = "var(--subduedWarnRed)"
               } else if(yieldPct < 1){
                   this.PCTSLIDERS[sd].displayElem[sdx].FILLBAR.style["background-color"] = "var(--subduedWarnYellow)"
               } else {
                   this.PCTSLIDERS[sd].displayElem[sdx].FILLBAR.style["background-color"] = "var(--subduedWarnGreen)"
               }
           }

           this.STATS["IndustryInputDemand"][industryID] = "0.0";
           this.STATS["IndustryPowerDemand"][industryID] = "0.0";
         }
         this.PCTSLIDERS[sd].displayElem[sdx].PROD.textContent =  ( fmtSI(currCt)+" / "+fmtSI(reqCt)+"" + limiterString)
         this.PCTSLIDERS[sd].displayElem[sdx].limitingResource = limiterID;
         }
         /*        this.STATS["IndustryPowerDemand"][industryID] = this.CONSTRUCTION_REQUESTS[j][2][ii][1]
               } else if( ii == 0 ){
          this.STATS["IndustryInputDemand"][industryID] = this.CONSTRUCTION_REQUESTS[j][2][ii][1]
         */
    }

    var shipBuffer = this.INVENTORY["BUFFER-Ship-CT"];
    for(var i=0; i < this.SHIP_TYPE_LIST.length;i++){
        var shipType = this.SHIP_TYPE_LIST[i];
        this.INVENTORY["SHIPS-"+shipType+"-CT"] = this.INVENTORY["SHIPS-"+shipType+"-CT"] + ((shipBuffer * this.SETTINGS["ship_FRACTION"][i]) / this.STATS["CONVERSIONS"]["bufferPerShip-"+shipType])
        var sd = this.ELEMS["SHIPS-"+shipType+"-DISPLAY"]
        var fmtsi = fmtSIint(this.INVENTORY["SHIPS-"+shipType+"-CT"])
        sd.textContent =  fmtsi
    }
    this.INVENTORY["SHIP-CONSTRUCT-BUFFER"] = 0;


  //update displays:
   //this["SHIPCONSTRUCTBUFFER_DISPLAY_DIV"].textContent =  this.INVENTORY["SHIP-CONSTRUCT-BUFFER"]





    this.CONSTRUCTION_REQUESTS = [];


}

//STATS["MODIFIERS"]["sanityScienceFactor"] = 1;


function TICK_INDUSTRY_calcComputation(){

  //console.log( "computeBuffer: "+fmtSI(INVENTORY["BUFFER-COMPUTE-CT"]))
  //this.INVENTORY["BUFFER-bio-CT"]
  this.STATS["PRODUCTIVITY_RATING"]["think"] = this.INVENTORY["BUFFER-COMPUTE-CT"] * this.SETTINGS["COMPUTE_think_FRAC"] * this.STATS["MODIFIERS"]["sanityComputeFactor"]
  this.STATS["PRODUCTIVITY_RATING"]["soul"] =  this.INVENTORY["BUFFER-COMPUTE-CT"] * this.SETTINGS["COMPUTE_soul_FRAC"]  * this.STATS["MODIFIERS"]["sanityComputeFactor"] * this.STATS["MODIFIERS"]["swarmDiversityFactor"]

  this.ELEMS["soul_COMPUTE_RESOURCES"].textContent = fmtSI(this.INVENTORY["BUFFER-COMPUTE-CT"] * this.SETTINGS["COMPUTE_soul_FRAC"] * this.STATICVAR_HOLDER.FLOPS_MULTIPLIER," ")+"";
  this.ELEMS["soul_OVERALL_PROD"].textContent = fmtSIorFrac( this.STATS["PRODUCTIVITY_RATING"]["soul"] / STATICVAR_HOLDER.SOULPROD_RATING_FACTOR )

  this.STATS["PRODUCTIVITY_RATING"]["bio"] = this.INVENTORY["BUFFER-bio-CT"] * this.STATICVAR_HOLDER.BYTES_PER_TON_BIOMASS
  this.STATS["PRODUCTIVITY_RATING"]["eng"] = this.STATS["PRODUCTIVITY_RATING"]["think"] * this.SETTINGS["think_FRACTION"][1] * this.STATICVAR_HOLDER.BYTES_PER_COMPUTEWEEK
  this.STATS["PRODUCTIVITY_RATING"]["psy"] = this.STATS["PRODUCTIVITY_RATING"]["soul"]  * this.SETTINGS["soul_FRACTION"][0]  * this.STATICVAR_HOLDER.BYTES_PER_COMPUTEWEEK
  //STATICVAR_HOLDER.BYTES_PER_COMPUTEWEEK

  this.STATS["PRODUCTIVITY_RATING"]["soul"] = this.STATS["PRODUCTIVITY_RATING"]["soul"] / STATICVAR_HOLDER.SOULPROD_RATING_FACTOR

  //ELEMS["bio_GAIN_RATE"]
  //ELEMS["eng_GAIN_RATE"]
  //ELEMS["psy_GAIN_RATE"]


  //this.SETTINGS["COMPUTE_think_FRAC"] = this.ELEMS["computation_CONTROL_SLIDER"].currValue;
  //this.SETTINGS["COMPUTE_soul_FRAC"] = 1 - this.SETTINGS["COMPUTE_think_FRAC"]
  //    INVENTORY["BUFFER-bio-CT"] = 0;
  //   = 0;

}
GAME_GLOBAL.TICK_INDUSTRY_calcComputation = TICK_INDUSTRY_calcComputation;




function TICK_INDUSTRY_calcScienceGain(){

  //this.STATS["PRODUCTIVITY_RATING"]["bio"]   = this.STATS["CONVERSIONS"]["sunToByte"] * this.STATS["PRODUCTIVITY_RATING"]["green"] * this.SETTINGS["green_FRACTION"][0]
  //this.STATS["PRODUCTIVITY_RATING"]["eng"]   = this.STATS["CONVERSIONS"]["opToByte"]  * this.STATS["PRODUCTIVITY_RATING"]["think"] * this.SETTINGS["think_FRACTION"][1]
  //this.STATS["PRODUCTIVITY_RATING"]["psy"]   =  this.STATS["PRODUCTIVITY_RATING"]["soul"] * this.SETTINGS["soul_FRACTION"][0]

   //this.INVENTORY["BUFFER-bio-CT"]
   //this.INVENTORY["BUFFER-bio-CT"]

    for(var i=0;i<this.SCIENCE_TYPES.length;i++){
      var fid = this.SCIENCE_TYPES[i];
      var scitype = fid;
      var subf = this.SCIENCE_SUBFIELDS[fid];
      var newSci = this.STATS["PRODUCTIVITY_RATING"][fid] * this.STATS["PRODUCTIVITY_MULT"][fid] * STATS["MODIFIERS"]["sanityScienceFactor"] * STATS["MODIFIERS"]["GLOBAL_SCIENCE_MODIFIER"]

      if(STATS.STATUS_FLAG["BASIC_SCIENCE"] && (fid == "eng" || fid == "psy")){
             var newBasic = newSci / this.STATICVAR_HOLDER["BASIC_SCIENCE_MODIFIER"]
             this.INVENTORY["basic_SCIENCE_TOTAL"] = this.INVENTORY["basic_SCIENCE_TOTAL"] + newBasic;
             this.INVENTORY["basic_SCIENCE_FREE"]  = this.INVENTORY["basic_SCIENCE_FREE"] + newBasic;
             this.ELEMS["basic_FREE_DISPLAY"].textContent = fmtSI(this.INVENTORY["basic_SCIENCE_FREE"])+"B";
             this.ELEMS["basic_GAIN_RATE"].textContent = fmtSI(newBasic)+"";
      }
      
      if( GAME_GLOBAL.STATS.STATUS_FLAG[fid+"_SCIENCE"]){
          this.INVENTORY[fid+"_SCIENCE_TOTAL"] = this.INVENTORY[fid+"_SCIENCE_TOTAL"] + newSci
          this.ELEMS[fid+"_GAIN_RATE"].textContent = ""+ fmtSI(newSci," ");
          this.SCIENCE_DISPLAY[fid].total.textContent =  fmtSI( this.INVENTORY[fid+"_SCIENCE_TOTAL"] )+"B"
          if(GAME_GLOBAL.STATS.STATUS_FLAG["COMPLETE_UNLOCK"][scitype] ) {
              //console.log("full: "+scitype);
              for(var j=0;j<subf;j++){
                var newSubSci = newSci * this.SETTINGS[fid+"_FRACTION"][j];
                this.INVENTORY[fid+j+"_SCIENCE_TOTAL"] = this.INVENTORY[fid+j+"_SCIENCE_TOTAL"] + newSubSci
                this.INVENTORY[fid+j+"_SCIENCE_FREE"]  = this.INVENTORY[fid+j+"_SCIENCE_FREE"]  + newSubSci
                var ffssi = fmtSIunits( this.INVENTORY[fid+j+"_SCIENCE_FREE"] );
                this.SCIENCE_DISPLAY[fid][j].textContent =   ffssi[0]+" "+ffssi[1]+"B"
              }
          } else if(GAME_GLOBAL.STATS.STATUS_FLAG["PARTIAL_UNLOCK"][scitype] ) {
              //console.log("partial: "+scitype);
              var newBaseSci = newSci * this.SETTINGS[fid+"_FRACTION"][3];
              this.INVENTORY[fid+"_SCIENCE_FREE"] = this.INVENTORY[fid+"_SCIENCE_FREE"] + newBaseSci
              this.SCIENCE_DISPLAY[fid].total.free.textContent =  fmtSI( this.INVENTORY[fid+"_SCIENCE_FREE"] )+"B"
              for(var j=0;j<subf;j++){
                var newSubSci = newSci * this.SETTINGS[fid+"_FRACTION"][j];
                this.INVENTORY[fid+j+"_SCIENCE_TOTAL"] = this.INVENTORY[fid+j+"_SCIENCE_TOTAL"] + newSubSci
                this.INVENTORY[fid+j+"_SCIENCE_FREE"]  = this.INVENTORY[fid+j+"_SCIENCE_FREE"]  + newSubSci
                var ffssi = fmtSIunits( this.INVENTORY[fid+j+"_SCIENCE_FREE"] );
                this.SCIENCE_DISPLAY[fid][j].textContent =   ffssi[0]+" "+ffssi[1]+"B"
              }
              this.ELEMS[fid+"Base_GAIN_RATE"].textContent = fmtSI(newBaseSci)
          } else {
              //console.log("basic: "+scitype);
              this.INVENTORY[fid+"_SCIENCE_FREE"] = this.INVENTORY[fid+"_SCIENCE_FREE"] + newSci
              var ffsi = fmtSIunits( this.INVENTORY[fid+"_SCIENCE_FREE"] );
              this.SCIENCE_DISPLAY[fid].total.free.textContent =  ffsi[0]+" "+ffsi[1]+"B"
              this.ELEMS[fid+"Base_GAIN_RATE"].textContent = fmtSI(newSci)

          }



       }
    }


    for(var i=0; i<this.RESEARCH_BUTTONS.length; i++){
        this.RESEARCH_BUTTONS[i].canAffordTest()
    }
}

    /*
     POWER USAGE:
    */

function TICK_INDUSTRY_calcPowerUsage(){
    var wattMult = this.STATICVAR_HOLDER.WATTAGE_MULTIPLIER

       //var pwrFmt5 = fmtSIunits( Math.round(this.INVENTORY["POWERGEN"]) * wattMult )
       //var pwrFmt3 = fmtSIunits( Math.round(this.INVENTORY["POWER"]) * wattMult )
       //var pwrFmt4 = fmtSIunits( Math.round((this.INVENTORY["POWERGEN"] - this.INVENTORY["POWER"]))* wattMult )
       //var pwrFmt6 = fmtSIunits( Math.round(this.STATS["CURR_POWER_DEMAND"]) * wattMult )
       //this.ELEMS["POWER_DISPLAY"].unitDisp.textContent =  pwrFmt5[1];
       //this.ELEMS["SURPLUS_POWER_DISPLAY"].unitDisp.textContent =  pwrFmt3[1];
       //this.ELEMS["USAGE_POWER_DISPLAY"].unitDisp.textContent =  pwrFmt4[1];
       //this.ELEMS["DEMAND_POWER_DISPLAY"].unitDisp.textContent =  pwrFmt6[1];

    //fmtSIadv(x, fracDigits = 2, fracStyle = "milli"
    var pwrFracDigits = 3;
    var pwrFmt4 = fmtSIadv( Math.round((this.INVENTORY["POWERGEN"] - this.INVENTORY["POWER"]))* wattMult , fracDigits=pwrFracDigits)
    var pwrFmt5 = fmtSIadv( Math.round(this.INVENTORY["POWERGEN"]) * wattMult , fracDigits=pwrFracDigits)
    var pwrFmt6 = fmtSIadv( Math.round(this.STATS["CURR_POWER_DEMAND"]) * wattMult , fracDigits=pwrFracDigits)
    this.ELEMS["USAGE_POWER_DISPLAY"].textContent =  pwrFmt4;
    this.ELEMS["POWER_DISPLAY"].textContent =  pwrFmt5;
    this.ELEMS["DEMAND_POWER_DISPLAY"].textContent =  pwrFmt6;
    
    if( Math.round(this.INVENTORY["POWER"]) > 0 ){
       var pwrFmt3 = fmtSIadv( Math.round(this.INVENTORY["POWER"]) * wattMult , fracDigits=pwrFracDigits)
       this.ELEMS["SURPLUS_POWER_DISPLAY"].textContent =  pwrFmt3+"W";
       this.ELEMS["SURPLUS_OR_DEFICIT_POWER"].textContent = "Surplus:";
       this.ELEMS["SURPLUS_POWER_DISPLAY"].style.color = "var(--textWarnGreen)";
       this.ELEMS["SURPLUS_OR_DEFICIT_POWER"].style.color = "var(--textWarnGreen)";
    } else {
       var pwrFmt3 = fmtSIadv( Math.round(this.STATS["CURR_POWER_DEMAND"] - this.INVENTORY["POWERGEN"]) * wattMult , fracDigits=pwrFracDigits)
       this.ELEMS["SURPLUS_POWER_DISPLAY"].textContent =  pwrFmt3+"W";
       this.ELEMS["SURPLUS_OR_DEFICIT_POWER"].textContent = "Defecit:";
       this.ELEMS["SURPLUS_POWER_DISPLAY"].style.color = "var(--textWarnRed)";
       this.ELEMS["SURPLUS_OR_DEFICIT_POWER"].style.color = "var(--textWarnRed)";
    }
    
    SURPLUS_OR_DEFICIT_POWER

    



    var pwrUsage = this.INVENTORY["POWERGEN"] - this.INVENTORY["POWER"];
    var pwrUsageLeft = pwrUsage;
    var thermalPwr = 0;

    //console.log("HAWKENER = "+ this.INVENTORY["POWERGEN-Hawk"])
    //TODO: sort by priority!
    for(var i=0; i < this.STATICVAR_HOLDER.POWER_SOURCE_LIST.length; i++){
      var ppid = this.STATICVAR_HOLDER.POWER_SOURCE_LIST[i];
      var pp = ELEMS["POWER_PRODDISPLAY"][ppid];
      var worldType = pp.powerWorld
      var genCapacity = this.INVENTORY["POWERGEN-"+ppid+""]
      var worldPwrUsage = genCapacity;
      //console.log("["+ppid+"]"+"genCapacity:"+genCapacity +", pwrUsageLeft:"+pwrUsageLeft +", worldPwrUsage:"+worldPwrUsage);
      if(genCapacity < pwrUsageLeft){
        pwrUsageLeft = pwrUsageLeft - genCapacity
      } else {
        //pwrUsageLeft = 0;
        worldPwrUsage = pwrUsageLeft;
        pwrUsageLeft = 0;
      }
      var worldPowerCollected = worldPwrUsage / STATS["ENERGYRATE_MULT"][ppid+"pwrGen"];
      thermalPwr = thermalPwr + this.INVENTORY["POWER-Free"+worldType+"-CT"];
      var currThermalMass = (this.INVENTORY["POWER-Free"+worldType+"-CT"] * this.STATICVAR_HOLDER.MASS_PER_POWERTICK)

      var makeAnonFunc2 = function(){
                    var wpAvail = fmtSIadv( Math.round( this.INVENTORY["POWER-Free"+worldType+"-CT"]) * wattMult , fracDigits=pwrFracDigits)
                    var wpThermal = fmtSIadv( Math.round( this.INVENTORY["POWER-Free"+worldType+"-CT"]) * wattMult , fracDigits=pwrFracDigits)
                    var wpCollect = fmtSIadv( Math.round( worldPowerCollected ) * wattMult , fracDigits=pwrFracDigits)
                    var wpOutput = fmtSIadv( Math.round( worldPwrUsage ) * wattMult, fracDigits=pwrFracDigits )
                    var xpp = pp;
                    return function(){
                      xpp.powerAVAIL.textContent   = wpAvail;
                      xpp.powerTHERMAL.textContent =  wpThermal;
                      xpp.powerCOLLECT.textContent =  wpCollect;
                      xpp.powerOUTPUT.textContent  = wpOutput;
                    }
      }
      var anonFunc2 = makeAnonFunc2();
      window.requestAnimationFrame(anonFunc2);

      //console.log("thermal["+worldType+"]: "+fmtSI(this.INVENTORY["MATTER-Free"+worldType+"-CT"]) + " / "+fmtSI(currThermalMass));
      this.INVENTORY["MATTER-Free"+worldType+"-CT"] = this.INVENTORY["MATTER-Free"+worldType+"-CT"] - currThermalMass

      /*
      pp.powerAVAIL.innerHTML   = fmtSIflat( Math.round( this.INVENTORY["POWER-Free"+worldType+"-CT"]) * wattMult );
      pp.powerTHERMAL.textContent =  fmtSIflat( Math.round( this.INVENTORY["POWER-Free"+worldType+"-CT"]) * wattMult );
      //console.log("worldPwrUsage["+ppid+"] = "+worldPwrUsage)
      //console.log("genCapacity["+ppid+"] = "+genCapacity)
      //console.log("INVENTORYCAP["+ppid+"] = "+this.INVENTORY["POWERGEN-"+pc+""])
      pp.powerCOLLECT.textContent =  fmtSIflat( Math.round( worldPowerCollected ) * wattMult );
      pp.powerOUTPUT.textContent =  fmtSIflat( Math.round( worldPwrUsage ) * wattMult );
      */
    }
    var thermalMass = thermalPwr * this.STATICVAR_HOLDER.MASS_PER_POWERTICK
    this.INVENTORY["MATTER-Heat-CT"] = this.INVENTORY["MATTER-Heat-CT"] + thermalMass


    this.ELEMS["MATTERDELTA-Heat-DISPLAY"].textContent = fmtSIdelta(thermalMass)
      /*var makeAnonFunc2 = function(){
                    var thermalString = fmtSIflat(thermalPwr * wattMult);
                    return function(){
                      INVENTORY
                    }
      }
      var anonFunc2 = makeAnonFunc3();
      window.requestAnimationFrame(anonFunc3);    */

}


function TICK_INDUSTRY_calcDeltas(){
     for( var i = 0; i < this.MATTER_TYPE_LIST.length; i++){
          var matterType = this.MATTER_TYPE_LIST[i]
          var matterCt = this.INVENTORY["MATTER-"+matterType+"-CT"];
          var fmtsi = fmtSI(matterCt," ")
          var sd = this.ELEMS["MATTER-"+matterType+"-DISPLAY"]
          sd.textContent =  fmtsi
          //sd.displayUnits.textContent = fmtsi+ "t"
          //sd.displayDiv.title = "tons: basic unit of mass\n"+fmtsi[4];

          var sdd = this.ELEMS["MATTERDELTA-"+matterType+"-DISPLAY"]
          if( sdd != null){
              var diff = matterCt - this["INVENTORY-PREVTICK"]["MATTER-"+matterType+"-CT"];
              var fmtsid = this.fmtSIdelta(diff);
              sdd.textContent =  fmtsid;
              //sdd.displayUnits.textContent =  fmtsid[1]+"t/wk";
              if(matterType == "Biomass"){
                 ELEMS["RESOURCE_DISPLAY_MATTER_Farmland"].textContent      =      fmtSI(matterCt / this.STATICVAR_HOLDER.TONS_PER_ACRE_FARMLAND)
                 ELEMS["RESOURCE_DISPLAY_MATTERDELTA_Farmland"].textContent = this.fmtSIdelta(diff / this.STATICVAR_HOLDER.TONS_PER_ACRE_FARMLAND);
              } 
          }
 
    }
}
GAME_GLOBAL.TICK_INDUSTRY_calcDeltas = TICK_INDUSTRY_calcDeltas;
GAME_GLOBAL.TICK_INDUSTRY_calcPowerUsage = TICK_INDUSTRY_calcPowerUsage;
GAME_GLOBAL.TICK_INDUSTRY_calcScienceGain = TICK_INDUSTRY_calcScienceGain;


console.log("[all science] is lvl "+(1) + ", next threshold: "+fmtSIintNoPct(Math.pow( this.SCIENCE_UNLOCK_THRESH_MULT, (2)) * this.SCIENCE_UNLOCK_THRESH_BASE));


function TICK_calcScience(){
    for(var i=0;i<this.SCIENCE_TYPES.length;i++){
      var sciname = this.SCIENCE_TYPES[i];
      //var subf = SCIENCE_SUBFIELDS[scienceName];
      var currLvl = this.INVENTORY["SCIENCE-LEVEL-"+sciname];
      var currSci = this.INVENTORY[sciname+"_SCIENCE_TOTAL"] + this.INVENTORY["DEEP_SCIENCE_TOTAL"]
      var thresh  = getProjectBaseCost(currLvl + 1)
      if( thresh < currSci ){
         console.log("("+fmtSI(currSci)+") "+"["+sciname+"] is lvl "+(currLvl + 1) + " ["+fmtSI(thresh)+"] next threshold: "+fmtSI(getProjectBaseCost(currLvl + 2)));
         INVENTORY["SCIENCE-LEVEL-"+sciname] = INVENTORY["SCIENCE-LEVEL-"+sciname] + 1;
//
         if( Math.random() < this.SCIENCE_UNLOCK_RATE ){
            this.drawRandomScienceProject(sciname,currLvl)
         }

      }
    }

}

GAME_GLOBAL.TICK_calcScience = TICK_calcScience;


function TICK_calcWar(){

/*
    var captureNeutral = INVENTORY["WORLDS-Neutral-CT"] * (Math.random()/3000)
    var captureHostile = INVENTORY["WORLDS-Hostile-CT"] * (Math.random()/3000)
    INVENTORY["WORLDS-Hostile-CT"] = INVENTORY["WORLDS-Hostile-CT"] - captureHostile
    INVENTORY["WORLDS-Neutral-CT"] = INVENTORY["WORLDS-Neutral-CT"] - captureNeutral
    INVENTORY["WORLDS-Secure-CT"]  = INVENTORY["WORLDS-Secure-CT"]  + captureHostile + captureNeutral*/
}

function TICK_captureSystems(){

    /*
    STATS["seedship-speed"] = 0.001;
    STATS["seedship-toughness"] = 1;

    STATS["seedship-Secure-seedRate"] = 0.95;
    STATS["seedship-Neutral-seedRate"] = 0.75;
    STATS["seedship-Hostile-seedRate"] = 0.05;

    INVENTORY["seedship-transit-buffer"] = [];
    INVENTORY["seedship-transit-CT"] = 0;


    STATS["seedship-distToNextStar"] = 1.219;
    */

    var ssct = Math.min( Math.floor(this.INVENTORY["SHIPS-"+"seedship"+"-CT"]), this.INVENTORY["WORLDS-Neutral-CT"]-this.INVENTORY["seedship-transit-CT"] );


    if(ssct > 0){
      var arriveTime = ( this.STATS["seedship-distToNextStar"] / this.STATS["seedship-speed"] ) + this.STATS["TICK"]
      this.INVENTORY["seedship-transit-CT"] = this.INVENTORY["seedship-transit-CT"] + ssct;
      this.INVENTORY["seedship-transit-buffer"].push([ssct,arriveTime]);
      this.INVENTORY["SHIPS-"+"seedship"+"-CT"] = this.INVENTORY["SHIPS-"+"seedship"+"-CT"] - ssct;
    }
    var landct = 0;
    while(this.INVENTORY["seedship-transit-buffer"].length > 0 && this.INVENTORY["seedship-transit-buffer"][0][1] <= this.STATS["TICK"]){
      landct = landct + this.INVENTORY["seedship-transit-buffer"].shift()[0];
    }
    this.INVENTORY["WORLDS-Fallow-CT"] = this.INVENTORY["WORLDS-Fallow-CT"] + landct;
    this.INVENTORY["seedship-transit-CT"] = this.INVENTORY["seedship-transit-CT"] - landct;
    this.INVENTORY["WORLDS-Neutral-CT"] = this.INVENTORY["WORLDS-Neutral-CT"] - landct;

    this.seedshipsInTransit_SPAN.textContent =  fmtSIintNoPct(this.INVENTORY["seedship-transit-CT"]);
    if(this.INVENTORY["seedship-transit-buffer"].length > 0){
       this.timeToNextLanding_SPAN.textContent =  this.getTimeStringFromTick(this.INVENTORY["seedship-transit-buffer"][0][1] - this.STATS["TICK"])
    } else {
       this.timeToNextLanding_SPAN.textContent =  "N/A"
    }

    /*Fallow
                <span id="seedshipsInTransit_HOLDER"><span class="INFO_TEXT_STATIC">In-transit: </span> <span id="seedshipsInTransit_SPAN"></span></span>
            <span id="timeToNextLanding_HOLDER"><span class="INFO_TEXT_STATIC">Time to next landing: </span> <span id="timeToNextLanding_SPAN"></span></span>

        var seedCapture = ( INVENTORY["WORLDS-Secure-CT"] * ( 1 + Math.random()/2500 ))
        seedCapture = Math.min( INVENTORY["WORLDS-Secure-CT"], seedCapture )
        INVENTORY["WORLDS-Fallow-CT"] = INVENTORY["WORLDS-Fallow-CT"] + seedCapture
        INVENTORY["WORLDS-Secure-CT"] = INVENTORY["WORLDS-Secure-CT"] - seedCapture
    */
    /*
     NOTE: later on, allow capture of neutral systems, with risk to the seedship.
    */
}

function buildFromCost(itemId, itemCt,itemCost){
  var buildLimit = Math.abs( itemCt );
  for(var i=0;i<itemCost.length;i++){
    var cc = itemCost[i];
    if(cc[1] > 0){
      buildLimit = Math.min( Math.floor( this.INVENTORY[ cc[0] ] / cc[1] ), buildLimit);
    }
  }
  for(var i=0;i<itemCost.length;i++){
    var cc = itemCost[i];
    this.INVENTORY[ cc[0] ] = this.INVENTORY[ cc[0] ] - (buildLimit*cc[1]);
  }
  if(itemCt < 0){
    this.INVENTORY[itemId] = this.INVENTORY[itemId] - buildLimit
  } else {
    this.INVENTORY[itemId] = this.INVENTORY[itemId] + buildLimit
  }
  return buildLimit;
}

function TICK_constructWorlds(){

  for(var i=0;i<this.DYSON_TYPE_LIST.length;i++){
    var worldType = this.DYSON_TYPE_LIST[i]
    //if( this.CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType] == null){
      //console.log("null found: i="+i+", "+this.DYSON_TYPE_LIST[i]);
    //}
    if(this.CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].length > 0){
      if(  this.CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][1] < Date.now() ){
        var nxtAttempt = this.CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][0]
        var nxt = this.buildFromCost("WORLDS-"+worldType+"-CT",nxtAttempt,this.STATS["COST-WORLDBUILD-"+worldType]);

        var starInfo = this.STAR_TYPE_SET.getRandStarBatch(nxt,0.5)

        for( var z=0; z < starInfo[1].length; z++){
          var sinfo = starInfo[1][z];
          this.INVENTORY["STARS-" + sinfo[0] +"-CT"] = this.INVENTORY["STARS-" + sinfo[0] +"-CT"] + sinfo[1];
        }
        this.INVENTORY["MATTER-Free"+worldType+"-CT"] = this.INVENTORY["MATTER-Free"+worldType+"-CT"] + (starInfo[2] * this.STATICVAR_HOLDER.SOLAR_MASS);
        this.INVENTORY["POWER-Free"+worldType+"-CT"] = this.INVENTORY["POWER-Free"+worldType+"-CT"] + (starInfo[3] * this.STATICVAR_HOLDER.WATTAGE_SOL_LUMINOSITY);

        if(nxt == nxtAttempt){
          var nxtbuf = this.CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].shift()
        } else {
          this.CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][0] = this.CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][0] - nxt;
        }
        this.CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = this.CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] - nxt
      }
    }
    if(this.CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].length > 0){
      if(  this.CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][1] < Date.now() ){
        var nxtAttempt = this.CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][0]
        var nxt = this.buildFromCost("WORLDS-"+worldType+"-CT",-nxtAttempt,this.STATS["COST-WORLDDECON-"+worldType]);
        if(nxt == nxtAttempt){
          var nxtbuf = this.CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].shift()
        } else {
          this.CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][1] = this.CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][1] - nxt;
        }
        this.CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = this.CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] - nxt
      }
    }
  }
}



GAME_GLOBAL.TICK_calcEvents = TICK_calcEvents;


//MATTER-FreeBot-CT
//MATTER-FreeGreen-CT


GAME_GLOBAL.TICK_readUserInputs = TICK_readUserInputs;
GAME_GLOBAL.TICK_setUserInputs = TICK_setUserInputs;
GAME_GLOBAL.TICK_updateStats = TICK_updateStats;
GAME_GLOBAL.addConstructionRequest = addConstructionRequest;
GAME_GLOBAL.executeAllConstructionRequests = executeAllConstructionRequests;
GAME_GLOBAL.TICK_scoutSystems=TICK_scoutSystems;
GAME_GLOBAL.TICK_calcIndustry=TICK_calcIndustry;

GAME_GLOBAL.TICK_updateWorldCounts=TICK_updateWorldCounts;

GAME_GLOBAL.TICK_constructWorlds = TICK_constructWorlds;

GAME_GLOBAL.TICK_calcWar = TICK_calcWar;
GAME_GLOBAL.TICK_captureSystems = TICK_captureSystems;
GAME_GLOBAL.buildFromCost = buildFromCost;


GAME_GLOBAL.getTimeStringFromTick = getTimeStringFromTick
GAME_GLOBAL.getDateStringFromTick = getDateStringFromTick;


