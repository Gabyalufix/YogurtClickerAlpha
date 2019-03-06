
COLOR = {}

var bodyComputedStyle = getComputedStyle(document.body);

COLOR["errorRed"] = bodyComputedStyle.getPropertyValue("--errorRed")
COLOR["consoleGreen"] = bodyComputedStyle.getPropertyValue("--consoleGreen")
COLOR["bsodBlue"] = bodyComputedStyle.getPropertyValue("--bsodBlue")
COLOR["bsodText"] = bodyComputedStyle.getPropertyValue("--bsodText")

var getMainThemeVars = getComputedStyle(document.body);


//var itsSet = document.getElementsByClassName("INFO_TEXT_STATIC");
//itsSet[0].innerHTML
//var tt = itsSet[0]



/*

CRAZY_FLIPRATE:        [0.000,0.010,0.020,0.050,0.100,0.110,0.120,0.150,0.150,0.150],
CRAZY_WORD_FLIPRATE:   [0.000,0.001,0.002,0.005,0.010,0.011,0.012,0.015,0.020,0.030],
CRAZY_WORD_COLORRATE:  [0.000,0.010,0.020,0.050,0.100,0.110,0.120,0.150,0.200,0.300],
CRAZY_WORD_SWAPRATE:   [0.000,0.001,0.002,0.005,0.010,0.011,0.012,0.015,0.020,0.030],
CRAZY_CHAR_SWAPRATE:   [0.000,0.001,0.002,0.005,0.010,0.011,0.012,0.015,0.050,0.100],
CRAZY_CHAR_CAPRATE:    [0.000,0.002,0.004,0.007,0.020,0.021,0.022,0.030,0.070,0.150],

CRAZY_REV_FLIPRATE:      [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],
CRAZY_REV_WORD_FLIPRATE: [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.200],
CRAZY_REV_WORD_COLORRATE:[0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.300, 0.400, 0.500,   0.500],
CRAZY_REV_WORD_SWAPRATE: [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],
CRAZY_REV_CHAR_SWAPRATE: [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],
CRAZY_REV_CHAR_CAPRATE:  [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],

CRAZY_CONTENT_FLIPRATE:      [0.000,0.00002,0.00004,0.00007,0.00020,0.00021,0.00022,0.00030,0.00070,0.00150],
CRAZY_REV_CONTENT_FLIPRATE:  [0.050,  0.0500, 0.0200, 0.0100, 0.0100, 0.010, 0.010, 0.0090, 0.0090,   0.0090],

CRAZY_CONTENT_THEME:      [0.0000,0.0002,0.00004,0.00007,0.00020,0.00021,0.00022,0.00030,0.00070,0.00150],
CRAZY_REV_CONTENT_THEME:  [0.00750,  0.00600, 0.00500, 0.00500, 0.00500, 0.0050, 0.0050, 0.0050, 0.0050,   0.0015],
CRAZY_THEME_RATES: [["BLOODRED",0.5],["BLOODRED_INVERT",0.75],["SLATE_INVERT",1]],

CRAZY_CONTENT_HIDE:      [0.000,0.00001,0.00003,0.00004,0.00005,0.0001,0.0005,0.0008,0.0009,0.0010],
CRAZY_REV_CONTENT_HIDE:  [0.10,  0.10, 0.10, 0.08, 0.075, 0.07, 0.07, 0.05, 0.05,   0.05],

CRAZY_ALL_SCARE:      [0.000,0.001,0.001,0.002,0.002,0.005,0.007,0.01,0.05,0.25],
CRAZY_REV_SCARE:      [1.0,0.9,0.75,0.75,0.5,0.5,0.65,0.45,0.25,0.1],

CRAZY_WORSE_BGTRANS:         [0.000,0.010,0.010,0.010,0.010,0.010,0.010,0.010,0.010,0.010],
CRAZY_BETTER_BGTRANS:        [0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020],
CRAZY_TARGET_BGTRANS:         [1.0,1.0,1.0,1.0,0.99,0.97,0.94,0.90,0.50,0.0],

CRAZY_WORSE_FGTRANS:         [0.000,0.010,0.010,0.010,0.010,0.010,0.010,0.010,0.010,0.010],
CRAZY_BETTER_FGTRANS:        [0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020],
CRAZY_TARGET_FGTRANS:         [0.0,0.0,0.0,0.0,0.01,0.02,0.03,0.04,0.05,1.0],


*/

STATICVAR_HOLDER = {

TIME_UNIT:"years",

CRAZY_CHARS:"ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*|+abcdefghijklmnopqrstuvwxyz",

CRAZY_COLORS:["#4286f4","#47d84c","#a1a33c","#a23b3b","#891313","#ff0000","#ff00cb","#6e00ff","#ffcc00","#ff7b00"],

CRAZY_RATE:   [0,    0.0025,0.003,0.004,0.005,0.006,0.007,0.0075,0.008,0.05],
CRAZY_REVRATE:[0.050,  0.0500, 0.0200, 0.0100, 0.0100, 0.010, 0.010, 0.0090, 0.0090,   0.0090],


CRAZY_FLIPRATE:        [0.000,0.010,0.020,0.050,0.100,0.110,0.120,0.150,0.150,0.150],
CRAZY_WORD_FLIPRATE:   [0.000,0.010,0.020,0.050,0.100,0.110,0.120,0.150,0.200,0.300],
CRAZY_WORD_COLORRATE:  [0.000,0.010,0.020,0.050,0.100,0.110,0.120,0.150,0.200,0.300],
CRAZY_WORD_SWAPRATE:   [0.000,0.001,0.002,0.005,0.010,0.011,0.012,0.015,0.020,0.030],
CRAZY_CHAR_SWAPRATE:   [0.000,0.001,0.002,0.005,0.010,0.011,0.012,0.015,0.050,0.100],
CRAZY_CHAR_CAPRATE:    [0.000,0.002,0.004,0.007,0.020,0.021,0.022,0.030,0.070,0.150],

CRAZY_REV_FLIPRATE:      [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],
CRAZY_REV_WORD_FLIPRATE: [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.200],
CRAZY_REV_WORD_COLORRATE:[0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.300, 0.400, 0.500,   0.500],
CRAZY_REV_WORD_SWAPRATE: [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],
CRAZY_REV_CHAR_SWAPRATE: [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],
CRAZY_REV_CHAR_CAPRATE:  [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],

CRAZY_CONTENT_FLIPRATE:      [0.000,0.00002,0.00004,0.00007,0.00020,0.00021,0.00022,0.00030,0.00070,0.00150],
CRAZY_REV_CONTENT_FLIPRATE:  [0.050,  0.0500, 0.0200, 0.0100, 0.0100, 0.010, 0.010, 0.0090, 0.0090,   0.0090],

CRAZY_CONTENT_THEME:      [0.0000,0.0002,0.00004,0.00007,0.00020,0.00021,0.00022,0.00030,0.00070,0.00150],
CRAZY_REV_CONTENT_THEME:  [0.00750,  0.00600, 0.00500, 0.00500, 0.00500, 0.0050, 0.0050, 0.0050, 0.0050,   0.0015],
CRAZY_THEME_RATES: [["BLOODRED",0.5],["BLOODRED_INVERT",0.75],["SLATE_INVERT",1]],

CRAZY_CONTENT_HIDE:      [0.000,0.00001,0.00003,0.00004,0.00005,0.0001,0.0005,0.0008,0.0009,0.0010],
CRAZY_REV_CONTENT_HIDE:  [0.10,  0.10, 0.10, 0.08, 0.075, 0.07, 0.07, 0.05, 0.05,   0.05],

CRAZY_ALL_SCARE:      [0.000,0.001,0.001,0.002,0.002,0.005,0.007,0.01,0.05,0.25],
CRAZY_REV_SCARE:      [1.0,0.9,0.75,0.75,0.5,0.5,0.65,0.45,0.25,0.1],

CRAZY_WORSE_BGTRANS:         [0.000,0.010,0.010,0.010,0.010,0.010,0.010,0.010,0.010,0.010],
CRAZY_BETTER_BGTRANS:        [0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020],
CRAZY_TARGET_BGTRANS:         [1.0,1.0,1.0,1.0,0.99,0.97,0.94,0.90,0.50,0.0],

CRAZY_WORSE_FGTRANS:         [0.000,0.010,0.010,0.010,0.010,0.010,0.010,0.010,0.010,0.010],
CRAZY_BETTER_FGTRANS:        [0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020,0.020],
CRAZY_TARGET_FGTRANS:         [0.0,0.0,0.0,0.0,0.01,0.02,0.03,0.04,0.05,1.0],

DEATH_SPIRAL_COUNTDOWN_SEC: 60,
FINAL_SPIRAL_COUNTDOWN_SEC: 30,


CRAZY_CONSOLE_WARNING_RATE:[0,0.0005,0.0007,0.001,0.002,0.002,0.03,0.04,0.05,0.08],

STAR_DISTRO : [
   [0,4] //no stars within 4ly
   [10,10]
]

/*

Milky way:
100b stars

Total: 1e11 Mass-Sun
Disc: 6e10 Mass-Sun
       100kly across
Bulge: 2e10 Mass-Sun
       10kly across
Diffuse gas: 2e10 Mass-Sun


Sectors:
0-10kly: std distro



*/





}


