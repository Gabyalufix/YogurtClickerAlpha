

var PROCTEXT = {

   LEADER_BASE:[["#RAND","King","Master","Magestrix","Mistress","Counsellor","Attorney","Minister","President","Prince","Queen","Regent",
                         "Priest","Priestess","Chairman","Speaker-to-Animals","Speaker","Voice","Voicebox","Larynx",
                         "Poobah","Chancellor","Vizier","Shah","Pope","Duke","Imperatrix","Sultan","Emperor"]],
   LEADER_PREFIX:[["#RAND","High ","High","Grand High ","Supreme ","Mega","Giga","Yotta","God-",""]],
   LEADER_PREFIXFULL:[["#GLOBAL.GET","LEADER_PREFIX"],["#RANDOR","0.25",["#GLOBAL.GET","LEADER_PREFIXFULL"],[""]]],
   LEADER_FULL:[["#GLOBAL.GET","LEADER_PREFIXFULL"],["#GLOBAL.GET","LEADER_BASE"]],

   SCRAMBLE_SYLLABLE:[["#RAND","da","fa","ga","ha","ja","ka","la","ma","na","pa","qua","ra","sa","ta","va","ya",
                              "di","fi","gi","hi","ji","ki","li","mi","ni","pi","qui","ri","si","ti","vi","yi",
                              "de","fe","ge","he","je","ke","le","me","ne","pe","que","re","se","te","ve","ye",
                              "dei","fei","gei","hei","jei","kei","lei","mei","nei","pei","quei","rei","sei","tei","vei","yei",
                              "dai","fai","gai","hai","jai","kai","lai","mai","nai","pai","quai","rai","sai","tai","vai","yai"]],
   SCRAMBLE_SYLLABLE_WORD:[["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#RANDOR","0.5",["#GLOBAL.GET","SCRAMBLE_SYLLABLE_WORD"],[""]]],
   SCRAMBLE_SYLLABLE_WORD_SHORT:[["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#RANDOR","0.25",["#GLOBAL.GET","SCRAMBLE_SYLLABLE_WORD_SHORT"],[""]]],
   SCRAMBLE_SYLLABLE_WORD_LONG:[["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#RANDOR","0.85",["#GLOBAL.GET","SCRAMBLE_SYLLABLE_WORD_LONG"],[""]]],
   NATION_NAME:["Augustus-1","Naovi"],
   
   
   
   STAR_NAME_BASE:[["#RAND","Draconis","Bharani","Canopus","Perseii","Castor","Celaeno","Cervantes","Athebyne","Asellus","Felis","Elnath","Ginan","Kornephoros","Libertas","Pherkad","Procyon","Velorum","Expecto","Rigel","Sagittarii","Leonis","Eridani","Canis","Aquarii","Cygnus","Orionis","Pegasi","Cassiopeiae","Tauri","Saggitae","Virginis","Delphini","Acquilae","Hydrae","Andromedae","Phoenicis","Pheonix","Fenix","Aiur","Vulcan","Dorsai","Arrakis","Dune","Aldaraan","Korhal","M6-117","Osiris","Caprica","Aerilon","Aquaria","Canceron","Gemenon","Leonis","Libran","Picon","Sagittaron","Scorpia","Tauron","Virgon","Kobol","Coruscant","Cyteen","We Made It","Crashland","Gallifrey","Gaia","Terra-2","Magrathea","Minerva","Amazonia","Nessus","Pern","Reverie","Daedalus","Penglai","DjinnsBane","Zeus","Ghost","BlueStar","RedStar","Kaldasa","Georgia","Redsun","Heinlein","RedPheonix","Murphy","Elphame","QinShi","Rubicon","Miranda","Burnham","Lux","Santo","Pelorum","Genge","Motherlode","Bernadette","Ariel","Valentine","Londunium","Bellerophon","Althion","Persephone","Greenleaf","Jubilee","Paquin","Silverfold","Lazerus","Harvest","Aesir","Valhalla","Meadow","Fury"]],
   STAR_NAME_PREFIX:[["#RANDOR","0.8",["#RAND","Alpha","Beta","Delta","Eta","Zeta","Epsilon","Gamma","Omicron"],[""]]],
   STAR_NAME_SUFFIX:[["#RAND"," I"," II"," III"," IV"," V"," VI"," VII"," IX"," XI"," Secundus"," Tertius"," Prime"," "," Patronum"]],
   STAR_NAME_SUFSUFFIX:[["#RANDOR","0.5",["#RAND","1","2","3","4","9","A","B","C","X","Y","Z","a","c","e","m"],[""]],["#RANDOR","0.5",["#GLOBAL.GET","STAR_NAME_SUFSUFFIX"],[""]]],
   STAR_NAME_FINALSUFFIX:[["#RANDOR","0.25",["#RAND","(i)","(ii)","(iii)"],[""]]],
   STAR_NAME:[["#RANDOR","0.7",["#GLOBAL.GET","STAR_NAME_PREFIX"],[""]]," ",
                               ["#GLOBAL.GET","STAR_NAME_BASE"],"",
                               ["#GLOBAL.GET","STAR_NAME_SUFFIX"],
                               ["#GLOBAL.GET","STAR_NAME_SUFSUFFIX"],
                               ["#GLOBAL.GET","STAR_NAME_FINALSUFFIX"]]
}

STATICVAR_HOLDER.PROCTEXT = PROCTEXT;

STATICVAR_HOLDER.CRAZY_WORDS = ["BAD","DIE","DIEDIEDIE","HATE","daisydaisy",
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
]



STATICVAR_HOLDER.MOODS_SANE = [
    ["Neutral","So-so","Ambivalent"], //0
    ["Optimistic","Hopeful","Cheerful","Merry","Cheerful"], //1
    ["Happy","Contented","Joyous","Merry","Jubilant"], //2
    ["Thoughtful","Pondering...","Upbeat"], //3
    ["Focused","Ecstatic","Contented","Alive"], //4
    ["Enraptured","Focused","Erudite"], //5
    ["Delighted","Learning","Reflective","Sophic"], //6
    ["Elated","Euphoric","Exhilarated","Knowing","Aware"], //7
    ["Wise","Perceptive","Contemplative","Sage","Cogitative"], //8
    ["Enlightened","Transcendant","Boundless"]] //9

STATICVAR_HOLDER.MOODS_INSANE = [
    [""], //0
    ["Distracted","Anxious","Jumpy","Nervous","Uncertain","Nervous","Twitchy","Unsure"], //1
    ["Scared","Upset","Angry"], //2
    ["Mad","Confused","Befuddled"], //3
    ["Drunk","Perplexed","Raging","Terrified"], //4
    ["Afraid","Angry","Hateful","Furious","Seething"], //5
    ["Delerious"], //6
    ["Demented"], //7
    ["PANICKED","Desperate","Terrified","Catatonic"], //8
    ["ERROR!","YOGURT!","BUG F%%% INSANE","WHY???"]] //9


STATICVAR_HOLDER.CRAZY_CONSOLE_WARNING = [
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

]

STATICVAR_HOLDER.DEATHSPIRAL_PRERESET_MESSAGES = [
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
]

STATICVAR_HOLDER.BSOD_PRERESET_MESSAGES = [
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
]

STATICVAR_HOLDER.RESET_PRERESET_MESSAGES = [
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
]












