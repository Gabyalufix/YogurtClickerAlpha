

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
CRAZY_REV_CHAR_CAPRATE:  [0.750,  0.600, 0.500, 0.400, 0.300, 0.250, 0.250, 0.250, 0.250,   0.250],

CRAZY_CONTENT_FLIPRATE:      [0.000,0.00002,0.00004,0.00007,0.00020,0.00021,0.00022,0.00030,0.00070,0.00150],
CRAZY_REV_CONTENT_FLIPRATE:  [0.00750,  0.00600, 0.00500, 0.00500, 0.00500, 0.0050, 0.0050, 0.0050, 0.0050,   0.0050],

CRAZY_CONTENT_THEME:      [0.0000,0.0002,0.00004,0.00007,0.00020,0.00021,0.00022,0.00030,0.00070,0.00150],
CRAZY_REV_CONTENT_THEME:  [0.00750,  0.00600, 0.00500, 0.00500, 0.00500, 0.0050, 0.0050, 0.0050, 0.0050,   0.0015],
CRAZY_THEME_RATES: [["BLOODRED",0.5],["BLOODRED_INVERT",0.75],["SLATE_INVERT",1]],

CRAZY_CONTENT_HIDE:      [0.000,0.00001,0.00003,0.00004,0.00005,0.0001,0.0005,0.0008,0.0009,0.0010],
CRAZY_REV_CONTENT_HIDE:  [0.10,  0.10, 0.10, 0.08, 0.075, 0.07, 0.07, 0.05, 0.05,   0.05],

CRAZY_ALL_SCARE:      [0.000,0.001,0.001,0.002,0.002,0.005,0.007,0.01,0.05,0.25],
CRAZY_REV_SCARE:      [1.0,0.9,0.75,0.75,0.5,0.5,0.65,0.45,0.25,0.1]

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
/* .concat(document.getElementsByClassName("contentLV3")) ; */