STATICVAR_HOLDER["GREEK_LETTERS"] = {
    CHARCODES:["&#03B1","&#03B2","&#03B3","&#03B4","&#03B5","&#03B6","&#03B7","&#03B8","&#03B9","&#03BA","&#03BB","&#03BC","&#03BD","&#03BE","&#03BF","&#03C0","&#03C1","&#03C3","&#03C4","&#03C5","&#03C6","&#03C7","&#03C8","&#03C9"],
    CHARNAMES:["Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa","Lambda","Mu","Nu","Xi","Omicron","Pi","Rho","Sigma","Tau","Upsilon","Phi","Chi","Psi","Omega"]
}

/*
,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
*/

/* .concat(document.getElementsByClassName("contentLV3")) ; */

/*
#THEME_SLATE_INVERT {
  --white: #ffffff;
  --LT4: #f0f1f5;
  --LT3: #e1e4ea;
  --LT2: #c3c8d5;
  --LT1: #a5adc0;
  --MID: #7883a1;
  --DK1: #5e6a87;
  --DK2: #485167;
  --DK3: #343b4b;
  --DK4: #1f232d;
  --baseBG: #c3c8d5
}*/





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
var PCTSLIDER_DISPLAYUNITS = {bio:"B/wk",eng:"B/wk",psy:"B/wk",bot:"E",green:"E",
                              think:"FLOPs",soul:"I",ship:"E",scout:" Ships",battleplate:" Ships",comp:"FLOPs",strat:" Ships"}

var PCTSLIDER_DISPLAYUNITSEXPLAIN = {bio:"Byte: the fundamental unit of information. A zero, or a one.",
                                     eng:"Byte: the fundamental unit of information. A zero, or a one.",
                                     psy:"Byte: the fundamental unit of information. A zero, or a one.",
                                     bot:"E: A measure of industrial capacity. 1 Earth is equal to the final industrial capacity of the planet earth (immediately prior to disassembly).",
                                     green:"E: A measure of industrial capacity. 1 Earth is equal to the final industrial capacity of the planet earth (immediately prior to disassembly).",
                                     think:"Hertz: Compute cycles per second.",
                                     soul:"Identities: Number of distinct thinking entities being simulated inside the soulswarm network.",
                                     ship:"E: A measure of industrial capacity. 1 Earth is equal to the final industrial capacity of the planet earth (immediately prior to disassembly).",
                                     ships:"Ships: the number of ships assigned a given task.",
                                     scout:"Ships: the number of ships assigned a given task.",
                                     battleplate:"Ships: the number of ships assigned a given task.",
                                     comp:"Hertz: Compute cycles per second.",
                                     strat:"Ships: the number of ships assigned a given task."}



var PCTSLIDER_SUBFIELDCT = [4,4,4,7,7,3,3,3,3,3,2,3]
var PCTSLIDERS = {}

STATICVAR_HOLDER.PCTSLIDER_DISPLAYUNITSEXPLAIN=PCTSLIDER_DISPLAYUNITSEXPLAIN;
STATICVAR_HOLDER.PCTSLIDER_DISPLAYUNITS=PCTSLIDER_DISPLAYUNITS;
STATICVAR_HOLDER.PCTSLIDER_FIELDS=PCTSLIDER_FIELDS;
STATICVAR_HOLDER.PCTSLIDER_SUBFIELDCT=PCTSLIDER_SUBFIELDCT;

////////////////////////////////////

MATTER_TYPE_LIST = ["FreeBot","Feedstock","Botbots","Compute","FreeGreen","Digested","Biomass","Waste","Heat","Yogurt","Biopwr","Botpwr"]

RESOURCE_INFO = {

}



RESOURCE_INFO["MATTER-FreeBot-CT"] = {itemTitle:"Unprocessed Matter"}
RESOURCE_INFO["MATTER-Feedstock-CT"] = {itemTitle:"Feedstock"}
RESOURCE_INFO["MATTER-Botbots-CT"] = {itemTitle:"Botworld Fabricators"}
RESOURCE_INFO["MATTER-Compute-CT"] = {itemTitle:"Computronium"}
RESOURCE_INFO["MATTER-FreeGreen-CT"] = {itemTitle:"Unprocessed Matter"}
RESOURCE_INFO["MATTER-Digested-CT"] = {itemTitle:"Digested Matter"}
RESOURCE_INFO["MATTER-Biomass-CT"] = {itemTitle:"Biomass"}
RESOURCE_INFO["MATTER-Waste-CT"] = {itemTitle:"Waste"}
RESOURCE_INFO["MATTER-Heat-CT"] = {itemTitle:"Waste Heat"}
RESOURCE_INFO["MATTER-Yogurt-CT"] = {itemTitle:"Yogurt"}
RESOURCE_INFO["MATTER-Biopwr-CT"] = {itemTitle:"Chloroplasts"}
RESOURCE_INFO["MATTER-Botpwr-CT"] = {itemTitle:"Solar Arrays"}
RESOURCE_INFO["POWER"] = {itemTitle:"Power"}


STATICVAR_HOLDER.RESOURCE_INFO = RESOURCE_INFO;

INVENTORY["BUFFER-Ship-CT"] = 0;

var WORLD_TYPE_LIST = ["Fallow","Pop","Omni","Bot","Green","Comp","Hub","Neutral","Hostile","Secure","Slag","Seedres","Hawk"]
var WORLD_TYPE_DYSON = [false,false,true,true,true,true,true,false,false,false,true]

var DYSON_TYPE_LIST = ["Omni","Bot","Green","Comp","Hub","Slag","Seedres","Hawk"]
var CONSTRUCTION_REQUESTS=[];
var SHIP_TYPE_LIST = ["scout","battleplate","seedship"]
STATICVAR_HOLDER.SHIP_TYPE_LIST = SHIP_TYPE_LIST
////////////////////////////////////

statCostScalingFcn = function(lvl){
   return Math.pow(50 + ((1.5) * lvl * 10),lvl) * 100e26
}

stdCostScalingFcn = function(lvl){
   return Math.pow(50 + ((1 + Math.random()) * lvl * 10),lvl) * 100e26
}

UPGRADE_COST = {};
UPGRADE_COST["Bot"] = {};
UPGRADE_COST["Green"] = {};
UPGRADE_COST["Hawk"] = {};

UPGRADE_COST["Bot"]["calc"] = function(lvl){
    return [["eng0_SCIENCE_FREE",statCostScalingFcn(lvl)/10]];
}
UPGRADE_COST["Green"]["calc"] = function(lvl){
    return [["bio2_SCIENCE_FREE",statCostScalingFcn(lvl)/10]];
}
UPGRADE_COST["Hawk"]["calc"] = function(lvl){
    return [["eng2_SCIENCE_FREE",statCostScalingFcn(lvl)/10]];
}
//UPGRADE_COST["Bot"]["curr"] = UPGRADE_COST["Bot"].calc(1)
//UPGRADE_COST["Green"]["curr"] = UPGRADE_COST["Green"].calc(1)

