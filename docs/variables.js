

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
CRAZY_REVRATE:[0.005,0.005,0.001,0.001,0.001,0.002,0.002,0.0030,0.0010,0.00005],

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
CRAZY_REV_CHAR_CAPRATE:  [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250]

}

//document.getElementsByClassName("INFO_TEXT_STATIC")[0].innerHTML
var itsSet = document.getElementsByClassName("INFO_TEXT_STATIC");
for(var tti=0;tti < itsSet.length; tti++){
    var tt = itsSet[tti];
    tt.ORIGINAL_PLAINTEXT = tt.innerHTML
    tt.CURRENT_PLAINTEXT = tt.innerHTML
    tt.CRAZY_FLIP = false;
    var words = tt.innerHTML.split(" ")
    tt.wordCt = words.length
    tt.wordFlip  = []
    tt.wordColor = []
    tt.wordSwap = []
    for(ww = 0; ww < words.length; ww++){
        tt.wordFlip[ww] = false
        tt.wordColor[ww] = ""
        tt.wordSwap[ww] = ""
    }
    tt.charSwap = []
    for(cc = 0; cc < tt.ORIGINAL_PLAINTEXT.length; cc++){
        tt.charSwap[cc] = ""
    }
}

function resetCrazyElement(tt){
    tt.CURRENT_PLAINTEXT = tt.ORIGINAL_PLAINTEXT
    tt.CRAZY_FLIP = false;
    for(ww = 0; ww < tt.wordCt; ww++){
        tt.wordFlip[ww] = false
        tt.wordColor[ww] = ""
        tt.wordSwap[ww] = ""
    }
    for(cc = 0; cc < tt.ORIGINAL_PLAINTEXT.length; cc++){
        tt.charSwap[cc] = ""
    }
    tt.innerHTML = getCrazyHTML(tt)
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function CRAZY_randomColor(){
    return STATICVAR_HOLDER["CRAZY_COLORS"][Math.floor(Math.random()*STATICVAR_HOLDER["CRAZY_COLORS"].length)]
}
function CRAZY_randomChar(){
    return STATICVAR_HOLDER["CRAZY_CHARS"][Math.floor(Math.random()*STATICVAR_HOLDER["CRAZY_CHARS"].length)]
}
function CRAZY_randomWord(){
    return STATICVAR_HOLDER["CRAZY_WORDS"][Math.floor(Math.random()*STATICVAR_HOLDER["CRAZY_WORDS"].length)]
}

function SLOWTICK_makeCrazy(){
    if(STATS["CRAZY_ON"]){

    var itsSet = document.getElementsByClassName("INFO_TEXT_STATIC");
    var clvl = STATS["CRAZY_LEVEL"]

    for(var tti=0;tti < itsSet.length; tti++){
        var ISCRAZY = Math.random() < STATICVAR_HOLDER["CRAZY_RATE"][clvl]
        var UNCRAZY = Math.random() < STATICVAR_HOLDER["CRAZY_REVRATE"][clvl]
        var tt = itsSet[tti];
        if( ISCRAZY && (!tt.CRAZY_FLIP) && Math.random() < STATICVAR_HOLDER["CRAZY_FLIPRATE"][clvl]){
            tt.CRAZY_FLIP = true;
        } else if( (tt.CRAZY_FLIP) && Math.random() < STATICVAR_HOLDER["CRAZY_REV_FLIPRATE"][clvl]){
            tt.CRAZY_FLIP = false;
        }
        var words = tt.CURRENT_PLAINTEXT.split(" ")
        var out = ""
        for(var ww = 0; ww < tt.wordCt; ww++){
           if( ISCRAZY && Math.random() < STATICVAR_HOLDER["CRAZY_WORD_FLIPRATE"][clvl]){
               tt.wordFlip[ww] = !tt.wordFlip[ww];
           } else if( UNCRAZY && (tt.wordFlip[ww]) && Math.random() < STATICVAR_HOLDER["CRAZY_REV_WORD_FLIPRATE"][clvl]){
               tt.wordFlip[ww] = false;
           }
           if( ISCRAZY && Math.random() < STATICVAR_HOLDER["CRAZY_WORD_COLORRATE"][clvl]){
               tt.wordColor[ww] = CRAZY_randomColor();
           } else if( UNCRAZY && (tt.wordColor[ww]) && Math.random() < STATICVAR_HOLDER["CRAZY_REV_WORD_COLORRATE"][clvl]){
               tt.wordColor[ww] = "";
           }
           if( ISCRAZY && Math.random() < STATICVAR_HOLDER["CRAZY_WORD_SWAPRATE"][clvl]){
               tt.wordSwap[ww] = CRAZY_randomWord()
           } else if( UNCRAZY && (tt.wordSwap[ww] != "") && Math.random() < STATICVAR_HOLDER["CRAZY_REV_WORD_SWAPRATE"][clvl]){
               tt.wordSwap[ww] = "";
           }
        }
        for(cc = 0; cc < tt.ORIGINAL_PLAINTEXT.length; cc++){
           if(tt.ORIGINAL_PLAINTEXT.charAt(cc) != " "){
               if( ISCRAZY && Math.random() < STATICVAR_HOLDER["CRAZY_CHAR_SWAPRATE"][clvl]){
                   tt.charSwap[cc] = CRAZY_randomChar()
               } else if( UNCRAZY && (tt.charSwap[cc] != "") && Math.random() < STATICVAR_HOLDER["CRAZY_REV_CHAR_SWAPRATE"][clvl]){
                   tt.charSwap[cc] = "";
               }
               if( ISCRAZY && (tt.charSwap[cc] == "") && Math.random() < STATICVAR_HOLDER["CRAZY_CHAR_CAPRATE"][clvl]){
                   tt.charSwap[cc] = swapCase(tt.ORIGINAL_PLAINTEXT.charAt(cc))
               } else if( UNCRAZY && Math.random() < STATICVAR_HOLDER["CRAZY_REV_CHAR_CAPRATE"][clvl] && tt.charSwap[cc] == swapCase(tt.ORIGINAL_PLAINTEXT.charAt(cc))){
                   tt.charSwap[cc] = "";
               }
           }
        }
        tt.innerHTML = getCrazyHTML(tt)
    }
    }
}
function swapCase(c){
  if(c == c.toUpperCase()){
    return c.toLowerCase()
  } else {
    return c.toUpperCase()
  }
}

function resetAllCrazy(){
    var itsSet = document.getElementsByClassName("INFO_TEXT_STATIC");
    for(var tti=0;tti < itsSet.length; tti++){
        var tt = itsSet[tti];
        resetCrazyElement(tt)
    }
}



function getCrazyHTML(tt){
    var out = tt.CURRENT_PLAINTEXT
    //if(tt.CRAZY_FLIP){
    //    out = flipText(out)
    //}
    for(cc = 0; cc < tt.ORIGINAL_PLAINTEXT.length; cc++){
        if(tt.charSwap[cc] != "" && tt.ORIGINAL_PLAINTEXT.charAt(cc) != " "){
            out = setCharAt(out,cc,tt.charSwap[cc])
        }
    }
    var currWords = out.split(" ")
    //console.log(out)
    var out = ""
    for(var ww = 0; ww < tt.wordCt; ww++){
        var wout = currWords[ww]
        if(tt.wordSwap[ww] != ""){
            wout = tt.wordSwap[ww]
        }
        if(tt.wordFlip[ww]){
            wout = flipText(wout)
        }
        if(tt.wordColor[ww] != ""){
            wout = wout.fontcolor(tt.wordColor[ww])
        }
        out = out +" "+ wout;
    }
    return out
}

function flipText(srcText) {
  var out = '';
  var chArray = srcText.split('');
  // upside-down text:
  var upsideHash = {
    'a': '\u0250',
    'b': 'q',
    'c': '\u0254',
    'd': 'p',
    'e': '\u01DD',
    'f': '\u025F',
    'g': '\u0183', //1D77'
    'h': '\u0265',
    'i': '\u0131', //1D09' '\u01C3' '\u0131'
    'j': '\u017F', //1D98' '\u0638'
    'k': '\u029E',
    'l': '\u05DF',
    'm': '\u026F',
    'n': 'u',
    'o': 'o',
    'p': 'd',
    'q': 'b',
    'r': '\u0279',
    's': 's',
    't': '\u0287',
    'u': 'n',
    'v': '\u028C',
    'w': '\u028D',
    'x': 'x',
    'y': '\u028E',
    'z': 'z',
    '(': ')',
    ')': '(',
    '{': '}',
    '}': '{',
    '[': ']',
    ']': '[',
    '<': '>',
    '>': '<',
    '0': '0',
    '1': '\u0196',
    '2': '\u01A7',
    '3': '\u0190',
    '4': '\u152D', // 056B'
    '5': 'S',
    '6': '9',
    '7': 'L',
    '8': '8',
    '9': '6',
    '?': '\u00BF',
    '\u00BF': '?',
    '!': '\u00A1',
    '\u00A1': '!',
    "\'": ',',
    ',': "\'",
    '.': '\u02D9',
    '_': '\u203E',
    ';': '\u061B',
    '"': '\u201E',
    "'": ',',
    '&': '\u214B'
  };
  out = '';
  ch = '';
  for( var i in chArray ) {
    ch = chArray[i].toLowerCase();
    if( upsideHash[ch] ) {
      out += upsideHash[ch];
    } else {
      out += ch;
    }
  }
  return out.split("").reverse().join("");
}






