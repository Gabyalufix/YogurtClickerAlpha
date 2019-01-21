



///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// Holder objects:

var SIPREFIX=["k","M","G","T","P","E","Z","Y"]
var SIPREFIXLOW=["m","u","n","p","f","a","z","y"]

var SIPREFIXLONG=["kilo","Mega","Giga","Tera","Peta","Exa","Zetta","Yotta"]
var SIPREFIXExplain=["kilo: Thousands, 1e3","Mega: Millions, 1e6","Giga: Billions, 1e9","Tera: Trillions, 1e12","Peta: Quadrillions, 1e15","Exa: Quintillions, 1e18","Zetta: Sextillions, 1e21","Yotta: Septillions, 1e24"]

SETTINGS = {}
INVENTORY = {}
STATS = {}

STATS["CRAZY_LEVEL"]=0
STATS["CRAZY_ON"]=true
///////////////////////////////
////Initialize settings
SETTINGS["ADD_MULTIPLIER"] = {}



///////////////////////////////
////Initialize initial values:
CONSTRUCTION_BUFFER = {WORLDS_CONST_CT:{},WORLDS_DECON_CT:{}}
CONSTRUCTION_BUFFER["WORLDS_CONST"] = {}
CONSTRUCTION_BUFFER["WORLDS_DECON"] = {}




///////////////////////////////
////Initialize starting stats
STATS["WORLD_BUILD_TIME"] = {Fallow:0,Pop:0,Omni:5000, Bot:20000, Green:10000, Comp:2000, Hub:2000}
STATS["WORLD_DECON_TIME"]={Fallow:0,Pop:0,Omni:5000, Bot:20000, Green:10000, Comp:2000, Hub:2000}
STATS["CONVERSIONS"] = {}
STATS["CONVERSIONS"]["sunToByte"] = 1243912971288
STATS["CONVERSIONS"]["opToSoul"] = 0.000000001
STATS["CONVERSIONS"]["sunToOp"] =   3745454516355
STATS["CONVERSIONS"]["opToByte"] =   0.232

PRODUCTIVITY_STATS = ["bot","green","bio","eng","psy","think","soul","ship"]
STATS["PRODUCTIVITY_RATING"] = {}
STATS["PRODUCTIVITY_MULT"] = {}

for(var i=0;i<PRODUCTIVITY_STATS.length;i++){
  var stat = PRODUCTIVITY_STATS[i]
  STATS["PRODUCTIVITY_RATING"][stat] = 1
  STATS["PRODUCTIVITY_MULT"][stat] = 1
}
STATS["PRODUCTIVITY_RATING"]["think"] = 1000000000
STATS["PRODUCTIVITY_RATING"]["soul"] = 10000

//Productivity: <span id="green_PRODUCTIVITY_DISPLAY"></span>


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// PERCENT SLIDERS:
///////////////////////////////////////////////////////////////////////////////////////////////////
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


var PCTSLIDER_SUBFIELDCT = [4,4,4,5,4,6,3,3]
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
  for(j = 0; j < ss.othrArray.length; j++){
    updatePctSliderDisplayHelper(ss.othrArray[j])
  }
  updatePctSliderDisplayHelper(ss)
  //PCTSLIDER_DISPLAYUNITS[fid]+"]"
}