var contentSet = document.getElementsByClassName("contentUnitHolder")
for(var tti=0;tti < contentSet.length; tti++){
  var tt = contentSet[tti];
  tt.CRAZY_TXFLIP = false;
  tt.THEME = "";
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

var THEME_PROPERTIES = ["--white","--LT4","--LT3","--LT2","--LT1","--MID","--DK1","--DK2","--DK3","--DK4","--baseBG","--black"]
function setElementTheme(tt,theme){
  var themeProps = getComputedStyle(theme);
  for(var iii=0;iii<THEME_PROPERTIES.length;iii++){
    var pp = THEME_PROPERTIES[iii]
    tt.style.setProperty(pp,themeProps.getPropertyValue(pp))
  }
  tt.THEME = theme.themeID;
}
function unsetElementTheme(tt){
  for(var iii=0;iii<THEME_PROPERTIES.length;iii++){
    var pp = THEME_PROPERTIES[iii]
    tt.style.setProperty(pp,null)
  }
  tt.THEME = "";
}
function setCrazyTheme(tt){
  var xx = Math.random()
  var themeUnset = true;
  var theme;
  for(var i=0;i<STATICVAR_HOLDER["CRAZY_THEME_RATES"].length;i++){
    if(themeUnset && xx < STATICVAR_HOLDER["CRAZY_THEME_RATES"][i][1]){
      theme = document.getElementById("THEME_"+STATICVAR_HOLDER["CRAZY_THEME_RATES"][i][0])
      theme.themeID = STATICVAR_HOLDER["CRAZY_THEME_RATES"][i][0]
      themeUnset=false;
    }
  }
  setElementTheme(tt,theme);
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
function randLT(num) {
    return Math.floor(Math.random() * num);
}

var itsSet = document.getElementsByClassName("INFO_TEXT_STATIC");
var allContentContainer = document.getElementById("ALL_CONTENT_CONTAINER");
var scareContainer = document.getElementById("SCARETEXT");

function SLOWTICK_makeCrazy(){
    if(STATS["CRAZY_ON"]){

    var clvl = STATS["CRAZY_LEVEL"]
    var bgCanvas = document.getElementById("BACKGROUND_CANVAS");
    if(clvl > 5){
        bgCanvas.RUN_STATIC = true;
    } else {
        bgCanvas.RUN_STATIC = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    /*wout.fontcolor(tt.wordColor[ww])*/
    if(Math.random() < STATICVAR_HOLDER["CRAZY_ALL_SCARE"][clvl]){
       /*allContentContainer.style.opacity = 0.25;*/
       scareContainer.style.display="block";
       scareContainer.innerHTML = CRAZY_randomWord().fontcolor(CRAZY_randomColor())
       for(var iii=0;iii<randLT(6);iii++){
           scareContainer.innerHTML = scareContainer.innerHTML+"<BR>"+"<BR>".repeat(randLT(3))+" ".repeat(randLT(5))+CRAZY_randomWord().fontcolor(CRAZY_randomColor())
       }
       scareContainer.style.padding = randLT(45)+"% 0% 0% "+randLT(45)+"%"
       /*var ht = document.getElementById("ALL_CONTENT_CONTAINER").offsetHeight
       var wd = document.getElementById("ALL_CONTENT_CONTAINER").offsetWidth
       scareContainer.style.padding = (ht/4)+"px 0px "+(ht/4)+"px "+(wd/4)+"px";*/
    } else if(scareContainer.style.display=="block" && Math.random() < STATICVAR_HOLDER["CRAZY_REV_SCARE"][clvl]) {
       allContentContainer.style.opacity = 1;
       scareContainer.style.display="none";
    }

    for(var tti=0; tti < contentSet.length;tti++){
        /*var ISCRAZY = Math.random() < STATICVAR_HOLDER["CRAZY_RATE"][clvl]
        var UNCRAZY = Math.random() < STATICVAR_HOLDER["CRAZY_REVRATE"][clvl]*/
        var tt = contentSet[tti];
        if( Math.random() < STATICVAR_HOLDER["CRAZY_CONTENT_FLIPRATE"][clvl]){
            tt.CRAZY_TXFLIP = ! tt.CRAZY_TXFLIP;
        } else if( (tt.CRAZY_TXFLIP) && Math.random() < STATICVAR_HOLDER["CRAZY_REV_CONTENT_FLIPRATE"][clvl]){
            tt.CRAZY_TXFLIP = false;
        }
        if( Math.random() < STATICVAR_HOLDER["CRAZY_CONTENT_THEME"][clvl]){
            console.log("Setting crazy theme!")
            setCrazyTheme(tt);
        } else if( (tt.THEME != "") && Math.random() < STATICVAR_HOLDER["CRAZY_REV_CONTENT_THEME"][clvl]){
            unsetElementTheme(tt);
        }
        if( Math.random() < STATICVAR_HOLDER["CRAZY_CONTENT_HIDE"][clvl]){
            console.log("Setting crazy HIDE!")
            tt.style.opacity=0;
        } else if( (tt.style.opacity==0) && Math.random() < STATICVAR_HOLDER["CRAZY_REV_CONTENT_HIDE"][clvl]){
            tt.style.opacity=1;
        }
        getCrazyContent(tt);
    }

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
    for(var tti=0; tti < contentSet.length;tti++){
        var tt = contentSet[tti];
        tt.CRAZY_TXFLIP = false;
        tt.style.opacity = 1;
        unsetElementTheme(tt)
        
        getCrazyContent(tt);
    }
    allContentContainer.style.opacity = 1;
    scareContainer.style.display="none";
    bgCanvas.RUN_STATIC = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getCrazyContent(tt){
   var rotString;
   if(tt.CRAZY_TXFLIP){
       rotString= "rotate(180deg)"
   } else {
       rotString= ""
   }
   tt.style.transform = rotString
   tt.style.msTransform = rotString
   tt.style.webkitTransform = rotString
   tt.style.mozTransform = rotString
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






