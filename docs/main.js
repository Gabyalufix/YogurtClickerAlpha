



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Holder objects:

SETTINGS = {}
INVENTORY = {}
STATS = {}
RESEARCH_BUTTONS=[];

STATS["TICK"] = 0;
STATS["PAUSE"] = false;

ELEMS = {};

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
var UNLOCKS={
  WASTEREPROCESS:false,
  TRANSMUTEYOGURT:false,
  BIOWEAPONS:false,
  ESPIONAGE:false,
  HACKING:false
}


////////////////////////////////////

UNLOCKABLES=["WASTEREPROCESS","TRANSMUTEYOGURT","BIOWEAPONS","HACKING","COMPOST"]
UNLOCKABLE_SLIDERINFO=[["bot",3],["bot",4],["green",3],["think",3],["green",4]]

////////////////////////////////////
var PCTSLIDER_FIELDS = ["bio","eng","psy","bot","green","think","soul","ship","scout","battleplate","comp","strat"]
var PCTSLIDER_DISPLAYUNITS = {bio:"B/wk",eng:"B/wk",psy:"B/wk",bot:"gI",green:"gI",think:"Hz",soul:"I",ship:"Suns",scout:" Ships",battleplate:" Ships",comp:"Hz",strat:" Ships"}
var PCTSLIDER_DISPLAYUNITSEXPLAIN = {bio:"Byte: the fundamental unit of information. A zero, or a one.",
                                     eng:"Byte: the fundamental unit of information. A zero, or a one.",
                                     psy:"Byte: the fundamental unit of information. A zero, or a one.",
                                     bot:"tI: The industrial productivity of one ton of basic smartmatter (before upgrades).",
                                     green:"tI: The industrial productivity of one ton of basic smartmatter (before upgrades)",
                                     think:"Hertz: Compute cycles per second.",
                                     soul:"Identities: Number of distinct thinking entities being simulated inside the soulswarm network.",
                                     ship:"tI: The industrial productivity of one ton of basic smartmatter (before upgrades)",
                                     ships:"Ships: the number of ships assigned a given task.",
                                     scout:"Ships: the number of ships assigned a given task.",
                                     battleplate:"Ships: the number of ships assigned a given task.",
                                     comp:"Hertz: Compute cycles per second.",
                                     strat:"Ships: the number of ships assigned a given task."}


var PCTSLIDER_SUBFIELDCT = [3,3,3,7,7,3,3,3,3,3,2,3]
var PCTSLIDERS = {}

////////////////////////////////////

MATTER_TYPE_LIST = ["FreeBot","Feedstock","Botbots","Compute","FreeGreen","Digested","Biomass","Waste","Heat","Yogurt","Biopwr","Botpwr"]


var WORLD_TYPE_LIST = ["Fallow","Pop","Omni","Bot","Green","Comp","Hub","Neutral","Hostile","Secure","Slag","Seedres"]
var WORLD_TYPE_DYSON = [false,false,true,true,true,true,true,false,false,false]

var DYSON_TYPE_LIST = ["Omni","Bot","Green","Comp","Hub","Slag","Seedres"]
var CONSTRUCTION_REQUESTS=[];
var SHIP_TYPE_LIST = ["scout","battleplate","seedship"]

////////////////////////////////////

UPGRADE_COST = {};
UPGRADE_COST["Bot"] = {};
UPGRADE_COST["Green"] = {};

UPGRADE_COST["Bot"]["calc"] = function(lvl){
    return [["eng_SCIENCE_FREE",Math.pow(Math.sqrt(10),lvl) * 50e17]];
}
UPGRADE_COST["Green"]["calc"] = function(lvl){
    return [["bio_SCIENCE_FREE",Math.pow(Math.sqrt(10),lvl) * 50e17]];
}
UPGRADE_COST["Bot"]["curr"] = UPGRADE_COST["Bot"].calc(1)
UPGRADE_COST["Green"]["curr"] = UPGRADE_COST["Green"].calc(1)

UPGRADE_COST["Bot"]["effect"] = function(){
   STATS["PRODUCTIVITY_MULT"]["bot"] = STATS["PRODUCTIVITY_MULT"]["bot"] + 0.2;
}
UPGRADE_COST["Green"]["effect"] = function(){
   STATS["PRODUCTIVITY_MULT"]["green"] = STATS["PRODUCTIVITY_MULT"]["green"] + 0.2;
}

STATS["UPGRADE_COST"] = UPGRADE_COST;

////////////////////////////////////

var bgCanvas = document.getElementById("BACKGROUND_CANVAS");
bgCanvas.RUN_STATIC = false;

var contentSet = document.getElementsByClassName("contentUnitHolder")
var itsSet = document.getElementsByClassName("INFO_TEXT_STATIC");
var bgStatic = document.getElementById("BACKGROUND_STATIC")
var GAME_GLOBAL = {
       SETTINGS:SETTINGS,
       INVENTORY:INVENTORY,
       STATS:STATS,
       CONSTRUCTION_BUFFER:CONSTRUCTION_BUFFER,
       UNLOCKS:UNLOCKS,
       STATICVAR_HOLDER:STATICVAR_HOLDER,
       contentSet:contentSet,
       itsSet:itsSet,
       bgCanvas:bgCanvas,
       bgStatic:bgStatic,
       PCTSLIDER_FIELDS:PCTSLIDER_FIELDS,
       PCTSLIDER_DISPLAYUNITS:PCTSLIDER_DISPLAYUNITS,
       PCTSLIDERS:PCTSLIDERS,
       DEBUG_CRAZY_LEVEL_DISPLAY:document.getElementById("DEBUG_CRAZY_LEVEL_DISPLAY"),
       DATE_DISPLAY:document.getElementById("DATE_DISPLAY"),
       MOOD_DISPLAY:document.getElementById("MOOD_DISPLAY"),
       MATTER_TYPE_LIST:MATTER_TYPE_LIST,
       SHIPCONSTRUCTBUFFER_DISPLAY_DIV:document.getElementById("SHIPCONSTRUCTBUFFER_DISPLAY_DIV"),
       ELEMS:ELEMS,
       WORLD_TYPE_LIST:WORLD_TYPE_LIST,
       DYSON_TYPE_LIST:DYSON_TYPE_LIST,
       CONSTRUCTION_REQUESTS:CONSTRUCTION_REQUESTS,
       SHIP_TYPE_LIST:SHIP_TYPE_LIST,
       ALL_CONTENT_CONTAINER:document.getElementById("ALL_CONTENT_CONTAINER"),
       timeToNextLanding_SPAN: document.getElementById("timeToNextLanding_SPAN"),
       seedshipsInTransit_SPAN:document.getElementById("seedshipsInTransit_SPAN"),
       RESEARCH_BUTTONS:RESEARCH_BUTTONS
}