function onInputMultiSliderPct(ss){
      var cval = parseFloat(ss.value)
      if(ss.ktotal + cval >= 10000){
        ss.value = 10000 - ss.ktotal
        for(j = 0; j < ss.othrArray.length; j++){
          if(ss.othrArray[j].lockbox.checked == false){
                ss.othrArray[j].value = 0
          }
        }
      } else if(ss.ktotal + cval < 10000 && ss.stotal == 0) {
        ss.value = 10000 - ss.ktotal
        for(j = 0; j < ss.othrArray.length; j++){
          if(ss.othrArray[j].lockbox.checked == false){
            ss.othrArray[j].value = 1
          }
        }
        onDownMultiSliderPct(ss)
      } else {
        var othrVal = 10000 - ss.ktotal - cval
        for(j = 0; j < ss.othrArray.length; j++){
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
      for(j = 0; j < ss.othrArray.length; j++){
        if(ss.othrArray[j].lockbox.checked == true){
          ss.ssf[j] = parseFloat(ss.othrArray[j].value);
          ss.ktotal = ss.ktotal + ss.ssf[j]
        } else {
          ss.ssf[j] = parseFloat(ss.othrArray[j].value);
          ss.stotal = ss.stotal + ss.ssf[j]
        }
      }
      for(j = 0; j < ss.othrArray.length; j++){
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


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// Dyson Sphere / World Management:


WORLD_TYPE_LIST = ["Fallow","Pop","Omni","Bot","Green","Comp","Hub"]
WORLD_TYPE_DYSON = [false,false,true,true,true,true,true]
DYSON_TYPE_LIST = ["Omni","Bot","Green","Comp","Hub"]

for( var i = 0; i < WORLD_TYPE_LIST.length; i++){
    var worldType = WORLD_TYPE_LIST[i]
    INVENTORY[worldType] = {CT:1}
    SETTINGS["ADD_MULTIPLIER"][worldType] = 1
    CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = 0
    CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = 0
    CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType] = []
    CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType] = []
}

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
   for(j=0;j < addButtonList.length;j++){
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


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
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



var coll = document.getElementsByClassName("collapsibleTHIN");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
var coll = document.getElementsByClassName("collapsibleLV2");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///MAIN TICK CYCLE:

var TICK_TIMESTAMP
var secTimer = 0
window.setInterval(function(){
    TICK_TIMESTAMP = Date.now()
    TICK_readUserInputs()
    TICK_updateStats()
    TICK_captureSystems()
    TICK_constructWorlds()
    TICK_updateWorldCounts()
    secTimer++;
    if (secTimer >= 250){
      secTimer = 0;
      calculateSlowTick();
    }
    SLOWTICK_makeCrazy();

},10);


var varNumTicksSoFar = 0
function calculateSlowTick(){
    varNumTicksSoFar = varNumTicksSoFar + 1
    printlnToAiConsole("" + varNumTicksSoFar+" secTimer = "+secTimer)

}
//SETTINGS["bio"+"_FRACTION"]

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//TICK FUNCTIONS:


function TICK_readUserInputs(){
  //Percent sliders:
  for(var i =0; i<PCTSLIDER_FIELDS.length; i++){
    var fid = PCTSLIDER_FIELDS[i]
    SETTINGS[fid+"_FRACTION"] = [];
    for(j=0;j<PCTSLIDERS[fid]["displayElem"].length;j++){
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

  STATS["PRODUCTIVITY_RATING"]["think"] = STATS["CONVERSIONS"]["sunToOp"]   * INVENTORY["Comp"]["CT"] * STATS["PRODUCTIVITY_MULT"]["think"]
  STATS["PRODUCTIVITY_RATING"]["bio"]   = STATS["CONVERSIONS"]["sunToByte"] * INVENTORY["Green"]["CT"] * STATS["PRODUCTIVITY_MULT"]["green"] * SETTINGS["green_FRACTION"][0]
  STATS["PRODUCTIVITY_RATING"]["eng"]   = STATS["CONVERSIONS"]["opToByte"]  * STATS["PRODUCTIVITY_RATING"]["think"] * SETTINGS["think_FRACTION"][1]
  STATS["PRODUCTIVITY_RATING"]["psy"]   = STATS["CONVERSIONS"]["opToSoul"]  * STATS["PRODUCTIVITY_MULT"]["soul"] * SETTINGS["soul_FRACTION"][0]
  
  for(var sfi = 0; sfi < PCTSLIDER_FIELDS.length; sfi++){
      var fid = PCTSLIDER_FIELDS[sfi]
      document.getElementById(fid+"_PRODUCTIVITY_DISPLAY").innerHTML = fmtSI( STATS["PRODUCTIVITY_RATING"][fid] * STATS["PRODUCTIVITY_MULT"][fid])+PCTSLIDER_DISPLAYUNITS[fid]
      updatePctSliderDisplay(PCTSLIDERS[fid]["sliderElem"][0])
  }
  document.getElementById("DEBUG_CRAZY_LEVEL_DISPLAY").innerHTML = STATS["CRAZY_LEVEL"]
}

function TICK_updateWorldCounts(){
    for( var i = 0; i < WORLD_TYPE_LIST.length; i++){
        var worldType = WORLD_TYPE_LIST[i]
        var worldCountLine = fmtSI(INVENTORY[WORLD_TYPE_LIST[i]]["CT"])
        if( CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] > 0 ){
          worldCountLine = worldCountLine + " (building: "+fmtSI(CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType])+")"
        }
        if( CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] > 0 ){
          worldCountLine = worldCountLine + " (breaking: "+fmtSI(CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType])+")"
        }
        document.getElementById(WORLD_TYPE_LIST[i] + "_CT").innerHTML = worldCountLine
    }
}
function TICK_captureSystems(){
    INVENTORY["Fallow"]["CT"] = ( INVENTORY["Fallow"]["CT"] * ( 1 + Math.random()/2500 ))
}
function TICK_constructWorlds(){
  
  for(var i=0;i<DYSON_TYPE_LIST.length;i++){
    var worldType = DYSON_TYPE_LIST[i]
    if(CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].length > 0){
      if(  CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType][0][1] < Date.now() ){
        var nxt = CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].shift()
        INVENTORY[worldType]["CT"] = INVENTORY[worldType]["CT"] + nxt[0]
        CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] - nxt[0]
      }
    }
    if(CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].length > 0){
      if(  CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType][0][1] < Date.now() ){
        var nxt = CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].shift()
        INVENTORY[worldType]["CT"] = INVENTORY[worldType]["CT"] - nxt[0]
        CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] - nxt[0]
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////




