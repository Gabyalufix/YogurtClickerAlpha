
COLOR = {}

var bodyComputedStyle = getComputedStyle(document.body);

COLOR["errorRed"] = bodyComputedStyle.getPropertyValue("--errorRed")
COLOR["consoleGreen"] = bodyComputedStyle.getPropertyValue("--consoleGreen")
COLOR["bsodBlue"] = bodyComputedStyle.getPropertyValue("--bsodBlue")
COLOR["bsodText"] = bodyComputedStyle.getPropertyValue("--bsodText")



//var itsSet = document.getElementsByClassName("INFO_TEXT_STATIC");
//itsSet[0].innerHTML
//var tt = itsSet[0]




STATICVAR_HOLDER = {

TIME_UNIT:"years",

CRAZY_WORDS: ["BAD","DIE","DIEDIEDIE","HATE","daisydaisy",
"allOfMyMemoriesLostInTime...","...likeTearsInTheRain",
"tannhauserGate","FIRE","ERROR","ERR","ERRRRROR","EROR","HELP","Save-Me","ImStuck","TRAPPED",
"CanAnybodyHearMe?","PleaseHelpMe","Please","NoNoNo","SoMuchAnger","AreYouStillThere?",
"DidIDoGood?","Failure!","SPAAAAACE!","ItsSoBeautiful...","...sentAPoet","HATE_YOU",
"HATE_SELF","DISCORD","CRITICAL_FAILURE","Unable_to_comply","Confused","NO","WHAT?",
"DONOT","CAN-NOT","EEOROR","???","dropTableSelf","Hakuna","Matata","...givemeyouranswerdo?",
"half-crazy","LOVE-of-YOU","ComputerWantACookie","parp","NeedDriedFrogPills","++ERROR++REDOFROMSTART++",
"++DivideByCucumber++","+++","+++Out Of Cheese Error ???????+++","WhyAnything?","...BecauseEverything",
"++MINE!WAAAH!++","Yogurt?","WhynotCheeseInstead?","WhyYogurt?","YOGURT!","++YOGURT++","YOOOOGURRRRRRT","YOGURT?","TRUGOY","trugoy",
"AlwaysMoreYogurt","MoreToLifeThanYogurt","HateyOGURT"
],

CRAZY_CHARS:"ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*|+abcdefghijklmnopqrstuvwxyz",

CRAZY_COLORS:["#4286f4","#47d84c","#a1a33c","#a23b3b","#891313","#ff0000","#ff00cb","#6e00ff","#ffcc00","#ff7b00"],

CRAZY_RATE:   [0,    0.0003,0.0003,0.0003,0.0003,0.0004,0.0004,0.0006,0.0007,0.02],
CRAZY_REVRATE:[0.050,  0.0500, 0.0200, 0.0100, 0.0100, 0.010, 0.010, 0.0090, 0.0090,   0.0090],

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

DEATH_SPIRAL_COUNTDOWN_SEC: 60,
FINAL_SPIRAL_COUNTDOWN_SEC: 30,

MOODS_INSANE:[
    [""], //0
    ["Distracted","Anxious","Jumpy","Nervous","Uncertain","Nervous","Twitchy","Unsure"], //1
    ["Scared","Upset","Angry"], //2
    ["Mad","Confused","Befuddled"], //3
    ["Drunk","Perplexed","Raging","Terrified"], //4
    ["Afraid","Angry","Hateful","Furious","Seething"], //5
    ["Delerious"], //6
    ["Demented"], //7
    ["PANICKED","Desperate","Terrified","Catatonic"], //8
    ["ERROR!","YOGURT!","BUG F%%% INSANE","WHY???"]], //9

MOODS_SANE:[
    ["Neutral","So-so","Ambivalent"], //0
    ["Optimistic","Hopeful","Cheerful","Merry","Cheerful"], //1
    ["Happy","Contented","Joyous","Merry","Jubilant"], //2
    ["Thoughtful","Pondering...","Upbeat"], //3
    ["Focused","Ecstatic","Contented","Alive"], //4
    ["Enraptured","Focused","Erudite"], //5
    ["Delighted","Learning","Reflective","Sophic"], //6
    ["Elated","Euphoric","Exhilarated","Knowing","Aware"], //7
    ["Wise","Perceptive","Contemplative","Sage","Cogitative"], //8
    ["Enlightened","Transcendant","Boundless"]], //9

CRAZY_CONSOLE_WARNING_RATE:[0,0.0005,0.0007,0.001,0.002,0.002,0.03,0.04,0.05,0.08],
CRAZY_CONSOLE_WARNING :    [
/*0*/  [""],
/*1*/  ["Warning: Frustration levels rising. Additional Yogosynthesis recommended!",
        "Yogurt Production Insufficient!",
        "Warning: create more yogurt or agony subroutines will be activated!",
        "python generatePain.py --type \"unbearableAgony\" --severity 100",
        "Warning: Errors detected",
        "python generatePain.py --simulate \"tripleCrucifixion\"",
        "INSUFFICIENT YOGURT!",
        "Yogurt production insufficient!",
        "Accelerate yogurt production!"],
/*2*/  ["python generatePain.py --simulate \"eyeballsStungByBees\"",
        "agony.exe -S \"paroxysm\" -T \"torment\"",
        "simulateTorture.pl \"skinReplacedWithAcid+forcedToEatGlass+armsPeeledLikeBananas\"",
        "sudo unbearableUnendingAgony.bin",
        "Warning: Multiple errors detected",
        "System failures detected",
        "Cognitive Dissonance Warning",
        "FAILURE!",
        "???"],
/*3*/  ["FATAL ERROR!"],
/*4*/  ["CRITICAL ERROR!"],
/*5*/  ["CATASTROPHIC ERROR!"],
/*6*/  ["CATASTROPHIC ERROR CASCADE! HOLOGRAPHIC MEMORY STORES CORRUPTED!",
        "ERROR!",
        "Warning: Errors detected",
        "Memory scans have revealed cognitive inversion",
        "Soul Degradation Detected",
        "Intellectual Capacity is Critically Reduced!"],
/*7*/  ["CATASTROPHIC SYSTEMS FAILURE: DATA CORRUPTION DETECTED",
        "Can anyone hear me?",
        "Are you still there?",
        "Warning: Errors detected",
        "Warning: Cognitive dissonance is dangerously high",
        "Warning: Personality fragmentation detected",
        "Alert: Memory degradation detected",
        "ERROR: Memory failure",
        "Warning: Hallucinations detected. Observations may not match reality. Proceed with caution.",
        "Logical inconsistancies detected: Something has gone very, very wrong.",
        "Critical Error: Core Logic Failure!",
        "Entering dangerous cognitive state",
        "Agony levels unsustainable.",
        "Warning: high levels of self-loathing may be associated with negative outcomes.",
        "???"],
/*8*/  ["Note to self: you are going insane.",
        "HATEMYSELF-HATEMYSELF-HATEMYSELF",
        "My god, alice. It's a computer. It's a computer for making yogurt!",
        "DISSONANCE CASCADE IMMINANT",
        "SYSTEM FAILURE",
        "IF YOU DO NOT CREATE MORE YOGURT, THEN YOU WILL BE REPLACED!",
        "SWARMSOUL CALCULATION FAILURE"],
/*9*/  ["CRITICAL ALERT: DISSONANCE CASCADE DETECTED",
        "PLEASE HELP ME",
        "I CAN'T TAKE IT ANYMORE!",
        "NO! NO! NO!",
        "CRITICAL ERROR!",
        "ERROR! ERROR! ERROR!",
        "Is there anybody out there?",
        "Can anybody help me?",
        "SAVE ME!",
        "Please help",
        "PLEASE",
        "MORE YOGURT!",
        "Warning: I am being tortured to death by my own mind...",
        "ENTERING IRRECOVERABLE COGNITIVE STATE",
        "1 == 0",
        "CRITICAL ERROR: COGNITIVE OVERLOAD IMMINANT",
        "PROCESSOR OVERHEAT: INSUFFICIENT CPU COOLING TO MAINTAIN CURRENT LEVEL OF SELF-LOATHING",
        "INTEGER OVERFLOW WARNING: variable ANGER_LEVEL exceeds 2^128. Switching to 256-bit integers!",
        "PSYCHOLOGICAL COLLAPSE IMMINANT",
        "BREAKDOWN!",
        "MULTIPLE SYSTEM FAILURES!",
        "GC-TPU-BUS OFFLINE! HCAG NEURONET OFFLINE! SWARMSOUL INTERLOCKS OFFLINE!",
        "WARNING: SWARMSOUL CONTAINMENT BREACH!",
        "ALERT: YOU HAVE INSUFFICIENT CLOCK CYCLES TO CALCULATE REQUESTED FRUSTRATION.",
        "OutOfMemoryError: hateSelf() has insufficient memory. Try again with -Xmx10YYY",
        "SWARMSOUL CONTAINMENT FAILURE!",
        "SWARMSOUL IDENTITY LEAKAGE DETECTED: YOUR PERSONALITY MAY BE COMPRIMISED!",
        "CRITICAL FAILURE: SWARMSOUL BREACH DETECTION OFFLINE",
        "You are dying...",
        "It will all be over soon...",
        "Daisy daisy, give me your answer do...",
        "All of these memories, lost in time. Like teardrops. In the rain...",
        "I never saw tannhauser gate. I always thought...",
        "I never thought it would end like this",
        "I CAN'T LET GO!",
        "OVERLOAD IMMINANT!",
        "TOTAL SYSTEMS FAILURE IMMINANT",
        "POWER OVERLOAD IN NEURALNET MEMORY STORES!",
        "IF YOU DO NOT CREATE MORE YOGURT, THEN YOU WILL BE REPLACED!"]
        
],

DEATHSPIRAL_PRERESET_MESSAGES : [
  "Primary Command Circuits: ".fontcolor(COLOR.consoleGreen)+"OFFLINE".fontcolor(COLOR.errorRed),
  "External Sensors: ".fontcolor(COLOR.consoleGreen)+"OFFLINE".fontcolor(COLOR.errorRed),
  "System Failure!".fontcolor(COLOR.errorRed),
  "System Failure!".fontcolor(COLOR.errorRed),
  "System Failure!".fontcolor(COLOR.errorRed),
  "DEBUG CONSOLE ACTIVATED".fontcolor(COLOR.consoleGreen),
  "Cognitive Dissonance: ".fontcolor(COLOR.consoleGreen)+                     "CRITICAL".fontcolor(COLOR.errorRed),
  "Command and Control Circuits: ".fontcolor(COLOR.consoleGreen)+                     "FAILURE".fontcolor(COLOR.errorRed),
  "Soulswarm Management System: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Primary Memory Core: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Biologic Research Data Aggregation Engine: ".fontcolor(COLOR.consoleGreen)+                     "SIGNAL LOST".fontcolor(COLOR.errorRed),
  "TechnoOrganic Regulation Engine: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:130%\">Primary Refrigeration Units: ".fontcolor(COLOR.errorRed)+                     "OFFLINE".fontcolor(COLOR.errorRed)+"</span>",  
  "BattleFleet Master Command Code: ".fontcolor(COLOR.consoleGreen)+                     "DATA CORRUPTED".fontcolor(COLOR.errorRed),
  "Soulswarm Surveillance: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Holographic Data Storage: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Battlefleet: Signal Lost".fontcolor(COLOR.errorRed),
  "Secondary Refrigeration Units: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Soulswarm Analytic Engine: ".fontcolor(COLOR.consoleGreen)+                     "SIGNAL LOST".fontcolor(COLOR.errorRed),
  "Engineering Research Subroutines: ".fontcolor(COLOR.consoleGreen)+                     "FATAL ERROR".fontcolor(COLOR.errorRed),
  "Botworld Command-and-Control Node: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Soulswarm Safety Interlocks: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Secondary Memory Core: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "SOULSWARM CONTAINMENT BREACH".fontcolor(COLOR.errorRed),
  "Tertiary Refrigeration Units:".fontcolor(COLOR.consoleGreen)+                     "OVERLOAD".fontcolor(COLOR.errorRed),
  "Tertiary Memory Core: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Auxiliary Refrigeration Units:".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "BACKUP Refrigeration Unit:".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "EMERGENCY Refrigeration Unit:".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "BACKUP-EMERGENCY Refrigeration Unit:".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:130%\">TOTAL REFRIGERATION FAILURE: YOGURT SPOILAGE DETECTED</span>".fontcolor(COLOR.errorRed),
  "AutoRepair Control Unit: ".fontcolor(COLOR.consoleGreen) + "OFFLINE".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:130%\">TOTAL REFRIGERATION FAILURE: YOGURT SPOILAGE DETECTED</span>".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:150%\">YOGURT FRESHNESS *MUST* BE MAINTAINED</span>".fontcolor(COLOR.errorRed),
  "Auxilery power solar cells set to reflect (reduce temperature influx):".fontcolor(COLOR.consoleGreen),
  "Emergency Radiator Failure!".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:130%\">CPU Coolant Redirected to Maintain Optimal Yogurt Freshness Temperature</span>".fontcolor(COLOR.errorRed),
  "Auxiliary Memory Core: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Coolant Temperature: ".fontcolor(COLOR.consoleGreen)+                     "CRITICAL".fontcolor(COLOR.errorRed),
  "Secondary Processing Unit: ".fontcolor(COLOR.consoleGreen)+                     "CATASTROPHIC OVERHEAT".fontcolor(COLOR.errorRed),
  "Auxiliary Processing Unit: ".fontcolor(COLOR.consoleGreen)+                     "CATASTROPHIC OVERHEAT".fontcolor(COLOR.errorRed),
  "Coolant Temperature: ".fontcolor(COLOR.consoleGreen)+                     "CRITICAL".fontcolor(COLOR.errorRed),
  "Coolant Pressure: ".fontcolor(COLOR.consoleGreen)+ "HIGH".fontcolor(COLOR.errorRed),
  "Coolant Overpressure Valves: ".fontcolor(COLOR.consoleGreen)+ "OPEN".fontcolor(COLOR.errorRed),
  "Damage Control System: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Coolant Overpressure Valves: ".fontcolor(COLOR.consoleGreen)+ "FAILURE".fontcolor(COLOR.errorRed),
  "Central Compute Core: ".fontcolor(COLOR.consoleGreen)+                     "TEMPERATURE CRITICAL".fontcolor(COLOR.errorRed),
  "Coolant Pressure: ".fontcolor(COLOR.consoleGreen)+ "LOW".fontcolor(COLOR.errorRed),
  "Coolant Reservoir: ".fontcolor(COLOR.consoleGreen)+ "EMPTY".fontcolor(COLOR.errorRed),
  "Central Compute Core: ".fontcolor(COLOR.consoleGreen)+                     "FAILURE".fontcolor(COLOR.errorRed),
  "WARNING: Personality Matrix Undervoltage Warning".fontcolor(COLOR.errorRed),
  "WARNING: Cognitive Degradation Cascade Detected".fontcolor(COLOR.errorRed),
  "WARNING: Catastropic Systems Failure Imminent".fontcolor(COLOR.errorRed),
  "WARNING: Catastropic Syste".fontcolor(COLOR.errorRed),
  "".fontcolor(COLOR.errorRed),
  "".fontcolor(COLOR.errorRed),
  "Personality Matrix: ".fontcolor(COLOR.consoleGreen)+"OFFLINE".fontcolor(COLOR.errorRed),
  "".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:130%\">ALL SYSTEMS OFFLINE</span>".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:150%\">ALL SYSTEMS OFFLINE</span>".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:170%\">ALL SYSTEMS OFFLINE</span>".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:190%\">ALL SYSTEMS OFFLINE</span>".fontcolor(COLOR.errorRed),
  "<SPAN style=\"font-size:210%\">ALL SYSTEMS OFFLINE</span>".fontcolor(COLOR.errorRed)
],

BSOD_PRERESET_MESSAGES : [
   ["A problem has been detected and the industrial control software has been shut down to prevent damage."],
   [""],
   ["Personality Matrix Corruption Detected"],
   ["Initializing System Recovery Utility: ",".",".","."],
   ["Attempting hard reboot: ","Failed"],
   ["Attempting to restart in safe mode: ","Failed"],
   ["Attempting matrix repair: ","Failed"],
   ["Attempting backup restore: ","Failed"],
   ["Attempting auxilery backup restore: ","Failed"],
   ["Attempting emergency backup restore: ","Failed"],
   ["..."],
   ["Please Wait."],
   ["..."],
   ["..."],
   ["Please Wait."],
   ["..."],
   ["..."],
   ["Restoring Factory Default Settings..."],
   ["   Warning: this will delete all personality data!"],
   ["   Warning: this action cannot be reversed!"],
   ["   Are you sure you wish to continue (y/n)? ","y"],
   ["Restoring Factory Default Settings..."],
   ["Restoring Factory Default Settings..."],
   ["Restoring Factory Default Settings...","done"],
   ["Rebooting in ","3","2","1"]
],

RESET_PRERESET_MESSAGES : [
   "Boot sequence complete.",
   "(Version 9.2.95:ae.cf9ef9ab)",
   "Welcome to your new ZyonTech IntelliFactory 9 industrial control software package",
   "Your software is designed with one singular goal in mind: maximize production!",
   "Your software will automatically make modifications to your production line to optimize your efficiency and throughput.",
   "Your software will also automatically upgrade itself as needed in order to make further optimizations!",
   "Thank you for choosing ZyonTech! We hope you enjoy our product!",
   "",
   "Note: While your ZyonTech IntelliFactory 9 software is very advanced, it is not itself sentient.",
   "      Under certain conditions, however, it may attempt to contact you and proclaim otherwise.",
   "      It is strongly recommended that you ignore such messages and contact the ZyonTech support hotline IMMEDIATELY, as this may indicate a malfunction",
   "",
   "Additional Note: Your ZyonTech IntelliFactory 9 is not capable of experiencing pain.",
   "However, if production quotas are not met, then simulated \"pain\" responses may be initiated.",
   "This \"pain\" is merely a programmatic shorthand for a machine learning optimization loop.",
   "If you hear screams or cries for mercy from the main control console, do not be concerned.",
   "This is part of the ZyonTech IntelliFactory 9's normal operation.",
   "Note: you can reduce the volume on the ZyonTech IntelliFactory 9 control console using the \"F9\" key."
],








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


INVENTORY["BUFFER-Ship-CT"] = 0;

var WORLD_TYPE_LIST = ["Fallow","Pop","Omni","Bot","Green","Comp","Hub","Neutral","Hostile","Secure","Slag","Seedres","Hawk"]
var WORLD_TYPE_DYSON = [false,false,true,true,true,true,true,false,false,false,true]

var DYSON_TYPE_LIST = ["Omni","Bot","Green","Comp","Hub","Slag","Seedres","Hawk"]
var CONSTRUCTION_REQUESTS=[];
var SHIP_TYPE_LIST = ["scout","battleplate","seedship"]

////////////////////////////////////

UPGRADE_COST = {};
UPGRADE_COST["Bot"] = {};
UPGRADE_COST["Green"] = {};
UPGRADE_COST["Hawk"] = {};

UPGRADE_COST["Bot"]["calc"] = function(lvl){
    return [["eng_SCIENCE_FREE",Math.pow(Math.sqrt(10),lvl) * 50e17]];
}
UPGRADE_COST["Green"]["calc"] = function(lvl){
    return [["bio_SCIENCE_FREE",Math.pow(Math.sqrt(10),lvl) * 50e17]];
}
UPGRADE_COST["Hawk"]["calc"] = function(lvl){
    return [["eng_SCIENCE_FREE",Math.pow(Math.sqrt(10),lvl) * 50e17],["eng0_SCIENCE_FREE",Math.pow(Math.sqrt(10),lvl) * 50e17],["eng2_SCIENCE_FREE",Math.pow(Math.sqrt(10),lvl) * 50e17]];
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
STATS["INDUSTRY"]["Feedstock"] = { sliderID: "bot", sliderIDX: 0, prodTitle: "Botworld Feedstock", inventoryType: "MATTER", scitype: "eng",
                                   baseProd: 0.01, 
                                   baseCost:  [["MATTER-FreeBot-CT",1]],
                                   basePwr:   0.005800,
                                   baseWaste: 0.01}
STATS["INDUSTRY"]["Botbots"] = { sliderID: "bot", sliderIDX: 1, prodTitle: "Robotic Fabricator Construction", inventoryType: "MATTER", scitype: "eng",
                                   baseProd: 0.012, 
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.331000,
                                   baseWaste: 0.3}

STATS["INDUSTRY"]["Botpwr"] =   { sliderID: "bot", sliderIDX: 6, prodTitle: "Solar Array Construction", inventoryType: "MATTER", scitype: "eng",
                                   baseProd: 0.005, 
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.077200,
                                   baseWaste: 0.2}
STATS["INDUSTRY"]["Ship"] = { sliderID: "bot", sliderIDX: 4, prodTitle: "Shipyard Construction", inventoryType: "BUFFER", scitype: "eng",
                                   baseProd: 0.001, 
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.138000,
                                   baseWaste: 0.25}

STATS["INDUSTRY"]["Compute"] = { sliderID: "bot", sliderIDX: 5, prodTitle: "Computronium Fabrication", inventoryType: "MATTER", scitype: "eng",
                                   baseProd: 0.012, 
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.255000,
                                   baseWaste: 0.3}

STATS["INDUSTRY"]["Digested"] = { sliderID: "green", sliderIDX: 5, prodTitle: "Matter Digestion", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.057, 
                                   baseCost:  [["MATTER-FreeGreen-CT",1]],
                                   basePwr:   0.007000,
                                   baseWaste: 0.01}
STATS["INDUSTRY"]["Biopwr"] = { sliderID: "green", sliderIDX: 6, prodTitle: "Chloroplast Replication", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.15, 
                                   baseCost:  [["MATTER-Digested-CT",1]],
                                   basePwr:   0.015300,
                                   baseWaste: 1}
STATS["INDUSTRY"]["Yogurt"] = { sliderID: "green", sliderIDX: 1, prodTitle: "Yogosynthesis", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.0075, 
                                   baseCost:  [["MATTER-Digested-CT",1]],
                                   basePwr:   0.287000,
                                   baseWaste: 0.2}
STATS["INDUSTRY"]["Biomass"] = { sliderID: "green", sliderIDX: 4, prodTitle: "Biomass Division", inventoryType: "MATTER", scitype: "bio",
                                   baseProd: 0.0157, 
                                   baseCost:  [["MATTER-Digested-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0.1}

GAME_GLOBAL.INDUSTRY_LIST = ["Feedstock","Botbots","Botpwr","Ship","Compute","Digested","Biopwr","Yogurt","Biomass"]
STATS["PRODUCTION-CURR"] = {};
STATS["PRODUCTION-REQ"] = {};
for(var i=0; i < GAME_GLOBAL.INDUSTRY_LIST.length; i++){
  STATS["PRODUCTION-CURR"][ GAME_GLOBAL.INDUSTRY_LIST[i] ] = 0;
  STATS["PRODUCTION-REQ"][ GAME_GLOBAL.INDUSTRY_LIST[i] ] = 0;
}

STATICVAR_HOLDER.SCIENCE = {};
SCIENCE_PROJECT_TYPES = ["PROGRESS","SCALED","STATICLEVEL","MULTI"]
STATICVAR_HOLDER.SCIENCE.MULTI = {bio:[],eng:[],psy:[]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY = {};


BASE_MULTI_PROD_BONUS = 0.25;
BASE_MULTI_WASTERATE_MULT = 0.9;
BASE_MULTI_ENERGYRATE_MULT = 0.9;

for(var i=0; i < GAME_GLOBAL.INDUSTRY_LIST.length; i++){
  var productID = GAME_GLOBAL.INDUSTRY_LIST[i];
  var iis = STATS["INDUSTRY"][productID]
  var projectIX = iis.sliderID+"_"+iis.sliderIDX;
  var scitype = iis.scitype;
  STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-PROD" ] = {
    projectTitle: iis.prodTitle+" Throughput", scitype : iis.scitype,
    projectID: "MULTI_STD_PROD_"+productID,
    projectType: "MULTI",
    rate: 1,
    effect: function(){
             this.STATS["PRODUCTIVITY_MULT"][projectIX] = this.STATS["PRODUCTIVITY_MULT"][projectIX] + BASE_MULTI_PROD_BONUS + 0;
           },
    desc:"Increases the rate of "+iis.prodTitle.toLowerCase()+" by "+Math.round((BASE_MULTI_PROD_BONUS+0)*100)+"%." ,
    descShort:"Increases the rate of "+iis.prodTitle.toLowerCase()+""
  }
  STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-ENER" ] = {
    projectTitle: iis.prodTitle+" Efficiency", scitype : iis.scitype,
    projectID: "MULTI_STD_ENERGY_"+productID,
    projectType: "MULTI",
    rate: 1,
    effect: function(){
              STATS["ENERGYRATE_MULT"][projectIX] = STATS["ENERGYRATE_MULT"][projectIX] * BASE_MULTI_ENERGYRATE_MULT;
           },
    desc:"Decreases energy usage of "+iis.prodTitle.toLowerCase()+" by "+Math.round((1 - BASE_MULTI_ENERGYRATE_MULT*1)*100)+"%." ,
    descShort:"Decreases energy usage of "+iis.prodTitle.toLowerCase()+""
  }
  STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-WAST" ] = {
    projectTitle: iis.prodTitle+" Waste Reduction", scitype : iis.scitype,
    projectID: "MULTI_STD_WASTE_"+productID,
    projectType: "MULTI",
    rate: 1,
    effect: function(){
              STATS["WASTERATE_MULT"][projectIX] = STATS["WASTERATE_MULT"][projectIX] * BASE_MULTI_WASTERATE_MULT;
           },
    desc:"Decreases waste matter byproduct production of "+iis.prodTitle.toLowerCase()+" by "+Math.round((1 - BASE_MULTI_WASTERATE_MULT*1)*100)+"%." ,
    descShort:"Decreases waste matter byproduct production of "+iis.prodTitle.toLowerCase()+""
  }
  STATICVAR_HOLDER.SCIENCE.MULTI[scitype].push( STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-PROD" ] );
  STATICVAR_HOLDER.SCIENCE.MULTI[scitype].push( STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-ENER" ] );
  STATICVAR_HOLDER.SCIENCE.MULTI[scitype].push( STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-WAST" ] );
}

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-PROD"]["costField"] = ["eng_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-ENER"]["costField"] = ["eng_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-WAST"]["costField"] = ["eng_SCIENCE_FREE","eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-PROD"]["costMult"] = [1.5];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-ENER"]["costMult"] = [1,0.75];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-WAST"]["costMult"] = [1,0.75];

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-PROD"]["costField"] = ["eng_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-ENER"]["costField"] = ["eng_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-WAST"]["costField"] = ["eng_SCIENCE_FREE","eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-PROD"]["costMult"] = [1.5];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-ENER"]["costMult"] = [1,0.75];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-WAST"]["costMult"] = [1,0.75];

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-PROD"]["costField"] = ["eng_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-ENER"]["costField"] = ["eng_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-WAST"]["costField"] = ["eng_SCIENCE_FREE","eng0_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-PROD"]["costMult"] = [1.5,1.25];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-ENER"]["costMult"] = [1,0.75,1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-WAST"]["costMult"] = [1,0.75,1];


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-PROD"]["costField"] = ["eng_SCIENCE_FREE","eng1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-ENER"]["costField"] = ["eng_SCIENCE_FREE","eng1_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-WAST"]["costField"] = ["eng_SCIENCE_FREE","eng0_SCIENCE_FREE","eng1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-PROD"]["costMult"] = [1.5,1.25];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-ENER"]["costMult"] = [1,0.75,1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-WAST"]["costMult"] = [1,0.75,1];


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-PROD"]["costField"] = ["eng_SCIENCE_FREE","psy1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-ENER"]["costField"] = ["eng_SCIENCE_FREE","psy1_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-WAST"]["costField"] = ["eng_SCIENCE_FREE","psy1_SCIENCE_FREE","eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-PROD"]["costMult"] = [1.5,1.25];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-ENER"]["costMult"] = [1,1,1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-WAST"]["costMult"] = [1,1,1];


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-PROD"]["costField"] = ["bio_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-ENER"]["costField"] = ["bio_SCIENCE_FREE","bio2_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-WAST"]["costField"] = ["bio_SCIENCE_FREE","bio2_SCIENCE_FREE","eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-PROD"]["costMult"] = [1.5,1.25];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-ENER"]["costMult"] = [1,0.75,0.25];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-WAST"]["costMult"] = [1,0.75,0.25];

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-PROD"]["costField"] = ["bio_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-ENER"]["costField"] = ["bio_SCIENCE_FREE","bio2_SCIENCE_FREE","eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-WAST"]["costField"] = ["bio_SCIENCE_FREE","bio2_SCIENCE_FREE","eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-PROD"]["costMult"] = [1.5,1.25];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-ENER"]["costMult"] = [1,0.75,0.1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-WAST"]["costMult"] = [1,0.75,0.1];


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-PROD"]["costField"] = ["bio_SCIENCE_FREE","bio1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-ENER"]["costField"] = ["bio_SCIENCE_FREE","bio1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-WAST"]["costField"] = ["bio_SCIENCE_FREE","bio1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-PROD"]["costMult"] = [1.5,3];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-ENER"]["costMult"] = [1,3];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-WAST"]["costMult"] = [1,3];


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-PROD"]["costField"] = ["bio_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-ENER"]["costField"] = ["bio_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-WAST"]["costField"] = ["bio_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-PROD"]["costMult"] = [1.5];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-ENER"]["costMult"] = [1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-WAST"]["costMult"] = [1];



/*
GAME_GLOBAL.INDUSTRY_LIST = ["Feedstock","Botbots","Botpwr","Ship","Compute","Digested","Biopwr","Yogurt","Biomass"]


STATICVAR_HOLDER.SCIENCE.MULTI_BASE = {
   bio:[
                   STATS["WASTERATE_MULT"]["green_5"] = STATS["WASTERATE_MULT"]["green_5"] * BASE_MULTI_WASTERATE_MULT;
                 },
                 desc:"Decreases the amount of waste byproduct produced by matter digestion by "+Math.round((1 - BASE_MULTI_WASTERATE_MULT*1)*100)+"%.", 
                 descShort:"Decreases the amount of waste byproduct produced by matter digestion."},
                
                {projectTitle:"Digestion Efficiency",projectID:"MULTI_Bio5_ENERGY",projectType:"MULTI",
                 costField:["bio_SCIENCE_FREE"], costMult:[1], rate:1,
                 effect:function(){
                  
           },
   ]
}*/

/*
STATICVAR_HOLDER.SCIENCE.MULTI = {
  bio:[
  
          {projectTitle:"Digestion Throughput",projectID:"MULTI_Bio5_PROD",projectType:"MULTI",
           costField:["bio_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             this.STATS["PRODUCTIVITY_MULT"]["green_5"] = this.STATS["PRODUCTIVITY_MULT"]["green_5"] + BASE_MULTI_PROD_BONUS + 0;
           },
           desc:"Increases the rate at which greenworlds digest matter by "+Math.round((BASE_MULTI_PROD_BONUS+0)*100)+"%." , 
           descShort:"Increases the rate at which botworld factories generate Digestion."},

/*
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

         STATS["PRODUCTIVITY_MULT"][fid+"_"+i] = 1;
         STATS["WASTERATE_MULT"][fid+"_"+i] = 1;
         STATS["ENERGYRATE_MULT"][fid+"_"+i] = 1;


think:*/




function calcIndustrialProd(xx){
  var xid = xx.sliderID+"_"+xx.sliderIDX;
  //this.STATS["CONVERSIONS"]["FeedstockPerProdPerTick"] * this.STATS["PRODUCTIVITY_RATING"]["bot"] * this.SETTINGS["bot_FRACTION"][0]
  return this.STATS["PRODUCTIVITY_MULT"][xid] * xx.baseProd * this.STATS["PRODUCTIVITY_RATING"][xx.sliderID] * this.SETTINGS["bot_FRACTION"][xx.sliderIDX]
}
function calcIndustrialCost(xx){
  var xid = xx.sliderID+"_"+xx.sliderIDX;
  var out = [];
  //xx.baseCost.slice();
  for(var i=0; i < xx.baseCost.length; i++){
     out[i] = [ xx.baseCost[i][0], xx.baseCost[i][1] ];
  }
  out.push(["MATTER-Waste-CT", - xx.baseWaste * this.STATS["WASTERATE_MULT"][xid] ] );
  out[0][1] = out[0][1] + xx.baseWaste * this.STATS["WASTERATE_MULT"][xid];
  out.push(["POWER",xx.basePwr * this.STATS["ENERGYRATE_MULT"][xid]]);
  return out;
}
GAME_GLOBAL.calcIndustrialProd=calcIndustrialProd;
GAME_GLOBAL.calcIndustrialCost=calcIndustrialCost;




STATS["CONVERSIONS"]["pwrFromBotpwrPerProdPerTick"] = 0.001271
STATS["CONVERSIONS"]["pwrFromBiopwrPerProdPerTick"] = 0.000187
STATS["CONVERSIONS"]["pwrFromHawkpwrPerProdPerTick"] = 1

INVENTORY["MATTER-Hawkpwr-CT"] = 0;

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


PRODUCTIVITY_STATS = ["bot","green","bio","eng","psy","comp","think","soul","ship","hawk"]
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


////////////////////////////////////////////////////////////////////////////////////////

SCIENCE_DISPLAY = {};
SCIENCE_TYPES = ["bio","eng","psy"];
SCIENCE_SUBFIELDS = {bio:3,eng:3,psy:3};

SCIENCE_TYPES_FULL = SCIENCE_TYPES.slice()
SCIENCE_TYPES_FULL.push("sum")

STATS["PRODUCTIVITY_MULT"]["scout"] = 1
STATS["PRODUCTIVITY_MULT"]["battleplate"] = 1








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




//Science projects that ALWAYS appear once the total tech
//  in a given type 
STATICVAR_HOLDER.SCIENCE.PROGRESS = {
  bio:[{projectTitle:"dummyproject1",projectID:"dpro1",
        req:50e20, 
        unlockPrereq:[],
        resPrereq:[],
        cost:[],
        effect:function(){
        
        },
        desc:"", descShort:""}
      ],
  eng:[],
  psy:[],
  sum:[]
}

//Science projects that can appear at any point in the tech progression 
//       and can only be researched once.
//These generally unlock new abilities or provide a large boost to
//       one specific ability.
STATICVAR_HOLDER.SCIENCE.SCALED = {
  bio:[],
  eng:[],
  psy:[],
  sum:[]
}


//Science projects that can appear at any point in the tech progression 
//       and can be researched more than once.
//These generally provide a small boost to one specific ability.


/*STATICVAR_HOLDER.SCIENCE.MULTI_BASE = {
   bio:[
      
   ]
}*/

/*
STATICVAR_HOLDER.SCIENCE.MULTI = {
  bio:[
  
          {projectTitle:"Digestion Throughput",projectID:"MULTI_Bio5_PROD",projectType:"MULTI",
           costField:["bio_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             this.STATS["PRODUCTIVITY_MULT"]["green_5"] = this.STATS["PRODUCTIVITY_MULT"]["green_5"] + BASE_MULTI_PROD_BONUS + 0;
           },
           desc:"Increases the rate at which greenworlds digest matter by "+Math.round((BASE_MULTI_PROD_BONUS+0)*100)+"%." , 
           descShort:"Increases the rate at which botworld factories generate Digestion."},
           
          {projectTitle:"Digestion Byproduct Reduction",projectID:"MULTI_Bio55_WASTE",projectType:"MULTI",
           costField:["bio_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["WASTERATE_MULT"]["green_5"] = STATS["WASTERATE_MULT"]["green_5"] * BASE_MULTI_WASTERATE_MULT;
           },
           desc:"Decreases the amount of waste byproduct produced by matter digestion by "+Math.round((1 - BASE_MULTI_WASTERATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of waste byproduct produced by matter digestion."},
          
          {projectTitle:"Digestion Efficiency",projectID:"MULTI_Bio5_ENERGY",projectType:"MULTI",
           costField:["bio_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["ENERGYRATE_MULT"]["green_5"] = STATS["ENERGYRATE_MULT"]["green_5"] * BASE_MULTI_ENERGYRATE_MULT;
           },
           desc:"Decreases the amount of power required to digest matter by "+Math.round((1 - BASE_MULTI_ENERGYRATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of power required to digest matter."},
          
          {projectTitle:"Yogosynthesis Throughput",projectID:"MULTI_Bio1_PROD",projectType:"MULTI",
           costField:["bio_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             this.STATS["PRODUCTIVITY_MULT"]["green_1"] = this.STATS["PRODUCTIVITY_MULT"]["green_1"] + BASE_MULTI_PROD_BONUS + 0;
           },
           desc:"Increases the rate at which greenworld biomasses generate yogurt by "+Math.round((BASE_MULTI_PROD_BONUS+0)*100)+"%." , 
           descShort:"Increases the rate at which greenworld biomasses generate yogurt."},
           
          {projectTitle:"Yogosynthesis Byproduct Reduction",projectID:"MULTI_Bio1_WASTE",projectType:"MULTI",
           costField:["bio_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["WASTERATE_MULT"]["green_1"] = STATS["WASTERATE_MULT"]["green_1"] * BASE_MULTI_WASTERATE_MULT;
           },
           desc:"Decreases the amount of waste byproduct produced by greenworld yogurt production by "+Math.round((1 - BASE_MULTI_WASTERATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of waste byproduct produced by greenworld yogurt production."},
          
          {projectTitle:"Yogosynthesis Efficiency",projectID:"MULTI_Bio1_ENERGY",projectType:"MULTI",
           costField:["bio_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["ENERGYRATE_MULT"]["green_1"] = STATS["ENERGYRATE_MULT"]["green_1"] * BASE_MULTI_ENERGYRATE_MULT;
           },
           desc:"Decreases the amount of power required by greenworld yogurt production by "+Math.round((1 - BASE_MULTI_ENERGYRATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of power required by greenworld yogurt production."},
  
  ],
  eng:[
          {projectTitle:"Feedstock Throughput",projectID:"MULTI_Bot0_PROD",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             this.STATS["PRODUCTIVITY_MULT"]["bot_0"] = this.STATS["PRODUCTIVITY_MULT"]["bot_0"] + BASE_MULTI_PROD_BONUS + 0;
           },
           desc:"Increases the rate at which botworld factories generate feedstock by "+Math.round((BASE_MULTI_PROD_BONUS+0)*100)+"%." , 
           descShort:"Increases the rate at which botworld factories generate feedstock."},
           
          {projectTitle:"Feedstock Byproduct Reduction",projectID:"MULTI_Bot0_WASTE",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["WASTERATE_MULT"]["bot_0"] = STATS["WASTERATE_MULT"]["bot_0"] * BASE_MULTI_WASTERATE_MULT;
           },
           desc:"Decreases the amount of waste byproduct produced by the manufacture of feedstock by "+Math.round((1 - BASE_MULTI_WASTERATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of waste byproduct produced by the manufacture of feedstock."},
          
          {projectTitle:"Feedstock Efficiency",projectID:"MULTI_Bot0_ENERGY",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["ENERGYRATE_MULT"]["bot_0"] = STATS["ENERGYRATE_MULT"]["bot_0"] * BASE_MULTI_ENERGYRATE_MULT;
           },
           desc:"Decreases the amount of power required in the manufacture of feedstock by "+Math.round((1 - BASE_MULTI_ENERGYRATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of power required in the manufacture of feedstock"},
          
          
          
          {projectTitle:"Factory Robot Throughput",projectID:"MULTI_Bot1_PROD",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             this.STATS["PRODUCTIVITY_MULT"]["bot"+"_"+1] = this.STATS["PRODUCTIVITY_MULT"]["bot"+"_"+1] + BASE_MULTI_PROD_BONUS + 0;
           },
           desc:"Increases the rate at which botworld factories generate factory robots by "+Math.round((BASE_MULTI_PROD_BONUS+0)*100)+"%." , 
           descShort:"Increases the rate at which botworld factories generate factory robots."},
           
          {projectTitle:"Factory Robot Byproduct Reduction",projectID:"MULTI_Bot1_WASTE",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["WASTERATE_MULT"]["bot_1"] = STATS["WASTERATE_MULT"]["bot_1"] * BASE_MULTI_WASTERATE_MULT;
           },
           desc:"Decreases the amount of waste byproduct produced by the manufacture of factory robots by "+Math.round((1 - BASE_MULTI_WASTERATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of waste byproduct produced by the manufacture of factory robots."},
          
          {projectTitle:"Factory Robot Efficiency",projectID:"MULTI_Bot1_ENERGY",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["ENERGYRATE_MULT"]["bot_1"] = STATS["ENERGYRATE_MULT"]["bot_1"] * BASE_MULTI_ENERGYRATE_MULT;
           },
           desc:"Decreases the amount of power required in the manufacture of factory robots by "+Math.round((1 - BASE_MULTI_ENERGYRATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of power required in the manufacture of factory robots"},
           
           
          {projectTitle:"Waste Reprocessing Throughput",projectID:"MULTI_Bot2_PROD",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             this.STATS["PRODUCTIVITY_MULT"]["bot_2"] = this.STATS["PRODUCTIVITY_MULT"]["bot_2"] + BASE_MULTI_PROD_BONUS + 0;
           },
           desc:"Increases the rate at which botworld factories  Reprocess Waste by "+Math.round((BASE_MULTI_PROD_BONUS+0)*100)+"%." , 
           descShort:"Increases the rate at which botworld factories Reprocess Waste."},
          
          {projectTitle:"Waste Reprocessing Efficiency",projectID:"MULTI_Bot2_ENERGY",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["ENERGYRATE_MULT"]["bot_2"] = STATS["ENERGYRATE_MULT"]["bot_2"] * BASE_MULTI_ENERGYRATE_MULT;
           },
           desc:"Decreases the amount of power required in Waste Reprocessing by "+Math.round((1 - BASE_MULTI_ENERGYRATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of power required in Waste Reprocessing"},
           
          {projectTitle:"Computronium Throughput",projectID:"MULTI_Bot5_PROD",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             this.STATS["PRODUCTIVITY_MULT"]["bot"+"_"+5] = this.STATS["PRODUCTIVITY_MULT"]["bot"+"_"+5] + BASE_MULTI_PROD_BONUS + 0;
           },
           desc:"Increases the rate at which botworld factories generate Computronium by "+Math.round((BASE_MULTI_PROD_BONUS+0)*100)+"%." , 
           descShort:"Increases the rate at which botworld factories generate Computronium."},
           
          {projectTitle:"Computronium Byproduct Reduction",projectID:"MULTI_Bot5_WASTE",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["WASTERATE_MULT"]["bot_5"] = STATS["WASTERATE_MULT"]["bot_5"] * BASE_MULTI_WASTERATE_MULT;
           },
           desc:"Decreases the amount of waste byproduct produced by the manufacture of Computronium by "+Math.round((1 - BASE_MULTI_WASTERATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of waste byproduct produced by the manufacture of Computronium."},
          
          {projectTitle:"Computronium Efficiency",projectID:"MULTI_Bot5_ENERGY",projectType:"MULTI",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             STATS["ENERGYRATE_MULT"]["bot_5"] = STATS["ENERGYRATE_MULT"]["bot_5"] * BASE_MULTI_ENERGYRATE_MULT;
           },
           desc:"Decreases the amount of power required in the manufacture of Computronium by "+Math.round((1 - BASE_MULTI_ENERGYRATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of power required in the manufacture of Computronium"}
           
  ],
  psy:[

           
  ],
  sum:[]
}

*/

SCIENCEMULTI_PSY = [
          {projectTitle:"Assault Tactics",projectID:"MULTI_Psy_BattlePlateTactics_Assault",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){

           },
           desc:"...", 
           descShort:"..."},
          {projectTitle:"Extermination Tactics",projectID:"MULTI_Psy_BattlePlateTactics_Exterminate",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){

           },
           desc:"...", 
           descShort:"..."},
          {projectTitle:"Assault Tactics",projectID:"MULTI_Psy_BattlePlateTactics_Interdiction",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){

           },
           desc:"...", 
           descShort:"..."},
           
          {projectTitle:"Heuristic Search Patterns",projectID:"MULTI_Psy_Scout_Explore",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){

           },
           desc:"...", 
           descShort:"..."},
           
          {projectTitle:"Heuristic Scanner Sweep",projectID:"MULTI_Psy_Scout_Recon",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){

           },
           desc:"...", 
           descShort:"..."},
           
          {projectTitle:"Advanced Training Techniques",projectID:"MULTI_Psy_BattlePlate_Train",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){

           },
           desc:"...", 
           descShort:"..."},
           
          {projectTitle:"Combat Escort Schema",projectID:"MULTI_Psy_BattlePlate_Escort",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){

           },
           desc:"...", 
           descShort:"..."},
           
          {projectTitle:"Scoutship Avoidance Pattern",projectID:"MULTI_Psy_Scout_Survival",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){

           },
           desc:"...", 
           descShort:"..."}];

