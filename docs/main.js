



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Holder objects:

SETTINGS = {}
INVENTORY = {}
STATS = {}

STATS["CRAZY_LEVEL"]=0
STATS["CRAZY_ON"]=true
/*INVENTORY["WORLDS"] = {};*/
///////////////////////////////
////Initialize settings
SETTINGS["ADD_MULTIPLIER"] = {}

STATS["WORLDS-Total-CT"]=7

///////////////////////////////
////Initialize initial values:
CONSTRUCTION_BUFFER = {WORLDS_CONST_CT:{},WORLDS_DECON_CT:{}}
CONSTRUCTION_BUFFER["WORLDS_CONST"] = {}
CONSTRUCTION_BUFFER["WORLDS_DECON"] = {}


INVENTORY["SHIP-CONSTRUCT-BUFFER"] = 0;

///////////////////////////////
////Initialize starting stats
STATS["WORLD_BUILD_TIME"] = {Fallow:0,Pop:0,Omni:5000, Bot:20000, Green:10000, Comp:2000, Hub:2000, Slag:0, Seedres:0}
STATS["WORLD_DECON_TIME"]={Fallow:0,Pop:0,Omni:5000, Bot:20000, Green:10000, Comp:2000, Hub:2000, Slag:0, Seedres:0}

STATS["COST-WORLDBUILD-Fallow"] = [["WORLDS-Secure-CT",1]];
STATS["COST-WORLDBUILD-Omni"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Bot"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Green"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Comp"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Hub"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Slag"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Seedres"] = [["WORLDS-Fallow-CT",1]];


STATS["COST-MATTER-Collected"] = [["MATTER-Available-CT",1]];
STATS["COST-MATTER-Processed"] = [["MATTER-Collected-CT",1]];
STATS["COST-MATTER-Ship"] = [["MATTER-Processed-CT",1]];


STATS["COST-WORLDDECON-Fallow"] = [["WORLDS-Secure-CT",-1]];
STATS["COST-WORLDDECON-Omni"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Bot"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Green"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Comp"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Hub"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Slag"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Seedres"] = [["WORLDS-Fallow-CT",-1]];


STATS["CONVERSIONS"] = {}
STATS["CONVERSIONS"]["sunToByte"] =  (1243912971288)
STATS["CONVERSIONS"]["opToSoul"] =   (0.000000001)
STATS["CONVERSIONS"]["sunToOp"] =    (3745454516355)
STATS["CONVERSIONS"]["opToByte"] =   (0.232)
STATS["CONVERSIONS"]["gramsPerWorld"] = 2e30
STATS["CONVERSIONS"]["collectPerSunPerTick"] = 1.5e15
STATS["CONVERSIONS"]["processPerSunPerTick"] = 5.2e15
STATS["CONVERSIONS"]["shipPerSunPerTick"]    = 1
STATS["CONVERSIONS"]["gramPerSunShip"]       = 2.3e14

PRODUCTIVITY_STATS = ["bot","green","bio","eng","psy","think","soul","ship"]
STATS["PRODUCTIVITY_RATING"] = {}
STATS["PRODUCTIVITY_MULT"] = {}

for(var i=0;i<PRODUCTIVITY_STATS.length;i++){
  var stat = PRODUCTIVITY_STATS[i]
  STATS["PRODUCTIVITY_RATING"][stat] = 1
  STATS["PRODUCTIVITY_MULT"][stat] = 1
}
STATS["PRODUCTIVITY_RATING"]["think"] = (1000000000)
STATS["PRODUCTIVITY_RATING"]["soul"] = (10000)

//Productivity: <span id="green_PRODUCTIVITY_DISPLAY"></span>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PERCENT SLIDERS:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var UNIT_EXPLANATION = {};