function startWorldConstruction(worldType,batchCt){
  CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType].push([batchCt, (Date.now() + STATS["WORLD_BUILD_TIME"][worldType]) ])
  CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] + batchCt
}
function startWorldDeconstruction(worldType,batchCt){
  if(INVENTORY[worldType]["CT"] - CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] < batchCt){
    //console.log("deconstructing ALL: "+batchCt+">"+INVENTORY[worldType]["CT"]);
    startWorldDeconstruction(worldType,INVENTORY[worldType]["CT"] - CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType])
  } else {
    //console.log("deconstructing Some: "+batchCt+"<="+INVENTORY[worldType]["CT"]);
    CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType].push([batchCt, (Date.now() + STATS["WORLD_DECON_TIME"][worldType]) ])
    CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] + batchCt
  }
}

//startWorldConstruction("Green",100)
//CONSTRUCTION_BUFFER["WORLDS_CONST"]["Green"]

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////








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
    document.getElementById("AI_CONSOLE").innerHTML = document.getElementById("AI_CONSOLE").innerHTML + "<BR>" +ttt
    if(AI_CONSOLE_AUTOSCROLL){
      document.getElementById("AI_CONSOLE").scrollTop = document.getElementById("AI_CONSOLE").scrollHeight
      AI_CONSOLE_HTMOD = document.getElementById("AI_CONSOLE").scrollHeight - document.getElementById("AI_CONSOLE").scrollTop
    }
}

console.log( document.getElementById("AI_CONSOLE").scrollTop)
console.log( document.getElementById("AI_CONSOLE").scrollHeight)

function roundTo(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(decimals);
}

function fmtSI(x){
  if(x < 1){
      var d = -Math.ceil(Math.log10(x))
      var dd = (Math.floor(d / 3))
      var suffix = SIPREFIXLOW[dd];
      var rr = x / Math.pow(10,(-dd)*3)
      return roundTo(rr,1) + suffix
  } else {
      if(x < 100){
        return roundTo(x,1)
      } else if(x < 1000){
        return ""+Math.round(x)
      }

      var d = Math.floor(Math.log10(x))
      var dd = Math.floor(d / 3) - 1
      var ddd = Math.floor(dd / 8)
      var ddp = dd - ddd * 8
      var rr = x / Math.pow(10,(dd+1)*3)
      var dp = 2 - (d - ((dd+1)*3))
      var suffix = SIPREFIX[ddp] + "Y".repeat(ddd)
      return roundTo(rr,dp) + suffix
  }
}

//Returns [0]baseNumber, [1]prefixAbbrev, [2]prefixFull, [3]prefixExponent, [4]a string of prefix descriptions
function fmtSIunits(x){
  if(x == 0){
      return [0, "", "", 0,""]
  } else if(x <= 1){
      var d = -Math.ceil(Math.log10(x))
      var dd = (Math.floor(d / 3))
      var suffix = SIPREFIXLOW[dd];
      var rr = x / Math.pow(10,(-dd)*3)
      return [roundTo(rr,1), suffix,"???",dd,"???"]
  } else {
      if(x < 100){
        return roundTo(x,1)
      } else if(x < 1000){
        return ""+Math.round(x)
      }

      var d = Math.floor(Math.log10(x))
      var dd = Math.floor(d / 3) - 1
      var ddd = Math.floor(dd / 8)
      var ddp = dd - ddd * 8
      var rr = x / Math.pow(10,(dd+1)*3)
      var dp = 2 - (d - ((dd+1)*3))
      var suffix = SIPREFIX[ddp] + "Y".repeat(ddd)
      var longSuffix = SIPREFIXLONG[ddp] + "Yotta".repeat(ddd)
      var suffixExplain = SIPREFIXExplain[ddp]
      if(ddp != 7 && ddd > 0){
        suffixExplain = suffixExplain + "<br>"+ SIPREFIXExplain[ddp]
      }
      return [roundTo(rr,dp), suffix, longSuffix, (dd+1)*3,suffixExplain]
  }
}

//var SIPREFIXLONG=["kilo","Mega","Giga","Tera","Peta","Exa","Zetta","Yotta"]
//var SIPREFIXExplain=["kilo: Thousands, 1e3","Mega: Millions, 1e6","Giga: Billions, 1e9","Tera: Trillions, 1e12","Peta: Quadrillions, 1e15","Exa: Quintillions, 1e18","Zetta: Sextillions, 1e21","Yotta: Septillions, 1e24"]


function getPrefixSI(x){
  if(x < 1000){
    return ""
  }
  var d = Math.floor(Math.log10(x))
  var dd = Math.floor(d / 3) - 1
  var ddd = Math.floor(dd / 8)
  var ddp = dd - ddd * 8
  var prefix = SIPREFIX[ddp] + "Y".repeat(ddd)
  return prefix
}




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













