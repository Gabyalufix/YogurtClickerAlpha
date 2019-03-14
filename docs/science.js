




function drawRandomScienceProject(sciname,currLvl){
     var typeIdx = drawFromRandomDistro(this.STATS.RANDOM_SCIENCE_TYPES_PROBS ,"yes",0)
     var proType = RANDOM_SCIENCE_TYPES[typeIdx];
     if(proType == "MULTI"){
       this.unlockRandomMulti(sciname,currLvl);
     } else if(proType == "SCALED"){
       this.unlockRandomScaled(sciname,currLvl);
     } else if(proType == "SUPER"){
       console.log("UNLOCK SUPERTECH!")
     } else if(proType == "HYPER"){
       console.log("UNLOCK HYPERTECH!")
     }
}

function getTechtreeScienceProjects(){
     
}

function getRandomScienceProject(sciname,currLvl){
     var typeIdx = drawFromRandomDistro(this.STATS.RANDOM_SCIENCE_TYPES_PROBS ,"yes",0)
     var proType = RANDOM_SCIENCE_TYPES[typeIdx];
     if(proType == "MULTI"){
       this.unlockRandomMulti(sciname,currLvl);
     } else if(proType == "SCALED"){
       this.unlockRandomScaled(sciname,currLvl);
     } else if(proType == "SUPER"){
       console.log("UNLOCK SUPERTECH!")
     } else if(proType == "HYPER"){
       console.log("UNLOCK HYPERTECH!")
     }
}

GAME_GLOBAL.drawRandomScienceProject = drawRandomScienceProject;


GAME_GLOBAL.SCIENCE_SCALED_UNLOCK_RATE = 1.0;

/*
var ap = getRandomMulti("bio",1);
masterAvailListElem.addNewProject(ap)


*/

function getRandomMulti(sciname, currLvl){
   console.log("   attempting unlock MULTI");
   var projectList   = this.STATICVAR_HOLDER.SCIENCE.MULTI[sciname];
   var projectCts    = this.STATS.SCIENCE_MULTICT;
   var idx = Math.floor( getRandomBetween(0,projectList.length) );
   var prereqFailed = true;
   while(prereqFailed){
       idx = Math.floor( getRandomBetween(0,projectList.length) );
       var prt = projectList[idx].prereqTechs
       prereqFailed = false;
       console.log("Testing "+projectList[idx].projectID);
       if( prt != null){
           for(var zz = 0; zz < prt.length; zz++){
               console.log("   Prereq: " + prt[zz]);
               if(! this.INVENTORY.SCIENCE_DISCOVERED.includes( prt[zz] ) ){
                   prereqFailed = true;
               }
           }
       }
       var pfcn = projectList[idx].prereqFcn;
       if((! prereqFailed) && pfcn != null){
         if(! pfcn()){
           prereqFailed = true;
         }
       }
       if(prereqFailed){
           console.log("Skipping "+projectList[idx].projectID+" because prereqs not met! len="+prt.length+" / "+prt);
       } else {
           console.log("Keeping "+projectList[idx].projectID+" because prereqs met! prereqlen = "+ prt);
       }
   }
   console.log("   retrieving: "+ projectList[idx].projectID);
   return this.getMultiProject(projectList[idx])
}
GAME_GLOBAL.getRandomMulti = getRandomMulti;