///////////////////////////////

function canAfford(c){
   for(var i=0; i<c.length;i++){
      if( this.INVENTORY[ c[i][0] ] < c[i][1] ){
         return false;
      }
   }
   return true;
}
GAME_GLOBAL.canAfford = canAfford

function makeCostAbbriv(cc,delim){
   var ccc = fmtSIunits(cc[0][1]);
   var costString = ccc[0] + ccc[1] +"B "+ STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"][cc[0][0]];
   if(cc.length > 1){
     for(var i=1; i<cc.length;i++){
       var c3 = fmtSIunits(cc[i][1]);
       costString = costString + delim + ccc[0] + ccc[1] +"B "+ STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"][cc[0][0]];
     }
   }
   return costString;
}
GAME_GLOBAL.makeCostAbbriv = makeCostAbbriv


///////////////////////////////
////Initialize starting stats

STATS["CONVERSIONS"] = {}
STATS["CONVERSIONS"]["sunToByte"] =  (1243912971288)
STATS["CONVERSIONS"]["opToSoul"] =   (0.000000001)
STATS["CONVERSIONS"]["sunToOp"] =    (3745454516355)
STATS["CONVERSIONS"]["opToByte"] =   (0.232)
STATS["CONVERSIONS"]["gramsPerWorld"] = 2e21

STATS["CONVERSIONS"]["yearPerTick"] = 1 / 52;
STATS["CONVERSIONS"]["timeUnitPerTick"] = 1;
STATS["CONVERSIONS"]["timeAtZero"]  = 2152;



//STATS["CONVERSIONS"]["collectPerSunPerTick"] = 1.5e15
//STATS["CONVERSIONS"]["processPerSunPerTick"] = 5.2e15
//STATS["CONVERSIONS"]["shipPerSunPerTick"]    = 1
//STATS["CONVERSIONS"]["gramPerSunShip"]       = 2.3e14



STATS["CONVERSIONS"]["FeedstockPerProdPerTick"] = 0.001
STATS["COST-MATTER-Feedstock"] = [["MATTER-FreeBot-CT",1.01],["MATTER-Waste-CT",-0.01]]
STATS["CONVERSIONS"]["DigestedPerProdPerTick"] = 0.001
STATS["COST-MATTER-Digested"] = [["MATTER-FreeGreen-CT",1.01],["MATTER-Waste-CT",-0.01]]
STATS["CONVERSIONS"]["ShipPerProdPerTick"] = 0.001
STATS["COST-MATTER-Ship"] = [["MATTER-Feedstock-CT",1.25],["MATTER-Waste-CT",-0.25]]




STATS["CONVERSIONS"]["BiopwrPerProdPerTick"] = 0.002
STATS["COST-MATTER-Biopwr"] = [["MATTER-Digested-CT",2],["MATTER-Waste-CT",-1]]

STATS["CONVERSIONS"]["BotpwrPerProdPerTick"] = 0.0015
STATS["COST-MATTER-Botpwr"] = [["MATTER-Feedstock-CT",1.2],["MATTER-Waste-CT",-0.2]]


STATS["CONVERSIONS"]["YogurtPerProdPerTick"] = 0.001
STATS["COST-MATTER-Yogurt"] = [["MATTER-Digested-CT",1.2],["MATTER-Waste-CT",-0.2]]
STATS["CONVERSIONS"]["BotbotsPerProdPerTick"] = 0.001
STATS["COST-MATTER-Botbots"] = [["MATTER-Feedstock-CT",1.3],["MATTER-Waste-CT",-0.3]]
STATS["CONVERSIONS"]["BiomassPerProdPerTick"] = 0.001
STATS["COST-MATTER-Biomass"] = [["MATTER-Digested-CT",1.1],["MATTER-Waste-CT",-0.1]]
STATS["CONVERSIONS"]["ComputePerProdPerTick"] = 0.001
STATS["COST-MATTER-Compute"] = [["MATTER-Feedstock-CT",1.3],["MATTER-Waste-CT",-0.3]]



STATS["CONVERSIONS"]["bufferPerShip-scout"] =        118000000
STATS["CONVERSIONS"]["bufferPerShip-battleplate"] = 2500000000
STATS["CONVERSIONS"]["bufferPerShip-seedship"] =     160000000

/*
STATS["PRODUCTIVITY_MULT"]["bot"]  = 1
STATS["PRODUCTIVITY_MULT"]["green"]  = 1
STATS["PRODUCTIVITY_MULT"]["comp"]  = 1
*/



///////////////////////////////
////Initialize starting stats

STATS["scout-speed"] = 0.01;
STATS["scout-sensorrange"] = 1;
STATS["explore-starDensity"] = 0.876;