var PCTSLIDER_FIELDS = ["bio","eng","psy","bot","green","think","soul","ship"]
var PCTSLIDER_DISPLAYUNITS = {bio:"B/s",eng:"B/s",psy:"B/s",bot:"Suns",green:"Suns",think:"Hz",soul:"I",ship:"Suns"}
var PCTSLIDER_DISPLAYUNITSEXPLAIN = {bio:"Byte: the fundamental unit of information. A zero, or a one.",
                                     eng:"Byte: the fundamental unit of information. A zero, or a one.",
                                     psy:"Byte: the fundamental unit of information. A zero, or a one.",
                                     bot:"Suns: The total productivity of one standard dyson sphere (before upgrades).",
                                     green:"Suns: The total productivity of one standard dyson sphere (before upgrades).",
                                     think:"Hertz: Compute cycles per second.",
                                     soul:"Identities: Number of distinct thinking entities being simulated inside the soulswarm network.",
                                     ship:"Suns: The total productivity of one standard dyson sphere (before upgrades)."}


var PCTSLIDER_SUBFIELDCT = [4,4,4,6,6,6,3,3]
var PCTSLIDERS = {}

//PRODUCTIVITY_STATS = ["bot","psy","green","bio","eng","psy","think","soul"]
//STATS["PRODUCTIVITY_RATING"] = {}
//STATS["PRODUCTIVITY_MULT"] = {}

//function fmtSIunits(x){
//Returns [0]baseNumber, [1]prefixAbbrev, [2]prefixFull, [3]prefixExponent, [4]a string of prefix descriptions


function updatePctSliderDisplayHelper(ss){
  var fid = ss.fid;
  var vv = ss.value
  var tt = (vv / 10000) * STATS["PRODUCTIVITY_RATING"][fid] * STATS["PRODUCTIVITY_MULT"][fid]
  var fmtsi = fmtSIunits(tt)
  ss.sdisplay.innerHTML = (vv / 100).toFixed(1) + "% ["+fmtsi[0]
  ss.sdisplayUnits.innerHTML = fmtsi[1]+PCTSLIDER_DISPLAYUNITS[fid]+"]"
  ss.sdisplayDiv.title = PCTSLIDER_DISPLAYUNITSEXPLAIN[fid]+"\n"+fmtsi[4]
}

function updatePctSliderDisplay(ss){
  var fid = ss.fid;
  for(var j = 0; j < ss.othrArray.length; j++){
    updatePctSliderDisplayHelper(ss.othrArray[j])
  }
  updatePctSliderDisplayHelper(ss)
  //PCTSLIDER_DISPLAYUNITS[fid]+"]"
}

function onInputMultiSliderPct(ss){
      var cval = parseFloat(ss.value)
      if(ss.ktotal + cval >= 10000){
        ss.value = 10000 - ss.ktotal
        for(var j = 0; j < ss.othrArray.length; j++){
          if(ss.othrArray[j].lockbox.checked == false){
                ss.othrArray[j].value = 0
          }
        }
      } else if(ss.ktotal + cval < 10000 && ss.stotal == 0) {
        ss.value = 10000 - ss.ktotal
        for(var j = 0; j < ss.othrArray.length; j++){
          if(ss.othrArray[j].lockbox.checked == false){
            ss.othrArray[j].value = 1
          }
        }
        onDownMultiSliderPct(ss)
      } else {
        var othrVal = 10000 - ss.ktotal - cval
        for(var j = 0; j < ss.othrArray.length; j++){
          if(ss.othrArray[j].lockbox.checked == false){
            ss.othrArray[j].value = ss.ssf[j] * othrVal
          }
        }
      }
      updatePctSliderDisplay(ss)
}

function onDownMultiSliderPct(ss){
      //output.innerHTML = "DOWN"
      ss.stotal = 0
      ss.ktotal = 0
      ss.downval = parseFloat(ss.value);
      for(var j = 0; j < ss.othrArray.length; j++){
        if(ss.othrArray[j].lockbox.checked == true){
          ss.ssf[j] = parseFloat(ss.othrArray[j].value);
          ss.ktotal = ss.ktotal + ss.ssf[j]
        } else {
          ss.ssf[j] = parseFloat(ss.othrArray[j].value);
          ss.stotal = ss.stotal + ss.ssf[j]
        }
      }
      for(var j = 0; j < ss.othrArray.length; j++){
        ss.ssf[j] = ss.ssf[j] / ss.stotal
      }
}