function getRandomScaled(sciname,currLvl){
   console.log("   attempting unlock SCALED");
   var projectList   = this.STATICVAR_HOLDER.SCIENCE.SCALED[sciname];
   var projectLocked = STATS.SCIENCE_LOCKED["SCALED"][sciname];
   if(projectLocked.length > 0){
       var lockIdx = Math.floor( getRandomBetween(0,projectLocked.length) );
       var prereqFailed = true;
       while(prereqFailed){
           lockIdx = Math.floor( getRandomBetween(0,projectLocked.length) );
           var idx = projectLocked[lockIdx];
           var prt = projectList[idx].prereqTechs
           prereqFailed = false;
           //console.log("Testing "+projectList[idx].projectID);
           if( prt != null){
               for(var zz = 0; zz < prt.length; zz++){
                   //console.log("   Prereq: " + prt[zz]);
                   if(! this.INVENTORY.SCIENCE_DISCOVERED.includes( prt[zz] ) ){
                       prereqFailed = true;
                   }
               }
           }
           var pfcn = projectList[idx].prereqFcn;
           if((! prereqFailed) && pfcn != null){
             if(! pfcn()){
               prereqFailed = true;
             }
           }

           if(prereqFailed){
               //console.log("Skipping "+projectList[idx].projectID+" because prereqs not met! len="+prt.length+" / "+prt);
           } else {
               //console.log("Keeping "+projectList[idx].projectID+" because prereqs met! prereqlen = "+ prt);
           }
       }
       console.log("   retrieving: "+ projectList[idx].projectID);
       return this.getScaledProject(projectList[idx])

   }
}
GAME_GLOBAL.getRandomScaled = getRandomScaled;





















function unlockRandomMulti(sciname, currLvl){
   console.log("   attempting unlock MULTI");
   var projectList   = this.STATICVAR_HOLDER.SCIENCE.MULTI[sciname];
   var projectCts    = this.STATS.SCIENCE_MULTICT;
   var idx = Math.floor( getRandomBetween(0,projectList.length) );
   var prereqFailed = true;
   while(prereqFailed){
       idx = Math.floor( getRandomBetween(0,projectList.length) );
       var prt = projectList[idx].prereqTechs
       prereqFailed = false;
       console.log("Testing "+projectList[idx].projectID);
       if( prt != null){
           for(var zz = 0; zz < prt.length; zz++){
               console.log("   Prereq: " + prt[zz]);
               if(! this.INVENTORY.SCIENCE_DISCOVERED.includes( prt[zz] ) ){
                   prereqFailed = true;
               }
           }
       }
       var pfcn = projectList[idx].prereqFcn;
       if((! prereqFailed) && pfcn != null){
         if(! pfcn()){
           prereqFailed = true;
         }
       }
       if(prereqFailed){
           console.log("Skipping "+projectList[idx].projectID+" because prereqs not met! len="+prt.length+" / "+prt);
       } else {
           console.log("Keeping "+projectList[idx].projectID+" because prereqs met! prereqlen = "+ prt);
       }
   }
   console.log("   attempting unlock: "+ projectList[idx].projectID);
   if(Math.random() < projectList[idx].rate){
      console.log("   multiproject unlocked: "+ projectList[idx].projectID);
      var ap1 = masterAvailListElem.getMultiProject(projectList[idx])
      masterAvailListElem.addNewProject(ap1)
      //TODO: add multiproject unlocking!
      //this.SCIENCE_DISPLAY[sciname].availListElem.addMultiProject(projectList[idx], currLvl)
   }
}
GAME_GLOBAL.unlockRandomMulti = unlockRandomMulti;

function unlockRandomScaled(sciname,currLvl){
   console.log("   attempting unlock SCALED");
   var projectList   = this.STATICVAR_HOLDER.SCIENCE.SCALED[sciname];
   var projectLocked = STATS.SCIENCE_LOCKED["SCALED"][sciname];
   var projectCurrPrereqAvail = [];
   for(var i=0; i < projectLocked.length; i++){
           var idx = projectLocked[i];
           var prt = projectList[idx].prereqTechs
           prereqFailed = false;
           //console.log("Testing "+projectList[idx].projectID);
           if( prt != null){
               for(var zz = 0; zz < prt.length; zz++){
                   //console.log("   Prereq: " + prt[zz]);
                   if(! this.INVENTORY.SCIENCE_DISCOVERED.includes( prt[zz] ) ){
                       prereqFailed = true;
                   }
               }
           }
           var pfcn = projectList[idx].prereqFcn;
           if((! prereqFailed) && pfcn != null){
             if(! pfcn()){
               prereqFailed = true;
             }
           }
           if(! prereqFailed){
               projectCurrPrereqAvail.push(idx);
           }
   }
   
   
   if(projectCurrPrereqAvail.length > 0){
       var lockIdx = Math.floor( getRandomBetween(0,projectCurrPrereqAvail.length) );
       var idx = projectCurrPrereqAvail[lockIdx];
       console.log("   attempting unlock: "+ projectList[idx].projectID);
       if(Math.random() < projectList[idx].rate){
          //console.log("   unlocking: "+ projectList[idx].projectID);
          var ap1 = masterAvailListElem.getScaledProject(projectList[idx])
          projectLocked.splice( projectLocked.indexOf(idx) , 1 )
          masterAvailListElem.addNewProject(ap1)
          //this.SCIENCE_DISPLAY[sciname].availListElem.addScaledProject(projectList[idx], currLvl)
          
       }
   }
}
GAME_GLOBAL.unlockRandomScaled = unlockRandomScaled;





























