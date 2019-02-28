

STATICVAR_HOLDER.SCIENCE = {};
SCIENCE_PROJECT_TYPES = ["SCALED","STATICLEVEL","MULTI"]
//"TECHTREE",
RANDOM_SCIENCE_TYPES =                              ["SCALED","MULTI","SUPER","HYPER"]
STATICVAR_HOLDER.RANDOM_SCIENCE_TYPES_PROBS_BASE =  [1,        1.5,   0.02,    0.001];
STATS.RANDOM_SCIENCE_TYPES_PROBS = STATICVAR_HOLDER.RANDOM_SCIENCE_TYPES_PROBS_BASE.slice();

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
        descShort:"Increases the rate of "+iis.prodTitle.toLowerCase()+"",
        prereqTechs:iis.upgradePrereqTechs
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
        descShort:"Decreases energy usage of "+iis.prodTitle.toLowerCase()+"",
        prereqTechs:iis.upgradePrereqTechs
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
        descShort:"Decreases waste matter byproduct production of "+iis.prodTitle.toLowerCase()+"",
        prereqTechs:iis.upgradePrereqTechs
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
        descShort:"Decreases matter usage (and waste production) of "+iis.prodTitle.toLowerCase()+"",
        prereqTechs:iis.upgradePrereqTechs
      }
      STATICVAR_HOLDER.SCIENCE.MULTI[scitype].push( STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY[ productID + "-INPUT" ] );
  }
}



STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-PROD"]["costInfo"] = {sciFields:[["eng1",1],["eng0",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-ENER"]["costInfo"] = {sciFields:[["eng1",1],["eng0",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Feedstock-WAST"]["costInfo"] = {sciFields:[["eng1",1],["eng0",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-PROD"]["costInfo"] = {sciFields:[["eng0",1],["eng1",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-ENER"]["costInfo"] = {sciFields:[["eng0",1],["eng1",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botbots-WAST"]["costInfo"] = {sciFields:[["eng0",1],["eng1",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-PROD"]["costInfo"] = {sciFields:[["eng2",1],["eng0",0.25],["eng1",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-ENER"]["costInfo"] = {sciFields:[["eng2",1],["eng0",0.25],["eng1",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Botpwr-WAST"]["costInfo"] = {sciFields:[["eng2",1],["eng0",0.25],["eng1",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-PROD"]["costInfo"] = {sciFields:[["eng0",1],["eng1",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-ENER"]["costInfo"] = {sciFields:[["eng0",1],["eng1",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Ship-WAST"]["costInfo"] = {sciFields:[["eng0",1],["eng1",0.25],["eng2",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-PROD"]["costInfo"] = {sciFields:[["psy0",0.5],["eng2",0.25],["eng1",0.25],["psy1",0.1]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-ENER"]["costInfo"] = {sciFields:[["psy0",0.5],["eng2",0.25],["eng1",0.25],["psy1",0.1]], sciCtDistro:[0.7,0.25,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Compute-WAST"]["costInfo"] = {sciFields:[["psy0",0.5],["eng2",0.25],["eng1",0.25],["psy1",0.1]], sciCtDistro:[0.7,0.25,0.05]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-PROD"]["costInfo"] = {sciFields:[["bio0",0.5],["bio1",0.25],["bio2",0.25],["eng1",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-ENER"]["costInfo"] = {sciFields:[["bio0",0.5],["bio1",0.25],["bio2",0.25],["eng1",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Digested-WAST"]["costInfo"] = {sciFields:[["bio0",0.5],["bio1",0.25],["bio2",0.25],["eng1",0.1],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-PROD"]["costInfo"] = {sciFields:[["bio0",0.25],["bio1",0.5],["bio2",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-ENER"]["costInfo"] = {sciFields:[["bio0",0.25],["bio1",0.5],["bio2",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biopwr-WAST"]["costInfo"] = {sciFields:[["bio0",0.25],["bio1",0.5],["bio2",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-PROD"]["costInfo"] = {sciFields:[["bio0",0.25],["bio1",0.5],["bio2",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-ENER"]["costInfo"] = {sciFields:[["bio0",0.25],["bio1",0.5],["bio2",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Yogurt-WAST"]["costInfo"] = {sciFields:[["bio0",0.25],["bio1",0.5],["bio2",0.25],["eng2",0.25],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-PROD"]["costInfo"] = {sciFields:[["bio0",0.2],["bio1",0.6],["bio2",0.2],["eng1",0.2],["eng0",0.2],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-ENER"]["costInfo"] = {sciFields:[["bio0",0.2],["bio1",0.6],["bio2",0.2],["eng1",0.2],["eng0",0.2],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Biomass-WAST"]["costInfo"] = {sciFields:[["bio0",0.2],["bio1",0.6],["bio2",0.2],["eng1",0.2],["eng0",0.2],["psy1",0.05],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-PROD"]["costInfo"] = {sciFields:[["bio0",0.5],["bio1",0.25],["bio2",0.25],["eng1",0.1],["psy1",0.15],["psy0",0.05]], sciCtDistro:[0.2,0.50,0.3]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-ENER"]["costInfo"] = {sciFields:[["bio0",0.5],["bio1",0.25],["bio2",0.25],["eng1",0.1],["psy1",0.15],["psy0",0.05]], sciCtDistro:[0.2,0.50,0.3]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["TransmuteYogurt-WAST"]["costInfo"] = {sciFields:[["bio0",0.5],["bio1",0.25],["bio2",0.25],["eng1",0.1],["psy1",0.15],["psy0",0.05]], sciCtDistro:[0.2,0.50,0.3]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-PROD"]["costInfo"]      = {sciFields:[["bio0",0.2],["bio1",0.2],["bio2",0.6],["eng1",0.25],["psy1",0.2],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-ENER"]["costInfo"]      = {sciFields:[["bio0",0.2],["bio1",0.2],["bio2",0.6],["eng1",0.25],["psy1",0.2],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Bioweapons-WAST"]["costInfo"]      = {sciFields:[["bio0",0.2],["bio1",0.2],["bio2",0.6],["eng1",0.25],["psy1",0.2],["psy0",0.025]], sciCtDistro:[0.7,0.29,0.01]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteFerment-PROD"]["costInfo"]    = {sciFields:[["bio0",0.2],["bio1",0.2],["bio2",0.6],["eng1",0.25],["psy1",0.2],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteFerment-ENER"]["costInfo"]    = {sciFields:[["bio0",0.2],["bio1",0.2],["bio2",0.6],["eng1",0.25],["psy1",0.2],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteReprocess-PROD"]["costInfo"]  = {sciFields:[["bio0",0.2],["bio1",0.2],["bio2",0.6],["eng1",0.25],["psy1",0.2],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["WasteReprocess-ENER"]["costInfo"]  = {sciFields:[["bio0",0.2],["bio1",0.2],["bio2",0.6],["eng1",0.25],["psy1",0.2],["psy0",0.025]], sciCtDistro:[0.5,0.45,0.05]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-PROD"]["costInfo"]     = {sciFields:[["psy0",0.75],["psy1",0.75],["eng2",0.5]], sciCtDistro:[0.5,0.45,0.05]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-ENER"]["costInfo"]     = {sciFields:[["psy0",0.75],["psy1",0.75],["eng2",0.5]], sciCtDistro:[0.5,0.45,0.05]};

STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-ENER"]["costInfo"]     = {sciFields:[["bio0",0.33],["bio1",0.34],["bio2",0.33],["eng1",0.5],["psy1",0.5],["psy0",0.25]], sciCtDistro:[0.5,0.4,0.1]};
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-INPUT"]["costInfo"]    = {sciFields:[["bio0",0.33],["bio1",0.34],["bio2",0.33],["eng2",0.5],["psy1",0.5],["psy0",0.25]], sciCtDistro:[0.5,0.4,0.1]};

/*
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
***********************************
***********************************
***********************************
*/



STATICVAR_HOLDER.SCIENCE.TECHTREE = {
           TECHTREE_BIO:{projectTitle:"Biological Experimentation",projectID:"TECHTREE_BIO",projectType:"TECHTREE",
           costInfo: {sciFields:[["basic",1]], sciCtDistro:[1]},
           cost:[["basic",118000000000000000000]],
           effect:function(){
             unlockStatus("bio_SCIENCE_UNLOCK");
           },
           desc:"..." ,
           descShort:"...",
           prereqTechs: []},
           
           TECHTREE_ENG:{projectTitle:"Activate Analytic Engine",projectID:"TECHTREE_ENG",projectType:"TECHTREE",
           costInfo: {sciFields:[["basic",1]], sciCtDistro:[1]},
           cost:[["basic",118000000000000000000]],
           effect:function(){
             unlockStatus("eng_SCIENCE_UNLOCK");
           },
           desc:"..." ,
           descShort:"...",
           prereqTechs: []},
           
           TECHTREE_PSY:{projectTitle:"Activate Soulswarm Matrix",projectID:"TECHTREE_PSY",projectType:"TECHTREE",
           costInfo: {sciFields:[["basic",1]], sciCtDistro:[1]},
           cost:[["basic",118000000000000000000]],
           effect:function(){
             unlockStatus("psy_SCIENCE_UNLOCK");
           },
           desc:"..." ,
           descShort:"...",
           prereqTechs: []}
}

//function 

/*
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
***********************************
***********************************
***********************************
*/

//SCALED_SOULSYNTHESIS
//
//Science projects that can appear at any point in the tech progression
//       and can only be researched once.
//These generally unlock new abilities or provide a large boost to
//       one specific ability.
STATICVAR_HOLDER.SCIENCE.SCALED = {
  bio:[
          {projectTitle:"Compost Fermentation",projectID:"SCALED_COMPOST",projectType:"SCALED",
           costField:["bio_SCIENCE_FREE","bio1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           costInfo:{sciFields:[["bio0",0.8],["bio2",0.5],["eng1",0.25],["psy1",0.1],["psy0",0.05]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             var iix = STATS["INDUSTRY"]["WasteFerment"];
             var elem = document.getElementById("LOCKHIDE_"+iix.lockKey);
             elem.style.display = "block";
           },
           desc:"Develop a new method to compost waste material into Yogurt." ,
           descShort:"Develop a new method to compost waste material into Yogurt"},
          {projectTitle:"Bioweapons",projectID:"SCALED_BIOWEAPONS",projectType:"SCALED",
           costField:["bio_SCIENCE_FREE","bio2_SCIENCE_FREE","eng1_SCIENCE_FREE"], costMult:[1,1,1], rate:1,
           costInfo:{sciFields:[["bio2",0.75],["bio1",0.5],["bio2",0.5],["psy1",0.5],["psy0",0.05]], sciCtDistro:[0.5,0.45,0.05]},
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
           costInfo:{sciFields:[["eng1",0.75],["eng0",0.5],["bio1",0.5],["psy1",0.15],["psy0",0.05]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             var iix = STATS["INDUSTRY"]["WasteReprocess"];
             var elem = document.getElementById("LOCKHIDE_"+iix.lockKey);
             elem.style.display = "block";
           },
           desc:"Develop a new method to reprocess and recycle waste material into raw feedstock." ,
           descShort:"Develop a new method to reprocess and recycle waste material into raw feedstock."},
          {projectTitle:"YogurtMatter Transmutation",projectID:"SCALED_TRANSMUTEYOGURT",projectType:"SCALED",
           costField:["eng_SCIENCE_FREE","bio1_SCIENCE_FREE"], costMult:[2,2], rate:1,
           costInfo:{sciFields:[["eng1",1],["bio0",0.5],["eng2",0.25],["bio1",0.5],["psy1",0.15],["psy0",0.05]], sciCtDistro:[0.5,0.45,0.05]},
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
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Misdirection-Counterdetection Technology",projectID:"SCALED_STEALTHTECH",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Bioterrorism",projectID:"SCALED_BIOTERROR",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE","bio0_SCIENCE_FREE"], costMult:[1,1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Battleplate Training Regimen",projectID:"SCALED_BPTRAIN",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE","eng1_SCIENCE_FREE"], costMult:[1,1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Technology Theft",projectID:"SCALED_TECHSTEAL",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Sabotage",projectID:"SCALED_SABOTAGE",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Sabotage",projectID:"SCALED_SABOTAGE",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Counterintelligence",projectID:"SCALED_COINTEL",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy1_SCIENCE_FREE"], costMult:[1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Tactical Doctrine: High Risk, High Reward",projectID:"SCALED_STRATHIGHRISK",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE"], costMult:[1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Tactical Doctrine: Conservative",projectID:"SCALED_STRATLOWRISK",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE"], costMult:[1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Tactical Doctrine: Max Kill Ratio",projectID:"SCALED_STRATRATIO",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE"], costMult:[1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){
             console.log("project not yet implemented!")
           },
           desc:"" ,
           descShort:""},
          {projectTitle:"Battlemind",projectID:"SCALED_BATTLEMIND",projectType:"SCALED",
           costField:["psy_SCIENCE_FREE","psy2_SCIENCE_FREE","eng1_SCIENCE_FREE"], costMult:[1,1,1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
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






/*
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
******************************************************************************************************************************
***********************************
***********************************
***********************************
*/





//Science projects that can appear at any point in the tech progression
//       and can be researched more than once.
//These generally provide a small boost to one specific ability.

SCIENCEMULTI_PSY = [
          {projectTitle:"Assault Tactics",projectID:"MULTI_Psy_BattlePlateTactics_Assault",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){

           },
           desc:"...",
           descShort:"..."},
          {projectTitle:"Extermination Tactics",projectID:"MULTI_Psy_BattlePlateTactics_Exterminate",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){

           },
           desc:"...",
           descShort:"..."},
          {projectTitle:"Strike Tactics",projectID:"MULTI_Psy_BattlePlateTactics_Interdiction",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){

           },
           desc:"...",
           descShort:"..."},

          {projectTitle:"Heuristic Search Patterns",projectID:"MULTI_Psy_Scout_Explore",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.25],["eng2",0.05]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){

           },
           desc:"...",
           descShort:"..."},

          {projectTitle:"Heuristic Scanner Sweep",projectID:"MULTI_Psy_Scout_Recon",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.5],["psy0",0.25],["eng2",0.5]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){

           },
           desc:"...",
           descShort:"..."},

          {projectTitle:"Advanced Training Techniques",projectID:"MULTI_Psy_BattlePlate_Train",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.5],["eng0",0.5]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){

           },
           desc:"...",
           descShort:"..."},

          {projectTitle:"Combat Escort Schema",projectID:"MULTI_Psy_BattlePlate_Escort",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.5],["eng0",0.5]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){

           },
           desc:"...",
           descShort:"..."},

          {projectTitle:"Scoutship Avoidance Pattern",projectID:"MULTI_Psy_Scout_Survival",projectType:"MULTI",
           costField:["psy_SCIENCE_FREE"], costMult:[1], rate:1,
           costInfo:{sciFields:[["psy2",1],["psy1",0.75],["psy0",0.5],["eng1",0.5]], sciCtDistro:[0.5,0.45,0.05]},
           effect:function(){

           },
           desc:"...",
           descShort:"..."}];

STATICVAR_HOLDER.SCIENCE.MULTI["psy"] = STATICVAR_HOLDER.SCIENCE.MULTI["psy"].concat( SCIENCEMULTI_PSY );