//var output = document.getElementById("bioSliderPctVal");
//output.innerHTML = 10;



for(var sfi = 0; sfi < PCTSLIDER_FIELDS.length; sfi++){
    var fid = PCTSLIDER_FIELDS[sfi]
    var fct = PCTSLIDER_SUBFIELDCT[sfi]
    var check_elem = []
    var display_elem = []
    var displayUnits_elem = []
    var displayDiv_elem = []
    var slider_elem = []
    for(var i = 0; i < fct; i++){
         console.log("1: "+fid+"SliderCheck"+(i+1))
         slider_elem[i] = document.getElementById(fid+"SliderPct"+(i+1));
         check_elem[i] = document.getElementById(fid+"SliderCheck"+(i+1));
         display_elem[i] = document.getElementById(fid+"SliderDisplayPct"+(i+1));
         displayUnits_elem[i] = document.getElementById(fid+"SliderDisplayPct"+(i+1)+"_UNITS");
         displayDiv_elem[i] = document.getElementById(fid+"SliderDisplayPct"+(i+1)+"_DIV");
         slider_elem[i].IS_LOCKED = false
         //console.log("2: "+fid+"SliderCheck"+(i+1))
    }
    PCTSLIDERS[fid] = {checkElem: check_elem, displayElem: display_elem, sliderElem:slider_elem}
    for(var i = 0; i < fct; i++){
        var ss = slider_elem[i];
        ss.sdisplay = display_elem[i]
        ss.sdisplayUnits = displayUnits_elem[i]
        ss.sdisplayDiv = displayDiv_elem[i]
        ss.othrArray = slider_elem.slice()
        ss.othrArray.splice(i,1)
        ss.lockbox = check_elem[i]
        ss.fid = fid;
        ss.ssf = []
        ss.stotal = 0
        ss.onmousedown = function() {
          onDownMultiSliderPct(this)
        }
        ss.ontouchstart = function() {
          onDownMultiSliderPct(this)
        }
        //ss.onmouseup = function() {
          //output.innerHTML = "UP"
        //}
        ss.oninput = function() {
          onInputMultiSliderPct(this)
        }
        ss.onchange = function() {
          onInputMultiSliderPct(this)
        }
    }
    onDownMultiSliderPct(slider_elem[0])
    updatePctSliderDisplay(slider_elem[0])
    document.getElementById(fid+"_PRODUCTIVITY_DISPLAY").innerHTML = fmtSI( STATS["PRODUCTIVITY_RATING"][fid] * STATS["PRODUCTIVITY_MULT"][fid])+PCTSLIDER_DISPLAYUNITS[fid]
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATTER:

MATTER_TYPE_LIST = ["Discovered","Available","Collected","Processed","Waste","Heat","Yogurt"]


/*INVENTORY["MATTER"]={}*/
for( var i = 0; i < MATTER_TYPE_LIST.length; i++){
   var matterType = MATTER_TYPE_LIST[i]
   INVENTORY["MATTER-"+matterType+"-CT"] = 0
   var matterDisplay = document.getElementById("RESOURCE_DISPLAY_MATTER_"+matterType)
   INVENTORY["MATTER-"+matterType+"-DISPLAY"] = matterDisplay
   matterDisplay.matterType = matterType
   matterDisplay.displayUnits = document.getElementById(matterType+"_MATTER_UNITS")
   matterDisplay.displayDiv = document.getElementById(matterType+"_MATTER_DIV")

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dyson Sphere / World Management:


WORLD_TYPE_LIST = ["Fallow","Pop","Omni","Bot","Green","Comp","Hub","Neutral","Hostile","Secure","Slag","Seedres"]
WORLD_TYPE_DYSON = [false,false,true,true,true,true,true,false,false,false]

DYSON_TYPE_LIST = ["Omni","Bot","Green","Comp","Hub","Slag","Seedres"]

for( var i = 0; i < WORLD_TYPE_LIST.length; i++){
    var worldType = WORLD_TYPE_LIST[i]
    INVENTORY["WORLDS-"+worldType+"-CT"]=1
    SETTINGS["ADD_MULTIPLIER"][worldType] = 1
    CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = 0
    CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = 0
    CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType] = []
    CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType] = []
}
INVENTORY["WORLDS-"+"Omni"+"-CT"] = 0