/*

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-PROD"]["costField"] = ["eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-ENER"]["costField"] = ["eng2_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-WAST"]["costField"] = ["eng_SCIENCE_FREE","eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-PROD"]["costMult"] = [1.5];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-ENER"]["costMult"] = [1];
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
*/
///////////////////////////////////////////////////////////////////////////////////////////////////


/*

cumsum mults
Pick 1-2 types, probs given by MULT


*/
// [0: Cellular Processes][1: Biomechanoid Construction]   [2: Genetic Engineering]
// [0: Construction]      [1: matter & Material Science]   [2: High-Energy Physics]
// [0: Cognition]         [1: Creativity & Intuition]      [2: Strategy & Tactics]

//How to do point mods:
//

"","Bioweapons","WasteFerment","WasteReprocess"


/*
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-PROD"]["costField"] = ["eng_SCIENCE_FREE","bio1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-ENER"]["costField"] = ["eng_SCIENCE_FREE","bio1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-WAST"]["costField"] = ["eng_SCIENCE_FREE","bio1_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-PROD"]["costMult"] = [1.5,1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-ENER"]["costMult"] = [1,1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-WAST"]["costMult"] = [1,1];

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-PROD"]["costField"] = ["bio_SCIENCE_FREE","bio0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-ENER"]["costField"] = ["bio_SCIENCE_FREE","bio0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-WAST"]["costField"] = ["bio_SCIENCE_FREE","bio0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-PROD"]["costMult"] = [1.5,1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-ENER"]["costMult"] = [1,1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-WAST"]["costMult"] = [1,1];

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteFerment-PROD"]["costField"] = ["bio_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteFerment-ENER"]["costField"] = ["bio_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteFerment-PROD"]["costMult"] = [1.5];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteFerment-ENER"]["costMult"] = [1];

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteReprocess-PROD"]["costField"] = ["eng_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteReprocess-ENER"]["costField"] = ["eng_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteReprocess-PROD"]["costMult"]  = [1.5];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteReprocess-ENER"]["costMult"]  = [1];


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-PROD"]["costField"] = ["eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-ENER"]["costField"] = ["eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-PROD"]["costMult"] = [1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-ENER"]["costMult"] = [1];


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-ENER"]["costField"] = ["eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-INPUT"]["costField"] = ["eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-ENER"]["costMult"] = [1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-INPUT"]["costMult"] = [1];
*/


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


//Science projects that ALWAYS appear once the total tech
//  in a given type





for(var i=0; i < SCIENCE_TYPES.length; i++){
    var scitype = SCIENCE_TYPES[i];
    var multiList = STATICVAR_HOLDER.SCIENCE.MULTI[scitype];
    for(var j=0; j < multiList.length; j++){
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
    }
}

//{sciFields:[["eng0",1],["eng1",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]}

INVENTORY["SCIENCE-LEVEL-bio"] = 32
INVENTORY["SCIENCE-LEVEL-eng"] = 32
INVENTORY["SCIENCE-LEVEL-psy"] = 32




SCIENCE_UNLOCK_RATE=0.4;
GAME_GLOBAL.SCIENCE_UNLOCK_RATE=SCIENCE_UNLOCK_RATE


INVENTORY.SCIENCE_DISCOVERED = [];
INVENTORY.SCIENCE_RESEARCHED = [];

