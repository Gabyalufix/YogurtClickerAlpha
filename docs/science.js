




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

///////////////////////////////////////////////////////////////////////////////////////////////////

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

cumsum mults
Pick 1-2 types, probs given by MULT


*/
// [0: Cellular Processes][1: Biomechanoid Construction]   [2: Genetic Engineering]
// [0: Construction]      [1: matter & Material Science]   [2: High-Energy Physics]
// [0: Cognition]         [1: Creativity & Intuition]      [2: Strategy & Tactics]

//How to do point mods:
//

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


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-PROD"]["costField"] = ["eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-ENER"]["costField"] = ["eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-PROD"]["costMult"] = [1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["Computation-ENER"]["costMult"] = [1];


STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-ENER"]["costField"] = ["eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-INPUT"]["costField"] = ["eng0_SCIENCE_FREE"];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-ENER"]["costMult"] = [1];
STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-INPUT"]["costMult"] = [1];







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



var SCIENCE_UNLOCK_THRESH_BASE = 50e27;
var SCIENCE_UNLOCK_THRESH_MULT = Math.pow(10,0.4)
INVENTORY["SCIENCE-LEVEL-bio"] = 1
INVENTORY["SCIENCE-LEVEL-eng"] = 1
INVENTORY["SCIENCE-LEVEL-psy"] = 1
SCIENCE_UNLOCK_THRESH_BASE=SCIENCE_UNLOCK_THRESH_BASE;
SCIENCE_UNLOCK_THRESH_MULT=SCIENCE_UNLOCK_THRESH_MULT;
SCIENCE_UNLOCK_RATE=0.4;

INVENTORY.SCIENCE_DISCOVERED = [];
INVENTORY.SCIENCE_RESEARCHED = [];

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

function getRandomBaseCost(techlvl){
   return Math.pow( this.SCIENCE_UNLOCK_THRESH_MULT, Math.random() + techlvl) * this.SCIENCE_UNLOCK_THRESH_BASE
}

//getProjectCostAdv(STATICVAR_HOLDER.SCIENCE.MULTI_INDUSTRY["BioResearch-ENER"]["costInfo"],1)

function getProjectCostAdv(costInfo, techlvl){
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
		   cost.push( [ costInfo.sciFields[idx][0]+"_SCIENCE_FREE", getRandomBaseCost(techlvl) / (1+i) ] );
	   }
     }
     return cost;
}
GAME_GLOBAL.getProjectCostAdv=getProjectCostAdv;



function addMultiProject(pp, techlvl){
  var plvl = this.GAME.STATS.SCIENCE_MULTICT[ pp.projectID ] + 1;
  var ap = { uid : pp.projectID+"_"+plvl,projectID : pp.projectID, desc : pp.desc}
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
  ap.cost = this.GAME.getProjectCostAdv(pp.costInfo,techlvl);
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