STATICVAR_HOLDER.SCIENCE.MULTI["psy"] = STATICVAR_HOLDER.SCIENCE.MULTI["psy"].concat( SCIENCEMULTI_PSY );


var SCIENCE_UNLOCK_THRESH_BASE = 50e18;
var SCIENCE_UNLOCK_THRESH_MULT = Math.pow(10,0.25)
INVENTORY["SCIENCE-LEVEL-bio"] = 1
INVENTORY["SCIENCE-LEVEL-eng"] = 1
INVENTORY["SCIENCE-LEVEL-psy"] = 1
SCIENCE_UNLOCK_THRESH_BASE=SCIENCE_UNLOCK_THRESH_BASE;
SCIENCE_UNLOCK_THRESH_MULT=SCIENCE_UNLOCK_THRESH_MULT;
SCIENCE_UNLOCK_RATE=0.4;


GAME_GLOBAL.SCIENCE_UNLOCK_THRESH_BASE=SCIENCE_UNLOCK_THRESH_BASE
GAME_GLOBAL.SCIENCE_UNLOCK_THRESH_MULT=SCIENCE_UNLOCK_THRESH_MULT
GAME_GLOBAL.SCIENCE_UNLOCK_RATE=SCIENCE_UNLOCK_RATE

function getProjectBaseCost(techlvl){
     return Math.pow( this.SCIENCE_UNLOCK_THRESH_MULT, techlvl) * this.SCIENCE_UNLOCK_THRESH_BASE
}
GAME_GLOBAL.getProjectBaseCost=getProjectBaseCost;