STATS["seedship-speed"] = 0.0025;
STATS["seedship-toughness"] = 1;

STATS["seedship-Secure-seedRate"] = 0.95;
STATS["seedship-Neutral-seedRate"] = 0.75;
STATS["seedship-Hostile-seedRate"] = 0.05;

INVENTORY["seedship-transit-buffer"] = [];
INVENTORY["seedship-transit-CT"] = 0;


STATS["seedship-distToNextStar"] = 1.219;




///////////////////////////////
////Initialize starting stats
//MATTER_TYPE_LIST = ["FreeBot","Feedstock","Botbots","Compute","FreeGreen","Digested","Biomass","Waste","Heat","Yogurt"]


STATS["WORLD_BUILD_TIME"] = {Fallow:0,Pop:0,Omni:5000, Bot:2000, Green:10000, Comp:2000, Hub:2000, Slag:0, Seedres:0}
STATS["WORLD_DECON_TIME"]={Fallow:0,Pop:0,Omni:5000, Bot:2000, Green:10000, Comp:2000, Hub:2000, Slag:0, Seedres:0}

STATS["COST-WORLDBUILD-Fallow"] = [["WORLDS-Secure-CT",1]];
STATS["COST-WORLDBUILD-Omni"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Bot"] = [["WORLDS-Fallow-CT",1],
                                ["MATTER-FreeBot-CT",-STATS["CONVERSIONS"]["gramsPerWorld"]],
                                ["MATTER-Botbots-CT",-100000000],
                                ["MATTER-Waste-CT",-100000000]
                                ];
STATS["COST-WORLDBUILD-Green"] = [["WORLDS-Fallow-CT",1],
                                ["MATTER-FreeGreen-CT",-STATS["CONVERSIONS"]["gramsPerWorld"]],
                                ["MATTER-Biomass-CT",-100000000],
                                ["MATTER-Waste-CT",  -100000000]
                              ];