for( var i = 0; i < DYSON_TYPE_LIST.length; i++){
   var worldType = DYSON_TYPE_LIST[i]
   var multDisplay = document.getElementById(""+worldType+"_wf_AddUnit")
   var multUp = document.getElementById("button_wf"+worldType+"UP")
   var multDn = document.getElementById("button_wf"+worldType+"DN")
   multUp.disp = multDisplay
   multDn.disp = multDisplay
   multUp.worldType = worldType
   multDn.worldType = worldType
   multDn.mdn = multDn
   multUp.mdn = multDn

   multDn.disabled = true;
   multUp.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] * 1000)
     this.disp.innerHTML = getPrefixSI( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
     this.mdn.disabled = false;
   }
   multDn.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] / 1000)
     this.disp.innerHTML = getPrefixSI( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
     if(SETTINGS["ADD_MULTIPLIER"][this.worldType] <= 1){
       this.mdn.disabled = true;
     }
   }
   var addButtonList = ["BB","B","F","FF"]
   var addButtonMult = [10,1,1,10]
   var addButtonPos  = [false,false,true,true]
   for(var j=0;j < addButtonList.length;j++){
     var bname = addButtonList[j]
     var butelem = document.getElementById("button_wf"+worldType+bname)
     butelem.worldType = worldType;
     butelem.addMult = addButtonMult[j]
     butelem.addPositive = addButtonPos[j]
     butelem.onclick = function(){
       if(this.addPositive){
         startWorldConstruction(  this.worldType,this.addMult * SETTINGS["ADD_MULTIPLIER"][this.worldType])
       } else {
         startWorldDeconstruction(this.worldType,this.addMult * SETTINGS["ADD_MULTIPLIER"][this.worldType])
       }
     }
   }

}

CHEATADD_TYPE_LIST = ["Neutral","Hostile"]


for( var i = 0; i < CHEATADD_TYPE_LIST.length; i++){
   var worldType = CHEATADD_TYPE_LIST[i]
   var multDisplay = document.getElementById(""+worldType+"_wf_AddUnit")
   var multUp = document.getElementById("button_wf"+worldType+"UP")
   var multDn = document.getElementById("button_wf"+worldType+"DN")
   multUp.disp = multDisplay
   multDn.disp = multDisplay
   multUp.worldType = worldType
   multDn.worldType = worldType
   multDn.mdn = multDn
   multUp.mdn = multDn

   multDn.disabled = true;
   multUp.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] * 1000)
     this.disp.innerHTML = getPrefixSI( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
     this.mdn.disabled = false;
   }
   multDn.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] / 1000)
     this.disp.innerHTML = getPrefixSI( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
     if(SETTINGS["ADD_MULTIPLIER"][this.worldType] <= 1){
       this.mdn.disabled = true;
     }
   }
   var addButtonList = ["BB","B","F","FF"]
   var addButtonMult = [10,1,1,10]
   var addButtonPos  = [false,false,true,true]
   for(var j=0;j < addButtonList.length;j++){
     var bname = addButtonList[j]
     var butelem = document.getElementById("button_wf"+worldType+bname)
     butelem.worldType = worldType;
     butelem.addMult = addButtonMult[j]
     butelem.addPositive = addButtonPos[j]
     butelem.onclick = function(){
       if(this.addPositive){
         var worldAdd = INVENTORY["WORLDS-"+this.worldType+"-CT"] + this.addMult * SETTINGS["ADD_MULTIPLIER"][this.worldType]
         INVENTORY["WORLDS-"+this.worldType+"-CT"] = INVENTORY["WORLDS-"+this.worldType+"-CT"] + worldAdd
       } else {
         var worldsubtract = Math.min(INVENTORY["WORLDS-"+this.worldType+"-CT"],this.addMult * SETTINGS["ADD_MULTIPLIER"][this.worldType])
         INVENTORY["WORLDS-"+this.worldType+"-CT"] = INVENTORY["WORLDS-"+this.worldType+"-CT"] - worldsubtract
       }
     }
   }

}