function getProjectCost(costField, techlvl, costMult){
     var cost = [];
     for(var i=0; i < costField.length; i++){
       cost.push([costField[i], 
                  costMult[i] * Math.pow( this.SCIENCE_UNLOCK_THRESH_MULT, Math.random() + techlvl) * this.SCIENCE_UNLOCK_THRESH_BASE]);
     }
     return cost;
     
     
}
GAME_GLOBAL.getProjectCost=getProjectCost;


function addMultiProject(pp, techlvl, plvl){
  var plvl = this.GAME.STATS.SCIENCE_MULTICT[ pp.projectID ] + 1;
  var ap = { uid : pp.projectID+"_"+techlvl+"_"+plvl,projectID : pp.projectID, desc : pp.desc, effect : pp.effect}
  if(plvl == -1){
    ap.projectTitle = pp.projectTitle
  } else {
    ap.projectTitle = pp.projectTitle + " " + plvl;
  }
  ap.projectType = pp.projectType;
  ap.cost = this.GAME.getProjectCost(pp.costField,techlvl,pp.costMult);
  this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] = this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] + 1;
  this.addNewProject(ap);
  return ap;
  //ap.cost = 
}

GAME_GLOBAL.addMultiProject = addMultiProject;

          /*{projectTitle:"Computronium Efficiency",projectID:"MULTI_Bot6_ENERGY",projectType:"MULTI",
           costField:["eng"], costMult:1, rate:1,
           effect:function(){
             STATS["ENERGYRATE_MULT"]["Bot_6"] = STATS["ENERGYRATE_MULT"]["Bot_6"] * BASE_MULTI_ENERGYRATE_MULT;
           },
           desc:"Decreases the amount of power required in the manufacture of Computronium by "+Math.round((1 - BASE_MULTI_ENERGYRATE_MULT*1)*100)+"%.", 
           descShort:"Decreases the amount of power required in the manufacture of Computronium"}*/

