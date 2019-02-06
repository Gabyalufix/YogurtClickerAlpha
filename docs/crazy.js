

var allContentContainer = document.getElementById("ALL_CONTENT_CONTAINER");
var scareContainer = document.getElementById("SCARETEXT");
var canvasMask = document.getElementById("BACKGROUND_STATIC");
var fgCanvas = document.getElementById("FOREGROUND_CANVAS")
var fgMask = document.getElementById("FOREGROUND_STATIC")
var deathNoticeContainer = document.getElementById("DEATH_NOTICE_CONTAINER")

fgCanvas.style.opacity = 0;
canvasMask.style.opacity = 1;

for(var tti=0;tti < contentSet.length; tti++){
  var tt = contentSet[tti];
  tt.CRAZY_TXFLIP = false;
  tt.THEME = "";
}


STATS["DEATH_SPIRAL"] = 0;
STATS["DEATH_SPIRALING"] = false;
STATS["FINAL_SPIRAL"] = 0;

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

/*
*****************************************************************************************
********** MAKECRAZY

CRAZY_CONSOLE_WARNING_RATE:
CRAZY_CONSOLE_WARNING :    
*/
STATS["currSequence"] = "normal"

STATS["nextMessageTime"] = 0;
STATS["finalMessageIdx"] = 0;

function finalSpiral(){
   var currtime = Date.now();
   if(currtime > STATS["nextMessageTime"]){
     if(STATS["finalMessageIdx"] < 6){
       STATS["nextMessageTime"] = Date.now() + 100
     } else {
       STATS["nextMessageTime"] = Date.now() + Math.random() * (3000 - (STATS["finalMessageIdx"]/60))
     }
     deathNoticeContainer.innerHTML = "<SPAN> > "+ STATICVAR_HOLDER["DEATHSPIRAL_PRERESET_MESSAGES"][STATS["finalMessageIdx"]]+"</SPAN>" + deathNoticeContainer.innerHTML
     printlnToAiConsole( STATICVAR_HOLDER["DEATHSPIRAL_PRERESET_MESSAGES"][STATS["finalMessageIdx"]] );
     STATS["finalMessageIdx"] = STATS["finalMessageIdx"] + 1;
     console.log("Final Spiral: "+STATS["finalMessageIdx"]);
   }
   if(STATS["finalMessageIdx"] > STATICVAR_HOLDER["DEATHSPIRAL_PRERESET_MESSAGES"].length){
     STATS["currSequence"] = "bsodSequence"
     console.log("ENTERING CRASH SEQUENCE")
     STATS["finalMessageIdx"] = 0;
     STATS["nextMessageTime"] = 0;
     deathNoticeContainer.innerHTML = "";
     deathNoticeContainer.style["background-color"] = COLOR["bsodBlue"];
     deathNoticeContainer.style.color = COLOR["bsodText"];
   }
}

STATS["finalMessageJdx"] = 0