//          <h5>OmniWorlds: <span id="Omni_CT"></span></h5>
//             <div class="buildCtrlPanel">
//              <button class = "button2" id ="button_wfOmniBB" > -- </button>
//              <button class = "button2" id ="button_wfOmniB" > - </button>
//              <button class = "button2" id ="button_wfOmniF" > + </button>
//              <button class = "button2" id ="button_wfOmniFF" > ++ </button>
//              <button class = "button3" id ="button_wfOmniUP" > &#8963; </button>
//             <div class="buildInfoPanel1">kS</div>
//             <div class="buildInfoPanel2">BEEP BEEP BEEP</div>
//              <button class = "button3" id ="button_wfOmniDN" > &#8964; </button>
//             </div>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// COLLAPSIBLE CODE:

var coll = document.getElementsByClassName("collapsible");
var i;

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}



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
      INVENTORY["MATTER-Discovered-CT"] = INVENTORY["MATTER-Discovered-CT"] + newDiscWorlds * STATS["CONVERSIONS"]["gramsPerWorld"]
    }
    if(INVENTORY["WORLDS-Hostile-CT"] > 0){
      var oldDisc = INVENTORY["WORLDS-Hostile-CT"]
      var discoverWorlds = STATS["WORLDS-Total-CT"] * ( Math.random()/2500 )
      INVENTORY["WORLDS-Hostile-CT"] = INVENTORY["WORLDS-Hostile-CT"] + discoverWorlds
      var newDiscWorlds = Math.floor(INVENTORY["WORLDS-Hostile-CT"]) - Math.floor(oldDisc)
      STATS["WORLDS-Total-CT"] = STATS["WORLDS-Total-CT"] + discoverWorlds
      INVENTORY["MATTER-Discovered-CT"] = INVENTORY["MATTER-Discovered-CT"] + newDiscWorlds * STATS["CONVERSIONS"]["gramsPerWorld"]
    }

}


function TICK_calcIndustry(){

   

    document.getElementById("SHIPCONSTRUCTBUFFER_DISPLAY_DIV").innerHTML = INVENTORY["SHIP-CONSTRUCT-BUFFER"]
    
    
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
          INVENTORY["MATTER-Available-CT"] = INVENTORY["MATTER-Available-CT"] + STATS["CONVERSIONS"]["gramsPerWorld"] * nxt;
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TICK: worldconstruction



function startWorldConstruction(worldType,batchCt){
  CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].push([batchCt, (Date.now() + STATS["WORLD_BUILD_TIME"][worldType]) ])
  CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] + batchCt
}
function startWorldDeconstruction(worldType,batchCt){
  console.log("Deconstruct["+worldType+"]["+batchCt+"]: inv="+INVENTORY["WORLDS-"+worldType+"-CT"]+" ConBuf="+CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType]+" DecBuf="+CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType]);
  if(INVENTORY["WORLDS-"+worldType+"-CT"] + CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] - CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] < batchCt){
    //console.log("deconstructing ALL: "+batchCt+">"+INVENTORY[worldType]["CT"]);
    startWorldDeconstruction(worldType,INVENTORY["WORLDS-"+worldType+"-CT"] + CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] - CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType])
  } else if(CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] > 0){
    var leftToDecon = batchCt;
    if( CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] <= batchCt){
      leftToDecon = leftToDecon - CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType];
      CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = 0;
      CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType] = [];
    } else {
      CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] - batchCt;
      while(leftToDecon > 0){
        var idx = CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].length-1;
        var xx = CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][idx][0];
        if(xx > leftToDecon){
          CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][idx][0] = xx - leftToDecon;
          leftToDecon = 0;
        } else {
          leftToDecon = leftToDecon - CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].pop()[0];
        }
      }
    }
    
    if(leftToDecon > 0){
      CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].push([leftToDecon, (Date.now() + STATS["WORLD_DECON_TIME"][worldType]) ])
      CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] + leftToDecon
    }
    
  } else {
    //console.log("deconstructing Some: "+batchCt+"<="+INVENTORY[worldType]["CT"]);
    CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].push([batchCt, (Date.now() + STATS["WORLD_DECON_TIME"][worldType]) ])
    CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] + batchCt
  }
}

