




STATICVAR_HOLDER.SCIENCE = {};
SCIENCE_PROJECT_TYPES = ["PROGRESS","SCALED","STATICLEVEL","MULTI"]
STATICVAR_HOLDER.SCIENCE.MULTI = {bio:[],eng:[],psy:[]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY = {};


BASE_MULTI_PROD_BONUS = 0.25;
BASE_MULTI_WASTERATE_MULT = 0.9;
BASE_MULTI_ENERGYRATE_MULT = 0.9;
BASE_MULTI_INPUTRATE_MULT = 0.975;


for(var i=0; i < GAME_GLOBAL.INDUSTRY_LIST.length; i++){
  var productID = GAME_GLOBAL.INDUSTRY_LIST[i];
  var iis = STATS["INDUSTRY"][productID]
  var projectIX = iis.sliderID+"_"+iis.sliderIDX;
  var scitype = iis.scitype;
  if(iis.upgradeSet == null){
     iis.upgradeSet = ["PROD","ENER","WAST"]
  }
  var upgradeSet = iis.upgradeSet;
  
  if(upgradeSet.includes("PROD")){
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
      STATICVAR_HOLDER.SCIENCE.MULTI[scitype].push( STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-PROD" ] );
  }
  if(upgradeSet.includes("ENER")){
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
      STATICVAR_HOLDER.SCIENCE.MULTI[scitype].push( STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-ENER" ] );
  }
  if(upgradeSet.includes("WAST")){
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
      STATICVAR_HOLDER.SCIENCE.MULTI[scitype].push( STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-WAST" ] );
  }
  if(upgradeSet.includes("INPUT")){
      STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-INPUT" ] = {
        projectTitle: iis.prodTitle+" Matter Usage", scitype : iis.scitype,
        projectID: "MULTI_STD_WASTE_"+productID,
        projectType: "MULTI",
        rate: 1,
        effect: function(){
                  STATS["WASTERATE_MULT"][projectIX] = STATS["WASTERATE_MULT"][projectIX] * BASE_MULTI_INPUTRATE_MULT;
               },
        desc:"Decreases matter usage (and waste production) of "+iis.prodTitle.toLowerCase()+" by "+roundTo((1 - BASE_MULTI_INPUTRATE_MULT*1)*100,1)+"%." ,
        descShort:"Decreases matter usage (and waste production) of "+iis.prodTitle.toLowerCase()+""
      }
      STATICVAR_HOLDER.SCIENCE.MULTI[scitype].push( STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-INPUT" ] );
  }
}

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





"","Bioweapons","WasteFerment","WasteReprocess"

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
  bio:[
          {projectTitle:"Compost Fermentation",projectID:"SCALED_COMPOST",projectType:"SCALED", 
           costField:["bio_SCIENCE_FREE","bio1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             var iix = STATS["INDUSTRY"]["WasteFerment"];
             var elem = document.getElementById("LOCKHIDE_"+iix.lockKey);
             elem.style.display = "block";
           },
           desc:"Develop a new method to compost waste material into Yogurt." , 
           descShort:"Develop a new method to compost waste material into Yogurt"},
          {projectTitle:"Bioweapons",projectID:"SCALED_BIOWEAPONS",projectType:"SCALED", 
           costField:["bio_SCIENCE_FREE","bio2_SCIENCE_FREE","eng1_SCIENCE_FREE"], costMult:[1,1,1], rate:1,
           effect:function(){
             var iix = STATS["INDUSTRY"]["Bioweapons"];
             var elem = document.getElementById("LOCKHIDE_"+iix.lockKey);
             elem.style.display = "block";
           },
           desc:"Develop horrific diseases to inflict on hostile populations." , 
           descShort:"Develop horrific diseases to inflict on hostile populations."}
  ],
  eng:[
          {projectTitle:"Waste Reprocessing",projectID:"SCALED_WASTEREPROCESS",projectType:"SCALED",
           costField:["eng_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             var iix = STATS["INDUSTRY"]["WasteReprocess"];
             var elem = document.getElementById("LOCKHIDE_"+iix.lockKey);
             elem.style.display = "block";
           },
           desc:"Develop a new method to reprocess and recycle waste material into raw feedstock." , 
           descShort:"Develop a new method to reprocess and recycle waste material into raw feedstock."},
          {projectTitle:"YogurtMatter Transmutation",projectID:"SCALED_TRANSMUTEYOGURT",projectType:"SCALED", 
           costField:["eng_SCIENCE_FREE","bio1_SCIENCE_FREE"], costMult:[2,2], rate:1,
           effect:function(){
             var iix = STATS["INDUSTRY"]["TransmuteYogurt"];
             var elem = document.getElementById("LOCKHIDE_"+iix.lockKey);
             elem.style.display = "block";
           },
           desc:"Develop a new method to reprocess and recycle waste material into raw feedstock." , 
           descShort:"Develop a new method to reprocess and recycle waste material into raw feedstock."}
  ],
  psy:[
          {projectTitle:"Soul Synthesis",projectID:"SCALED_SOULSYNTHESIS",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy0_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Misdirection-Counterdetection Technology",projectID:"SCALED_STEALTHTECH",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Bioterrorism",projectID:"SCALED_BIOTERROR",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE","bio0_SCIENCE_FREE"], costMult:[1,1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Battleplate Training Regimen",projectID:"SCALED_BPTRAIN",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE","eng1_SCIENCE_FREE"], costMult:[1,1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Technology Theft",projectID:"SCALED_TECHSTEAL",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Sabotage",projectID:"SCALED_SABOTAGE",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Sabotage",projectID:"SCALED_SABOTAGE",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Counterintelligence",projectID:"SCALED_COINTEL",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Tactical Doctrine: High Risk, High Reward",projectID:"SCALED_STRATHIGHRISK",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Tactical Doctrine: Conservative",projectID:"SCALED_STRATLOWRISK",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Tactical Doctrine: Max Kill Ratio",projectID:"SCALED_STRATRATIO",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE"], costMult:[1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""},
          {projectTitle:"Battlemind",projectID:"SCALED_BATTLEMIND",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE","eng1_SCIENCE_FREE"], costMult:[1,1,1], rate:1,
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" , 
           descShort:""}

  ],
  sum:[]
}
for(var i=0; i<SCIENCE_TYPES.length; i++){
   var sciname = SCIENCE_TYPES[i];
   for(var j=0; j < STATICVAR_HOLDER.SCIENCE.SCALED[sciname].length; j++){
      STATICVAR_HOLDER.SCIENCE.SCALED[sciname][j].idx = j;
      STATICVAR_HOLDER.SCIENCE.SCALED[sciname][j].scitype = sciname;
   }
}

//Science projects that can appear at any point in the tech progression 
//       and can be researched more than once.
//These generally provide a small boost to one specific ability.


/*

STATS["INDUSTRY"]["WasteReprocess"] = { sliderID: "bot", sliderIDX: 3, prodTitle: "Waste Reprocessing", inventoryType: "MATTER", scitype: "eng",
                                   baseProd:  0.001, 
                                   baseCost:  [["MATTER-Waste-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0, lockKey: "WASTEREPROCESS"}
STATS["INDUSTRY"]["WasteFerment"] = { sliderID: "bio", sliderIDX: 3, prodTitle: "Waste Reprocessing", inventoryType: "MATTER", scitype: "eng",
                                   baseProd:  0.001, 
                                   baseCost:  [["MATTER-Waste-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0, lockKey: "COMPOST"}
STATS["INDUSTRY"]["Bioweapons"] = { sliderID: "bio", sliderIDX: 2, prodTitle: "Grow Bioweapons", inventoryType: "MATTER", scitype: "bio",
                                   baseProd:  0.000157, 
                                   baseCost:  [["MATTER-Digested-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0, lockKey: "BIOWEAPONS"}
STATS["INDUSTRY"]["TransmuteYogurt"] = { sliderID: "bot", sliderIDX: 3, prodTitle: "Transmute Yogurt", inventoryType: "MATTER", scitype: "eng",
                                   baseProd:  0.00005, 
                                   baseCost:  [["MATTER-Feedstock-CT",1]],
                                   basePwr:   0.177000,
                                   baseWaste: 0, lockKey: "TRANSMUTEYOGURT"}


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


var SCIENCE_UNLOCK_THRESH_BASE = 50e23;
var SCIENCE_UNLOCK_THRESH_MULT = Math.pow(10,0.4)
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


function addMultiProject(pp, techlvl){
  var plvl = this.GAME.STATS.SCIENCE_MULTICT[ pp.projectID ] + 1;
  var ap = { uid : pp.projectID+"_"+techlvl+"_"+plvl,projectID : pp.projectID, desc : pp.desc}
  if(plvl == -1){
    ap.projectTitle = pp.projectTitle
  } else {
    ap.projectTitle = pp.projectTitle + " " + plvl;
  }
  ap.projectType = pp.projectType;
  if(null == pp.costField){
    console.log("costfield null!");
    console.log("    pp: "+pp.projectTitle);
  }
  
  ap.cost = this.GAME.getProjectCost(pp.costField,techlvl,pp.costMult);
  this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] = this.GAME.STATS.SCIENCE_MULTICT[ ap.projectID ] + 1;
  this.addNewProject(ap);
  return ap;
  //ap.cost = 
}
function addScaledProject(pp, techlvl){
  var ap = { uid : pp.projectID, projectTitle : pp.projectTitle,projectID : pp.projectID, desc : pp.desc, effect : pp.effect, scitype : pp.scitype}
  ap.projectType = pp.projectType;
  ap.cost = this.GAME.getProjectCost(pp.costField,techlvl,pp.costMult);
  var lockArray = STATS.SCIENCE_LOCKED["SCALED"][pp.scitype];
  var idx = lockArray.indexOf( pp.idx );
  lockArray.splice(idx,1);
  this.addNewProject(ap);
  return ap;
  //ap.cost = 
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