UPGRADE_COST["Bot"]["effect"] = function(){
   STATS["PRODUCTIVITY_MULT"]["bot"] = STATS["PRODUCTIVITY_MULT"]["bot"] + 0.2;
}
UPGRADE_COST["Green"]["effect"] = function(){
   STATS["PRODUCTIVITY_MULT"]["green"] = STATS["PRODUCTIVITY_MULT"]["green"] + 0.2;
}
UPGRADE_COST["Hawk"]["effect"] = function(){
   STATS["PRODUCTIVITY_MULT"]["hawk"] = STATS["PRODUCTIVITY_MULT"]["hawk"] + 0.2;
}

INVENTORY["basic_SCIENCE_TOTAL"] = 0;
INVENTORY["basic_SCIENCE_FREE"] = 0;

STATS.STATUS_FLAG = {};
STATS.STATUS_FLAG["BASIC_SCIENCE"] = true;
ELEMS["basic_FREE_DISPLAY"] = document.getElementById("basic_FREE_DISPLAY");
ELEMS["basic_GAIN_RATE"] = document.getElementById("basic_GAIN_RATE");


/*
   {itemID:"HawkingEfficiency",itemTitle:"HawkingEfficiency",
       effect : function(lvl){
          STATS["ENERGYRATE_MULT"]["Hawk"+"pwrGen"] = 1 - (1 - STATS["ENERGYRATE_MULT"]["Hawk"+"pwrGen"])*0.95
       },
       costScalingFunction : stdCostScalingFcn,
       costInfo: {sciFields:[["eng1",1],["eng0",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.9,0.05,0.05]},
       ELEM_COSTDISPLAY: document.getElementById(""),
       ELEM_BUTTON:      document.getElementById("")
       ELEM_DISPLAY:      document.getElementById("")
   },
   {itemID:"HawkingProductivity",itemTitle:"HawkingProductivity",
       effect : function(lvl){
          this.STATS["PRODUCTIVITY_MULT"]["Hawk"+"pwrGen"] = this.STATS["PRODUCTIVITY_MULT"]["Hawk"+"pwrGen"] * 1.05
       },
       costScalingFunction : stdCostScalingFcn,
       costInfo: {sciFields:[["eng1",1],["eng0",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.9,0.05,0.05]},
       ELEM_COSTDISPLAY: document.getElementById(""),
       ELEM_BUTTON:      document.getElementById("")
       ELEM_DISPLAY:      document.getElementById("")
    },
*/





/*









BotPowerMiniDisplay
button_botPowerMiniUpgrade
BotPowerMiniUpgradeCost

GreenPowerMiniDisplay
button_GreenPowerMiniUpgrade
GreenPowerMiniUpgradeCost










*/


//STATS["UPGRADE_COST"] = UPGRADE_COST;
STATS["CURRENT_UPGRADE_COST"] = {};
STATS["CURRENT_UPGRADE_COST"]["Bot"]   = UPGRADE_COST["Bot"].calc(1)
STATS["CURRENT_UPGRADE_COST"]["Green"] = UPGRADE_COST["Green"].calc(1)
STATS["CURRENT_UPGRADE_COST"]["Hawk"] = UPGRADE_COST["Hawk"].calc(1)

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
       RESEARCH_BUTTONS:RESEARCH_BUTTONS,
       UPGRADE_COST:UPGRADE_COST
}

ELEMS["DATE_WEEK_DISPLAY"] = document.getElementById("DATE_WEEK_DISPLAY")
ELEMS["DATE_DISPLAY"] = document.getElementById("DATE_DISPLAY")

//DATE_WEEK_DISPLAY:document.getElementById("DATE_WEEK_DISPLAY")
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////



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
STATS["COST-MATTER-Feedstock"] = [["MATTER-FreeBot-CT",1.01],["MATTER-Waste-CT",-0.01],["POWER",0.005800]]
STATS["CONVERSIONS"]["BotpwrPerProdPerTick"] = 0.0005
STATS["COST-MATTER-Botpwr"] = [["MATTER-Feedstock-CT",1.2],  ["MATTER-Waste-CT",-0.2], ["POWER",0.077200]]
STATS["CONVERSIONS"]["ShipPerProdPerTick"] = 0.001
STATS["COST-MATTER-Ship"] = [["MATTER-Feedstock-CT",1.25],   ["MATTER-Waste-CT",-0.25],["POWER",0.138000]]
STATS["CONVERSIONS"]["BotbotsPerProdPerTick"] = 0.00112
STATS["COST-MATTER-Botbots"] = [["MATTER-Feedstock-CT",1.3], ["MATTER-Waste-CT",-0.3], ["POWER",0.331000]]
STATS["CONVERSIONS"]["ComputePerProdPerTick"] = 0.0012
STATS["COST-MATTER-Compute"] = [["MATTER-Feedstock-CT",1.3], ["MATTER-Waste-CT",-0.3], ["POWER",0.255000]]




STATS["INDUSTRY"] = {};
STATS["INDUSTRY"]["Feedstock"] = { sliderID: "bot", sliderIDX: 0, prodTitle: "Botworld Feedstock", inventoryType: "MATTER", scitype: "eng", scifield: "eng2",
                                   baseProd: 1e-1 * 0.00827,
                                   baseCost:  [["MATTER-FreeBot-CT",1]],
                                   basePwr:   9e0 *0.05800,
                                   baseWaste: 0.5}
STATS["INDUSTRY"]["Botbots"] = { sliderID: "bot", sliderIDX: 1, prodTitle: "Robotic Fabricator Construction", inventoryType: "MATTER", scitype: "eng", scifield: "eng2",
                                   baseProd: 1e-1 * 0.0012,
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   9e0 *0.331000,
                                   baseWaste: 1.0}

STATS["INDUSTRY"]["Botpwr"] =   { sliderID: "bot", sliderIDX: 6, prodTitle: "Solar Array Construction", inventoryType: "MATTER", scitype: "eng",
                                   baseProd: 1e-1 * 0.00209,
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   9e0 *0.077200,
                                   baseWaste: 0.5}
STATS["INDUSTRY"]["Ship"] = { sliderID: "bot", sliderIDX: 4, prodTitle: "Shipyard Construction", inventoryType: "BUFFER", scitype: "eng",
                                   baseProd: 1e-1 * 0.000000001 / 3.14,
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:  9e0 * 0.138000,
                                   baseWaste: 3140000}
/*
pre startgame:

STATS["INDUSTRY"]["Feedstock"] = { sliderID: "bot", sliderIDX: 0, prodTitle: "Botworld Feedstock", inventoryType: "MATTER", scitype: "eng", scifield: "eng2",
                                   baseProd: 0.00827,
                                   baseCost:  [["MATTER-FreeBot-CT",1]],
                                   basePwr:   0.005800,
                                   baseWaste: 0.01}
STATS["INDUSTRY"]["Botbots"] = { sliderID: "bot", sliderIDX: 1, prodTitle: "Robotic Fabricator Construction", inventoryType: "MATTER", scitype: "eng", scifield: "eng2",
                                   baseProd: 0.0012,
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.331000,
                                   baseWaste: 0.3}

STATS["INDUSTRY"]["Botpwr"] =   { sliderID: "bot", sliderIDX: 6, prodTitle: "Solar Array Construction", inventoryType: "MATTER", scitype: "eng",
                                   baseProd: 0.00209,
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.077200,
                                   baseWaste: 0.2}

STATS["INDUSTRY"]["Compute"] = { sliderID: "bot", sliderIDX: 5, prodTitle: "Computronium Fabrication", inventoryType: "MATTER", scitype: "eng",
                                   baseProd: 0.000679,
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.255000,
                                   baseWaste: 2.3}
*/