//startWorldConstruction("Green",100)
//CONSTRUCTION_BUFFER["WORLDS_CONST"]["Green"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////// CONSOLE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var AI_CONSOLE_AUTOSCROLL=true
var AI_CONSOLE_HTMOD=0
document.getElementById("AI_CONSOLE").scrollTop = document.getElementById("AI_CONSOLE").scrollHeight
printlnToAiConsole("")

document.getElementById("AI_CONSOLE").onscroll = function(){
    if(document.getElementById("AI_CONSOLE").scrollTop + AI_CONSOLE_HTMOD== document.getElementById("AI_CONSOLE").scrollHeight){
        AI_CONSOLE_AUTOSCROLL=true
    } else {
        AI_CONSOLE_AUTOSCROLL=false
    }
}

function printlnToAiConsole(ttt){
    document.getElementById("AI_CONSOLE").innerHTML = document.getElementById("AI_CONSOLE").innerHTML + "<BR> > " +ttt
    if(AI_CONSOLE_AUTOSCROLL){
      document.getElementById("AI_CONSOLE").scrollTop = document.getElementById("AI_CONSOLE").scrollHeight
      AI_CONSOLE_HTMOD = document.getElementById("AI_CONSOLE").scrollHeight - document.getElementById("AI_CONSOLE").scrollTop
    }
}
function printToAiConsole(ttt){
    document.getElementById("AI_CONSOLE").innerHTML = document.getElementById("AI_CONSOLE").innerHTML + "" +ttt
    if(AI_CONSOLE_AUTOSCROLL){
      document.getElementById("AI_CONSOLE").scrollTop = document.getElementById("AI_CONSOLE").scrollHeight
      AI_CONSOLE_HTMOD = document.getElementById("AI_CONSOLE").scrollHeight - document.getElementById("AI_CONSOLE").scrollTop
    }
}

console.log( document.getElementById("AI_CONSOLE").scrollTop)
console.log( document.getElementById("AI_CONSOLE").scrollHeight)



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CHEATS AND UNLOCKABLE VARS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




document.getElementById("CHEAT_LESSCRAZY").onclick = function(){
     STATS["CRAZY_LEVEL"] = STATS["CRAZY_LEVEL"] - 1
     if(STATS["CRAZY_LEVEL"] == 0){
       this.disabled = true
     }
     document.getElementById("CHEAT_MORECRAZY").disabled = false

   }

document.getElementById("CHEAT_MORECRAZY").onclick = function(){
     STATS["CRAZY_LEVEL"] = STATS["CRAZY_LEVEL"] + 1
     if(STATS["CRAZY_LEVEL"] == 9){
       this.disabled = true
     }
     document.getElementById("CHEAT_LESSCRAZY").disabled = false
   }

document.getElementById("CHEAT_HALTCRAZY").onclick = function(){
     STATS["CRAZY_ON"] = false
     document.getElementById("CHEAT_STARTCRAZY").disabled = false
     this.disabled = true
   }

document.getElementById("CHEAT_STARTCRAZY").onclick = function(){
     STATS["CRAZY_ON"] = true
     document.getElementById("CHEAT_HALTCRAZY").disabled = false
     this.disabled = true
   }

document.getElementById("CHEAT_RESET_CRAZY").onclick = function(){
     resetAllCrazy()
   }


////////////////////////////////////