//getProjectCostAdv(STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-ENER"]["costInfo"],1)
//getProjectCostAdvSCI( STATICVAR_HOLDER.SCIENCE.SCALED["eng"][0].costInfo )
function getProjectCostAdvSCI(costInfo, debugInfo = ""){
     var cost = [];

     var nn = drawFromRandomDistro(costInfo.sciCtDistro,"yes",0,"getProjectCostAdv.chooseNN "+debugInfo + " ["+costInfo+"]") + 1;

     var idxSet = new Set();
     for(var i=0; i < nn; i++){
       var costIdxProb = [];
       var costIdxIdx = [];
       for( var k=0; k < costInfo.sciFields.length; k++){
         if(!idxSet.has(k)){
           costIdxIdx.push( k )
           costIdxProb.push( costInfo.sciFields[k][1] )
         }
       }
       var idxIdx = drawFromRandomDistro(costIdxProb,"ifLow",0,"getProjectCostAdv.chooseIdxIdx "+debugInfo);

       if(idxIdx >= 0){
           //buffer = buffer + costInfo.sciFields[idx][1];
           var idx = costIdxIdx[idxIdx];
           idxSet.add( idx  );
           cost.push( [ costInfo.sciFields[idx][0]+"_SCIENCE_FREE", 1 / Math.pow(Math.pow(2,i),4) ] );
       }
     }
     return cost;
}
GAME_GLOBAL.getProjectCostAdvSCI=getProjectCostAdvSCI;



function getProjectCostAdv(costInfo, techlvl, debugInfo = ""){
     var cost = [];

     var nn = drawFromRandomDistro(costInfo.sciCtDistro,"yes",0,"getProjectCostAdv.chooseNN "+debugInfo + " ["+costInfo+"]") + 1;

     var idxSet = new Set();
     for(var i=0; i < nn; i++){
       var costIdxProb = [];
       var costIdxIdx = [];
       for( var k=0; k < costInfo.sciFields.length; k++){
         if(!idxSet.has(k)){
           costIdxIdx.push( k )
           costIdxProb.push( costInfo.sciFields[k][1] )
         }
       }
       var idxIdx = drawFromRandomDistro(costIdxProb,"ifLow",0,"getProjectCostAdv.chooseIdxIdx "+debugInfo);

       if(idxIdx >= 0){
           //buffer = buffer + costInfo.sciFields[idx][1];
           var idx = costIdxIdx[idxIdx];
           idxSet.add( idx  );
           cost.push( [ costInfo.sciFields[idx][0]+"_SCIENCE_FREE", getRandomBaseCost(techlvl) / Math.pow(i+1,2) ] );
       }
     }
     return cost;
}
GAME_GLOBAL.getProjectCostAdv=getProjectCostAdv;

function getProjectCostWithBase(costInfo, baseCost){
     var cost = [];

     var rr = Math.random();
     var nn = 0;
     while(nn < costInfo.sciCtDistroCS.length && rr >= costInfo.sciCtDistroCS[nn]){
         nn++;
     }
     nn++;


     var idxSet = new Set();
     for(var i=0; i < nn; i++){
       var rx = Math.random();
       var idx = -1;
       var buffer = 0;
       for( var k=0; k < costInfo.sciFieldsCS.length; k++){
           if( idxSet.has(k) ){
               buffer = buffer + costInfo.sciFields[k][1];
           } else if( costInfo.sciFieldsCS[k][0] - buffer <= rx && rx < costInfo.sciFieldsCS[k][1] - buffer ){
               idx = k;
           }
       }
       if(idx >= 0){
           //buffer = buffer + costInfo.sciFields[idx][1];
           idxSet.add(idx);
           cost.push(  [costInfo.sciFields[idx][0]+"_SCIENCE_FREE", baseCost / (1+i)] );
       }
     }
     return cost;
}
GAME_GLOBAL.getProjectCostWithBase=getProjectCostWithBase;





STATICVAR_HOLDER.multiProjectUnlockLevel = 6;
STATICVAR_HOLDER.multiProjectIdxScale = 5;