function bsodSequence(){
   /*deathNoticeContainer.style["flex-direction"] = "column";*/
   var currtime = Date.now();
   if(currtime > STATS["nextMessageTime"]){
     STATS["nextMessageTime"] = Date.now() + 2000;
     var curr = STATICVAR_HOLDER["BSOD_PRERESET_MESSAGES"][STATS["finalMessageIdx"]]
     if( curr instanceof Array){
       var bsodElemId = "BSOD_SEQUENCE_"+STATS["finalMessageIdx"]
       if(STATS["finalMessageJdx"] == 0){
         deathNoticeContainer.innerHTML = "<SPAN id=\""+bsodElemId+"\"> "+"</SPAN>" + deathNoticeContainer.innerHTML
         printlnToAiConsole("")
       }
       var bsodElem = document.getElementById(bsodElemId);
       bsodElem.innerHTML = bsodElem.innerHTML + curr[ STATS["finalMessageJdx"] ];
       printToAiConsole( curr[ STATS["finalMessageJdx"] ] );
       if(STATS["finalMessageJdx"] >= curr.length - 1 ){
         STATS["finalMessageJdx"] = 0;
         STATS["finalMessageIdx"] = STATS["finalMessageIdx"] + 1;
       } else {
         STATS["finalMessageJdx"] = STATS["finalMessageJdx"] + 1;
       }
     } else {
       deathNoticeContainer.innerHTML = "<SPAN id=\""+bsodElemId+"\"> "+curr+"</SPAN>" + deathNoticeContainer.innerHTML
       STATS["finalMessageIdx"] = STATS["finalMessageIdx"] + 1;
     }
   }
   if(STATS["finalMessageIdx"] >  STATICVAR_HOLDER["BSOD_PRERESET_MESSAGES"].length){
      STATS["CRAZY_LEVEL"] = 0;
      document.getElementById("CHEAT_LESSCRAZY").disabled = true;
      document.getElementById("CHEAT_MORECRAZY").disabled = false;
      STATS["currSequence"] = "resetSequence"
      STATS["finalMessageJdx"] = 0;
      STATS["finalMessageIdx"] = 0;
      STATS["nextMessageTime"] = 0;
      deathNoticeContainer.style["pointer-events"] = "none";
      STATS["DEATH_SPIRAL"] = 0;
      
      resetAllCrazy();
   }
}
function resetSequence(){
   var currtime = Date.now();
   if(currtime > STATS["nextMessageTime"]){
     printlnToAiConsole(STATICVAR_HOLDER["RESET_PRERESET_MESSAGES"][STATS["finalMessageIdx"]])
     STATS["nextMessageTime"] = Date.now() + 1250;
     STATS["finalMessageIdx"] = STATS["finalMessageIdx"] + 1;
   }
   if(STATS["finalMessageIdx"] >=  STATICVAR_HOLDER["RESET_PRERESET_MESSAGES"].length){
     STATS["currSequence"] = "normal"
     STATS["finalMessageIdx"] = 0;
     STATS["nextMessageTime"] = 0;
   }
}
function SLOWTICK_makeCrazy(GAME){
   if(GAME.STATS["currSequence"] == "normal"){
     SLOWTICK_makeCrazyHelper(GAME)
   } else if(GAME.STATS["currSequence"] == "finalSpiral"){
     finalSpiral();
   } else if(GAME.STATS["currSequence"] == "bsodSequence"){
     bsodSequence()
   } else if(GAME.STATS["currSequence"] == "resetSequence"){
     resetSequence()
   } else {
     console.log("ERROR: IMPOSSIBLE STATE!");
   }
}
var deathSpiralStart = 0;
function SLOWTICK_makeCrazyHelper(GAME){
    if(GAME.STATS["CRAZY_ON"]){
    var clvl = GAME.STATS["CRAZY_LEVEL"]

    if( Math.random() < 0.025 || STATS["MOOD"] == ""){
      if(clvl <= 0){
        var moodChoices = GAME.STATICVAR_HOLDER["MOODS_SANE"][- clvl ]
        GAME.STATS["MOOD"] = moodChoices[Math.floor(Math.random()*moodChoices.length)]
      } else {
        var moodChoices = GAME.STATICVAR_HOLDER["MOODS_INSANE"][ clvl ]
        GAME.STATS["MOOD"] = moodChoices[Math.floor(Math.random()*moodChoices.length)]
      }
    }

    
    if(Math.random() < GAME.STATICVAR_HOLDER["CRAZY_CONSOLE_WARNING_RATE"][clvl]){
      var randOffset = Math.random();
      var randThresh = 0.5;
      var randIdx = clvl
      for(var i=0;i<clvl-1;i++){
        if(randOffset > 1 - randThresh){
          randIdx = randIdx - 1;
        }
        randThresh = randThresh / 2;
      }
      var consoleWarn = GAME.STATICVAR_HOLDER["CRAZY_CONSOLE_WARNING"][randIdx][ randLT( GAME.STATICVAR_HOLDER["CRAZY_CONSOLE_WARNING"][randIdx].length ) ]
      /*console.log("printing warn");*/
      printlnToAiConsole(scrambleString(consoleWarn));
    }
    
    if(clvl == 9){
       if(deathSpiralStart == 0){
          deathSpiralStart = Date.now();
       }
       var deathSpiralBoost = (GAME.STATS["DEATH_SPIRAL"]+1)*((GAME.STATICVAR_HOLDER["DEATH_SPIRAL_COUNTDOWN_SEC"] / (100)) / 100)
       GAME.STATS["DEATH_SPIRAL"] = GAME.STATS["DEATH_SPIRAL"] + deathSpiralBoost
       /*console.log("boost: "+deathSpiralBoost+ " / "+STATS["DEATH_SPIRAL"]+" (time:"+((Date.now()-deathSpiralStart)/1000)+"s)");*/
       GAME.STATS["DEATH_SPIRALING"] = true;
    } else if(STATS["DEATH_SPIRAL"] > 0){
       GAME.STATS["DEATH_SPIRAL"] = Math.max(GAME.STATS["DEATH_SPIRAL"] - 0.1,0)
    }
    
    var bgCanvas = GAME.bgCanvas;
    if(clvl > 4){
        bgCanvas.RUN_STATIC = true;
    } else {
        bgCanvas.RUN_STATIC = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    var currOpacity = parseFloat(canvasMask.style.opacity)
    if(currOpacity > GAME.STATICVAR_HOLDER["CRAZY_TARGET_BGTRANS"][clvl] && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_WORSE_BGTRANS"][clvl]){
      /*console.log("WORSE");*/
      if(currOpacity + 0.1 < GAME.STATICVAR_HOLDER["CRAZY_TARGET_BGTRANS"][clvl]){
        canvasMask.style.opacity = (currOpacity - 0.04)
      } else {
        canvasMask.style.opacity = (currOpacity - 0.01)
      }
    } else if(currOpacity < GAME.STATICVAR_HOLDER["CRAZY_TARGET_BGTRANS"][clvl] && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_BETTER_BGTRANS"][clvl]){
      /*console.log("BETTER");*/
      canvasMask.style.opacity = (currOpacity + 0.01)
    }
    var fgOpacity = parseFloat(fgCanvas.style.opacity)
    if(GAME.STATS["DEATH_SPIRAL"] > 0 && GAME.STATS["DEATH_SPIRAL"]<100){
      fgCanvas.style.opacity = Math.max( GAME.STATS["DEATH_SPIRAL"] / 100,fgCanvas.style.opacity)
      fgMask.style.opacity = GAME.STATS["DEATH_SPIRAL"] / 100
      /*if(STATS["DEATH_SPIRAL"]>90){
        var finalPreIdx = Math.floor(STATS["DEATH_SPIRAL"]-90);
        if(finalPreIdx > STATS["FINAL_SPIRAL"]){
          deathNoticeContainer.innerHTML = "<SPAN> > "+ STATICVAR_HOLDER["DEATHSPIRAL_PRERESET_MESSAGES"][finalPreIdx]+"</SPAN>" + deathNoticeContainer.innerHTML
          STATS["FINAL_SPIRAL"] = finalPreIdx;
        }
        deathNoticeContainer.style.opacity = (STATS["DEATH_SPIRAL"]-90) / 10
      }*/
      
    } else if(GAME.STATS["DEATH_SPIRAL"]>100){
      GAME.STATS["currSequence"] = "finalSpiral"    
      deathNoticeContainer.style.opacity = 1.0
      deathNoticeContainer.style["pointer-events"] = "auto"
      console.log("ENTERING FINAL DEATH SPIRAL")
      /*if(STATS["DEATH_SPIRAL"]>110){
         STATS["CRAZY_LEVEL"] = 0;
         document.getElementById("CHEAT_LESSCRAZY").disable = true;
         document.getElementById("CHEAT_MORECRAZY").disable = false;
         resetAllCrazy();
      }*/
    } else if(fgOpacity < GAME.STATICVAR_HOLDER["CRAZY_TARGET_FGTRANS"][clvl] && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_WORSE_FGTRANS"][clvl]){
      fgCanvas.style.opacity = (fgOpacity + 0.01)
    } else if(fgOpacity > GAME.STATICVAR_HOLDER["CRAZY_TARGET_FGTRANS"][clvl] && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_BETTER_FGTRANS"][clvl]){
      fgCanvas.style.opacity = (fgOpacity - 0.01)
    }
    
    /*wout.fontcolor(tt.wordColor[ww])*/
    if(STATS["DEATH_SPIRAL"] < 50 && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_ALL_SCARE"][clvl]){
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
    } else if(scareContainer.style.display=="block" && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_SCARE"][clvl]) {
       allContentContainer.style.opacity = 1;
       scareContainer.style.display="none";
    }

    for(var tti=0; tti < contentSet.length;tti++){
        /*var ISCRAZY = Math.random() < STATICVAR_HOLDER["CRAZY_RATE"][clvl]
        var UNCRAZY = Math.random() < STATICVAR_HOLDER["CRAZY_REVRATE"][clvl]*/
        var tt = contentSet[tti];
        if( Math.random() < GAME.STATICVAR_HOLDER["CRAZY_CONTENT_FLIPRATE"][clvl]){
            tt.CRAZY_TXFLIP = ! tt.CRAZY_TXFLIP;
        } else if( (tt.CRAZY_TXFLIP) && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_CONTENT_FLIPRATE"][clvl]){
            tt.CRAZY_TXFLIP = false;
        }
        if( Math.random() < GAME.STATICVAR_HOLDER["CRAZY_CONTENT_THEME"][clvl]){
            /*console.log("Setting crazy theme!")*/
            setCrazyTheme(tt);
        } else if( (tt.THEME != "") && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_CONTENT_THEME"][clvl]){
            unsetElementTheme(tt);
        }
        if( Math.random() < GAME.STATICVAR_HOLDER["CRAZY_CONTENT_HIDE"][clvl]){
            /*console.log("Setting crazy HIDE!")*/
            tt.style.opacity=0;
        } else if( (tt.style.opacity==0) && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_CONTENT_HIDE"][clvl]){
            tt.style.opacity=1;
        }
        getCrazyContent(tt);
    }

    for(var tti=0;tti < GAME.itsSet.length; tti++){
        var ISCRAZY = Math.random() < GAME.STATICVAR_HOLDER["CRAZY_RATE"][clvl]
        var UNCRAZY = Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REVRATE"][clvl]
        var tt = GAME.itsSet[tti];
        if( ISCRAZY && (!tt.CRAZY_FLIP) && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_FLIPRATE"][clvl]){
            tt.CRAZY_FLIP = true;
        } else if( (tt.CRAZY_FLIP) && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_FLIPRATE"][clvl]){
            tt.CRAZY_FLIP = false;
        }
        var words = tt.CURRENT_PLAINTEXT.split(" ")
        var out = ""
        for(var ww = 0; ww < tt.wordCt; ww++){
           if( ISCRAZY && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_WORD_FLIPRATE"][clvl]){
               tt.wordFlip[ww] = !tt.wordFlip[ww];
           } else if( UNCRAZY && (tt.wordFlip[ww]) && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_WORD_FLIPRATE"][clvl]){
               tt.wordFlip[ww] = false;
           }
           if( ISCRAZY && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_WORD_COLORRATE"][clvl]){
               tt.wordColor[ww] = CRAZY_randomColor();
           } else if( UNCRAZY && (tt.wordColor[ww]) && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_WORD_COLORRATE"][clvl]){
               tt.wordColor[ww] = "";
           }
           if( ISCRAZY && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_WORD_SWAPRATE"][clvl]){
               tt.wordSwap[ww] = CRAZY_randomWord()
           } else if( UNCRAZY && (tt.wordSwap[ww] != "") && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_WORD_SWAPRATE"][clvl]){
               tt.wordSwap[ww] = "";
           }
        }
        for(cc = 0; cc < tt.ORIGINAL_PLAINTEXT.length; cc++){
           if(tt.ORIGINAL_PLAINTEXT.charAt(cc) != " "){
               if( ISCRAZY && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_CHAR_SWAPRATE"][clvl]){
                   tt.charSwap[cc] = CRAZY_randomChar()
               } else if( UNCRAZY && (tt.charSwap[cc] != "") && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_CHAR_SWAPRATE"][clvl]){
                   tt.charSwap[cc] = "";
               }
               if( ISCRAZY && (tt.charSwap[cc] == "") && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_CHAR_CAPRATE"][clvl]){
                   tt.charSwap[cc] = swapCase(tt.ORIGINAL_PLAINTEXT.charAt(cc))
               } else if( UNCRAZY && Math.random() < GAME.STATICVAR_HOLDER["CRAZY_REV_CHAR_CAPRATE"][clvl] && tt.charSwap[cc] == swapCase(tt.ORIGINAL_PLAINTEXT.charAt(cc))){
                   tt.charSwap[cc] = "";
               }
           }
        }
        tt.innerHTML = getCrazyHTML(tt)
    }
    }
}


function scrambleString(s){
        var clvl = STATS["CRAZY_LEVEL"]
        var words = s.split(" ")
        var out = ""
        for(var ww = 0; ww < words.length; ww++){
           var curr = words[ww]
           if( Math.random() < STATICVAR_HOLDER["CRAZY_WORD_SWAPRATE"][clvl]){
               curr = CRAZY_randomWord()
           }
           if( Math.random() < STATICVAR_HOLDER["CRAZY_WORD_FLIPRATE"][clvl]){
               curr = flipText(curr);
           }
           if( Math.random() < STATICVAR_HOLDER["CRAZY_WORD_COLORRATE"][clvl] / 2){
               curr = curr.fontcolor( CRAZY_randomColor() )
           }
           out = out + " " + curr;
        }
        
        for(cc = 0; cc < out.length; cc++){
           if(out.charAt(cc) != " "){
               if( Math.random() < STATICVAR_HOLDER["CRAZY_CHAR_SWAPRATE"][clvl]){
                   out = setCharAt(out,cc,CRAZY_randomChar())
               } else if( Math.random() < STATICVAR_HOLDER["CRAZY_CHAR_CAPRATE"][clvl]){
                   out = setCharAt(out,cc,swapCase( out.charAt(cc) ) )
               }
           }
        }
    return out

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
    canvasMask.style.opacity = 1.0;
    fgCanvas.style.opacity = 0.0;
    fgMask.style.opacity = 0.0;
    deathNoticeContainer.style.opacity = 0.0;
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


/*

generateProceduralText(PROCTEXT["procdata_test1"])


*/


function testScrap(){
   var bsodMsgs = STATICVAR_HOLDER["BSOD_PRERESET_MESSAGES"]
   deathNoticeContainer.innerHTML = ""

   deathNoticeContainer.style.opacity=1  
   deathNoticeContainer.style.color="white"  
   deathNoticeContainer.style["white-space"] = "nowrap"
   deathNoticeContainer.style["display"] = "inline-block"
   deathNoticeContainer.style["padding"] = "50px"
   deathNoticeContainer.style["width"] = "90%"
   var bsodTextDiv = document.createElement('div')
   bsodTextDiv.id = "bsodTextDiv";
   deathNoticeContainer.appendChild(bsodTextDiv)
   for(var i=0;i<bsodMsgs.length;i++){
     var currSpan = document.createElement('span');
     currSpan.innerHTML = bsodMsgs[i] + "<BR>"
     bsodTextDiv.appendChild(currSpan)
   }
   
   
   fitty("#bsodTextDiv",minSize=8,multiLine=true)
   fitty("#bsodTextDiv",minSize=8,multiLine=true)
   fitty("#bsodTextDiv",minSize=8,multiLine=true)


   var ttt = document.createElement('span')
   ttt.id = "bsodTextLine";
   ttt.innerHTML = "HELLO I AM SOME TEXT"
   deathNoticeContainer.insertBefore(ttt,deathNoticeContainer.childNodes[0])
   document.getElementById("bsodTextLine")
   
   document.getElementById("DEATH_NOTICE")
   
}