var UNLOCKS={
  WASTEREPROCESS:false,
  TRANSMUTEYOGURT:false,
  BIOWEAPONS:false,
  ESPIONAGE:false,
  HACKING:false
}


////////////////////////////////////

UNLOCKABLES=["WASTEREPROCESS","TRANSMUTEYOGURT","BIOWEAPONS","ESPIONAGE","HACKING","COMPOST"]
UNLOCKABLE_SLIDERINFO=[["bot",3],["bot",4],["green",3],["soul",3],["think",3],["green",4]]

// botSliderPct4 botSliderCheck4

for(var i=0;i<UNLOCKABLES.length;i++){
   document.getElementById("CHEAT_UNLOCK_"+UNLOCKABLES[i]).lockhide = document.getElementById("LOCKHIDE_"+UNLOCKABLES[i])
   document.getElementById("CHEAT_UNLOCK_"+UNLOCKABLES[i]).unlockid = UNLOCKABLES[i]
   document.getElementById("CHEAT_UNLOCK_"+UNLOCKABLES[i]).ss       = document.getElementById(UNLOCKABLE_SLIDERINFO[i][0]+"SliderPct"+  UNLOCKABLE_SLIDERINFO[i][1])
   document.getElementById("CHEAT_UNLOCK_"+UNLOCKABLES[i]).ss.lockbox.checked = true;

   document.getElementById("CHEAT_UNLOCK_"+UNLOCKABLES[i]).onclick = function(){
       if(UNLOCKS[this.unlockid]){
         this.lockhide.style.display = "none"
         this.innerHTML = "UNLOCK "+ this.unlockid
         this.ss.value = 0;
         this.ss.lockbox.checked = true;
          document.getElementById("CHEAT_UNLOCK_"+UNLOCKABLES[i]).ss
       } else {
         this.lockhide.style.display = "block"
         this.innerHTML = "LOCK "+ this.unlockid
       }
       UNLOCKS[this.unlockid]= ! UNLOCKS[this.unlockid]
     }

   document.getElementById("CHEAT_UNLOCK_"+UNLOCKABLES[i]).ss
}

document.getElementById("botSliderDisplayPct4").IS_LOCKED = true
document.getElementById("botSliderDisplayPct4").LOCKER = document.getElementById("LOCKHIDE_TRANSMUTEYOGURT")

document.getElementById("thinkSliderDisplayPct3").IS_LOCKED = true
document.getElementById("thinkSliderDisplayPct3").LOCKER = document.getElementById("LOCKHIDE_HACKING")

document.getElementById("soulSliderDisplayPct2").IS_LOCKED = true
document.getElementById("soulSliderDisplayPct2").LOCKER = document.getElementById("LOCKHIDE_ESPIONAGE")

document.getElementById("botSliderDisplayPct3").IS_LOCKED = true
document.getElementById("botSliderDisplayPct3").LOCKER = document.getElementById("LOCKHIDE_WASTEREPROCESS")

document.getElementById("greenSliderDisplayPct3").IS_LOCKED = true
document.getElementById("greenSliderDisplayPct3").LOCKER = document.getElementById("LOCKHIDE_BIOWEAPONS")

document.getElementById("greenSliderDisplayPct4").IS_LOCKED = true
document.getElementById("greenSliderDisplayPct4").LOCKER = document.getElementById("LOCKHIDE_COMPOST")

var settingsBG = document.getElementById('SETTINGS_WINDOW');
var settingsWindow = document.getElementById('SETTINGS_WINDOW_CONTENT');

document.getElementById("SETTINGS_BUTTON").onclick = function(){
    settingsBG.style.display="block"
    settingsWindow.style.display = "block"
}

document.getElementById("SETTINGS_WINDOW_CLOSE").onclick = function(){
    settingsBG.style.display="none"
    settingsWindow.style.display = "none"
}

window.onclick = function(event) {
  if(event.target == settingsBG) {
    settingsBG.style.display="none"
    settingsWindow.style.display = "none";
  }
}