function getMultiProject(pp){
  var plvl = this.GAME.STATS.SCIENCE_MULTICT[ pp.projectID ] + 1;
  var ap = { uid : pp.projectID+"_"+plvl,projectID : pp.projectID, desc : pp.desc}
  if(plvl == -1){
    ap.projectTitle = pp.projectTitle
  } else {
    ap.projectTitle = pp.projectTitle + " " + plvl;
  }
  ap.projectType = pp.projectType;
  if(pp.cost){
    ap.cost = []
    for(var i=0; i < pp.cost.length; i++){
        ap.cost[i] = [pp.cost[i][0] + "_SCIENCE_FREE", pp.cost[i][1]];
    }
  } else {
    ap.cost = this.GAME.getProjectCostAdvSCI(pp.costInfo, "[SCALED."+pp.projectTitle+"]");
  } 
  ap.idx  = STATICVAR_HOLDER.multiProjectUnlockLevel + this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] * 5;
  this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] = this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] + 1;
  
  //this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] = this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] + 1;
  //this.addNewProject(ap);
  return ap;
  //ap.cost =
}

//fix AP.IDX SOMEHOW?!?
function getScaledProject(pp){
  var ap = { uid : pp.projectID, projectTitle : pp.projectTitle,projectID : pp.projectID, desc : pp.desc, effect : pp.effect, scitype : pp.scitype}
  ap.projectType = pp.projectType;
  if(pp.cost){
    ap.cost = []
    for(var i=0; i < pp.cost.length; i++){
        ap.cost[i] = [pp.cost[i][0] + "_SCIENCE_FREE", pp.cost[i][1]];
    }
  } else {
    ap.cost = this.GAME.getProjectCostAdvSCI(pp.costInfo, "[SCALED."+pp.projectTitle+"]");
  } 
  ap.idx  = 100;
  var lockArray = STATS.SCIENCE_LOCKED["SCALED"][pp.scitype];
  var idx = lockArray.indexOf( pp.idx );
  //lockArray.splice(idx,1);
  //this.addNewProject(ap);
  //var lockArray = STATS.SCIENCE_LOCKED["SCALED"][pp.scitype];
  //var idx = lockArray.indexOf( pp.idx );
  //lockArray.splice(idx,1);
  
  return ap;
  //ap.cost =
}
function getSimpleProject(pp){
  console.log("creating project: "+pp.projectID);
  var ap = { uid : pp.projectID, projectTitle : pp.projectTitle,projectID : pp.projectID, desc : pp.desc, effect : pp.effect, scitype : pp.scitype, prereqTechs : pp.prereqTechs, idx:pp.idx}
  ap.projectType = pp.projectType;
  if(pp.cost){
    ap.cost = []
    for(var i=0; i < pp.cost.length; i++){
        ap.cost[i] = [pp.cost[i][0] + "_SCIENCE_FREE", pp.cost[i][1]];
    }
  } else {
    ap.cost = this.GAME.getProjectCostAdvSCI(pp.costInfo, "[SCALED."+pp.projectTitle+"]");
  }
  console.log("                "+ap.uid+":"+ap.cost[0][0]+" / "+fmtSI(ap.cost[0][1]));

  return ap;
}

GAME_GLOBAL.getMultiProject=getMultiProject;
GAME_GLOBAL.getScaledProject=getScaledProject;