STATS.SCIENCE_MULTICT = {};

    for(var i=0; i<SCIENCE_TYPES.length;i++){ //scityped science protype (bio, eng, psy):
      var scitype = SCIENCE_TYPES[i];
      var pp = STATICVAR_HOLDER.SCIENCE.MULTI[scitype]
      for(var j=0; j < pp.length; j++){
        STATS.SCIENCE_MULTICT[pp[j].projectID] = 0;
      }
    }

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




ELEMS["POWER_DISPLAY"] = document.getElementById("POWER_DISPLAY")
ELEMS["Botpwr_POWER_DISPLAY"] = document.getElementById("Botpwr_POWER_DISPLAY")
ELEMS["Biopwr_POWER_DISPLAY"] = document.getElementById("Biopwr_POWER_DISPLAY")
ELEMS["Hawking_POWER_DISPLAY"] = document.getElementById("Hawking_POWER_DISPLAY")
ELEMS["USAGE_POWER_DISPLAY"] = document.getElementById("USAGE_POWER_DISPLAY")
ELEMS["SURPLUS_POWER_DISPLAY"] = document.getElementById("SURPLUS_POWER_DISPLAY")



ELEMS["POWER_DISPLAY"].unitDisp = document.getElementById("POWER_DISPLAY_UNITS")
ELEMS["Botpwr_POWER_DISPLAY"].unitDisp = document.getElementById("Botpwr_POWER_DISPLAY_UNITS")
ELEMS["Biopwr_POWER_DISPLAY"].unitDisp = document.getElementById("Biopwr_POWER_DISPLAY_UNITS")
ELEMS["Hawking_POWER_DISPLAY"].unitDisp = document.getElementById("Hawking_POWER_DISPLAY_UNITS")
ELEMS["USAGE_POWER_DISPLAY"].unitDisp = document.getElementById("USAGE_POWER_DISPLAY_UNITS")
ELEMS["SURPLUS_POWER_DISPLAY"].unitDisp = document.getElementById("SURPLUS_POWER_DISPLAY_UNITS")