document.getElementById("ENABLE_CHEATS_CHECKBOX").oninput = function(){
  if(this.checked){
    console.log("TEST1")
    document.getElementById("CHEAT_DEBUG_PANEL").style.display = "block";
  } else {
    console.log("TEST2")
    document.getElementById("CHEAT_DEBUG_PANEL").style.display = "none";

  }
}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Economy stuff
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


CONSTRUCTION_REQUESTS=[];

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

function addConstructionRequest(inventoryItemName, requestCt, unitCost){
   CONSTRUCTION_REQUESTS.push( [inventoryItemName, requestCt, unitCost, requestCt] )
}

function executeAllConstructionRequests(){
  var costResourceSet = new Set();
  var costRequests = {};
  for(var i=0;i<CONSTRUCTION_REQUESTS.length;i++){
    for(var j=0; j<CONSTRUCTION_REQUESTS[i][2].length; j++){
      var xcc = CONSTRUCTION_REQUESTS[i][2][j][0];
      var reqCt = CONSTRUCTION_REQUESTS[i][1];
      var uCost = CONSTRUCTION_REQUESTS[i][2][j][1];
      if(costRequests[xcc] == null){
        costRequests[xcc] = []
      }
      costRequests[xcc].push([i,j,reqCt * uCost])
      costResourceSet.add(xcc)
    }
  }
  /*console.log("costResourceSet: "+console.log("?"))*/
  for(let ccx of costResourceSet.values() ){
     /*console.log("ccx["+ccx+"]")*/
     var cr = costRequests[ccx]
     var crTotal = 0;
     for(let crr of cr){
       crTotal = crTotal + crr[2];
     }
     if(crTotal > INVENTORY[ccx]){
       for(let crr of cr){
         var uCost = CONSTRUCTION_REQUESTS[crr[0]][2][crr[1]][1];
         var currReqCt = CONSTRUCTION_REQUESTS[crr[0]][3];
         /*console.log("["+ccx+"]: ["+uCost+" / "+currReqCt+" / "+((crr[2] / crTotal) * INVENTORY[ccx]) / uCost+"]")*/
         CONSTRUCTION_REQUESTS[crr[0]][3] = Math.min( currReqCt, ((crr[2] / crTotal) * INVENTORY[ccx]) / uCost )
       }
     }
  }
  for(var i=0;i<CONSTRUCTION_REQUESTS.length;i++){
    var bb = CONSTRUCTION_REQUESTS[i][0];
    for(var j=0; j<CONSTRUCTION_REQUESTS[i][2].length; j++){
      var ccx = CONSTRUCTION_REQUESTS[i][2][j][0];
      var reqCt = CONSTRUCTION_REQUESTS[i][3];
      var uCost = CONSTRUCTION_REQUESTS[i][2][j][1];
      INVENTORY[ccx] = INVENTORY[ccx] - reqCt * uCost;
      INVENTORY[bb] = INVENTORY[bb] + reqCt;
    }
  }
  CONSTRUCTION_REQUESTS = [];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tooltips:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*"-"+(this.ttTextElem.clientHeight /4) + "px"*/
 
 
var ttList = document.getElementsByClassName("tooltipHolder");
var currentlyOpenTooltip = null;
var clickToggle = true

for(var i = 0; i < ttList.length; i++){
  ttList[i].ttTextElem = ttList[i].lastElementChild
  ttList[i].addEventListener('click',function(){
      if(currentlyOpenTooltip != null){
        currentlyOpenTooltip.ttTextElem.style.visibility = "hidden";
        currentlyOpenTooltip = null;
      }
      this.ttTextElem.style.visibility = "visible"
      currentlyOpenTooltip = this
      this.ttTextElem.style.top = 0  
      console.log("ht = "+this.ttTextElem.offsetHeight+", top:"+this.ttTextElem.style.top);
      clickToggle = false
  },false)
}



window.addEventListener('click',function(event) {
  if(currentlyOpenTooltip != null && clickToggle) {
    currentlyOpenTooltip.ttTextElem.style.visibility = "hidden";
    currentlyOpenTooltip = null;
  }
  clickToggle = true
},false);















