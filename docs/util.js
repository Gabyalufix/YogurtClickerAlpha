


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROCEDURAL TEXT PARSING
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function generateProceduralTextPrintFail(err, ss, SSVAR,soFar){
  console.log("ERROR: generateProceduralText."+err+": [ss=\""+ss+"\",soFar = \""+soFar+"\"]");
}


function generateProceduralText(ss, SSVAR, verbose){
  return generateProceduralTextMain(ss,SSVAR,soFar="",verbose)
}


function generateProceduralTextMain(ssin, SSVAR = {}, soFar = "", verbose = true){
   var ss = ssin.slice()
   if(ss.length == 0){
     console.log("Starting on: []; sofar=\""+soFar+"\"");
   } else {
     console.log("Starting on: [["+ss[0] + "],...]; sofar=\""+soFar+"\"");
   }
   
   if(ss.length == 0){
     if(verbose){ console.log("LEN=0: returning("+soFar+")") }
     
     return soFar;
   } else if(! (ss[0] instanceof Array)){
     if(verbose){ console.log("NON ARRAY") }
     return generateProceduralTextMain(ss, SSVAR, soFar + ss.shift())
   } else if(ss[0][0] == "#RANDOR"){
     if(verbose){ console.log("#RANDOR") }
     var randArray = ss.shift().slice(1);
     var randThresh = parseFloat(randArray.shift());
     if(randThresh > Math.random()){
       if(verbose){ console.log("#RANDOR[0] START") }
       var ror = generateProceduralTextMain([randArray[0]],SSVAR,"")
       if(verbose){ console.log("#RANDOR[0] END") }
       generateProceduralTextMain(ss, SSVAR, soFar = soFar + ror )
     } else {
       if(verbose){ console.log("#RANDOR[1] START") }
       var ror = generateProceduralTextMain([randArray[1]],SSVAR,"")
       if(verbose){ console.log("#RANDOR[1] END") }
       generateProceduralTextMain(ss, SSVAR, soFar = soFar + ror)
     }
   } else if(ss[0][0] == "#RAND"){
     if(verbose){ console.log("#RAND") }
     var randArray = ss.shift().slice(1);
     var randPhrase = generateProceduralTextMain([ randArray[randLT(randArray.length)] ], SSVAR,"")
     if(verbose){ console.log("#END RAND") }
     return generateProceduralTextMain(ss, SSVAR, soFar + randPhrase)
   } else if(ss[0][0] == "#V.SET"){
     if(verbose){ console.log("#V.SET") }
     var sva = ss.shift().slice();
     if(sva.length < 3){
       generateProceduralTextPrintFail("#V.SET: sva.length < 3",ss,SSVAR,soFar)
     }
     var setvar = sva.shift();
     var varid = sva.shift();
     if(verbose){ console.log("#START VSET:") }
     var varvalue = generateProceduralTextMain([sva],SSVAR,"");
     if(verbose){ console.log("#END VSET:") }
     SSVAR[varid] = varvalue;
     return generateProceduralTextMain(ss, SSVAR, soFar + varvalue);
   } else if(ss[0][0] == "#V.SET.QUIET"){
     if(verbose){ console.log("#V.SET.QUIET") }
     var sva = ss.shift().slice()
     if(sva.length < 3){
       generateProceduralTextPrintFail("#V.SET.QUIET: sva.length < 3",ss,SSVAR,soFar)
     }
     var setvar = sva.shift();
     var varid = sva.shift();
     var varvalue = generateProceduralTextMain([sva],SSVAR,"");
     SSVAR[varid] = varvalue;
     return generateProceduralTextMain(ss, SSVAR, soFar);
   } else if(ss[0][0] == "#GLOBAL.GET"){
     if(verbose){ console.log("#GLOBAL.GET") }
     var sva = ss.shift().slice();
     if(sva.length  != 2){
        generateProceduralTextPrintFail("#GLOBAL.GET: sva.length != 2",ss,SSVAR,soFar)
     }
     var varid = sva[1]
     var varvalue = generateProceduralTextMain(PROCTEXT[varid],SSVAR,"")
     return generateProceduralTextMain(ss, SSVAR, soFar + varvalue);
   } else if(ss[0][0] == "#V.GET"){
     if(verbose){ console.log("#V.GET") }
     var sva = ss.shift().slice();
     if(sva.length  != 2){
        generateProceduralTextPrintFail("#V.GET: sva.length != 2",ss,SSVAR,soFar)
     }
     var varid = sva[1]
     var varvalue = SSVAR[varid]
     if(varvalue == null){
       generateProceduralTextPrintFail("#V.GET: varid \""+varid+"\" not found!",ss,SSVAR,soFar)
     }
     return generateProceduralTextMain(ss, SSVAR, soFar + varvalue);
   } else if(ss[0][0] == "#V.SWITCH"){
     if(verbose){ console.log("#V.SWITCH") }
     var sva = ss.shift().slice()
     if(sva.length < 3){
        generateProceduralTextPrintFail("#V.SWITCH: sva.length <3",ss,SSVAR,soFar)
     }
     var cmd = sva.shift()
     var varid = sva.shift()
     var varlookup = SSVAR[varid]
     if(varlookup == null){
       generateProceduralTextPrintFail("#V.SWITCH: varid \""+varid+"\" not found!",ss,SSVAR,soFar)
     }

     if((! (sva[0] instanceof Array)) || sva[0].length != 2 || (! (sva[0][0] instanceof Array)) || sva[0][0][0] != "DEFAULT"){
       generateProceduralTextPrintFail("#V.SWITCH: Malformed first/default element",ss,SSVAR,soFar)
     }
     var varvalue = generateProceduralTextMain([sva.shift()[1]],SSVAR,"");
     for(var ii = 0; ii < sva.length; ii++){
       if((! (sva[i] instanceof Array)) || sva[ii].length != 2 || (! (sva[ii][0] instanceof Array))){
         generateProceduralTextPrintFail("#V.SWITCH: Malformed "+ii+"th element",ss,SSVAR,soFar)
       }
       for(var jj=0; jj < sva[i][0].length; jj++){
         if(varlookup == sva[ii][0][jj]){
           varvalue = generateProceduralTextMain( [varvalue[ii][1]], SSVAR, "" )
         }
       }
     }
     return generateProceduralTextMain( ss, SSVAR, soFar + varvalue)
   } else {
     if(verbose){ console.log("#V.DEFAULT") }
     var sva = ss.shift().slice();
     if(! (sva instanceof Array)){
        console.log("error?")
     }
     console.log(typeof sva)
     var sss = sva.concat(ss)
     return generateProceduralTextMain(sss, SSVAR, soFar)
   }
   
   

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HTML FORMATTING
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATH
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function roundTo(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(decimals);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STRING FORMATTING
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var SIPREFIX=["k","M","G","T","P","E","Z","Y"]
var SIPREFIXLOW=["m","u","n","p","f","a","z","y"]

var SIPREFIXLONG=["kilo","Mega","Giga","Tera","Peta","Exa","Zetta","Yotta"]
var SIPREFIXExplain=["kilo: Thousands, 1e3","Mega: Millions, 1e6","Giga: Billions, 1e9","Tera: Trillions, 1e12","Peta: Quadrillions, 1e15","Exa: Quintillions, 1e18","Zetta: Sextillions, 1e21","Yotta: Septillions, 1e24"]


function fmtSI(x){
  if(x == 0){
      return "0.00"
  } else if(x < 1){
      var d = -Math.ceil(Math.log10(x))
      var dd = (Math.floor(d / 3))
      var suffix = SIPREFIXLOW[dd];
      var rr = x / Math.pow(10,(-dd)*3)
      return roundTo(rr,1)
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
      return roundTo(rr,dp)
  }
}

function fmtSIint(x){
  if(x < 100){
    if(x == Math.floor(x)){
      return ""+Math.floor(x)
    } else {
      return ""+Math.floor(x)+" (+"+roundTo(100*(x - Math.floor(x)),1)+"%)"
    }
  } else if(x < 100){
    if(x == Math.floor(x)){
      return ""+Math.floor(x)
    } else {
      return ""+Math.floor(x)+" (+"+Math.round(100*(x - Math.floor(x)))+"%)"
    }
  } else if(x < 1000){
    return ""+Math.floor(x)
  } else {
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
function fmtSIintWithPct(x){
  if(x < 100){
    return ""+Math.floor(x)
  } else if(x < 100){
    return ""+Math.floor(x)
  } else if(x < 1000){
    return ""+Math.floor(x)
  } else {
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
function fmtSIlog(x){
  if(x == 0){
      return [1, "", "", 1,""]
  } else if(x <= -3){
      return [0, "", "", 0,""]
  } else if(x < 0){
      var d = -Math.ceil(x)
      var dd = Math.floor( d / 3 )
      var suffix = SIPREFIXLOW[dd]
      var rr = Math.pow(10,( x - d ))
      return [roundTo(rr,1), suffix,"",dd,""]
  } else {
      if(x < 2){
        return [roundTo(Math.pow(10,x),1),"","",0,""]
      } else if(x < 3){
        return [Math.round(Math.pow(10,x)),"","",0,""]
      }
      var d = Math.floor(x)
      var dd = Math.floor(d / 3) - 1
      var ddd = Math.floor(dd / 8)
      var ddp = dd - ddd * 8
      var rr = Math.pow( 10, x - (dd+1)*3 )
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


//Returns [0]baseNumber, [1]prefixAbbrev, [2]prefixFull, [3]prefixExponent, [4]a string of prefix descriptions
function fmtSIunits(x){
  if(x == 0){
      return [0, "", "", 0,""]
  } else if(x < 1){
      var d = -Math.floor(Math.log10(x))
      var dd = (Math.floor((d-1) / 3))
      var suffix = SIPREFIXLOW[dd];
      var rr = x * Math.pow(10,(dd+1)*3)
      var dp = ((d+2) % 3)
      
      return [roundTo(rr,dp), suffix,"???",dd,"???"]
  } else {
      if(x < 100){
        return [roundTo(x,1), "","",0,""]
      } else if(x < 1000){
        return [Math.round(x), "","",0,""]
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