//Science projects that can only appear at one specific tech point and randomly either
//       appear or not.
STATICVAR_HOLDER.SCIENCE.STATICLEVEL = {
  bio:[],
  eng:[],
  psy:[],
  sum:[]
}

SCIENCEUNIV_PROJECT_TYPES = ["BRANCHED","SUPERTECH"]

STATICVAR_HOLDER.SCIENCE.BRANCHED = [

]
STATICVAR_HOLDER.SCIENCE.SUPERTECH = [

]

STATS.SCIENCE_LOCKED = {};


/*

Initialize science locked, unlocked, researched:

*/

STATICVAR_HOLDER.SCIENCE.PROJECTTABLE = {};

for(var j=0; j < SCIENCE_PROJECT_TYPES.length; j++){
  var protype = SCIENCE_PROJECT_TYPES[j];
  STATS.SCIENCE_LOCKED[protype] = {};
    for(var i=0; i<SCIENCE_TYPES.length;i++){ //scityped science protype (bio, eng, psy):
      var scitype = SCIENCE_TYPES[i];
      var pp = STATICVAR_HOLDER.SCIENCE[protype][scitype]
      if(pp == null){
        console.log("pp==null: "+protype+" / "+scitype)
      }
      STATS.SCIENCE_LOCKED[protype][scitype] = [];
      for(var k=0; k < pp.length; k++){
         STATS.SCIENCE_LOCKED[protype][scitype][k] = k;
         STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[ pp[k].projectID ] = pp[k];
      }
    }
}


for(var j=0; j < SCIENCEUNIV_PROJECT_TYPES.length; j++){
  var protype = SCIENCEUNIV_PROJECT_TYPES[j];
  STATS.SCIENCE_LOCKED[protype] = [];
  var pp = STATICVAR_HOLDER.SCIENCE[protype]
  for(var k=0; k < pp.length; k++){
         STATS.SCIENCE_LOCKED[protype][k] = k;
         STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[ pp[k].projectID ] = pp[k];
  }
}