STATS["INDUSTRY"]["Compute"] = { sliderID: "bot", sliderIDX: 5, prodTitle: "Computronium Fabrication", inventoryType: "MATTER", scitype: "eng",
                                   baseProd: 0.000679 * 1e-2,
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.255000 * 1e2,
                                   baseWaste: 2.3}



STATS["INDUSTRY"]["Digested"] = { sliderID: "green", sliderIDX: 5, prodTitle: "Matter Digestion", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.0057,
                                   baseCost:  [["MATTER-FreeGreen-CT",1]],
                                   basePwr:   0.007000,
                                   baseWaste: 0.01}
STATS["INDUSTRY"]["Biopwr"] = { sliderID: "green", sliderIDX: 6, prodTitle: "Chloroplast Replication", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.015,
                                   baseCost:  [["MATTER-Digested-CT",1]],
                                   basePwr:   0,
                                   baseWaste: 1}
STATS["INDUSTRY"]["Yogurt"] = { sliderID: "green", sliderIDX: 1, prodTitle: "Yogosynthesis", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.00075,
                                   baseCost:  [["MATTER-Digested-CT",1]],
                                   basePwr:   0.287000,
                                   baseWaste: 0.2}

STATS["INDUSTRY"]["YogurtFarm"] = { sliderID: "green", sliderIDX: 1, prodTitle: "YogurtFarm", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.00075 / 65000, productionItem: "Yogurt",
                                   baseCost:  [["MATTER-FreeGreen-CT",1]],
                                   basePwr:   0,
                                   baseWaste: 10.0,
                                   upgradeSet: []}

STATS["INDUSTRY"]["BioResearchFarm"] = { sliderID: "green", sliderIDX: 0, prodTitle: "Biological Research", inventoryType: "BUFFER", scitype: "bio",
                                   baseProd: 7e-3 * 0.00005 / 65000, productionItem: "bio",
                                   baseCost:  [["MATTER-FreeGreen-CT",0]],
                                   basePwr:   0,
                                   baseWaste: 26.1,
                                   upgradeSet: []}

//
//
//

