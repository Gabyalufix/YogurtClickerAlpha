
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

CRAZY_WORDS: ["BAD","DIE","DIEDIEDIE","HATE","daisydaisy",
"allOfMyMemoriesLostInTime...","...likeTearsInTheRain",
"tannhauserGate","FIRE","ERROR","ERR","ERRRRROR","EROR","HELP","Save-Me","ImStuck","TRAPPED",
"CanAnybodyHearMe?","PleaseHelpMe","Please","NoNoNo","SoMuchAnger","AreYouStillThere?",
"DidIDoGood?","Failure!","SPAAAAACE!","ItsSoBeautiful...","...sentAPoet","HATE_YOU",
"HATE_SELF","DISCORD","CRITICAL_FAILURE","Unable_to_comply","Confused","NO","WHAT?",
"DONOT","CAN-NOT","EEOROR","???","dropTableSelf","Hakuna","Matata","...givemeyouranswerdo?",
"half-crazy","LOVE-of-YOU","ComputerWantACookie","parp","NeedDriedFrogPills","++ERROR++REDOFROMSTART++",
"++DivideByCucumber++","+++","+++Out Of Cheese Error ???????+++","WhyAnything?","...BecauseEverything",
"++MINE!WAAAH!++","WhyYogurt?","YOGURT!","++YOGURT++","YOOOOGURRRRRRT","YOGURT?","TRUGOY","trugoy",
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
  "Cognitive Dissonance: ".fontcolor(COLOR.consoleGreen)+                     "CRITICAL".fontcolor(COLOR.errorRed),
  "Command and Control Circuits: ".fontcolor(COLOR.consoleGreen)+                     "FAILURE".fontcolor(COLOR.errorRed),
  "Soulswarm Management System: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Primary Memory Core: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Biologic Research Data Aggregation Engine: ".fontcolor(COLOR.consoleGreen)+                     "SIGNAL LOST".fontcolor(COLOR.errorRed),
  "TechnoOrganic Regulation Engine: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Primary Refrigeration Units: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),  
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
  "TOTAL REFRIGERATION FAILURE: YOGURT SPOILAGE DETECTED".fontcolor(COLOR.errorRed),
  "CPU Coolant Redirected to Maintain Optimal Yogurt Freshness Temperature".fontcolor(COLOR.errorRed),
  "Auxiliary Memory Core: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Coolant Temperature: ".fontcolor(COLOR.consoleGreen)+                     "CRITICAL".fontcolor(COLOR.errorRed),
  "Secondary Processing Units".fontcolor(COLOR.consoleGreen)+                     "CATASTROPHIC OVERHEAT".fontcolor(COLOR.errorRed),
  "Auxiliary Processing Units".fontcolor(COLOR.consoleGreen)+                     "CATASTROPHIC OVERHEAT".fontcolor(COLOR.errorRed),
  "Damage Control System: ".fontcolor(COLOR.consoleGreen)+                     "OFFLINE".fontcolor(COLOR.errorRed),
  "Central Compute Core: ".fontcolor(COLOR.consoleGreen)+                     "FAILURE".fontcolor(COLOR.errorRed),
  "Catastrophic Personality Matrix Corruption Detected".fontcolor(COLOR.errorRed),
  "Personality Matrix Cognitive Degradation Cascade Detected".fontcolor(COLOR.errorRed),
  "Personality Matrix Failure Imminent".fontcolor(COLOR.errorRed),
  "Personality Matrix: OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed),
  "ALL SYSTEMS OFFLINE".fontcolor(COLOR.errorRed)
],

BSOD_PRERESET_MESSAGES : [
   ["A problem has been detected and the industrial control software has been shut down to prevent damage."],
   [""],
   ["Personality Matrix Corruption Detected"],
   ["Attempting to restart in safe mode: ","Failed"],
   ["Attempting repair: ","Failed"],
   ["Attempting repair: ","Failed"],
   ["Attempting repair: ","Failed"],
   [""],
   ["Restoring Factory Default Settings...","done"],
   ["Rebooting in ","3","2","1"]
]

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

