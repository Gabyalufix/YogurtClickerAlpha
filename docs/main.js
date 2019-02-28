


function lockSlider(sliderID){
    var ss = document.getElementById(sliderID);
    ss.value = 0;
    ss.lockbox.checked = true;
    
}
function unlockSlider(sliderID){
    
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
   var ccc = fmtSI(cc[0][1]);
   var costString = ccc +"B "+ STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"][cc[0][0]];
   if(cc.length > 1){
     for(var i=1; i<cc.length;i++){
       var c3 = fmtSI(cc[i][1]);
       costString = costString + delim + c3 +"B "+ STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"][cc[i][0]];
     }
   }
   return costString;
}
GAME_GLOBAL.makeCostAbbriv = makeCostAbbriv

function makeCostString(cc,delim){
   var ccc = fmtSI(cc[0][1]);
   var costString = ccc +"B "+ STATICVAR_HOLDER["INVENTORY_DESC_FULL"][cc[0][0]];
   if(cc.length > 1){
     for(var i=1; i<cc.length;i++){
       var c3 = fmtSI(cc[i][1]);
       costString = costString + delim + c3 +"B "+ STATICVAR_HOLDER["INVENTORY_DESC_FULL"][cc[i][0]];
     }
   }
   return costString;
}
GAME_GLOBAL.makeCostString = makeCostString

function makeColoredScienceOLD(ss, sciDescSet, isLT = false){
    console.log("   coloring: "+ss[0] +" / "+ss[1]);
    var out = fmtSI(ss[1]) +"B "+sciDescSet[ss[0]];
    if(ss[0].startsWith("bio")){
        console.log("   BIO color found for: "+ss[0])
        if(isLT){
            console.log("    LT!")
            out = out.fontcolor("var(--bioTextLT)")
        } else {
            console.log("    DK!")
            out = out.fontcolor("var(--bioTextDK)")
        }
    } else if(ss[0].startsWith("eng")){
        console.log("   ENG color found for: "+ss[0])
        if(isLT){
            out = out.fontcolor("var(--engTextLT)")
        } else {
            out = out.fontcolor("var(--engTextDK)")
        }
    } else if(ss[0].startsWith("psy")){
        console.log("   PSY color found for: "+ss[0])
        if(isLT){
            out = out.fontcolor("var(--psyTextLT)")
        } else {
            out = out.fontcolor("var(--psyTextDK)")
        }
    } else {
        console.log("   No color found for: "+ss[0])
    }
    return out;
}

function getScienceColorClass(ss){
    if(ss.startsWith("bio")){
        //console.log("   BIO color found for: "+ss[0])
        if(isLT){
            //console.log("    LT!")
            return "THEME_Bio SCICOST_TEXT_LT"
        } else {
            //console.log("    DK!")
            return "THEME_Bio SCICOST_TEXT_DK"
        }
    } else if(ss.startsWith("eng")){
        //console.log("   ENG color found for: "+ss[0])
        if(isLT){
            return  "THEME_Bot SCICOST_TEXT_LT"
        } else {
            return "THEME_Bot SCICOST_TEXT_DK"
        }
    } else if(ss.startsWith("psy")){
        //console.log("   PSY color found for: "+ss[0])
        if(isLT){
           return  "THEME_Psy SCICOST_TEXT_LT"
        } else {
           return  "THEME_Psy SCICOST_TEXT_DK"
        }
    } else {
        console.log("   No color found for: "+ss[0])
    }
    return out;
}

function makeColoredScience(ss, sciDescSet, isLT = false){
    //console.log("   coloring: "+ss[0] +" / "+ss[1]);
    var out = fmtSI(ss[1]) +"B "+sciDescSet[ss[0]];
    if(ss[0].startsWith("bio")){
        //console.log("   BIO color found for: "+ss[0])
        if(isLT){
            //console.log("    LT!")
            out = "<SPAN class=\"THEME_Bio SCICOST_TEXT_LT\">"+out+"</SPAN>"
        } else {
            //console.log("    DK!")
            out = "<SPAN class=\"THEME_Bio SCICOST_TEXT_DK\">"+out+"</SPAN>"
        }
    } else if(ss[0].startsWith("eng")){
        //console.log("   ENG color found for: "+ss[0])
        if(isLT){
            out = "<SPAN class=\"THEME_Bot SCICOST_TEXT_LT\">"+out+"</SPAN>"
        } else {
            out = "<SPAN class=\"THEME_Bot SCICOST_TEXT_DK\">"+out+"</SPAN>"
        }
    } else if(ss[0].startsWith("psy")){
        //console.log("   PSY color found for: "+ss[0])
        if(isLT){
            out = "<SPAN class=\"THEME_Psy SCICOST_TEXT_LT\">"+out+"</SPAN>"
        } else {
            out = "<SPAN class=\"THEME_Psy SCICOST_TEXT_DK\">"+out+"</SPAN>"
        }
    } else {
        console.log("   No color found for: "+ss[0])
    }
    return out;
}


function makeAdvCostString(cc,delim1=", ",delim2=",<BR>", compressThresh = 2, isLT=false){
    //console.log("advString input: "+cc);
   var costDesc = STATICVAR_HOLDER["INVENTORY_DESC_FULL"]
   var delim = delim2;
   if(cc.length > compressThresh){
     costDesc = STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]
     delim=delim1;
   }
   var out = makeColoredScience(cc[0],costDesc, isLT);
   if(cc.length > 1){
      for(var i=1; i<cc.length;i++){
          out = out + delim + makeColoredScience(cc[i],costDesc,isLT);
      }
   }
   //console.log("advString: "+out);
   return out;
}
GAME_GLOBAL.makeAdvCostString = makeAdvCostString

GAME_GLOBAL.makeFittedCostString = makeFittedCostString

function makeFittedCostString(cc,delim1=", ",delim2=",<BR>"){
   if(cc.length <= 2){
     return makeCostString(cc,delim2)
   } else {
     return makeCostAbbriv(cc,delim1)
   }
}
GAME_GLOBAL.makeFittedCostString = makeFittedCostString

/*

document.getElementById("wfUPGRADE_Bot_COST")

*/
///////////////////////////////
////Initialize starting stats


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
INVENTORY["DEEP"+"_SCIENCE_TOTAL"]  = 0
INVENTORY["SUPER"+"_SCIENCE_TOTAL"] = 0



//Productivity: <span id="green_PRODUCTIVITY_DISPLAY"></span>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PERCENT SLIDERS:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//PRODUCTIVITY_STATS = ["bot","psy","green","bio","eng","psy","think","soul"]
//STATS["PRODUCTIVITY_RATING"] = {}
//STATS["PRODUCTIVITY_MULT"] = {}

//function fmtSIunits(x){
//Returns [0]baseNumber, [1]prefixAbbrev, [2]prefixFull, [3]prefixExponent, [4]a string of prefix descriptions



function updatePctSliderDisplayHelper_OLD(ss){
  var fid = ss.fid;
  var vv = ss.value
  var tt = (vv / 10000) * this.STATS["PRODUCTIVITY_RATING"][fid] * this.STATS["PRODUCTIVITY_MULT"][fid]
  var fmtsi = fmtSIunits(tt)
  ss.sdisplay.textContent = (vv / 100).toFixed(1) + "% ["+fmtsi[0]
  ss.sdisplayUnits.textContent = fmtsi[1]+this.PCTSLIDER_DISPLAYUNITS[fid]+"]"
  //ss.sdisplayDiv.title = this.STATICVAR_HOLDER.PCTSLIDER_DISPLAYUNITSEXPLAIN[fid]+"\n"+fmtsi[4]
}