function addMultiProject(pp, techlvl){
  var plvl = this.GAME.STATS.SCIENCE_MULTICT[ pp.projectID ] + 1;
  var ap = { uid : pp.projectID+"_"+plvl,projectID : pp.projectID, desc : pp.desc,scitype:pp.scitype}
  if(plvl == -1){
    ap.projectTitle = pp.projectTitle
  } else {
    ap.projectTitle = pp.projectTitle + " " + plvl;
  }
  ap.projectType = pp.projectType;
  if(pp.costInfo == null){
      console.log("costinfo null!");
      console.log("    pp: "+pp.projectTitle);
  }
  if(null == pp.costField){
    console.log("costfield null!");
    console.log("    pp: "+pp.projectTitle);
  }
  if(null == pp.costMult){
    console.log("costMult null!");
    console.log("    pp: "+pp.projectTitle);
  }
  //ap.cost = this.GAME.getProjectCost(pp.costField,techlvl,pp.costMult);
  ap.cost = this.GAME.getProjectCostAdvSCI(pp.costInfo, "[MULTI."+pp.projectTitle+"]");
  ap.idx  = STATICVAR_HOLDER.multiProjectUnlockLevel + this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] * 5;

  this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] = this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] + 1;
  this.addNewProject(ap);
  return ap;
  //ap.cost =
}
function addScaledProject(pp, techlvl){
  var ap = { uid : pp.projectID, projectTitle : pp.projectTitle,projectID : pp.projectID, desc : pp.desc, effect : pp.effect, scitype : pp.scitype}
  ap.projectType = pp.projectType;
  ap.cost = this.GAME.getProjectCostAdv(pp.costInfo, "[SCALED."+pp.projectTitle+"]");
  ap.idx = 100; //FIX ME!
  var lockArray = STATS.SCIENCE_LOCKED["SCALED"][pp.scitype];
  var idx = lockArray.indexOf( pp.idx );
  lockArray.splice(idx,1);
  this.addNewProject(ap);
  return ap;
  //ap.cost =
}


function addNewScaledProject(ap){
  var lockArray = STATS.SCIENCE_LOCKED["SCALED"][pp.scitype];
  var idx = lockArray.indexOf( pp.idx );
  lockArray.splice(idx,1);
  this.addNewProject(ap);
}
function addNewMultiProject(ap){
  this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] = this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] + 1;
  this.addNewProject(ap);
}


GAME_GLOBAL.addScaledProject = addScaledProject;

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
STATS.SCIENCE_LOCKSET = new Set();
STATS.SCIENCE_DONESET = new Set();

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
         STATS.SCIENCE_LOCKSET.add(pp[k].projectID);
      }
    }
}

if(true){
    //for(var i=0; i < STATICVAR_HOLDER.SCIENCE.TECHTREE.length; i++){
    Object.keys( STATICVAR_HOLDER.SCIENCE.TECHTREE ).forEach( function(key,index){
       var pp = STATICVAR_HOLDER.SCIENCE.TECHTREE[key];
       STATS.SCIENCE_LOCKSET.add( pp.projectID  );
       STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[ pp.projectID ] = pp;
    })

    STATS.TECHTREE_ROOTS = new Set();
    //var techtreekeys = 
    Object.keys( STATICVAR_HOLDER.SCIENCE.TECHTREE ).forEach( function(key,index){
      if(STATICVAR_HOLDER.SCIENCE.TECHTREE[key].prereqTechs.length == 0){
        STATS.SCIENCE_LOCKSET.delete(key);
        STATS.TECHTREE_ROOTS.add( key );
      }
    })
}

Object.keys( STATICVAR_HOLDER.SCIENCE.PROJECTTABLE ).forEach(function(key){
  var pp = STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[key];
  pp.themeID = "UNK";
  if( pp.cost ){
    pp.themeID = pp.cost[0][0].slice(0,3);
  } else if(pp.costInfo){
    pp.themeID = pp.costInfo.sciFields[0][0].slice(0,3);
  }
})

for(var j=0; j < SCIENCEUNIV_PROJECT_TYPES.length; j++){
  var protype = SCIENCEUNIV_PROJECT_TYPES[j];
  STATS.SCIENCE_LOCKED[protype] = [];
  var pp = STATICVAR_HOLDER.SCIENCE[protype]
  for(var k=0; k < pp.length; k++){
         STATS.SCIENCE_LOCKED[protype][k] = k;
         STATICVAR_HOLDER.SCIENCE.PROJECTTABLE[ pp[k].projectID ] = pp[k];
  }
}

/*

New science pricing system:

STATICVAR_HOLDER={}
STATS={}

*/