STATS["COST-WORLDBUILD-Comp"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Hub"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Slag"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Seedres"] = [["WORLDS-Fallow-CT",1]];


STATS["COST-WORLDDECON-Fallow"] = [["WORLDS-Secure-CT",-1]];
STATS["COST-WORLDDECON-Omni"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Bot"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Green"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Comp"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Hub"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Slag"] = [["WORLDS-Fallow-CT",-1]];
STATS["COST-WORLDDECON-Seedres"] = [["WORLDS-Fallow-CT",-1]];


PRODUCTIVITY_STATS = ["bot","green","bio","eng","psy","comp","think","soul","ship"]
STATS["PRODUCTIVITY_RATING"] = {}
STATS["PRODUCTIVITY_MULT"] = {}

for(var i=0;i<PRODUCTIVITY_STATS.length;i++){
  var stat = PRODUCTIVITY_STATS[i]
  STATS["PRODUCTIVITY_RATING"][stat] = 1
  STATS["PRODUCTIVITY_MULT"][stat] = 1
}
STATS["PRODUCTIVITY_RATING"]["think"] = (1000000000)
STATS["PRODUCTIVITY_RATING"]["soul"] = (10000)



SCIENCE_DISPLAY = {};
SCIENCE_TYPES = ["bio","eng","psy"];
SCIENCE_SUBFIELDS = {bio:3,eng:3,psy:3};

for(var i=0;i<SCIENCE_TYPES.length;i++){
  var scienceName = SCIENCE_TYPES[i];
  var subf = SCIENCE_SUBFIELDS[scienceName];
  SCIENCE_DISPLAY[scienceName] = [];
  SCIENCE_DISPLAY[scienceName].total = document.getElementById(scienceName+"_TOTAL_DISPLAY");
    if(SCIENCE_DISPLAY[scienceName].total == null){
       console.log(scienceName+": is null");
    }
  SCIENCE_DISPLAY[scienceName].total.unitDisplay = document.getElementById(scienceName+"_TOTAL_DISPLAY_UNITS");
  SCIENCE_DISPLAY[scienceName].total.free = document.getElementById(scienceName+"_FREE_DISPLAY");
  INVENTORY[scienceName+"_SCIENCE_TOTAL"] = 0
  INVENTORY[scienceName+"_SCIENCE_FREE"] = 0

  for(var j=0;j<subf;j++){
    SCIENCE_DISPLAY[scienceName][j]      = document.getElementById(scienceName+(j+1)+"_TOTAL_DISPLAY");
    SCIENCE_DISPLAY[scienceName][j].free = document.getElementById(scienceName+(j+1)+"_FREE_DISPLAY");
    if(SCIENCE_DISPLAY[scienceName][j] == null){
       console.log(scienceName+j+": is null");
    }
    SCIENCE_DISPLAY[scienceName][j].unitDisplay = document.getElementById(scienceName+(j+1)+"_TOTAL_DISPLAY_UNITS");
    INVENTORY[scienceName+j+"_SCIENCE_TOTAL"] = 0
    INVENTORY[scienceName+j+"_SCIENCE_FREE"] = 0
  }
}


//Productivity: <span id="green_PRODUCTIVITY_DISPLAY"></span>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PERCENT SLIDERS:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var UNIT_EXPLANATION = {};




//PRODUCTIVITY_STATS = ["bot","psy","green","bio","eng","psy","think","soul"]
//STATS["PRODUCTIVITY_RATING"] = {}
//STATS["PRODUCTIVITY_MULT"] = {}

//function fmtSIunits(x){
//Returns [0]baseNumber, [1]prefixAbbrev, [2]prefixFull, [3]prefixExponent, [4]a string of prefix descriptions
STATS["PRODUCTIVITY_MULT"]["scout"] = 1
STATS["PRODUCTIVITY_MULT"]["battleplate"] = 1

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
    if(document.getElementById(fid+"_PRODUCTIVITY_DISPLAY") != null){
      document.getElementById(fid+"_PRODUCTIVITY_DISPLAY").innerHTML = fmtSI( STATS["PRODUCTIVITY_RATING"][fid] * STATS["PRODUCTIVITY_MULT"][fid])+PCTSLIDER_DISPLAYUNITS[fid]
    }
}


for( var i = 0; i < SHIP_TYPE_LIST.length; i++){
  var shipType = SHIP_TYPE_LIST[i];
  INVENTORY["SHIPS-"+shipType+"-CT"] = 0;
  var disp = document.getElementById("RESOURCE_DISPLAY_SHIPS_"+shipType)
  ELEMS["SHIPS-"+shipType+"-DISPLAY"] = disp;
  disp.shipType = shipType;
  disp.displayUnits = document.getElementById(shipType+"_SHIPS_UNITS")
  disp.displayDiv = document.getElementById(shipType+"_SHIPS_DIV")
}
//      <div class="contentGridItem1x1 contentGridItem"><div class="valueDisplayDiv" id="Ships_MATTER_DIV">   <span class="INFO_TEXT_STATIC">Starships:</span><br><span id="RESOURCE_DISPLAY_MATTER_Ships">0.0</span> <span id="Ships_MATTER_UNITS">g</span></div></div>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATTER:

/*MATTER_TYPE_LIST = ["Discovered","Available","Collected","Processed","Waste","Heat","Yogurt"]*/


/*INVENTORY["MATTER"]={}*/
for( var i = 0; i < MATTER_TYPE_LIST.length; i++){

   var matterType = MATTER_TYPE_LIST[i]
      console.log("matter:"+matterType)
   INVENTORY["MATTER-"+matterType+"-CT"] = 0
   var matterDisplay = document.getElementById("RESOURCE_DISPLAY_MATTER_"+matterType)
   var matterDeltaDisplay = document.getElementById("RESOURCE_DISPLAY_MATTERDELTA_"+matterType)


   ELEMS["MATTER-"+matterType+"-DISPLAY"] = matterDisplay
   matterDisplay.matterType = matterType
   matterDisplay.displayUnits = document.getElementById(matterType+"_MATTER_UNITS")
   matterDisplay.displayDiv = document.getElementById(matterType+"_MATTER_DIV")
   if(matterDeltaDisplay != null){
   ELEMS["MATTERDELTA-"+matterType+"-DISPLAY"] = matterDeltaDisplay;
   matterDeltaDisplay.displayUnits = document.getElementById(matterType+"_MATTERDELTA_UNITS")
   matterDeltaDisplay.displayDiv = document.getElementById(matterType+"_MATTERDELTA_DIV")
   } else {
     console.log("matterDeltaDisplay null:"+matterType);
   }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tabs:


var tabHolderList = document.getElementsByClassName("tabHolder")
var tabSetSet = [];
var tabSetNames = [];

for(var i=0; i<tabHolderList.length; i++){
   var xx = tabHolderList[i].id.split("_");
   var xn = xx[0]
   var xv = parseInt(xx[1])
   var elem = tabHolderList[i];
   if(tabSetSet[xn] == null){
     var xobj = {};
     xobj.tabID = xx[0];
     tabHolderList[i].tabHolder = xobj;
     xobj.tabElem = [elem];
     xobj.tabCt = xv;
     tabSetSet[xn] = xobj
     tabSetNames.push(xn);
     elem.contentDiv = document.getElementById(xn+"_CONTENT_"+xv);
   } else {
     var xobj = tabSetSet[xn];
     tabHolderList[i].tabHolder = xobj;
     xobj.tabElem.push(tabHolderList[i]);
     xobj.tabCt = Math.max(xobj.tabCt,xv);
     elem.contentDiv = document.getElementById(xn+"_CONTENT_"+xv);
   }
}

for(var i=0; i<tabSetNames.length; i++){
   var xn = tabSetNames[i];
   for(var j=0; j<tabSetSet[xn].tabCt;j++){
     tabSetSet[xn].tabElem[j].onclick = function(){
       for(var k=0; k<this.tabHolder.tabCt; k++){
          this.tabHolder.tabElem[k].classList.remove("selectedTab");
          this.tabHolder.tabElem[k].contentDiv.style.display = "none";
       }
       this.classList.add("selectedTab")
       this.contentDiv.style.display = "block"
     }
   }
}


STATICVAR_HOLDER["INVENTORY_DESC_SHORT"] = {};
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["bio_SCIENCE_FREE"] = "B Biology"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["bio0_SCIENCE_FREE"] = "B Biowarfare"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["bio1_SCIENCE_FREE"] = "B Yogosynthesis"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["bio2_SCIENCE_FREE"] = "B Bioengineering"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["eng_SCIENCE_FREE"] = "B Engineering"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["eng0_SCIENCE_FREE"] = "B World Building"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["eng1_SCIENCE_FREE"] = "B Weapons & Warfare"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["eng2_SCIENCE_FREE"] = "B Matter & Energy"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["psy_SCIENCE_FREE"] = "B Social Science"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["psy0_SCIENCE_FREE"] = "B Cognition"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["psy1_SCIENCE_FREE"] = "B Manipulation"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["psy2_SCIENCE_FREE"] = "B Strategy"

STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"] = {};
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["bio_SCIENCE_FREE"] = "Bio"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["bio0_SCIENCE_FREE"] = "Biowar"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["bio1_SCIENCE_FREE"] = "Yogosyn"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["bio2_SCIENCE_FREE"] = "Bioengi"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["eng_SCIENCE_FREE"] = "Eng"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["eng0_SCIENCE_FREE"] = "WrldBldg"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["eng1_SCIENCE_FREE"] = "Wpns&War"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["eng2_SCIENCE_FREE"] = "Mtr&Enrgy"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["psy_SCIENCE_FREE"] = "SocSci"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["psy0_SCIENCE_FREE"] = "Cogntn"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["psy1_SCIENCE_FREE"] = "Manip"
STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]["psy2_SCIENCE_FREE"] = "Strat"

///////////////////////////////
////Starting Projects:

STATS["AVAIL_PROJECT_LIST"] = {
   bio:[],
   eng:[],
   psy:[]
}
STATS["AVAIL_PROJECTS"] = {
   bio:{},
   eng:{},
   psy:{}
}




STATS["UNLOCK_PROJECTS"] = {
   bio:{},
   eng:{},
   psy:{}
}
STATS["UNLOCK_PROJECTS"]["eng"] = [
    {  projectTitle:"Matter Recycling", projectID:"engDUMMY1",
       cost:[["eng_SCIENCE_FREE",50e17],["eng2_SCIENCE_FREE",15e16]],
       desc:"Recycle waste matter (1) using advanced matter transmutation technology. This requires huge amounts of energy, but allows waste matter to be recovered back into processed feedstock."
    },
    {  projectTitle:"Matter Recycling 2", projectID:"engDUMMY2",
       cost:[["eng_SCIENCE_FREE",50e18],["eng2_SCIENCE_FREE",15e17]],
       desc:"Recycle waste matter (2) using advanced matter transmutation technology. This requires huge amounts of energy, but allows waste matter to be recovered back into processed feedstock."
    },
    {  projectTitle:"Matter Recycling 3", projectID:"engDUMMY3",
       cost:[["eng_SCIENCE_FREE",50e19],["eng2_SCIENCE_FREE",15e18]],
       desc:"Recycle waste matter (3) using advanced matter transmutation technology. This requires huge amounts of energy, but allows waste matter to be recovered back into processed feedstock."
    },
    {  projectTitle:"Matter Recycling 4", projectID:"engDUMMY4",
       cost:[["eng_SCIENCE_FREE",50e22],["eng2_SCIENCE_FREE",15e19]],
       desc:"Recycle waste matter (4) using advanced matter transmutation technology. This requires huge amounts of energy, but allows waste matter to be recovered back into processed feedstock."
    },
    {  projectTitle:"Matter Recycling 5", projectID:"engDUMMY5",
       cost:[["eng_SCIENCE_FREE",50e22],["eng2_SCIENCE_FREE",15e22]],
       desc:"Recycle waste matter (5) using advanced matter transmutation technology. This requires huge amounts of energy, but allows waste matter to be recovered back into processed feedstock."
    }
]
STATS["UNLOCK_PROJECTS"]["bio"] = [
    {  projectTitle:"DUMMY BIO PROJECT 1", projectID:"bioDUMMY1",
       cost:[["bio_SCIENCE_FREE",50e22],["bio2_SCIENCE_FREE",15e20]],
       desc:"blah 1b blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
    {  projectTitle:"DUMMY BIO PROJECT 2", projectID:"bioDUMMY2",
       cost:[["bio_SCIENCE_FREE",50e22],["bio2_SCIENCE_FREE",15e21]],
       desc:"blah 2b blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
    {  projectTitle:"DUMMY BIO PROJECT 3", projectID:"bioDUMMY3",
       cost:[["bio_SCIENCE_FREE",50e22],["bio2_SCIENCE_FREE",15e22]],
       desc:"blah 3b blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
    {  projectTitle:"DUMMY BIO PROJECT 4", projectID:"bioDUMMY4",
       cost:[["bio_SCIENCE_FREE",50e22],["bio2_SCIENCE_FREE",15e22]],
       desc:"blah 4b blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
    {  projectTitle:"DUMMY BIO PROJECT 5", projectID:"bioDUMMY5",
       cost:[["bio_SCIENCE_FREE",50e22],["bio2_SCIENCE_FREE",15e22]],
       desc:"blah 5b blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
]
STATS["UNLOCK_PROJECTS"]["psy"] = [
    {  projectTitle:"DUMMY PSYCH PROJECT 1", projectID:"psyDUMMY1",
       cost:[["psy_SCIENCE_FREE",50e22],["psy2_SCIENCE_FREE",15e22]],
       desc:"blah 1p blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
    {  projectTitle:"DUMMY PSYCH PROJECT 2", projectID:"psyDUMMY2",
       cost:[["psy_SCIENCE_FREE",50e22],["psy2_SCIENCE_FREE",15e22]],
       desc:"blah 2p blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
    {  projectTitle:"DUMMY PSYCH PROJECT 3", projectID:"psyDUMMY3",
       cost:[["psy_SCIENCE_FREE",50e22],["psy2_SCIENCE_FREE",15e22]],
       desc:"blah 3p blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
    {  projectTitle:"DUMMY PSYCH PROJECT 4", projectID:"psyDUMMY4",
       cost:[["psy_SCIENCE_FREE",50e22],["psy2_SCIENCE_FREE",15e22]],
       desc:"blah 4p blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
    {  projectTitle:"DUMMY PSYCH PROJECT 5", projectID:"psyDUMMY5",
       cost:[["psy_SCIENCE_FREE",50e22],["psy2_SCIENCE_FREE",15e22]],
       desc:"blah 5p blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ."
    },
]


for(var i=0; i< SCIENCE_TYPES.length; i++){
   //PROJECTSAVAIL_LIST_bio
   //CURRENT_AVAIL_PROJECT_DESC_bio
   //RESEARCH_CURRENT_PROJECT_bio
   var fid = SCIENCE_TYPES[i];
   var availListElem = document.getElementById("PROJECTSAVAIL_LIST_"+fid);
   var descElem = document.getElementById("CURRENT_AVAIL_PROJECT_DESC_"+fid);
   var researchButton = document.getElementById("RESEARCH_CURRENT_PROJECT_"+fid);
   availListElem.fid = fid;
   availListElem.descElem = descElem;
   availListElem.researchButton = researchButton;
   availListElem.GAME = GAME_GLOBAL;
   researchButton.fid = fid;
   researchButton.availListElem = availListElem;
   researchButton.GAME = GAME_GLOBAL;
   //researchButton.canAfford = canAfford;
   //researchButton.INVENTORY = INVENTORY;
   RESEARCH_BUTTONS.push(researchButton);

   SCIENCE_DISPLAY[fid].availListElem = availListElem;


   for(var j=0; j < STATS["UNLOCK_PROJECTS"][fid].length; j++){
     var pp = STATS["UNLOCK_PROJECTS"][fid][j];
     STATS["AVAIL_PROJECT_LIST"][fid].push(pp.projectID);
     STATS["AVAIL_PROJECTS"][fid][pp.projectID] = pp;
     var elem = document.createElement("option");
     pp.listElem = elem;
     elem.value = pp.projectID;
     elem.appendChild( document.createTextNode( pp.projectTitle ) );
     availListElem.appendChild(elem);
   }

   researchButton.canAffordTest = function(){
       var vv = this.availListElem.value;
       var pp = this.GAME.STATS["AVAIL_PROJECTS"][this.fid][vv];
       if( this.GAME.canAfford(pp.cost) ){
           this.disabled = false;
           return true;
       } else {
           this.disabled = true;
           return false;
       }
   }

     availListElem.onchange = function(){
       var pp = this.GAME.STATS["AVAIL_PROJECTS"][this.fid][this.value]
       var dd = pp.desc;
       for(var k=0; k < pp.cost.length;k++){
          var ccc = fmtSIunits(pp.cost[k][1]);
          dd = dd + "<br> &nbsp&nbsp&nbsp"+ccc[0]+ccc[1]+ this.GAME.STATICVAR_HOLDER["INVENTORY_DESC_SHORT"][pp.cost[k][0]]
       }
       this.descElem.innerHTML = dd
       if( this.GAME.canAfford(pp.cost) ){
         this.researchButton.disabled = false;
       } else {
         this.researchButton.disabled = true;
       }
       availListElem.pp = pp;
     }
     researchButton.onclick = function(){
        for(var kk = 0; kk < this.availListElem.pp.cost.length; kk++){
           //console.log(this.availListElem.pp);
           var vv = this.availListElem.value;
           var pp = this.GAME.STATS["AVAIL_PROJECTS"][this.fid][vv];
           //console.log("BEFORE: [val="+this.availListElem.value+"] ["+pp.cost[kk][0]+"/\n"+pp.cost[kk][1]+"]:\n"+INVENTORY[ pp.cost[kk][0] ]);
           this.GAME.INVENTORY[ pp.cost[kk][0] ] = this.GAME.INVENTORY[ pp.cost[kk][0] ] - pp.cost[kk][1];
           //console.log("AFTER: ["+pp.cost[kk][0]+"/\n"+pp.cost[kk][1]+"]:\n"+INVENTORY[ pp.cost[kk][0] ]);
        }
        this.availListElem.remove(this.availListElem.selectedIndex)
        this.disabled = true;
     }

     availListElem.value = STATS["UNLOCK_PROJECTS"][fid][0].projectID;
     availListElem.onchange();
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dyson Sphere / World Management:

/*UPGRADE_COST_FCN = {};
UPGRADE_COST_FCN["Bot"] = function(lvl){
    [["eng_SCIENCE_FREE",Math.pow(1.6,lvl) * 50e17]];
}
UPGRADE_COST_FCN["Green"] = function(lvl){
    [["bio_SCIENCE_FREE",Math.pow(1.6,lvl) * 50e17]];
}*/



for( var i = 0; i < WORLD_TYPE_LIST.length; i++){
    var worldType = WORLD_TYPE_LIST[i]
    INVENTORY["WORLDS-"+worldType+"-CT"]=0
    SETTINGS["ADD_MULTIPLIER"][worldType] = 1
    CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][worldType] = 0
    CONSTRUCTION_BUFFER["WORLDS_DECON_CT"][worldType] = 0
    CONSTRUCTION_BUFFER["WORLDS_CONST"][worldType] = []
    CONSTRUCTION_BUFFER["WORLDS_DECON"][worldType] = []
}
INVENTORY["WORLDS-"+"Omni"+"-CT"] = 0
INVENTORY["WORLDS-"+"Fallow"+"-CT"] = 1
INVENTORY["WORLDS-"+"Neutral"+"-CT"] = 1
INVENTORY["WORLDS-"+"Hostile"+"-CT"] = 1
INVENTORY["WORLDS-"+"Secure"+"-CT"] = 1


for( var i = 0; i < DYSON_TYPE_LIST.length; i++){
   var worldType = DYSON_TYPE_LIST[i]
   var multDisplay = document.getElementById(""+worldType+"_wf_AddUnit")
   multDisplay.innerHTML = "1";
   var multUp = document.getElementById("button_wf"+worldType+"UP")
   var multDn = document.getElementById("button_wf"+worldType+"DN")
   multUp.disp = multDisplay
   multDn.disp = multDisplay
   multUp.worldType = worldType
   multDn.worldType = worldType
   multDn.mdn = multDn
   multUp.mdn = multDn
   INVENTORY["WORLDS-"+worldType+"-LVL"] = 1;

   multDn.disabled = true;
   multUp.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] * 10)
     this.disp.innerHTML = fmtSIflat( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
     this.mdn.disabled = false;
   }
   multDn.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] / 10)
     this.disp.innerHTML = fmtSIflat( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
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
     if(butelem != null){
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
   var cancelElem =  document.getElementById("button_wf"+worldType+"Cancel")
   if(cancelElem != null){
      cancelElem.worldType = worldType;
      cancelElem.GAME = GAME_GLOBAL;
      cancelElem.onclick = function(){
        this.GAME.CONSTRUCTION_BUFFER["WORLDS_CONST"][this.worldType] = []
        this.GAME.CONSTRUCTION_BUFFER["WORLDS_CONST_CT"][this.worldType] = 0;
        this.disabled = true;
        this.style.display = "none";
      }
   }
   var upgradeElem =  document.getElementById("button_wf"+worldType+"UPGRADE")
   if(upgradeElem != null){

      upgradeElem.worldType = worldType;
      upgradeElem.GAME = GAME_GLOBAL;
      //upgradeElem.UPCOST = UPGRADE_COST[worldType];
      //upgradeElem.canAfford = canAfford;
      //upgradeElem.makeCostAbbriv = makeCostAbbriv;
      //upgradeElem.STATICVAR_HOLDER = STATICVAR_HOLDER;
      upgradeElem.costDisplayElem = document.getElementById("wfUPGRADE_"+worldType+"_COST")
      upgradeElem.lvlDisplayElem = document.getElementById(worldType+"_wfLVL")
      upgradeElem.onclick = function(){
        var UPCOST = this.GAME.STATS.UPGRADE_COST[this.worldType];
        for(var kk = 0; kk < UPCOST.curr.length; kk++){
           this.GAME.INVENTORY[ UPCOST.curr[kk][0] ] = this.GAME.INVENTORY[ UPCOST.curr[kk][0] ] - UPCOST.curr[kk][1];
        }
        var lvl = this.GAME.INVENTORY["WORLDS-"+this.worldType+"-LVL"] + 1;
        this.GAME.INVENTORY["WORLDS-"+this.worldType+"-LVL"] = lvl
        UPCOST.curr = UPCOST.calc(lvl);
        var costString = this.GAME.makeCostAbbriv(UPCOST.curr,", ");
        this.costDisplayElem.innerHTML = costString;
        this.lvlDisplayElem.innerHTML = "Lvl-"+lvl;
        UPCOST.effect();
      }
      var costString = upgradeElem.GAME.makeCostAbbriv(STATS.UPGRADE_COST[worldType].curr,", ");
      upgradeElem.costDisplayElem.innerHTML = costString;
      
      upgradeElem.canAffordTest = function(){
        //console.log(this.UPCOST);
        var UPCOST = this.GAME.STATS.UPGRADE_COST[this.worldType];
        if( this.GAME.canAfford(UPCOST.curr) ){
            this.disabled = false;
            return true;
        } else {
            this.disabled = true;
            return false;
        }
      }
      RESEARCH_BUTTONS.push(upgradeElem);
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
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] * 10)
     this.disp.innerHTML = fmtSIflat( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
     this.mdn.disabled = false;
   }
   multDn.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] / 10)
     this.disp.innerHTML = fmtSIflat( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
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
     if(STATS["CRAZY_LEVEL"] == -9){
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

//document.getElementById("soulSliderDisplayPct2").IS_LOCKED = true
//document.getElementById("soulSliderDisplayPct2").LOCKER = document.getElementById("LOCKHIDE_ESPIONAGE")

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
    querySavegamesAndUpdate();
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
   //console.log("addConstructionRequest("+inventoryItemName+","+requestCt+","+unitCost)
   this.CONSTRUCTION_REQUESTS.push( [inventoryItemName, requestCt, unitCost, requestCt] )
}

function executeAllConstructionRequests(){
  var costResourceSet = new Set();
  var costRequests = {};
  for(var i=0;i<this.CONSTRUCTION_REQUESTS.length;i++){
    for(var j=0; j<this.CONSTRUCTION_REQUESTS[i][2].length; j++){
      var xcc = this.CONSTRUCTION_REQUESTS[i][2][j][0];
      var reqCt = this.CONSTRUCTION_REQUESTS[i][1];
      var uCost = this.CONSTRUCTION_REQUESTS[i][2][j][1];
      if(costRequests[xcc] == null){
        costRequests[xcc] = []
      }
      costRequests[xcc].push([i,j,reqCt * uCost])
      costResourceSet.add(xcc)
    }
  }
  //console.log("costResourceSet: ")
  for(let ccx of costResourceSet.values() ){
     //console.log("    ccx["+ccx+"]")
     var cr = costRequests[ccx]
     var crTotal = 0;
     for(let crr of cr){
       crTotal = crTotal + crr[2];
     }
     if(crTotal > INVENTORY[ccx]){
       for(let crr of cr){
         var uCost = this.CONSTRUCTION_REQUESTS[crr[0]][2][crr[1]][1];
         var currReqCt = this.CONSTRUCTION_REQUESTS[crr[0]][3];
         /*console.log("["+ccx+"]: ["+uCost+" / "+currReqCt+" / "+((crr[2] / crTotal) * INVENTORY[ccx]) / uCost+"]")*/
         this.CONSTRUCTION_REQUESTS[crr[0]][3] = Math.min( currReqCt, ((crr[2] / crTotal) * INVENTORY[ccx]) / uCost )
       }
     }
  }
  for(var i=0;i<this.CONSTRUCTION_REQUESTS.length;i++){
    var bb = this.CONSTRUCTION_REQUESTS[i][0];
    for(var j=0; j<this.CONSTRUCTION_REQUESTS[i][2].length; j++){
      var ccx = this.CONSTRUCTION_REQUESTS[i][2][j][0];
      var reqCt = this.CONSTRUCTION_REQUESTS[i][3];
      var uCost = this.CONSTRUCTION_REQUESTS[i][2][j][1];
      this.INVENTORY[ccx] = this.INVENTORY[ccx] - reqCt * uCost;
      this.INVENTORY[bb] = this.INVENTORY[bb] + reqCt;
    }
  }
  this.CONSTRUCTION_REQUESTS = [];
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
  ttList[i].ttTextElem      = ttList[i].firstElementChild
  ttList[i].ttTextElemArrow = ttList[i].ttTextElem.nextElementSibling
  /*ttList[i].ttTextElem.style.top = "-"+(ttList[i].ttTextElem.clientHeight /2) + "px"*/
  ttList[i].addEventListener('click',function(){
      if(currentlyOpenTooltip != null){
        currentlyOpenTooltip.ttTextElem.style.visibility = "hidden";
        currentlyOpenTooltip = null;
      }
      this.ttTextElem.style.visibility = "visible"
      currentlyOpenTooltip = this
      console.log("ht = "+this.ttTextElem.offsetHeight+", top:"+this.ttTextElem.style.top);
      clickToggle = false
  },false)
}

/*var ttList = document.getElementsByClassName("tooltipHolder");*/
var ttList_S1 = document.getElementsByClassName("ttSEC1");
var ttList_S2 = document.getElementsByClassName("ttSEC2");
var ttList_S3 = document.getElementsByClassName("ttSEC3");


function fitTooltipsToWindow(){
  if(window.innerWidth > 1000){
    var tt = ttList_S1;
    for(var i=0; i < tt.length; i++){
        tt[i].ttTextElem.style.position = "absolute";
        tt[i].ttTextElem.style.top = "-"+(tt[i].ttTextElem.clientHeight /2) + "px"
        tt[i].ttTextElem.style.left = "105%";
        tt[i].ttTextElem.style.right = "auto";
        tt[i].ttTextElem.style.bottom = "auto";
        tt[i].ttTextElem.className = "tooltiptext LT";
        tt[i].ttTextElem.style.width = "200px";

    }
    tt = ttList_S2;
    for(var i=0; i < tt.length; i++){
        tt[i].ttTextElem.style.position = "absolute";
        tt[i].ttTextElem.style.top = "-"+(tt[i].ttTextElem.clientHeight /2) + "px"
        tt[i].ttTextElem.style.left = "105%";
        tt[i].ttTextElem.style.right = "auto";
        tt[i].ttTextElem.style.bottom = "auto";
        tt[i].ttTextElem.className = "tooltiptext LT";
        tt[i].ttTextElem.style.width = "200px";
    }
    tt = ttList_S3;
    for(var i=0; i < tt.length; i++){
        tt[i].ttTextElem.style.position = "absolute";
        tt[i].ttTextElem.style.top = "-"+(tt[i].ttTextElem.clientHeight /2) + "px"
        tt[i].ttTextElem.style.right = "105%";
        tt[i].ttTextElem.style.left = "auto";
        tt[i].ttTextElem.style.bottom = "auto";
        tt[i].ttTextElem.className = "tooltiptext RT";
        tt[i].ttTextElem.style.width = "200px";

    }
  } else if(window.innerWidth >  640){
    var tt = ttList_S1;
    for(var i=0; i < tt.length; i++){
        tt[i].ttTextElem.style.position = "absolute";
        tt[i].ttTextElem.style.top = "-"+(tt[i].ttTextElem.clientHeight /2) + "px"
        tt[i].ttTextElem.style.left = "105%";
        tt[i].ttTextElem.style.right = "auto";
        tt[i].ttTextElem.style.bottom = "auto";
        tt[i].ttTextElem.className = "tooltiptext LT";
        tt[i].ttTextElem.style.width = "200px";

    }
    tt = ttList_S2;
    for(var i=0; i < tt.length; i++){
        tt[i].ttTextElem.style.position = "absolute";
        tt[i].ttTextElem.style.top = "-"+(tt[i].ttTextElem.clientHeight /2) + "px"
        tt[i].ttTextElem.style.right = "105%";
        tt[i].ttTextElem.style.left = "auto";
        tt[i].ttTextElem.style.bottom = "auto";
        tt[i].ttTextElem.className = "tooltiptext RT";
        tt[i].ttTextElem.style.width = "200px";

    }
    tt = ttList_S3;
    for(var i=0; i < tt.length; i++){
        tt[i].ttTextElem.style.position = "absolute";
        tt[i].ttTextElem.style.top = "-"+(tt[i].ttTextElem.clientHeight /2) + "px"
        tt[i].ttTextElem.style.right = "105%";
        tt[i].ttTextElem.style.left = "auto";
        tt[i].ttTextElem.style.bottom = "auto";
        tt[i].ttTextElem.className = "tooltiptext RT";
        tt[i].ttTextElem.style.width = "200px";

    }
  } else {
    for(var i=0; i < ttList.length; i++){
        ttList[i].ttTextElem.style.position = "fixed"
        ttList[i].ttTextElem.style.top = "auto";
        ttList[i].ttTextElem.style.bottom = 0;
        ttList[i].ttTextElem.style.left = 0;
        ttList[i].ttTextElem.style.right = 0;
        ttList[i].ttTextElem.style.width = "100%";
        ttList[i].ttTextElem.className = "tooltiptext RT";

    }
  }
}

fitTooltipsToWindow()

window.addEventListener('resize',fitTooltipsToWindow, false);


window.addEventListener('click',function(event) {
  if(currentlyOpenTooltip != null && clickToggle) {
    currentlyOpenTooltip.ttTextElem.style.visibility = "hidden";
    currentlyOpenTooltip = null;
  }
  clickToggle = true
},false);



startWorldConstruction("Bot",1)