function updatePctSliderDisplayHelper(ss){
      var fid = ss.fid;
      var vv = ss.value
      var tt = (vv / 10000) * this.STATS["PRODUCTIVITY_RATING"][fid] * this.STATS["PRODUCTIVITY_MULT"][fid]
      var fmtsi = fmtSIorFrac(tt / this.STATICVAR_HOLDER.PCTSLIDER_DISPLAYUNITFACTOR[fid])
      ss.sdisplay.textContent = (vv / 100).toFixed(1) + "% ["+fmtsi+this.PCTSLIDER_DISPLAYUNITS[fid]+"]";

      /*if(ss.sdisplay.FILLBAR != null){
          var makeAnonFunc = function(){
                      var vpct = vv / 10000;
                      var wd = ss.parentElement.offsetWidth
                      return function(){

                      }
          }
          var anonFunc = makeAnonFunc();
          window.requestAnimationFrame(anonFunc);
      }*/

}

//this.STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR

function updatePctSliderDisplay(ss){
  var fid = ss.fid;
  for(var j = 0; j < ss.othrArray.length; j++){
    this.updatePctSliderDisplayHelper(ss.othrArray[j])
  }
  this.updatePctSliderDisplayHelper(ss)
  //PCTSLIDER_DISPLAYUNITS[fid]+"]"
}

GAME_GLOBAL.updatePctSliderDisplay=updatePctSliderDisplay;
GAME_GLOBAL.updatePctSliderDisplayHelper=updatePctSliderDisplayHelper;