STATS["INDUSTRY"]["Biomass"] = { sliderID: "green", sliderIDX: 4, prodTitle: "Biomass Division", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.00097,
                                   baseCost:  [["MATTER-Digested-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0.1}


STATS["INDUSTRY"]["WasteReprocess"] = { sliderID: "bot", sliderIDX: 3, prodTitle: "Waste Reprocessing", inventoryType: "MATTER", scitype: "eng",
                                   baseProd:  0.001, productionItem: "Feedstock",
                                   baseCost:  [["MATTER-Waste-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0, lockKey: "WASTEREPROCESS",upgradeSet : ["PROD","ENER"],
                                   upgradePrereqTechs:["SCALED_WASTEREPROCESS"]}
STATS["INDUSTRY"]["WasteFerment"] = { sliderID: "green", sliderIDX: 3, prodTitle: "Waste Reprocessing", inventoryType: "MATTER", scitype: "eng",
                                   baseProd:  0.001, productionItem: "Yogurt",
                                   baseCost:  [["MATTER-Waste-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0, lockKey: "COMPOST",       upgradeSet : ["PROD","ENER"],
                                   upgradePrereqTechs:["SCALED_COMPOST"]}
STATS["INDUSTRY"]["Bioweapons"] = { sliderID: "green", sliderIDX: 2, prodTitle: "Grow Bioweapons", inventoryType: "MATTER", scitype: "bio",
                                   baseProd:  0.000157,
                                   baseCost:  [["MATTER-Digested-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0, lockKey: "BIOWEAPONS",
                                   upgradePrereqTechs:["SCALED_BIOWEAPONS"]}
STATS["INDUSTRY"]["TransmuteYogurt"] = { sliderID: "bot", sliderIDX: 3, prodTitle: "Transmute Yogurt", inventoryType: "MATTER", scitype: "eng",
                                   baseProd:  0.00005, productionItem: "Yogurt",
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0,
                                   lockKey: "TRANSMUTEYOGURT",
                                   upgradePrereqTechs:["SCALED_TRANSMUTEYOGURT"]}


//
//
//
//


STATS["INDUSTRY"]["BioResearch"] = { sliderID: "green", sliderIDX: 0, prodTitle: "Biological Research", inventoryType: "BUFFER", scitype: "bio",
                                   baseProd:  0.000005, productionItem: "bio",
                                   baseCost:  [["MATTER-Digested-CT",0]],
                                   basePwr:   58.3,
                                   baseWaste: 42.1,
                                   upgradeSet: ["ENER","INPUT"]}

STATS["INDUSTRY"]["Computation"] = { sliderID: "computation", sliderIDX: null, prodTitle: "Computation", inventoryType: "BUFFER", scitype: "eng",
                                   baseProd:  5e-1*0.00005, productionItem: "COMPUTE",
                                   baseCost:  [],
                                   basePwr:   3e3*0.219000,
                                   baseWaste: 0,
                                   upgradeSet: ["PROD","ENER"]}


ELEMS["computation-PRODUCTION-REQ-DISPLAY"]  = document.getElementById("computation_PRODREQ")
ELEMS["computation-PRODUCTION-CURR-DISPLAY"] = document.getElementById("computation_PRODCURR")
ELEMS["computation-PRODUCTION-PWR-DISPLAY"]  = document.getElementById("computation_PRODPOWER")


//LOCKHIDE_BIOWEAPONS

GAME_GLOBAL.INDUSTRY_LIST = ["Feedstock","Botbots","Botpwr","Ship","Compute",
                            "Digested","Biopwr","Yogurt","Biomass","TransmuteYogurt","Bioweapons",
                            "WasteFerment","WasteReprocess",
                            "BioResearch","Computation","YogurtFarm","BioResearchFarm"]

GAME_GLOBAL.STATS.ACTIVE_INDUSTRY_LIST = ["Feedstock","Botbots","Botpwr","Ship","Compute",
                            "Digested","Biopwr","Biomass","TransmuteYogurt","Bioweapons",
                            "WasteFerment","WasteReprocess",
                            "Computation","YogurtFarm","BioResearchFarm"]
                            //"Biomass","BioResearch"

STATS["PRODUCTION-CURR"] = {};
STATS["PRODUCTION-REQ"] = {};
STATS["LIMIT-REASON"] = {};
STATS["IndustryInputDemand"] = {};
STATS["IndustryPowerDemand"] = {};

//STATS["IndustryInputDemand"][industryID]
//STATS["IndustryPowerDemand"][industryID]



for(var i=0; i < GAME_GLOBAL.INDUSTRY_LIST.length; i++){
  var industry = GAME_GLOBAL.INDUSTRY_LIST[i];
  if(STATS["INDUSTRY"][industry].productionItem == null){
    STATS["INDUSTRY"][industry].productionItem = industry;
  }
  STATS["PRODUCTION-CURR"][ GAME_GLOBAL.INDUSTRY_LIST[i] ] = 0;
  STATS["PRODUCTION-REQ"][ GAME_GLOBAL.INDUSTRY_LIST[i] ] = 0;
  STATS["LIMIT-REASON"][ industry ] = "";
  STATS["IndustryInputDemand"][industry] = 0;
  STATS["IndustryPowerDemand"][industry] = 0;

  var iis = STATS["INDUSTRY"][industry]
  if(iis.upgradeSet == null){
     iis.upgradeSet = ["PROD","ENER","WAST"]
  }

  //ELEMS["IndustryInputDemandDisplay"] = document.getElementById()
}

/*
GAME_GLOBAL.INDUSTRY_LIST = ["Feedstock","Botbots","Botpwr","Ship","Compute","Digested","Biopwr","Yogurt","Biomass"]

*/




function calcIndustrialProd(xx){
  if(xx.sliderIDX == null){
    return xx.baseProd * this.STATS["PRODUCTIVITY_RATING"][xx.sliderID]
  } else {
    var xid = xx.sliderID+"_"+xx.sliderIDX;
    //this.STATS["CONVERSIONS"]["FeedstockPerProdPerTick"] * this.STATS["PRODUCTIVITY_RATING"]["bot"] * this.SETTINGS["bot_FRACTION"][0]
    return this.STATS["PRODUCTIVITY_MULT"][xid] * xx.baseProd *
           this.STATS["PRODUCTIVITY_RATING"][xx.sliderID] *
           this.SETTINGS[xx.sliderID+"_FRACTION"][xx.sliderIDX]
  }
}
function calcIndustrialCost(xx){


  var xid = xx.sliderID+"_"+xx.sliderIDX;
  if(xx.sliderIDX == null){
    xid = xx.sliderID
  }

  var out = [];
  //xx.baseCost.slice();
  for(var i=0; i < xx.baseCost.length; i++){
     out[i] = [ xx.baseCost[i][0], xx.baseCost[i][1] ];
  }
  if(xx.baseWaste > 0 && this.STATS["WASTERATE_MULT"][xid] > 0){
    out.push(["MATTER-Waste-CT", - xx.baseWaste * this.STATS["WASTERATE_MULT"][xid] ] );
    out[0][1] = out[0][1] + xx.baseWaste * this.STATS["WASTERATE_MULT"][xid];
  }
  if(xx.basePwr > 0 && this.STATS["ENERGYRATE_MULT"][xid] > 0){
    out.push(["POWER",xx.basePwr * this.STATS["ENERGYRATE_MULT"][xid]]);
  }
  return out;
}
GAME_GLOBAL.calcIndustrialProd=calcIndustrialProd;
GAME_GLOBAL.calcIndustrialCost=calcIndustrialCost;




STATS["CONVERSIONS"]["pwrFromBotpwrPerProdPerTick"] = 0.001671
STATS["CONVERSIONS"]["pwrFromBiopwrPerProdPerTick"] = 0.000187
STATS["CONVERSIONS"]["pwrFromHawkpwrPerProdPerTick"] = 1

INVENTORY["MATTER-Hawkpwr-CT"] = 0;

STATS["CONVERSIONS"]["bufferPerShip-scout"] =            6210000000
STATS["CONVERSIONS"]["bufferPerShip-battleplate"] =    739600000000
STATS["CONVERSIONS"]["bufferPerShip-seedship"] =        20000000000 //20000 megatons


//STATS["CONVERSIONS"]["bufferPerShip-scout"] =        11800000000000
//STATS["CONVERSIONS"]["bufferPerShip-battleplate"] = 250000000000000
//STATS["CONVERSIONS"]["bufferPerShip-seedship"] =     16000000000000

STATS["CONVERSIONS"]["massPerShip-scout"] =        11800000000000
STATS["CONVERSIONS"]["massPerShip-battleplate"] = 250000000000000
STATS["CONVERSIONS"]["massPerShip-seedship"] =           2000000000


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

INVENTORY["POWER-FreeBot-CT"] = 0;
INVENTORY["POWER-FreeGreen-CT"] = 0;
INVENTORY["POWER-FreeHawk-CT"] = 0;


STATS["WORLD_BUILD_TIME"] = {Fallow:0,Pop:0,Omni:5000, Bot:2000, Green:10000, Comp:2000, Hub:2000, Slag:0, Seedres:0, Hawk:1000}
STATS["WORLD_DECON_TIME"]={Fallow:0,Pop:0,Omni:5000, Bot:2000, Green:10000, Comp:2000, Hub:2000, Slag:0, Seedres:0, Hawk:1000}

STATS["COST-WORLDBUILD-Fallow"] = [["WORLDS-Secure-CT",1]];
STATS["COST-WORLDBUILD-Omni"] = [["WORLDS-Fallow-CT",1]];
STATS["COST-WORLDBUILD-Bot"] = [["WORLDS-Fallow-CT",1],
                                //["MATTER-FreeBot-CT",-STATS["CONVERSIONS"]["gramsPerWorld"]],
                                ["MATTER-Botbots-CT",-75000000],
                                ["MATTER-Botpwr-CT",-25000000],
                                ["MATTER-Waste-CT",-100000000]
                                ];
STATS["COST-WORLDBUILD-Green"] = [["WORLDS-Fallow-CT",1],
                                //["MATTER-FreeGreen-CT",-STATS["CONVERSIONS"]["gramsPerWorld"]],
                                ["MATTER-Biomass-CT",-100000000],
                                ["MATTER-Botpwr-CT",  -50000000],
                                ["MATTER-Waste-CT",   -50000000]
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


PRODUCTIVITY_STATS = ["bot","green","bio","eng","psy","comp","think","soul","ship","hawk","computation"]
STATS["PRODUCTIVITY_RATING"] = {}
STATS["PRODUCTIVITY_MULT"] = {}
STATS["WASTERATE_MULT"] = {};
STATS["ENERGYRATE_MULT"] = {};

for(var i=0;i<PRODUCTIVITY_STATS.length;i++){
  var stat = PRODUCTIVITY_STATS[i]
  STATS["PRODUCTIVITY_RATING"][stat] = 1
  STATS["PRODUCTIVITY_MULT"][stat] = 1
  STATS["WASTERATE_MULT"][stat] = 1
  STATS["ENERGYRATE_MULT"][stat] = 1
}


STATS["PRODUCTIVITY_RATING"]["think"] = (1000000000)
STATS["PRODUCTIVITY_RATING"]["soul"] = (10000)


STATS["PRODUCTIVITY_MULT"]["BotpwrGen"] = 1
STATS["PRODUCTIVITY_MULT"]["BiopwrGen"] = 1
STATS["PRODUCTIVITY_MULT"]["HawkpwrGen"] = 1

STATS["PRODUCTIVITY_RATING"]["BotpwrGen"] = 0
STATS["PRODUCTIVITY_RATING"]["BiopwrGen"] = 0
STATS["PRODUCTIVITY_RATING"]["HawkpwrGen"] = 0

STATS["ENERGYRATE_MULT"]["BotpwrGen"] = 0.70
STATS["ENERGYRATE_MULT"]["BiopwrGen"] = 0.30
STATS["ENERGYRATE_MULT"]["HawkpwrGen"]   = 0.95

STATS["ENERGYRATE_MULT"]["computation"] = 2;
STATS["PRODUCTIVITY_MULT"]["computation"] = 0.5;
STATS["PRODUCTIVITY_MULT"]["green"] = 0.5;
STATS["PRODUCTIVITY_MULT"]["bot"] = 0.5;

////////////////////////////////////////////////////////////////////////////////////////

SCIENCE_DISPLAY = {};
SCIENCE_TYPES = ["bio","eng","psy"];
SCIENCE_SUBFIELDS = {bio:3,eng:3,psy:3};

SCIENCE_TYPES_FULL = SCIENCE_TYPES.slice()
SCIENCE_TYPES_FULL.push("sum")

STATS["PRODUCTIVITY_MULT"]["scout"] = 1
STATS["PRODUCTIVITY_MULT"]["battleplate"] = 1

STATICVAR_HOLDER.SCIENCE_TYPES = SCIENCE_TYPES;



STATICVAR_HOLDER["INVENTORY_DESC_FULL"] = {};
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["bio_SCIENCE_FREE"] = "Biology"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["bio0_SCIENCE_FREE"] = "Cellular Processes"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["bio1_SCIENCE_FREE"] = "Biomechanoid Augmentation"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["bio2_SCIENCE_FREE"] = "Genetic Engineering"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["eng_SCIENCE_FREE"] = "Engineering"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["eng0_SCIENCE_FREE"] = "Construction"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["eng1_SCIENCE_FREE"] = "Matter & Material Science"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["eng2_SCIENCE_FREE"] = "High Energy Physics"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["psy_SCIENCE_FREE"] = "Social Science"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["psy0_SCIENCE_FREE"] = "Cognition"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["psy1_SCIENCE_FREE"] = "Creativity & Intuition"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["psy2_SCIENCE_FREE"] = "Strategy & Tactics"
STATICVAR_HOLDER["INVENTORY_DESC_FULL"]["basic_SCIENCE_FREE"] = "Basic Research"

STATICVAR_HOLDER["INVENTORY_DESC_SHORT"] = {};
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["bio_SCIENCE_FREE"] = "Biology"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["bio0_SCIENCE_FREE"] = "Cell"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["bio1_SCIENCE_FREE"] = "Biomech"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["bio2_SCIENCE_FREE"] = "GeneEng"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["eng_SCIENCE_FREE"] = "Engineering"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["eng0_SCIENCE_FREE"] = "Constr"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["eng1_SCIENCE_FREE"] = "Mttr/Mtrl"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["eng2_SCIENCE_FREE"] = "HEphys"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["psy_SCIENCE_FREE"] = "Social Science"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["psy0_SCIENCE_FREE"] = "Cogn"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["psy1_SCIENCE_FREE"] = "Create"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["psy2_SCIENCE_FREE"] = "Strat/Tac"
STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]["basic_SCIENCE_FREE"] = "Basic"



STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"] = {};
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["bio_SCIENCE_FREE"] = "Research into Biology is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["bio0_SCIENCE_FREE"] = "Research into Cellular Processes is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["bio1_SCIENCE_FREE"] = "Research into Biomechanoid Augmentation is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["bio2_SCIENCE_FREE"] = "Research into Genetic Engineering is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["eng_SCIENCE_FREE"] = "Research into Engineering  is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["eng0_SCIENCE_FREE"] = "Research into Construction is focused on building and designing new machines and structures."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["eng1_SCIENCE_FREE"] = "Research into Matter & Material Science is focused on developing new forms of matter, providing base materials that are stronger, tougher, more flexible, more heat resistant, or are otherwise better suited to their given purposes."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["eng2_SCIENCE_FREE"] = "Research into High Energy Physics is focused on on the study of the nature of physics itself, particularly under extreme conditions such as extreme velocity, mass/energy density, temperature, or electromagnetic flux."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["psy_SCIENCE_FREE"] = "Research into Social Science is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["psy0_SCIENCE_FREE"] = "Research into Cognition is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["psy1_SCIENCE_FREE"] = "Research into Creativity & Intuition is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["psy2_SCIENCE_FREE"] = "Research into Strategy & Tactics is focused on ..."
STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"]["basic_SCIENCE_FREE"] = "Research into Basic Research is focused on ..."

STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"] = STATICVAR_HOLDER["INVENTORY_DESC_SHORT"]

///////////////////////////////
////Starting Projects:



/*

STATS["PRODUCTIVITY_RATING"] = {}
STATS["PRODUCTIVITY_MULT"] = {}
STATS["WASTERATE_MULT"] = {};
STATS["ENERGYRATE_MULT"] = {};
        <div class="valueDisplayDiv"> <span class="INFO_TEXT_STATIC">Total Power: </span>           <span id="POWER_DISPLAY">0.0W</span> </div>
        <div class="valueDisplayDiv"> <span class="INFO_TEXT_STATIC">Botworld Power: </span>        <span id="Botpwr_POWER_DISPLAY">0.0W</span> </div>
        <div class="valueDisplayDiv"> <span class="INFO_TEXT_STATIC">Greenworld Power: </span>      <span id="Biopwr_POWER_DISPLAY">0.0W</span> </div>
        <div class="valueDisplayDiv"> <span class="INFO_TEXT_STATIC">Hawking Reactor Power: </span> <span id="Hawking_POWER_DISPLAY">0.0W</span> </div>


For each ship type:
   -Tactics
   -Toughness
   -Weapons
   -Speed

Seedships: Multihop
         STATS["PRODUCTIVITY_MULT"][fid+"_"+i] = 1;
         STATS["WASTERATE_MULT"][fid+"_"+i] = 1;
         STATS["ENERGYRATE_MULT"][fid+"_"+i] = 1;

var PCTSLIDER_FIELDS = ["bio","eng","psy","bot","green","think","soul","ship","scout","battleplate","comp","strat"]
var PCTSLIDER_SUBFIELDCT = [3,3,3,7,7,3,3,3,3,3,2,3]
var PCTSLIDERS = {}

bio/eng/psy: sciences


bot:
   1-Feedstock         (3x)
   2-Botbot            (3x)
   3-Reprocess Waste   (prod+energy)
   4-Transmute Yogurt  (3x)
   5-StarshipConstruct (3x)
   6-Computronium      (3x)
   7-Solar             (3x)
green:
   1-Bioresearch          (energy)
   2-Yogurt               (3x)
   3-Bioweapons           (3x)
   4-Compost Fermentation (prod+energy)
   5-Biomass              (3x)
   6-Digest               (3x)
   7-Photosynth           (3x)
think:
   1-
   2-
   3-
soul:
   1-
   2-
   3-
ship:
   1-
   2-
   3-
scout:
   1-
   2-
   3-
battleplate:
   1-
   2-
   3-
comp:
   1-
   2-
strat:
   1-
   2-
   3-

*/

STATS.UPGRADE_PANEL_UNLOCK_CT = 0;

ELEMS["RESOURCE_DISPLAY_MATTER_Farmland"]      = document.getElementById("RESOURCE_DISPLAY_MATTER_Farmland");
ELEMS["RESOURCE_DISPLAY_MATTERDELTA_Farmland"] = document.getElementById("RESOURCE_DISPLAY_MATTERDELTA_Farmland");


ELEMS["bio_GAIN_RATE"] = document.getElementById("bio_GAIN_RATE");
ELEMS["eng_GAIN_RATE"] = document.getElementById("eng_GAIN_RATE");
ELEMS["psy_GAIN_RATE"] = document.getElementById("psy_GAIN_RATE");

ELEMS["bioBase_GAIN_RATE"] = document.getElementById("bioBase_GAIN_RATE");
ELEMS["engBase_GAIN_RATE"] = document.getElementById("engBase_GAIN_RATE");
ELEMS["psyBase_GAIN_RATE"] = document.getElementById("psyBase_GAIN_RATE");



ELEMS["POWER_DISPLAY"] = document.getElementById("POWER_DISPLAY")
ELEMS["Botpwr_POWER_DISPLAY"] = document.getElementById("Botpwr_POWER_DISPLAY")
ELEMS["Biopwr_POWER_DISPLAY"] = document.getElementById("Biopwr_POWER_DISPLAY")
ELEMS["Hawking_POWER_DISPLAY"] = document.getElementById("Hawking_POWER_DISPLAY")
ELEMS["USAGE_POWER_DISPLAY"] = document.getElementById("USAGE_POWER_DISPLAY")
ELEMS["SURPLUS_POWER_DISPLAY"] = document.getElementById("SURPLUS_POWER_DISPLAY")
ELEMS["DEMAND_POWER_DISPLAY"] = document.getElementById("DEMAND_POWER_DISPLAY")
ELEMS["SURPLUS_OR_DEFICIT_POWER"] = document.getElementById("SURPLUS_OR_DEFICIT_POWER")



ELEMS["POWER_DISPLAY"].unitDisp = document.getElementById("POWER_DISPLAY_UNITS")
ELEMS["Botpwr_POWER_DISPLAY"].unitDisp = document.getElementById("Botpwr_POWER_DISPLAY_UNITS")
ELEMS["Biopwr_POWER_DISPLAY"].unitDisp = document.getElementById("Biopwr_POWER_DISPLAY_UNITS")
ELEMS["Hawking_POWER_DISPLAY"].unitDisp = document.getElementById("Hawking_POWER_DISPLAY_UNITS")
ELEMS["USAGE_POWER_DISPLAY"].unitDisp = document.getElementById("USAGE_POWER_DISPLAY_UNITS")
ELEMS["SURPLUS_POWER_DISPLAY"].unitDisp = document.getElementById("SURPLUS_POWER_DISPLAY_UNITS")
ELEMS["DEMAND_POWER_DISPLAY"].unitDisp = document.getElementById("DEMAND_POWER_DISPLAY_UNITS")

ELEMS["POWER_DISPLAY"].unitDisp = document.getElementById("POWER_DISPLAY_UNITS")

STATICVAR_HOLDER.POWER_SOURCEWORLD_LIST = ["Bot","Green","Hawk"]
STATICVAR_HOLDER.POWER_SOURCE_LIST = ["Bot","Bio","Hawk"]
ELEMS["POWER_PRODDISPLAY"] = {};


for(var i=0; i < STATICVAR_HOLDER.POWER_SOURCE_LIST.length; i++){
  var pp = STATICVAR_HOLDER.POWER_SOURCE_LIST[i];
  var worldType = STATICVAR_HOLDER.POWER_SOURCEWORLD_LIST[i]
  ELEMS["POWER_PRODDISPLAY"][pp] = {};
  ELEMS["POWER_PRODDISPLAY"][pp].powerSource   = pp;
  ELEMS["POWER_PRODDISPLAY"][pp].powerWorld    = STATICVAR_HOLDER.POWER_SOURCEWORLD_LIST[i];
  ELEMS["POWER_PRODDISPLAY"][pp].powerAVAIL    = document.getElementById(pp+"pwr_POWER_AVAIL");
  ELEMS["POWER_PRODDISPLAY"][pp].powerTHERMAL  = document.getElementById(pp+"pwr_POWER_THERMAL");
  ELEMS["POWER_PRODDISPLAY"][pp].powerCOLLECT  = document.getElementById(pp+"pwr_POWER_COLLECT");
  ELEMS["POWER_PRODDISPLAY"][pp].powerOUTPUT   = document.getElementById(pp+"pwr_POWER_OUTPUT");
  ELEMS["POWER_PRODDISPLAY"][pp].powerCAPACITY = document.getElementById(pp+"pwr_POWER_CAPACITY");

  if(document.getElementById(worldType+"PowerLimiter") != null){
    ELEMS["POWER_PRODDISPLAY"][pp].powerLimiter = document.getElementById(worldType+"PowerLimiter")
    ELEMS["POWER_PRODDISPLAY"][pp].powerLimiter.displayElem = document.getElementById(worldType+"PowerLimiterSliderDisplay")
    ELEMS["POWER_PRODDISPLAY"][pp].priorityDisplay = document.getElementById(worldType+"_POWER_PRIORITY_DISPLAY")

    ELEMS["POWER_PRODDISPLAY"][pp].priorityUp = document.getElementById("button_"+worldType+"_PowerPriorityUP")
    ELEMS["POWER_PRODDISPLAY"][pp].priorityDn = document.getElementById("button_"+worldType+"_PowerPriorityDN")

    ELEMS["POWER_PRODDISPLAY"][pp].prodDisplay = document.getElementById(worldType+"PowerProductivityDisplay")
    ELEMS["POWER_PRODDISPLAY"][pp].effDisplay = document.getElementById(worldType+"PowerEfficiencyDisplay")

    ELEMS["POWER_PRODDISPLAY"][pp].upgradeProd = document.getElementById("button_"+worldType+"PowerCapacityUpgrade")
    ELEMS["POWER_PRODDISPLAY"][pp].upgradeEff = document.getElementById("button_"+worldType+"PowerEfficiencyUpgrade")
    ELEMS["POWER_PRODDISPLAY"][pp].upgradeProdCostDisplay = document.getElementById(""+worldType+"PowerEfficiencyUpgradeCost")
    ELEMS["POWER_PRODDISPLAY"][pp].upgradeEffCostDisplay = document.getElementById(""+worldType+"PowerEfficiencyUpgradeCost")

  }

}

for(var sfi = 0; sfi < PCTSLIDER_FIELDS.length; sfi++){
    var fid = this.PCTSLIDER_FIELDS[sfi]
    ELEMS[fid+"_PRODUCTIVITY_DISPLAY"] = document.getElementById(fid+"_PRODUCTIVITY_DISPLAY")
}

ELEMS["Bot"+"PowerLimiter"] = document.getElementById("Bot"+"PowerLimiter");
ELEMS["Bot"+"PowerLimiter"].displayElem = document.getElementById("BotPowerLimiterSliderDisplay");

ELEMS["Green"+"PowerLimiter"] = document.getElementById("Green"+"PowerLimiter");
ELEMS["Green"+"PowerLimiter"].displayElem = document.getElementById("GreenPowerLimiterSliderDisplay");

ELEMS["Hawk"+"PowerLimiter"] = document.getElementById("Bot"+"PowerLimiter");
ELEMS["Hawk"+"PowerLimiter"].displayElem = document.getElementById("BotPowerLimiterSliderDisplay");


STATICVAR_HOLDER.WATTAGE_MULTIPLIER = 5000000000
STATICVAR_HOLDER.FLOPS_MULTIPLIER = 895275210000000
STATICVAR_HOLDER.SOULPROD_RATING_FACTOR = 27000000 * 6


STATS.IS_RESOURCE_STARVED = {};




//////////////////////////////////////////////////////////////////////////

var SCIENCE_UNLOCK_THRESH_BASE = 9e18 * 7e6;
var SCIENCE_UNLOCK_THRESH_MULT = Math.pow(10,0.25)

STATS["MODIFIERS"] = {};
STATS["MODIFIERS"]["swarmDiversityFactor"] = 1;
STATS["MODIFIERS"]["sanityScienceFactor"]  = 1;
STATS["MODIFIERS"]["sanityComputeFactor"]  = 1;
STATS["MODIFIERS"]["GLOBAL_SCIENCE_MODIFIER"] = 1e-2
STATICVAR_HOLDER["BASIC_SCIENCE_MODIFIER"] = 42949672

function getProjectBaseCost(techlvl){
     return Math.pow( this.SCIENCE_UNLOCK_THRESH_MULT, techlvl) * this.SCIENCE_UNLOCK_THRESH_BASE
}
function getRandomBaseCost(techlvl){
   return Math.pow( this.SCIENCE_UNLOCK_THRESH_MULT, (Math.random()-0.5) + techlvl) * this.SCIENCE_UNLOCK_THRESH_BASE
}
function getProjectCost(costField, techlvl, costMult){
     var cost = [];
     for(var i=0; i < costField.length; i++){
       cost.push([costField[i],
                  costMult[i] * Math.pow( this.SCIENCE_UNLOCK_THRESH_MULT, (Math.random()-0.5) + techlvl) * this.SCIENCE_UNLOCK_THRESH_BASE]);
     }
     return cost;
}
GAME_GLOBAL.SCIENCE_UNLOCK_THRESH_BASE=SCIENCE_UNLOCK_THRESH_BASE
GAME_GLOBAL.SCIENCE_UNLOCK_THRESH_MULT=SCIENCE_UNLOCK_THRESH_MULT
GAME_GLOBAL.getProjectBaseCost=getProjectBaseCost;
GAME_GLOBAL.getProjectCost=getProjectCost;



//fmtSI(getProjectBaseCost(1) / STATICVAR_HOLDER["BASIC_SCIENCE_MODIFIER"])
//////////////////////////////////////////////////////////////////////////




// 1 gigahertz for 1 week generates: 25 terabytes of data
// 1 gigahertz
// 1 UNIT = 895275210000000 FLOPS
// 1 UNIT = 895275210000000 / 1000000000 = 895275.21 gigahertz
// 1 UNIT => 895275.21 * 25 terabytes = 22381880.25 terabytes
// 1 UNIT => 2.238188e+19 bytes
//Correct: make it 25 gigabytes per gigahertz week

STATICVAR_HOLDER.BYTES_PER_COMPUTEWEEK = 2.238188e+19

STATICVAR_HOLDER.SOULSperFLOP           =   (0.000000001)
STATICVAR_HOLDER.BYTES_PER_TON_BIOMASS  = 6.42e+18;


STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR = 3141592000000;


STATICVAR_HOLDER.TRUE_WATTS_SOL_LUMINOSITY = 3.828e26
STATICVAR_HOLDER.WATTAGE_SOL_LUMINOSITY = STATICVAR_HOLDER.TRUE_WATTS_SOL_LUMINOSITY / STATICVAR_HOLDER.WATTAGE_MULTIPLIER;
STATICVAR_HOLDER.SOLAR_MASS = 1.9885e27
STATICVAR_HOLDER.SEC_PER_TICK = 604800
STATICVAR_HOLDER.SPEED_OF_LIGHT = 299792000
STATICVAR_HOLDER.C_SQUARED = Math.pow(299792000,2)
STATICVAR_HOLDER.MASS_PER_POWERTICK =  (STATICVAR_HOLDER.WATTAGE_MULTIPLIER * STATICVAR_HOLDER.SEC_PER_TICK / STATICVAR_HOLDER.C_SQUARED) / 1000


STATICVAR_HOLDER.TONS_PER_ACRE_FARMLAND = 814;

//tons biomass at start:
//3,770,000,000,000
//   12,136,884,009
//farmland:
//200 tons per acre?

STATICVAR_HOLDER.MASS_LIST = {
   SOLAR_MASS:1.9885e27,
   EARTH:5.972e21,
   INNERS: (6.39e20 + 4.867e21 + 3.285e23),
   BELT:3.1e18,
   JUPITER: 1.898e25,
   SATURN: 5.683e23,
   URANUS: 8.681e22,
   NEPTUNE: 1.024e23,
   OORT: 3e22
}











ELEMS["soul_IDENT_CT"]             =  document.getElementById("soul_IDENT_CT");
ELEMS["soul_COMPUTE_RESOURCES"]    =  document.getElementById("soul_COMPUTE_RESOURCES");
ELEMS["soul_IDENT_DIVERSITY"]      =  document.getElementById("soul_IDENT_DIVERSITY");
ELEMS["soul_OVERALL_PROD"] = document.getElementById("soul_OVERALL_PROD");

INVENTORY["soul_IDENT_CT"]         = 71685023612
INVENTORY["soul_DIVERSITY_CT"]     =   291850236
INVENTORY["soul_DIVERSITY_RATING"] = INVENTORY["soul_DIVERSITY_CT"] / INVENTORY["soul_IDENT_CT"]


if(!Object.keys) Object.keys = function(o){
     if (o !== Object(o))
          throw new TypeError('Object.keys called on non-object');
     var ret=[],p;
     for(p in o) if(Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);
     return ret;
}




STATICVAR_HOLDER.PCTSLIDER_DISPLAYUNITFACTOR = {bio:1,
                                   eng:1,
                                   psy:1,
                                   bot:STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR,
                                   green:STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR,
                                   think:1/STATICVAR_HOLDER.FLOPS_MULTIPLIER,
                                   soul:1,
                                   ship:1,
                                   scout:1,
                                   battleplate:1,
                                   comp:1,
                                   strat:1}




STATS.SHIPSTATS = {
    scout: {
        speed:0.458,
        toughness: 0.1,
        sensorRange:10,
        endurance:25,
        warpMod:4,
        warpRating: 0
    },
    battleplate: {
        speed:0.1,
        toughness: 1,
        sensorRange: 1,
        endurance: 15,
        warpMod: 0,
        warpRating: 0,
        speedString:"0"
    },
    seedship: {
        speed:0.1,
        toughness: 0.1,
        warpMod: 0,
        warpRating: 0,
        speedString:"0"
    },
    sneakship: {
        speed:0.323,
        toughness: 1,
        sensorRange: 1,
        endurance: 25,
        warpMod:2,
        warpRating: 0,
        speedString:"0"
    }
}
/*
STATICVAR_HOLDER["BASE_WARP_MODIFIER"] = {
    scout: 2,
    battleplate: 0,
    seedship: 0,
    sneakship: 1
}
STATS["WARP_MODIFIER_SHIP"] = {};*/
for(var i=0; i < STATICVAR_HOLDER.SHIP_TYPE_LIST.length; i++){
    var sid = this.STATICVAR_HOLDER.SHIP_TYPE_LIST[i]
    STATS.SHIPSTATS[sid]["speedWk"] = STATS.SHIPSTATS[sid]["speed"] / 52;
}

INVENTORY["WARP_RATING_BASE"] = 0.1;
INVENTORY["WARP_RATING_SHIP"] = {};
INVENTORY["WARP_SPEED_SHIP"] = {};
INVENTORY["WARP_SPEED_SHIP_STRING"] = {};

function roundTo(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(decimals);
}


function calcShipSpeeds(){
  if(this.INVENTORY["WARP_RATING_BASE"] < 1){
    for(var i=0; i < this.STATICVAR_HOLDER.SHIP_TYPE_LIST.length; i++){
        var sid = this.STATICVAR_HOLDER.SHIP_TYPE_LIST[i]
        STATS.SHIPSTATS[sid].speed  = 1 - ( (1-this.INVENTORY["WARP_RATING_BASE"]) / ((this.STATS.SHIPSTATS[sid].warpMod/2) + 1));
    }
  } else {
    for(var i=0; i < this.STATICVAR_HOLDER.SHIP_TYPE_LIST.length; i++){
        var sid = this.STATICVAR_HOLDER.SHIP_TYPE_LIST[i]
        this.STATS.SHIPSTATS[sid].warpRating = this.INVENTORY["WARP_RATING_BASE"] + this.STATS.SHIPSTATS[sid].warpMod;
        this.STATS.SHIPSTATS[sid].speed  = Math.pow(2,this.STATS.SHIPSTATS[sid].warpRating-1)
    }
  }
  for(var i=0; i < this.STATICVAR_HOLDER.SHIP_TYPE_LIST.length; i++){
    var sid = this.STATICVAR_HOLDER.SHIP_TYPE_LIST[i]
    STATS.SHIPSTATS[sid].speedWk = STATS.SHIPSTATS[sid].speed / 52;
    STATS.SHIPSTATS[sid].speedString = roundTo( STATS.SHIPSTATS[sid].speed,2)+"c"
    console.log("speed."+sid+":"+STATS.SHIPSTATS[sid].speed+ " / "+STATS.SHIPSTATS[sid].speedWk);
  }
}
calcShipSpeeds();


//STATICVAR_HOLDER.MASS_PER_POWERTICK = 604800
// Math.log10( ((INVENTORY["POWER-FreeBot-CT"]*STATICVAR_HOLDER.WATTAGE_MULTIPLIER *  STATICVAR_HOLDER.SEC_PER_TICK) / STATICVAR_HOLDER.C_SQUARED ) / 1000 )

//
/*if(false){
  joulesPerMegaWattSecond = pwr * STATICVAR_HOLDER.WATTAGE_MULTIPLIER * 1
  joulesPerMegaWattTick   = pwr * STATICVAR_HOLDER.WATTAGE_MULTIPLIER * STATICVAR_HOLDER.SEC_PER_TICK


  massPerMegaWattTick = pwr * STATICVAR_HOLDER.WATTAGE_MULTIPLIER * STATICVAR_HOLDER.SEC_PER_TICK / STATICVAR_HOLDER.C_SQUARED
}*/

//

//Factories in china: 1,903,380
//Factories in USA:     352,619
// Call it ~3M factories
//~1MT material can match an entire factory?
//3,000,000,000,000 tons of factory == 1 earth
//Make a bit randomy:
//   3141592000000
//



/*

standard current-tech solar panels range: 100-1.4 kg / kW

0.01-0.71 kW / kg
1000 kg / t
710 kW / t

*/


/*
<span id="Seedship_CHEAT_AddUnit"></span><span id="Seedship_CHEAT_AddUnit_UNITS"></span></div></div>
                <button class = "button3" id ="button_cheatSeedshipUP" > &#8963; </button>
                <button class = "button2" id ="button_cheatSeedshipF" > BUILD </button>
                <div class="buildInfoPanel2">BEEP BEEP BEEP <br> <span id="wfUPGRADE_Bot_COST"></span> </div>
                <span></span>
                <button class = "button3" id ="button_cheatSeedshipDN" > &#8964; </button>
*/










window.GAME = GAME_GLOBAL;