function getSciencePriceAtLevel(lvl){
   return Math.pow(STATICVAR_HOLDER.LEVELLED_SCIENCE_POWERMOD,lvl) * STATICVAR_HOLDER.LEVELLED_SCIENCE_BASE
}
//fmtSI(getSciencePriceAtLevel(1))
function getPrice( scitype, amt , unlock = false, levelmod = 0, accum = 0, verbose = false){
  if(verbose){ console.log("     ["+scitype+"/"+amt+"/"+levelmod+"/"+fmtSI(accum)+"]:") }
  if(scitype.endsWith("_SCIENCE_FREE")){
      var st = scitype.substring( 0,scitype.length - 13)
       if(verbose){ console.log("stripping suffix: \"" + st+"\"");}
      return getPrice(st,amt,unlock,levelmod,accum,verbose);
  }
    
  if(scitype == "basic"){
       if(verbose){  console.log("BASIC SCIENCE: " + st);}
      return amt;
  }

  if(amt == 0){
    if(verbose){ console.log("        RETURNING: "+fmtSI(accum)) }
    return accum;  
  }
  var scilvl = STATS.SCIENCE_LEVEL[scitype] + levelmod;
  var lvlCost = getSciencePriceAtLevel( Math.floor(scilvl) );
  var amtLeftToNextLevel = Math.ceil(scilvl) - scilvl;
  if(amtLeftToNextLevel == 0){
    if(verbose){ console.log("        amtToNext: "+amtLeftToNextLevel) }
    amtLeftToNextLevel = 1;    
  }
  if(verbose){ console.log("        amtToNext: "+amtLeftToNextLevel) }

  if(amt > amtLeftToNextLevel){
    if(verbose){ console.log("           finish lvl: "+scilvl) }
    if(verbose){ console.log("          level value: "+fmtSI(lvlCost) ) }
    if(verbose){ console.log("            level amt: "+amtLeftToNextLevel ) }
    if(verbose){ console.log("             calc amt: "+fmtSI(lvlCost*amtLeftToNextLevel) ) }
    
    if(verbose){ console.log("        accum:"+fmtSI(accum + lvlCost * amtLeftToNextLevel)) }
    var newLevelMod = levelmod + amtLeftToNextLevel
    //var outPrice = 
    if(unlock){
          STATS.SCIENCE_LEVEL[scitype] = Math.round(STATS.SCIENCE_LEVEL[scitype] + amtLeftToNextLevel);
          newLevelMod = 0;
    }
    return getPrice(scitype, amt - amtLeftToNextLevel, unlock, newLevelMod, accum + lvlCost * amtLeftToNextLevel)
  } else {
    if(verbose){ console.log("        partial level: "+scilvl) }
    if(verbose){ console.log("          level value: "+fmtSI(lvlCost) ) }
    if(verbose){ console.log("            level amt: "+amt ) }
    if(verbose){ console.log("             calc amt: "+fmtSI(lvlCost*amt) ) }

    if(unlock){
      STATS.SCIENCE_LEVEL[scitype] = STATS.SCIENCE_LEVEL[scitype] + amt;
    }
    if(verbose){ console.log("        RETURNING: "+fmtSI(lvlCost * amt + accum)) }
    return lvlCost * amt + accum
  }
}

function clearScienceLevelsToBase(){
    STATS.SCIENCE_LEVEL = {
      bio: 1, bio0:1, bio1: 1, bio2:1,
      eng: 1, eng0:1, eng1: 1, eng2:1,
      psy: 1, psy0:1, psy1: 1, psy2:1
   }
}

/*

fmtSI(getPrice("bio",0.5))
fmtSI(getPrice("bio",1))
fmtSI(getPrice("bio",1.5))
fmtSI(getPrice("bio",4))

fmtSI(getPrice("bio",0.5,true))

console.log( fmtSI(getPrice("bio",1.3,true)))
console.log( fmtSI(getPrice("bio",0.7,true)))

clearScienceLevelsToBase()
console.log( fmtSI(getPrice("bio",1.25,true) + getPrice("bio",0.75,true)))
clearScienceLevelsToBase()
console.log( fmtSI(getPrice("bio",0.75,true) + getPrice("bio",1.25,true)))


clearScienceLevelsToBase()
console.log( fmtSI(getPrice("bio",1.375,true) + getPrice("bio",0.625,true)))
clearScienceLevelsToBase()
console.log( fmtSI(getPrice("bio",0.625,true) + getPrice("bio",1.375,true)))


*/