function adjustSlider(vv){
    this.onDownMultiSliderPct(this);
    this.value = vv;
    this.onInputMultiSliderPct(this);
    this.value = vv;
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
      this.GAME.updatePctSliderDisplay(ss)
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

//ELEMS.SLIDERS_WITH_FILLBAR = [];

for(var sfi = 0; sfi < PCTSLIDER_FIELDS.length; sfi++){
    var fid = PCTSLIDER_FIELDS[sfi]
    var fct = PCTSLIDER_SUBFIELDCT[sfi]
    var check_elem = []
    var display_elem = []
    var displayUnits_elem = []
    var displayDiv_elem = []
    var slider_elem = []
    for(var i = 0; i < fct; i++){
         STATS["PRODUCTIVITY_MULT"][fid+"_"+i] = 1;
         STATS["WASTERATE_MULT"][fid+"_"+i] = 1;
         STATS["ENERGYRATE_MULT"][fid+"_"+i] = 1;
         //console.log("1: "+fid+"SliderCheck"+(i+1))
         slider_elem[i] = document.getElementById(fid+"SliderPct"+(i+1));
         check_elem[i] = document.getElementById(fid+"SliderCheck"+(i+1));
         display_elem[i] = document.getElementById(fid+"SliderDisplayPct"+(i+1));
         displayUnits_elem[i] = document.getElementById(fid+"SliderDisplayPct"+(i+1)+"_UNITS");
         displayDiv_elem[i] = document.getElementById(fid+"SliderDisplayPct"+(i+1)+"_DIV");
         display_elem[i].PROD = document.getElementById(fid+"SliderDisplayPct"+(i+1)+"_PROD");
         display_elem[i].PRODINPUT = document.getElementById(fid+"SliderDisplayPct"+(i+1)+"_PRODINPUT");
         display_elem[i].PRODPOWER = document.getElementById(fid+"SliderDisplayPct"+(i+1)+"_PRODPOWER");
         //display_elem[i].FILLBARELEM = slider_elem[i].previousSibling.classList  sliderFillBar
         if( slider_elem[i].previousElementSibling != null && slider_elem[i].previousElementSibling.classList.contains("sliderFillBarHolder")){
             display_elem[i].FILLBAR = slider_elem[i].previousElementSibling.children[0]
             //display_elem[i].FILLBAR = slider_elem[i].previousElementSibling;
         }

         display_elem[i].limitingResource = "";
         if(display_elem[i].PRODINPUT != null){
           display_elem[i].PRODINPUT.isRED = false;
           display_elem[i].PRODPOWER.isRED = false;
         }
         slider_elem[i].IS_LOCKED = false
         slider_elem[i].GAME = GAME_GLOBAL
         //console.log("2: "+fid+"SliderCheck"+(i+1))
    }
    PCTSLIDERS[fid] = {checkElem: check_elem, displayElem: display_elem, sliderElem:slider_elem}
    for(var i = 0; i < fct; i++){
        STATS["PRODUCTIVITY_RATING"][fid]
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
        ss.GAME = GAME_GLOBAL;
        ss.onInputMultiSliderPct = onInputMultiSliderPct;
        ss.onDownMultiSliderPct = onDownMultiSliderPct;
        ss.adjustSlider = adjustSlider;

        ss.onmousedown = function() {
          this.onDownMultiSliderPct(this)
        }
        ss.ontouchstart = function() {
          this.onDownMultiSliderPct(this)
        }
        //ss.onmouseup = function() {
          //output.innerHTML = "UP"
        //}
        ss.oninput = function() {
          this.onInputMultiSliderPct(this)
        }
        ss.onchange = function() {
          this.onInputMultiSliderPct(this)
        }
    }
    onDownMultiSliderPct(slider_elem[0])
    GAME_GLOBAL.updatePctSliderDisplay(slider_elem[0])
    if(document.getElementById(fid+"_PRODUCTIVITY_DISPLAY") != null){
      //console.log( "LOG:"+fmtSI( STATS["PRODUCTIVITY_RATING"][fid] * STATS["PRODUCTIVITY_MULT"][fid]) )
      document.getElementById(fid+"_PRODUCTIVITY_DISPLAY").textContent = fmtSI( STATS["PRODUCTIVITY_RATING"][fid] * STATS["PRODUCTIVITY_MULT"][fid])+PCTSLIDER_DISPLAYUNITS[fid]
    }
}




function powerLimiterInput(){
   var d = this.displayElem;
   d.textContent = roundTo(parseFloat(this.value) / 100,1) + "%"
}

for(var i=0; i < STATICVAR_HOLDER.POWER_SOURCEWORLD_LIST.length; i++){
  var worldType = STATICVAR_HOLDER.POWER_SOURCEWORLD_LIST[i];
  var ppid = STATICVAR_HOLDER.POWER_SOURCE_LIST[i]

  ELEMS[worldType+"PowerLimiter"].onchangeFcn = powerLimiterInput
  ELEMS[worldType+"PowerLimiter"].oninput = powerLimiterInput
  ELEMS[worldType+"PowerLimiter"].onchange = powerLimiterInput
  ELEMS[worldType+"PowerLimiter"].onchangeFcn()
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


function projectSelectButtonEvent(){
   console.log("project: "+this.project.projectTitle);
   var elemList = this.masterAvail.projectElemList
   for(var i=0; i < elemList.length; i++){
     elemList[i].classList.remove("PROJECT_BUTTON_SELECTED");
   }
   this.classList.add("PROJECT_BUTTON_SELECTED");
   var dd = this.project.desc;
   dd = dd + "<BR> &nbsp&nbsp&nbsp" + makeAdvCostString(this.project.cost,delim1=", ",delim2="<BR> &nbsp&nbsp&nbsp", compressThresh = 5, isLT=false)
   this.descElem.innerHTML = dd
   this.titleDescElem.innerHTML = this.project.projectTitle;
 }

function addNewProject(pp){
     //var pp = addScaledProject(ap,techlvl)
     this.GAME.STATS["AVAIL_PROJECT_LIST"][pp.uid] = pp;
     var elem = document.createElement("button");
     var costDesc = this.GAME.STATICVAR_HOLDER["INVENTORY_DESC_ABBRIV"]
     //elem.className += getScienceColorClass(pp.cost[0]);
     elem.project = pp;
     elem.textContent = pp.projectTitle;
     elem.onclick = this.projectSelectButtonEvent;
     elem.classList.add("PROJECT_BUTTON")
     elem.GAME = GAME_GLOBAL;
     elem.descElem = ELEMS["CURRENT_AVAIL_PROJECT_DESC"]
     elem.titleDescElem = ELEMS["CURRENT_AVAIL_PROJECT_TITLE"];
     elem.masterAvail = masterAvailListElem;
     masterAvailListElem.projectElemList.push(elem);
     masterAvailListElem.researchButton.currProject = pp;
     this.appendChild(elem);
//   var out = makeColoredScience(cc[0],costDesc, isLT);
}
STATS["AVAIL_PROJECT_LIST"] = [];
var masterAvailListElem = document.getElementById("ProjectSelector");
var masterDescElem = document.getElementById("CURRENT_AVAIL_PROJECT_DESC");
var masterResearchButton = document.getElementById("RESEARCH_CURRENT_PROJECT");

ELEMS["CURRENT_AVAIL_PROJECT_TITLE"] = document.getElementById("CURRENT_AVAIL_PROJECT_TITLE");
ELEMS["CURRENT_AVAIL_PROJECT_DESC"] = document.getElementById("CURRENT_AVAIL_PROJECT_DESC");

masterAvailListElem.projectSelectButtonEvent = projectSelectButtonEvent;
masterAvailListElem.descElem = masterDescElem;
masterAvailListElem.researchButton = masterResearchButton;
masterAvailListElem.addMultiProject = addMultiProject;
masterAvailListElem.addScaledProject = addScaledProject;
masterAvailListElem.GAME = GAME_GLOBAL;
masterAvailListElem.researchButton.availListElem = masterAvailListElem;
masterAvailListElem.researchButton.GAME = GAME_GLOBAL;
masterAvailListElem.addNewProject = addNewProject;
masterAvailListElem.projectElemList = [];
masterAvailListElem.researchButton.disabled = true;

ELEMS["masterAvailListElem"] = masterAvailListElem;
masterResearchButton.addNewProject


RESEARCH_BUTTONS.push(masterAvailListElem.researchButton);

masterAvailListElem.researchButton.onclick = function(){
  if(this.currProject != null){
        var pp = this.currProject;
        for(var kk = 0; kk < pp.cost.length; kk++){
           //console.log(this.availListElem.pp);
           //console.log("BEFORE: [val="+this.availListElem.value+"] ["+pp.cost[kk][0]+"/\n"+pp.cost[kk][1]+"]:\n"+INVENTORY[ pp.cost[kk][0] ]);
           this.GAME.INVENTORY[ pp.cost[kk][0] ] = this.GAME.INVENTORY[ pp.cost[kk][0] ] - pp.cost[kk][1];
           //console.log("AFTER: ["+pp.cost[kk][0]+"/\n"+pp.cost[kk][1]+"]:\n"+INVENTORY[ pp.cost[kk][0] ]);
        }
        this.GAME.currentResearchEffect = this.GAME.STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[ pp.projectID ].effect;
        this.GAME.currentResearchEffect();
        this.GAME.INVENTORY.SCIENCE_RESEARCHED.push(pp.uid);
        //masterAvailListElem.projectElemList.splice(  )
        /*
        TODO: remove project!
        */
        
        this.disabled = true;
  }
}


/*
var ap = getRandomMulti("bio",1);
masterAvailListElem.addNewProject(ap)
var ap = getRandomMulti("bio",1);
masterAvailListElem.addNewProject(ap)
var ap = getRandomMulti("bio",1);
masterAvailListElem.addNewProject(ap)

masterAvailListElem.researchButton.canAffordTest()
cheatFunc_multScience()

*/

masterAvailListElem.researchButton.canAffordTest = function(){
       var pp = this.currProject;
       if(pp != null){
         //console.log("trying to afford:");
         var prereqs = pp.upgradePrereqTechs;
         var meetsPrereqs = true;
         if(prereqs != null){
             for( var i=0; i < prereqs.length; i++){
                 if( ! this.GAME.INVENTORY.SCIENCE_RESEARCHED.includes( prereqs[i] ) ){
                     meetsPrereqs = false;
                 }
             }
         }
         //console.log("prereq status:"+meetsPrereqs);

         if( this.GAME.canAfford(pp.cost) && meetsPrereqs ){
             this.disabled = false;
             //console.log("     affordable!");
             return true;
         } else {
             this.disabled = true;
             //console.log("     unaffordable!");
             return false;
         }
       } else {
         return false;
       }
}

for(var i=0; i < STATS.TECHTREE_ROOTS.length; i++){
  var pid =  STATS.TECHTREE_ROOTS[i];
  var pp = getSimpleProject(STATICVAR_HOLDER.SCIENCE.TECHTREE[ pid ],1);
  masterAvailListElem.addNewProject(pp);
}


/*
var projectList   = this.STATICVAR_HOLDER.SCIENCE.SCALED["bio"]
var pp = projectList[0]
masterAvailListElem.addNewProject(pp,1)


addScaledProject(ap)
*/



for(var i=0; i< SCIENCE_TYPES.length; i++){
   //PROJECTSAVAIL_LIST_bio
   //CURRENT_AVAIL_PROJECT_DESC_bio
   //RESEARCH_CURRENT_PROJECT_bio
   var fid = SCIENCE_TYPES[i];
   var availListElem = document.getElementById("PROJECTSAVAIL_LIST_"+fid);
   var descElem = document.getElementById("CURRENT_AVAIL_PROJECT_DESC_"+fid);
   var researchButton = document.getElementById("RESEARCH_CURRENT_PROJECT_"+fid);
   availListElem.fid = fid;
   availListElem.addMultiProject = addMultiProject
   availListElem.addScaledProject = addScaledProject

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

   availListElem.addNewProject = function(pp){
     this.GAME.STATS["AVAIL_PROJECTS"][this.fid][pp.uid] = pp;
     var elem = document.createElement("option");
     pp.listElem = elem;
     elem.value = pp.uid;
     this.GAME.INVENTORY.SCIENCE_DISCOVERED.push( pp.uid );
     elem.appendChild( document.createTextNode( pp.projectTitle ) );
     this.appendChild(elem);
   }
   /*for(var j=0; j < STATS["UNLOCK_PROJECTS"][fid].length; j++){
     var pp = STATS["UNLOCK_PROJECTS"][fid][j];
     STATS["AVAIL_PROJECT_LIST"][fid].push(pp.projectID);
     STATS["AVAIL_PROJECTS"][fid][pp.projectID] = pp;
     var elem = document.createElement("option");
     pp.listElem = elem;
     elem.value = pp.projectID;
     elem.appendChild( document.createTextNode( pp.projectTitle ) );
     availListElem.appendChild(elem);
   }*/

   researchButton.canAffordTest = function(){
       var vv = this.availListElem.value;
       var pp = this.GAME.STATS["AVAIL_PROJECTS"][this.fid][vv];
       if(pp != null){
         var prereqs = pp.upgradePrereqTechs;
         var meetsPrereqs = true;
         if(prereqs != null){
             for( var i=0; i < prereqs.length; i++){
                 if( ! this.GAME.INVENTORY.SCIENCE_RESEARCHED.includes( prereqs[i] ) ){
                     meetsPrereqs = false;
                 }
             }
         }
         if( this.GAME.canAfford(pp.cost) && meetsPrereqs ){
             this.disabled = false;
             return true;
         } else {
             this.disabled = true;
             return false;
         }
       } else {
         return false;
       }
   }
//var pp = this.GAME.STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[ this.value ];
     availListElem.onchange = function(){
       //var ppid = this.GAME.STATS["AVAIL_PROJECT_LIST"][this.fid][this.value];
       //var pp = this.GAME.STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[ this.value ];
       var vv = this.value;
       var pp = this.GAME.STATS["AVAIL_PROJECTS"][this.fid][vv];
       //console.log("this.value="+this.value+", pp = "+pp);
       var dd = pp.desc;
       /*for(var k=0; k < pp.cost.length;k++){
          var ccc = fmtSIunits(pp.cost[k][1]);
          dd = dd + "<br> &nbsp&nbsp&nbsp"+ccc[0]+ccc[1]+"B "+ this.GAME.STATICVAR_HOLDER["INVENTORY_DESC_FULL"][pp.cost[k][0]]
       }*/
       dd = dd + "<BR> &nbsp&nbsp&nbsp" + makeAdvCostString(pp.cost,delim1=", ",delim2="<BR> &nbsp&nbsp&nbsp", compressThresh = 5, isLT=false)
       this.descElem.innerHTML = dd
       if( this.GAME.canAfford(pp.cost) ){
         this.researchButton.disabled = false;
       } else {
         this.researchButton.disabled = true;
       }
     }
     researchButton.onclick = function(){
        var vv = this.availListElem.value;
        var pp = this.GAME.STATS["AVAIL_PROJECTS"][this.fid][vv];
        for(var kk = 0; kk < pp.cost.length; kk++){
           //console.log(this.availListElem.pp);
           //console.log("BEFORE: [val="+this.availListElem.value+"] ["+pp.cost[kk][0]+"/\n"+pp.cost[kk][1]+"]:\n"+INVENTORY[ pp.cost[kk][0] ]);
           this.GAME.INVENTORY[ pp.cost[kk][0] ] = this.GAME.INVENTORY[ pp.cost[kk][0] ] - pp.cost[kk][1];
           //console.log("AFTER: ["+pp.cost[kk][0]+"/\n"+pp.cost[kk][1]+"]:\n"+INVENTORY[ pp.cost[kk][0] ]);
        }
        this.GAME.currentResearchEffect = this.GAME.STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[ pp.projectID ].effect;
        this.GAME.currentResearchEffect();
        this.GAME.INVENTORY.SCIENCE_RESEARCHED.push(pp.uid);
        this.availListElem.remove(this.availListElem.selectedIndex)
        this.disabled = true;
     }

     var projectList   = STATICVAR_HOLDER.SCIENCE.MULTI[fid];
     var idx1 = Math.floor( getRandomBetween(0,projectList.length) );
     var idx2 = Math.floor( getRandomBetween(0,projectList.length - 1) );
     if(idx2 >= idx1){
       idx2 = idx2 + 1;
     }
     var ap1 = availListElem.addMultiProject(projectList[idx1],1)
     var ap2 = availListElem.addMultiProject(projectList[idx2],1)
     availListElem.value = ap1.uid;
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
/*
ELEMS["CHEAT_Seedship_UNITS"]  = document.getElementById("Seedship_CHEAT_AddUnit")
ELEMS["CHEAT_Seedship_UP"]  = document.getElementById("button_cheatSeedshipUP")
ELEMS["CHEAT_Seedship_DN"]  = document.getElementById("button_cheatSeedshipF")
ELEMS["CHEAT_Seedship_ADD"] = document.getElementById("button_cheatSeedshipDN")
*/




for( var i = 0; i < STATICVAR_HOLDER.SHIP_TYPE_LIST.length; i++){
  var sid = STATICVAR_HOLDER.SHIP_TYPE_LIST[i];
  if(document.getElementById("button_cheat"+sid+"UP") != null){
      ELEMS["CHEATPANEL_"+sid] = {
        sid:sid,
        multUp: document.getElementById("button_cheat"+sid+"UP"),
        multDn: document.getElementById("button_cheat"+sid+"DN"),
        cheatAdd: document.getElementById("button_cheat"+sid+"F"),
        currUnit: 1,
        unitElem:document.getElementById(sid+"_CHEAT_AddUnit")
      }
      ELEMS["CHEATPANEL_"+sid].multUp.cheatPanel   = ELEMS["CHEATPANEL_"+sid]
      ELEMS["CHEATPANEL_"+sid].multDn.cheatPanel   = ELEMS["CHEATPANEL_"+sid]
      ELEMS["CHEATPANEL_"+sid].cheatAdd.cheatPanel = ELEMS["CHEATPANEL_"+sid]

      ELEMS["CHEATPANEL_"+sid].multUp.onclick = function(){
        console.log("multUp: " +this.cheatPanel.sid);
        this.cheatPanel.currUnit = this.cheatPanel.currUnit * 10;
        this.cheatPanel.unitElem.textContent = fmtSIflat( this.cheatPanel.currUnit );
        this.cheatPanel.multDn.disabled = false;
      }
      ELEMS["CHEATPANEL_"+sid].multDn.onclick = function(){
        console.log("multDn: " +this.cheatPanel.sid);
        this.cheatPanel.currUnit = this.cheatPanel.currUnit / 10;
        this.cheatPanel.unitElem.textContent = fmtSIflat( this.cheatPanel.currUnit );
        if(this.cheatPanel.currUnit <= 1){
          this.disabled = true;
        }
      }
      ELEMS["CHEATPANEL_"+sid].cheatAdd.onclick = function(){
        console.log("add: " +this.cheatPanel.sid);
        INVENTORY["SHIPS-"+this.cheatPanel.sid+"-CT"] = INVENTORY["SHIPS-"+this.cheatPanel.sid+"-CT"] + this.cheatPanel.currUnit
      }
  }

}

STATS["RUN_MANUAL_TICKS"] = 0;

      ELEMS["CHEATPANEL_TIME"] = {
        sid:"TIME",
        multUp: document.getElementById("button_cheatTickUP"),
        multDn: document.getElementById("button_cheatTickDN"),
        cheatAdd: document.getElementById("button_cheatTickF"),
        currUnit: 1,
        unitElem:document.getElementById("cheatTick_AddUnit"),
        speedDisplay: document.getElementById("cheatTick_CURRSPEED"),
        speedUp: document.getElementById("button_cheatFAST"),
        speedDn: document.getElementById("button_cheatSLOW")
      }
      ELEMS["CHEATPANEL_"+"TIME"].multUp.cheatPanel   = ELEMS["CHEATPANEL_"+"TIME"]
      ELEMS["CHEATPANEL_"+"TIME"].multDn.cheatPanel   = ELEMS["CHEATPANEL_"+"TIME"]
      ELEMS["CHEATPANEL_"+"TIME"].cheatAdd.cheatPanel = ELEMS["CHEATPANEL_"+"TIME"]

      ELEMS["CHEATPANEL_"+"TIME"].speedUp.cheatPanel   = ELEMS["CHEATPANEL_"+"TIME"]
      ELEMS["CHEATPANEL_"+"TIME"].speedDn.cheatPanel   = ELEMS["CHEATPANEL_"+"TIME"]

      ELEMS["CHEATPANEL_"+"TIME"].getTimeString = function(tf){
        if(tf == 1){
          return "1x"
        } else if(tf > 1){
          return "1/"+tf+"x"
        } else {
          return "???"
        }
      }

      ELEMS["CHEATPANEL_"+"TIME"].speedUp.onclick = function(){
        STATS["TICK_SPEEDFACTOR"] = STATS["TICK_SPEEDFACTOR"] + 1;
        this.cheatPanel.speedDisplay.textContent = this.cheatPanel.getTimeString(STATS["TICK_SPEEDFACTOR"])
        this.cheatPanel.speedDn.disabled = false;
      }
      ELEMS["CHEATPANEL_"+"TIME"].speedDn.onclick = function(){
        STATS["TICK_SPEEDFACTOR"] = STATS["TICK_SPEEDFACTOR"] - 1;
        this.cheatPanel.speedDisplay.textContent = this.cheatPanel.getTimeString(STATS["TICK_SPEEDFACTOR"])
        if( STATS["TICK_SPEEDFACTOR"] == 1 ){
          this.cheatPanel.speedDn.disabled = true;
        }

      }


      ELEMS["CHEATPANEL_"+"TIME"].multUp.onclick = function(){
        console.log("multUp: " +this.cheatPanel.sid);
        this.cheatPanel.currUnit = this.cheatPanel.currUnit * 10;
        this.cheatPanel.unitElem.textContent = fmtSIflat( this.cheatPanel.currUnit );
        this.cheatPanel.multDn.disabled = false;
      }
      ELEMS["CHEATPANEL_"+"TIME"].multDn.onclick = function(){
        console.log("multDn: " +this.cheatPanel.sid);
        this.cheatPanel.currUnit = this.cheatPanel.currUnit / 10;
        this.cheatPanel.unitElem.textContent = fmtSIflat( this.cheatPanel.currUnit );
        if(this.cheatPanel.currUnit <= 1){
          this.disabled = true;
        }
      }
      ELEMS["CHEATPANEL_"+"TIME"].cheatAdd.onclick = function(){
        console.log("add: " +this.cheatPanel.sid);
        STATS["PAUSE"] = true;
        document.getElementById("button_PAUSE").textContent = "Click to UNPAUSE";
        STATS["RUN_MANUAL_TICKS"] = STATS["RUN_MANUAL_TICKS"] + this.cheatPanel.currUnit;
      }
      document.getElementById("button_PAUSE").onclick = function(){
        if(STATS["PAUSE"]){
          STATS["PAUSE"] = false
          this.textContent = "Click to PAUSE";
        } else {
          STATS["PAUSE"] = true
          this.textContent = "Click to UNPAUSE";
        }

      }


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
INVENTORY["WORLDS-"+"Fallow"+"-CT"] = 0
INVENTORY["WORLDS-"+"Neutral"+"-CT"] = 0
INVENTORY["WORLDS-"+"Hostile"+"-CT"] = 0
INVENTORY["WORLDS-"+"Secure"+"-CT"] = 0


for( var i = 0; i < DYSON_TYPE_LIST.length; i++){
   var worldType = DYSON_TYPE_LIST[i]
   var multDisplay = document.getElementById(""+worldType+"_wf_AddUnit")
   multDisplay.textContent = "1";
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
     this.disp.textContent = fmtSIflat( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
     this.mdn.disabled = false;
   }
   multDn.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] / 10)
     this.disp.textContent = fmtSIflat( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
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
        var UPCOST = this.GAME.UPGRADE_COST[this.worldType];
        var currCost = this.GAME.STATS["CURRENT_UPGRADE_COST"][this.worldType]
        for(var kk = 0; kk < currCost.length; kk++){
           this.GAME.INVENTORY[ currCost[kk][0] ] = this.GAME.INVENTORY[ currCost[kk][0] ] - currCost[kk][1];
        }
        var lvl = this.GAME.INVENTORY["WORLDS-"+this.worldType+"-LVL"] + 1;
        this.GAME.INVENTORY["WORLDS-"+this.worldType+"-LVL"] = lvl
        this.GAME.STATS["CURRENT_UPGRADE_COST"][this.worldType] = UPCOST.calc(lvl);
        var costString = this.GAME.makeAdvCostString(this.GAME.STATS["CURRENT_UPGRADE_COST"][this.worldType],", ");
        this.costDisplayElem.innerHTML = costString;
        this.lvlDisplayElem.textContent = "Lvl-"+lvl;
        UPCOST.effect();
      }
      var currCost = upgradeElem.GAME.STATS["CURRENT_UPGRADE_COST"][this.worldType]
      var costString = upgradeElem.GAME.makeAdvCostString(currCost,", ");
      upgradeElem.costDisplayElem.innerHTML = costString;

      upgradeElem.canAffordTest = function(){
        //console.log(this.UPCOST);
        var currCost = this.GAME.STATS["CURRENT_UPGRADE_COST"][this.worldType];
        if( this.GAME.canAfford(currCost) ){
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





function onInputSoloSliderPct(){
      var cval = parseFloat(this.value)
      this.pctDisplayA.textContent = roundTo(cval / 100,1)+"%";
      this.pctDisplayB.textContent = roundTo(100 - (cval / 100),1)+"%";
      this.currValue = cval / 10000
}

ELEMS["BIOMASS_CONTROL_SLIDER"] = document.getElementById("biomassSliderPct")
ELEMS["BIOMASS_CONTROL_SLIDER"].pctDisplayA = document.getElementById("biomass_PROD_CONTROL_PCT_DISPLAY")
ELEMS["BIOMASS_CONTROL_SLIDER"].pctDisplayB = document.getElementById("biomass_PWR_CONTROL_PCT_DISPLAY")
ELEMS["BIOMASS_CONTROL_SLIDER"].oninput  = onInputSoloSliderPct;
ELEMS["BIOMASS_CONTROL_SLIDER"].onchange = onInputSoloSliderPct;
ELEMS["BIOMASS_CONTROL_SLIDER"].currValue = 0

ELEMS["BIOMASS_CONTROL_SLIDER"].onchange();

ELEMS["computation_CONTROL_SLIDER"] = document.getElementById("computationSliderPct")
ELEMS["computation_CONTROL_SLIDER"].pctDisplayA = document.getElementById("computation_soul_CONTROL_PCT_DISPLAY")
ELEMS["computation_CONTROL_SLIDER"].pctDisplayB = document.getElementById("computation_think_CONTROL_PCT_DISPLAY")
ELEMS["computation_CONTROL_SLIDER"].oninput  = onInputSoloSliderPct;
ELEMS["computation_CONTROL_SLIDER"].onchange = onInputSoloSliderPct;
ELEMS["computation_CONTROL_SLIDER"].currValue = 0
ELEMS["computation_CONTROL_SLIDER"].onchange()


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
     this.disp.textContent = fmtSIflat( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
     this.mdn.disabled = false;
   }
   multDn.onclick = function(){
     SETTINGS["ADD_MULTIPLIER"][this.worldType] = Math.round(SETTINGS["ADD_MULTIPLIER"][this.worldType] / 10)
     this.disp.textContent = fmtSIflat( SETTINGS["ADD_MULTIPLIER"][this.worldType] )
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
  var cc = coll[i];
  cc.ELEMS_CONTENT = cc.nextElementSibling;
  cc.ELEMS_MODE1 = cc.ELEMS_CONTENT.getElementsByClassName("COLLAPSE_MODE1")
  cc.ELEMS_MODE2 = cc.ELEMS_CONTENT.getElementsByClassName("COLLAPSE_MODE2")

  if(cc.ELEMS_MODE2.length > 0){
    cc.MODALITY = "TRIPLE"
    cc.CURRMODE = "MODE2";
      cc.addEventListener("click", function() {
        if(this.CURRMODE == "MODE0"){
          console.log("MODE 1");
          this.CURRMODE = "MODE1";
          this.classList.toggle("active");
          this.ELEMS_CONTENT.style.display = "block";
          if(this.ELEMS_MODE1.length > 0){
            for(var i=0; i < this.ELEMS_MODE1.length;i++){
               this.ELEMS_MODE1[i].style.display = "block";
            }
          }
        } else if(this.CURRMODE == "MODE1"){
          if(this.ELEMS_MODE2.length > 0){
            var anyActive=false;
            for(var i=0; i < this.ELEMS_MODE2.length;i++){
              anyActive = anyActive || this.ELEMS_MODE2[i].overrideMode == null || (! this.ELEMS_MODE2[i].overrideMode)
            }
            if(! anyActive){
              console.log("SKIP MODE 2, goto MODE0");
              this.CURRMODE = "MODE0"
              this.classList.toggle("active");
              this.ELEMS_CONTENT.style.display = "none";
              if(this.ELEMS_MODE1.length > 0){
                for(var i=0; i < this.ELEMS_MODE1.length;i++){
                   this.ELEMS_MODE1[i].style.display = "none";
                }
              }
            } else {
              console.log("MODE 2");
              this.CURRMODE = "MODE2"
              if(this.ELEMS_MODE1.length > 0){
                for(var i=0; i < this.ELEMS_MODE1.length;i++){
                   this.ELEMS_MODE1[i].style.display = "none";
                }
              }
              if(this.ELEMS_MODE2.length > 0){
                for(var i=0; i < this.ELEMS_MODE2.length;i++){
                   this.ELEMS_MODE2[i].style.display = "block";
                }
              }
            }
          }
        

        } else if(this.CURRMODE == "MODE2"){
          console.log("MODE 0");
          this.CURRMODE = "MODE0"
          this.classList.toggle("active");
          this.ELEMS_CONTENT.style.display = "none";
          if(this.ELEMS_MODE2.length > 0){
            for(var i=0; i < this.ELEMS_MODE2.length;i++){
               this.ELEMS_MODE2[i].style.display = "none";
            }
          }

        } else {
          console.log("ERROR: Impossible STATE: " +this.CURRMODE)
        }
      });

  } else {
    cc.MODALITY = "SIMPLE"
      cc.addEventListener("click", function() {

        this.classList.toggle("active");
        if (this.ELEMS_CONTENT.style.display === "none") {
          this.ELEMS_CONTENT.style.display = "block";
        } else {
          this.ELEMS_CONTENT.style.display = "none";
        }
      });
  }


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
         this.textContent = "UNLOCK "+ this.unlockid
         this.ss.value = 0;
         this.ss.lockbox.checked = true;
          document.getElementById("CHEAT_UNLOCK_"+UNLOCKABLES[i]).ss
       } else {
         this.lockhide.style.display = "block"
         this.textContent = "LOCK "+ this.unlockid
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
    STATS["PAUSE"] = true;
    querySavegamesAndUpdate();
}

document.getElementById("SETTINGS_WINDOW_CLOSE").onclick = function(){
    settingsBG.style.display="none"
    settingsWindow.style.display = "none"
    STATS["PAUSE"] = false;

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

multiList[j].costInfo.sciFieldsCS = [];
var sumSoFar = 0;
for(var k=0; k < multiList[j].costInfo.sciFields.length; k++){
  var sf = multiList[j].costInfo.sciFields[k];
  multiList[j].costInfo.sciFieldsCS.push([sumSoFar, sf[1] + sumSoFar]);
  sumSoFar = sumSoFar + sf[1]
}
multiList[j].costInfo.sciCtDistroCS = [];
sumSoFar = 0;
for(var k=0; k < multiList[j].costInfo.sciCtDistro.length; k++){
    multiList[j].costInfo.sciCtDistroCS.push( multiList[j].costInfo.sciCtDistro[k] + sumSoFar)
    sumSoFar = sumSoFar + multiList[j].costInfo.sciCtDistro[k]
}

STATS["UPGRADABLES"] = {};
for(var i=0; i < STATICVAR_HOLDER.UPGRADABLES.length; i++){
  var xx = STATICVAR_HOLDER.UPGRADABLES[i];
  xx.costInfo.sciFieldsCS = [];
  var sumSoFar = 0;
  for(var k=0; k < xx.costInfo.sciFields.length; k++){
    var sf = xx.costInfo.sciFields[k];
    xx.costInfo.sciFieldsCS.push([sumSoFar, sf[1] + sumSoFar]);
    sumSoFar = sumSoFar + sf[1]
  }
  xx.costInfo.sciCtDistroCS = [];
  sumSoFar = 0;
  for(var k=0; k < xx.costInfo.sciCtDistro.length; k++){
    xx.costInfo.sciCtDistroCS.push( xx.costInfo.sciCtDistro[k] + sumSoFar)
    sumSoFar = sumSoFar + xx.costInfo.sciCtDistro[k]
  }

  STATS["UPGRADABLES"][xx.itemID] = {};
  STATS["UPGRADABLES"][xx.itemID]["lvl"] = 1
  STATS["UPGRADABLES"][xx.itemID]["cost"] = getProjectCostWithBase(xx.costInfo, xx.costScalingFunction(1) )

  xx.ELEM_BUTTON.ELEMS = xx;
  xx.ELEM_BUTTON.GAME = GAME_GLOBAL;
  xx.ELEM_BUTTON.onclick = function(){
    console.log("upgrading :"+this.ELEMS.itemTitle);
    this.ELEMS.effect();
    var lvl = this.GAME.STATS.UPGRADABLES[this.ELEMS.itemID]["lvl"]
    var prevCost = this.GAME.STATS.UPGRADABLES[this.ELEMS.itemID]["cost"];
    console.log("cost:"+prevCost)
    console.log("costlen:"+prevCost.length)

    for(var i=0; i < prevCost.length; i++){
      console.log("cost:"+prevCost[i][0] + " / "+prevCost[i][1])
      INVENTORY[prevCost[i][0]] = INVENTORY[prevCost[i][0]] - prevCost[i][1]
    }

    var cost = getProjectCostWithBase( this.ELEMS.costInfo, this.ELEMS.costScalingFunction( lvl + 1 ));
    this.GAME.STATS.UPGRADABLES[this.ELEMS.itemID]["lvl"] = lvl + 1;
    this.GAME.STATS.UPGRADABLES[this.ELEMS.itemID]["cost"] = cost;
    this.updateDisplay();
  }
  xx.ELEM_BUTTON.updateDisplay = function(){
    this.ELEMS.ELEM_COSTDISPLAY.innerHTML = makeAdvCostString(this.GAME.STATS.UPGRADABLES[this.ELEMS.itemID]["cost"]);
    this.ELEMS.ELEM_DISPLAY.innerHTML = this.ELEMS.getDisplayString();
    this.ELEMS.ELEM_LVL.textContent = this.GAME.STATS.UPGRADABLES[this.ELEMS.itemID]["lvl"]
  }

      xx.ELEM_BUTTON.canAffordTest = function(){
        //console.log("can Afford: "+this.ELEMS.itemID);
        var currCost = this.GAME.STATS.UPGRADABLES[this.ELEMS.itemID].cost;
        //console.log("    cost: "+this.GAME.STATS.UPGRADABLES[this.ELEMS.itemID].cost);
        if( this.GAME.canAfford(currCost) ){
            //console.log("    TRUE")
            this.disabled = false;
            return true;
        } else {
            //console.log("    FALSE")
            this.disabled = true;
            return false;
        }
      }
      RESEARCH_BUTTONS.push(xx.ELEM_BUTTON);
  xx.ELEM_BUTTON.updateDisplay();
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

function addConstructionRequest(inventoryItemName, requestCt, unitCost, industryID){
   //console.log("addConstructionRequest("+inventoryItemName+","+requestCt+","+unitCost)
   //console.log(inventoryItemName+"/"+requestCt+"/"+unitCost+"/"+industryID)
   this.CONSTRUCTION_REQUESTS.push( [inventoryItemName, requestCt, unitCost, requestCt, industryID] )
}


STATICVAR_HOLDER.SHARED_RESOURCE_LIST = ["MATTER-Waste-CT","MATTER-FreeGreen-CT",
                        "MATTER-Digested-CT",
                        "MATTER-FreeBot-CT",
                        "MATTER-Feedstock-CT",
                        "POWER"]

function executeAllConstructionRequests(){
  var iterationCausedChange = true;

  for(var j=0; j < this.CONSTRUCTION_REQUESTS.length;j++){
    var bb = this.CONSTRUCTION_REQUESTS[j][0];
    var industryID = this.CONSTRUCTION_REQUESTS[j][4];
    STATS["LIMIT-REASON"][industryID] = "";
    this.STATS["PRODUCTION-REQ"][industryID] = this.CONSTRUCTION_REQUESTS[j][1];
    //console.log( "constReq "+industryID+", costLen="+this.CONSTRUCTION_REQUESTS[j][2].length)

    for(var ii=0; ii < this.CONSTRUCTION_REQUESTS[j][2].length; ii++){
      //console.log( "     "+industryID+"-REQ ["+this.CONSTRUCTION_REQUESTS[j][2][ii][0]+"]: "+ fmtSIreal(this.CONSTRUCTION_REQUESTS[j][2][ii][1] * this.CONSTRUCTION_REQUESTS[j][1]))
      if(this.CONSTRUCTION_REQUESTS[j][2][ii][0] == "POWER"){
        //console.log( "IndustryPowerDemand-"+industryID+": "+ (this.CONSTRUCTION_REQUESTS[j][2][ii][1] * this.CONSTRUCTION_REQUESTS[j][1]))
        this.STATS["IndustryPowerDemand"][industryID] = this.CONSTRUCTION_REQUESTS[j][2][ii][1] * this.CONSTRUCTION_REQUESTS[j][1]
      } else if( ii == 0 ){
        this.STATS["IndustryInputDemand"][industryID] = this.CONSTRUCTION_REQUESTS[j][2][ii][1] * this.CONSTRUCTION_REQUESTS[j][1]
      }//4311061963.9400425
    }
  }

  var resourceUserList = [];
  for(var i=0; i<this.STATICVAR_HOLDER.SHARED_RESOURCE_LIST.length; i++){
        var rr = this.STATICVAR_HOLDER.SHARED_RESOURCE_LIST[i];
        //console.log("  [[["+rr+"]]]:");
        resourceUserList[i] = [];
        var totalResourceRequested = 0;
        for(var j=0; j < this.CONSTRUCTION_REQUESTS.length;j++){
           if(this.CONSTRUCTION_REQUESTS[j][1] > 0){
             for(var k=0; k < this.CONSTRUCTION_REQUESTS[j][2].length; k++){
               if(rr == this.CONSTRUCTION_REQUESTS[j][2][k][0] && this.CONSTRUCTION_REQUESTS[j][2][k][1] > 0){
                 resourceUserList[i].push([j,k]);
                 //console.log("            [:"+this.CONSTRUCTION_REQUESTS[j][0]+"] uses "+rr+" "+this.CONSTRUCTION_REQUESTS[j][2][k][1]);
                 totalResourceRequested = totalResourceRequested + this.CONSTRUCTION_REQUESTS[j][2][k][1] * this.CONSTRUCTION_REQUESTS[j][3];
               }
             }
           }
        }
  }

  //while(iterationCausedChange){
      iterationCausedChange = false;

      for(var i=0; i<this.STATICVAR_HOLDER.SHARED_RESOURCE_LIST.length; i++){
        var userList = resourceUserList[i];
        var rr = this.STATICVAR_HOLDER.SHARED_RESOURCE_LIST[i];
        //console.log("  [[["+rr+"]]]:");
        var userList = [];
        var totalResourceRequested = 0;
        for(var j=0; j < this.CONSTRUCTION_REQUESTS.length;j++){
           for(var k=0; k < this.CONSTRUCTION_REQUESTS[j][2].length; k++){
             if(rr == this.CONSTRUCTION_REQUESTS[j][2][k][0]){
               userList.push([j,k]);
               totalResourceRequested = totalResourceRequested + this.CONSTRUCTION_REQUESTS[j][2][k][1] * this.CONSTRUCTION_REQUESTS[j][3];
               //console.log("            [:"+this.CONSTRUCTION_REQUESTS[j][0]+"] uses "+rr +fmtSI(this.CONSTRUCTION_REQUESTS[j][2][k][1] * this.CONSTRUCTION_REQUESTS[j][3])+ "("+fmtSI(totalResourceRequested)+")");

             }
           }
        }
        if(rr == "POWER"){
           this.STATS["CURR_POWER_DEMAND"] = totalResourceRequested;
        }

        //console.log("    ["+rr+"]"+fmtSI(totalResourceRequested)+" vs "+fmtSI(this.INVENTORY[rr]));
        if(this.INVENTORY[rr] <= 0){
          //console.log("    zero["+rr+"]");

          for(var j=0; j < userList.length;j++){
            var uu = userList[j];

            STATS["LIMIT-REASON"][this.CONSTRUCTION_REQUESTS[uu[0]][4]] = rr;
            this.CONSTRUCTION_REQUESTS[uu[0]][3] = 0;
            //console.log("            ZEROING:"+this.CONSTRUCTION_REQUESTS[j][0]);
            //console.log("                  ["+this.CONSTRUCTION_REQUESTS[uu[0]][0]+"]: "+fmtSIflat(this.CONSTRUCTION_REQUESTS[uu[0]][3]));
          }
        } else if(totalResourceRequested > 0 && totalResourceRequested > this.INVENTORY[rr]){
          iterationCausedChange = true;
          var frac = this.INVENTORY[rr] / totalResourceRequested;
          //console.log("    Insufficient["+rr+"]: "+frac);
          for(var j=0; j < userList.length;j++){
            var uu = userList[j];
            STATS["LIMIT-REASON"][this.CONSTRUCTION_REQUESTS[uu[0]][4]] = rr;
            //console.log("                  ["+this.CONSTRUCTION_REQUESTS[uu[0]][0]+"]: "+fmtSIflat(this.CONSTRUCTION_REQUESTS[uu[0]][3])+"=>"+fmtSIflat(this.CONSTRUCTION_REQUESTS[uu[0]][3] * frac))

            this.CONSTRUCTION_REQUESTS[uu[0]][3] = this.CONSTRUCTION_REQUESTS[uu[0]][3] * frac;
          }
        }
      }
  //}

  for(var i=0;i<this.CONSTRUCTION_REQUESTS.length;i++){
    var bb = this.CONSTRUCTION_REQUESTS[i][0];
    var industryID = this.CONSTRUCTION_REQUESTS[i][4];
    var reqCt = this.CONSTRUCTION_REQUESTS[i][3];
    for(var j=0; j<this.CONSTRUCTION_REQUESTS[i][2].length; j++){
      var ccx = this.CONSTRUCTION_REQUESTS[i][2][j][0];
      var uCost = this.CONSTRUCTION_REQUESTS[i][2][j][1];
      //console.log("        Expending["+fmtSIflat(reqCt * uCost)+" "+ccx+"]: on "+fmtSIflat(reqCt)+" "+this.CONSTRUCTION_REQUESTS[i][0]+" ["+this.INVENTORY[this.CONSTRUCTION_REQUESTS[i][0]]+"]")
      this.INVENTORY[ccx] = this.INVENTORY[ccx] - reqCt * uCost;
    }
    this.INVENTORY[bb] = this.INVENTORY[bb] + reqCt;
    this.STATS["PRODUCTION-CURR"][industryID] = reqCt;
  }
  this.CONSTRUCTION_REQUESTS = [];

}


function executeAllConstructionRequests_OLD(){
  var costResourceSet = new Set();
  var costRequests = {};
  for(var i=0;i<this.CONSTRUCTION_REQUESTS.length;i++){
    var bb = this.CONSTRUCTION_REQUESTS[i][0];
    var industryID = this.CONSTRUCTION_REQUESTS[i][4];
    var reqCt = this.CONSTRUCTION_REQUESTS[i][1];
    this.STATS["PRODUCTION-REQ"][industryID] = reqCt;
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
     var crTotalCalc = 0;
     if(crTotal > this.INVENTORY[ccx]){
       console.log("   insufficient["+ccx+"]: "+this.INVENTORY[ccx]+" / "+crTotal+"");
       for(let crr of cr){
         var uCost = this.CONSTRUCTION_REQUESTS[crr[0]][2][crr[1]][1];
         var currReqCt = this.CONSTRUCTION_REQUESTS[crr[0]][3];
         /*console.log("["+ccx+"]: ["+uCost+" / "+currReqCt+" / "+((crr[2] / crTotal) * INVENTORY[ccx]) / uCost+"]")*/
         this.CONSTRUCTION_REQUESTS[crr[0]][3] = Math.min( currReqCt, ((crr[2] / crTotal) * this.INVENTORY[ccx]) / uCost )
         crTotalCalc = crTotalCalc +
         console.log("       crr["+this.CONSTRUCTION_REQUESTS[crr[0]][0]+"]: "+crr[0]+","+crr[1]+","+crr[2]+": "+uCost+", "+currReqCt +" = "+this.CONSTRUCTION_REQUESTS[crr[0]][3] + " ("+crTotalCalc+")");
       }
     }
  }
  for(var i=0;i<this.CONSTRUCTION_REQUESTS.length;i++){
    var bb = this.CONSTRUCTION_REQUESTS[i][0];

    var reqCt = this.CONSTRUCTION_REQUESTS[i][3];
    for(var j=0; j<this.CONSTRUCTION_REQUESTS[i][2].length; j++){
      var ccx = this.CONSTRUCTION_REQUESTS[i][2][j][0];
      var uCost = this.CONSTRUCTION_REQUESTS[i][2][j][1];
      this.INVENTORY[ccx] = this.INVENTORY[ccx] - reqCt * uCost;
    }
    this.INVENTORY[bb] = this.INVENTORY[bb] + reqCt;
    this.STATS["PRODUCTION-CURR"][industryID] = reqCt;
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



//startWorldConstruction("Bot",1)
//STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR


INVENTORY["STARS-" + "G" +"-CT"] = 1;
INVENTORY["WORLDS-"+"Bot"+"-CT"] = 1

INVENTORY["POWER-FreeBot-CT"] = STATICVAR_HOLDER.WATTAGE_SOL_LUMINOSITY / 2;
INVENTORY["MATTER-Botbots-CT"] = STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR * 7;
INVENTORY["MATTER-Botpwr-CT"] = STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR * 3;
INVENTORY["MATTER-Compute-CT"] = 5000000000000

INVENTORY["MATTER-Waste-CT"] = STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR * 119;

INVENTORY["MATTER-FreeBot-CT"] = (STATICVAR_HOLDER.SOLAR_MASS / 2) - INVENTORY["MATTER-Botbots-CT"] - INVENTORY["MATTER-Botpwr-CT"] - (INVENTORY["MATTER-Waste-CT"] / 2);



var START_WITH_GREENWORLD = true;
if(START_WITH_GREENWORLD){
  INVENTORY["WORLDS-"+"Green"+"-CT"] = 1
  INVENTORY["POWER-FreeGreen-CT"] = STATICVAR_HOLDER.WATTAGE_SOL_LUMINOSITY / 2;
  INVENTORY["MATTER-Biomass-CT"] = STATICVAR_HOLDER.EARTHS_INDUSTRIAL_UNITFACTOR * 12;
  INVENTORY["MATTER-FreeGreen-CT"] = (STATICVAR_HOLDER.SOLAR_MASS / 2) - INVENTORY["MATTER-Biomass-CT"] - (INVENTORY["MATTER-Waste-CT"] / 2);
}



/*
INVENTORY["STARS-" + "G" +"-CT"] = 1;
INVENTORY["MATTER-FreeBot-CT"] = 1.9885e27;
INVENTORY["POWER-FreeBot-CT"] = STATICVAR_HOLDER.WATTAGE_SOL_LUMINOSITY;

INVENTORY["MATTER-Botbots-CT"] = 75000000;
INVENTORY["MATTER-Botpwr-CT"] = 25000000;
INVENTORY["MATTER-Waste-CT"] = 100000000;


INVENTORY["WORLDS-"+"Bot"+"-CT"] = 1


var START_WITH_GREENWORLD = true;
if(START_WITH_GREENWORLD){
  INVENTORY["STARS-" + "G" +"-CT"] = INVENTORY["STARS-" + "G" +"-CT"] + 1;
  INVENTORY["WORLDS-"+"Green"+"-CT"] = 1
  INVENTORY["MATTER-FreeGreen-CT"] = 1.9885e27;
  INVENTORY["POWER-FreeGreen-CT"] = STATICVAR_HOLDER.WATTAGE_SOL_LUMINOSITY;

  INVENTORY["MATTER-Biomass-CT"] = 100000000;
  //INVENTORY["MATTER-Biopwr-CT"] = 25000000;
  INVENTORY["MATTER-Waste-CT"] = 100000000;
}
*/



for(var i=1;i<25;i++){
  console.log("Cost["+i+"] = "+fmtSI( UPGRADE_COST["Bot"].calc(i)[0][1])+" / "+fmtSI( UPGRADE_COST["Bot"].calc(i)[0][1] / UPGRADE_COST["Bot"].calc(1)[0][1] ) + " ("+ fmtSI( UPGRADE_COST["Bot"].calc(i)[0][1] / UPGRADE_COST["Bot"].calc(i-1)[0][1] ) +")")
}
for(var i=1;i<25;i++){
  console.log("Cost["+i+"] = "+fmtSI( getProjectBaseCost(i) )+" / "+fmtSI( getProjectBaseCost(i) / getProjectBaseCost(1)) )
}



var unlockGrid = document.getElementById("CHEAT_UNLOCKABLE_GRID")

for(var i=0; i<STATICVAR_HOLDER.PHASE_STATUS_LIST.length; i++){
  var sid = STATICVAR_HOLDER.PHASE_STATUS_LIST[i]
  var elem = document.createElement("button");
  elem.className += "contentGridItem"
  elem.className += "contentGridItem1x1"
  elem.className += "button2"
  elem.textContent = sid.split("_").join(" ");
  elem.style["background-color"] = "#c99c9c"
  elem.sid = sid;
  elem.onclick = function(){
    if(STATS.PHASE_STATUS[ this.sid ]){
      lockStatus(this.sid);
    } else {
      unlockStatus(this.sid);
    }
    this.setStatus();
  }
  elem.setStatus = function(){
    if(STATS.PHASE_STATUS[ this.sid ]){
      this.style["background-color"] = "#a4ba91"
    } else {
      this.style["background-color"] = "#c99c9c"
    }
  }
  STATICVAR_HOLDER.PHASEDATA[sid].cheatButton = elem;
  unlockGrid.appendChild(elem);
}

if(true){
  var elem = document.createElement("button");
  elem.className += "contentGridItem"
  elem.className += "contentGridItem1x1"
  elem.className += "button2"
  elem.innerHTML = "<h4>RESET</h4>";
  elem.sid = sid;
  elem.onclick = function(){
    resetStatus();
    
  }
  unlockGrid.appendChild(elem);
}

document.getElementById("CHEAT_DEBUG_OPEN").onclick = function(){
  if( document.getElementById("CHEAT_DEBUG_PANEL_CONTENT").style.display != "block"){
    document.getElementById("CHEAT_DEBUG_PANEL_CONTENT").style.display = "block"
    document.getElementById("CHEAT_DEBUG_OPEN").innerHTML = "&#x274C;"
    
  } else {
    document.getElementById("CHEAT_DEBUG_PANEL_CONTENT").style.display = "none"
    document.getElementById("CHEAT_DEBUG_OPEN").innerHTML = "CHEAT"
  }
}


/*
     var elem = document.createElement("option");
     pp.listElem = elem;
     elem.value = pp.projectID;
     elem.appendChild( document.createTextNode( pp.projectTitle ) );
     availListElem.appendChild(elem);
*/


