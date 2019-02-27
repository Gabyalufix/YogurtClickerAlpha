





STATICVAR_HOLDER.PHASEDATA = {
    bio_SCIENCE_UNLOCK:{  statID:"bio_SCIENCE_UNLOCK",
              statTitle: "bio_SCIENCE_UNLOCK",elemids:["BIORESEARCH_SLIDER_PANEL"],sliders:[["botSliderPct7","botSliderCheck7"]], 
       onEffect: function(){
          if(( STATS.PHASE_STATUS["bio_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SCIENCE_UNLOCK"])){
            document.getElementById("DATABANK_basic").style.display = "none";
          }
          document.getElementById("DATABANK_MINI").style.display = "block";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 1;
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
       },
       offEffect: function(){
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 0;
          document.getElementById("DATABANK_basic").style.display = "block";
          console.log("DATABANKMINI_"+this.sciname+": opacity=0")
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }
          for(var i=0;i<this.sliders.length; i++){
            document.getElementById(this.sliders[i][1]).checked = true;
            document.getElementById(this.sliders[i][0]).value = 0;
          }
       },sciname:"bio"
     },
    eng_SCIENCE_UNLOCK:{  statID:"bio_SCIENCE_UNLOCK",
              statTitle: "bio_SCIENCE_UNLOCK",
              
       onEffect: function(){
          if(( STATS.PHASE_STATUS["bio_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SCIENCE_UNLOCK"])){
            document.getElementById("DATABANK_basic").style.display = "none";
          }
          document.getElementById("DATABANK_MINI").style.display = "block";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 1;
       },
       offEffect: function(){
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 0;
          document.getElementById("DATABANK_basic").style.display = "block";
          console.log("DATABANKMINI_"+this.sciname+": opacity=0")
       },sciname:"eng"
     },
    psy_SCIENCE_UNLOCK:{  statID:"bio_SCIENCE_UNLOCK",
              statTitle: "bio_SCIENCE_UNLOCK",
              
       onEffect: function(){
          if(( STATS.PHASE_STATUS["bio_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SCIENCE_UNLOCK"])){
            document.getElementById("DATABANK_basic").style.display = "none";
          }
          document.getElementById("DATABANK_MINI").style.display = "block";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 1;
       },
       offEffect: function(){
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 0;
          document.getElementById("DATABANK_basic").style.display = "block";
          console.log("DATABANKMINI_"+this.sciname+": opacity=0")
       },sciname:"psy"
     },
    bio_SUBFIELD_UNLOCK:{  statID:"bio_SUBFIELD_UNLOCK",
       statTitle: "bio_SUBFIELD_UNLOCK",
       onEffect: function(){
          if(( STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("DATABANK_DIV").style.display = "block";
          document.getElementById("DATABANK_bio").style.display = "block";
          document.getElementById("DATABANKMINI_bio").style.opacity = 0;
          document.getElementById("bio_SLIDER_PANEL").style.display="block";
          document.getElementById("SCIENCEFOCUS_DIV").style.display="block";
       },
       offEffect: function(){
          document.getElementById("DATABANK_bio").style.display = "none";
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_DIV").style.display = "none";
            document.getElementById("SCIENCEFOCUS_DIV").style.display="none";
          }
          
          if( STATS.PHASE_STATUS[this.sciname+"_SCIENCE_UNLOCK"] ){
            document.getElementById("DATABANKMINI_bio").style.opacity = 1;
            document.getElementById("DATABANK_MINI").style.display = "block";
          }
            document.getElementById("bio_SLIDER_PANEL").style.display="none";

       },sciname:"bio"
     },
    eng_SUBFIELD_UNLOCK:{  statID:"eng_SUBFIELD_UNLOCK",
       statTitle: "eng_SUBFIELD_UNLOCK",
       onEffect: function(){
          if(( STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("DATABANK_DIV").style.display = "block";
          document.getElementById("DATABANK_eng").style.display = "block";
          document.getElementById("DATABANKMINI_eng").style.opacity = 0;
          document.getElementById("eng_SLIDER_PANEL").style.display="block";
          document.getElementById("SCIENCEFOCUS_DIV").style.display="block";
       },
       offEffect: function(){
          document.getElementById("DATABANK_eng").style.display = "none";
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_DIV").style.display = "none";
            document.getElementById("SCIENCEFOCUS_DIV").style.display="none";
          }
          if( STATS.PHASE_STATUS[this.sciname+"_SCIENCE_UNLOCK"] ){
          document.getElementById("DATABANKMINI_eng").style.opacity = 1;
          document.getElementById("DATABANK_MINI").style.display = "block";
          }
            document.getElementById("eng_SLIDER_PANEL").style.display="none";
       },sciname:"eng"
     },
    psy_SUBFIELD_UNLOCK:{  statID:"psy_SUBFIELD_UNLOCK",
       statTitle: "psy_SUBFIELD_UNLOCK",
       onEffect: function(){
          if(( STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("DATABANK_DIV").style.display = "block";
          document.getElementById("DATABANK_psy").style.display = "block";
          document.getElementById("DATABANKMINI_psy").style.opacity = 0;
          document.getElementById("psy_SLIDER_PANEL").style.display="block";
          document.getElementById("SCIENCEFOCUS_DIV").style.display="block";
       },
       offEffect: function(){
          document.getElementById("DATABANK_psy").style.display = "none";
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_DIV").style.display = "none";
            document.getElementById("SCIENCEFOCUS_DIV").style.display="none";
          }
          if( STATS.PHASE_STATUS[this.sciname+"_SCIENCE_UNLOCK"] ){
          document.getElementById("DATABANKMINI_psy").style.opacity = 1;
          document.getElementById("DATABANK_MINI").style.display = "block";
          }
          document.getElementById("psy_SLIDER_PANEL").style.display="none";

       },sciname:"psy"
     },
    photosynthesis:{  statID:"photo_synthesis",
       statTitle: "photo_synthesis",
       onEffect: function(){
          document.getElementById("biomassSliderPct").value = 10000;
          document.getElementById("PHOTOSYNTHESIS_CONTROL_SLIDERPANEL").style.display = "block";
          document.getElementById("GREENWORLD_PWR_CONTROLPANEL").style.display = "block";
       },
       offEffect: function(){
          document.getElementById("biomassSliderPct").value = 10000;
          document.getElementById("PHOTOSYNTHESIS_CONTROL_SLIDERPANEL").style.display = "none";
          document.getElementById("GREENWORLD_PWR_CONTROLPANEL").style.display = "none";
          
       },sciname:"psy"
     },
    starship_construction:{  statID:"starship_construction",
       statTitle: "starship_construction", 
       onEffect: function(){
          document.getElementById("SHIPYARD_DIV").style.display = "block"
          document.getElementById("FLEETREPORT_DIV").style.display = "block"
          document.getElementById("STARSHIP_SLIDER_DIV").style.display = "block"
       },
       offEffect: function(){
          document.getElementById("SHIPYARD_DIV").style.display = "none"
          document.getElementById("FLEETREPORT_DIV").style.display = "none"
          document.getElementById("STARSHIP_SLIDER_DIV").style.display = "none"
          document.getElementById("botSliderCheck5").checked = true;
          document.getElementById("botSliderPct5").value = 0;
       }
     },
    intel_report:{  statID:"intel_report",
       statTitle: "intel_report", elemid:"INTELREPORT_DIV",
       onEffect: function(){
          document.getElementById(this.elemid).style.display = "block"
       },
       offEffect: function(){
          document.getElementById(this.elemid).style.display = "none"
       }
     },
    strategicCommand:{  statID:"strategicCommand",
       statTitle: "strategicCommand", elemid:"STRATEGICCOMMAND_DIV",
       onEffect: function(){
          document.getElementById(this.elemid).style.display = "block"
       },
       offEffect: function(){
          document.getElementById(this.elemid).style.display = "none"
       }
     },
    military_report:{  statID:"military_report",
       statTitle: "military_report", elemid:"MILITARYREPORT_DIV",
       onEffect: function(){
          document.getElementById(this.elemid).style.display = "block"
       },
       offEffect: function(){
          document.getElementById(this.elemid).style.display = "none"
       }
     },
    territory_report:{  statID:"territory_report",
       statTitle: "territory_report", elemid:"TERRITORYREPORT_DIV",
       onEffect: function(){
          document.getElementById(this.elemid).style.display = "block"
       },
       offEffect: function(){
          document.getElementById(this.elemid).style.display = "none"
       }
     },
    soulswarm_matrix:{  statID:"soulswarm_matrix",
       statTitle: "soulswarm_matrix", elemids:["SOULSWARM_DIV","COMPUTE_CLUSTER_DIV"],
       onEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
       },
       offEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }      
       }
     },
    deep_thought:{  statID:"deep_thought",
       statTitle: "deep_thought", elemids:["ANALYTIC_ENGINE_SLIDERPANEL"],
       onEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
       },
       offEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }      
       }
     },
    World_Forge:{  statID:"World_Forge",
       statTitle: "World_Forge", elemids:["WORLD_FORGE_DIV"],
       onEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
       },
       offEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }      
       }
     },
    Matter_Panel:{  statID:"Matter_Panel",
       statTitle: "Matter_Panel", elemids:["MATTER_PANEL_DIV"],
       onEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
       },
       offEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }      
       }
     },
    Energy_Panel:{  statID:"Energy_Panel",
       statTitle: "Energy_Panel", elemids:["ENERGY_CONTROL_PANEL","SOLARARRAY_SLIDER_DIV"], sliders:[["botSliderPct7","botSliderCheck7"]],
       onEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }

       },
       offEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }
          for(var i=0;i<this.sliders.length; i++){
            document.getElementById(this.sliders[i][1]).checked = true;
            document.getElementById(this.sliders[i][0]).value = 0;
          }
          
       }
     },
    Advanced_Energy_Panel:{  statID:"Advanced_Energy_Panel",
       statTitle: "Advanced_Energy_Panel", elemids:[], modalElemIds:["ADVANCED_ENERGY_CONTROL_PANEL"],
       onEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
          for(var i=0;i<this.modalElemIds.length; i++){
            document.getElementById(this.modalElemIds[i]).style.display = "block"
            document.getElementById(this.modalElemIds[i]).overrideMode = false;
          }
       },
       offEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }
          for(var i=0;i<this.modalElemIds.length; i++){
            document.getElementById(this.modalElemIds[i]).style.display = "none"
            document.getElementById(this.modalElemIds[i]).overrideMode = true;
          }
       }
     },
}

STATICVAR_HOLDER.PHASE_STATUS_LIST = [];

Object.keys( STATICVAR_HOLDER.PHASEDATA ).forEach( function(key,index){
  STATICVAR_HOLDER.PHASE_STATUS_LIST.push(key);
})


STATS.PHASE_STATUS = {};


for(var i=0; i<STATICVAR_HOLDER.PHASE_STATUS_LIST.length; i++){
  var sid = STATICVAR_HOLDER.PHASE_STATUS_LIST[i]
  STATS.PHASE_STATUS[ sid ] = false;
  
  STATICVAR_HOLDER.PHASEDATA[sid].offEffect();
}

function unlockStatus(sid){
  STATS.PHASE_STATUS[sid] = true;
  STATICVAR_HOLDER.PHASEDATA[sid].onEffect();
  STATICVAR_HOLDER.PHASEDATA[sid].cheatButton.setStatus();
}
function lockStatus(sid){
  STATS.PHASE_STATUS[sid] = false;
  STATICVAR_HOLDER.PHASEDATA[sid].offEffect();
  STATICVAR_HOLDER.PHASEDATA[sid].cheatButton.setStatus();
}
function resetStatus(){
    for(var i=0; i<STATICVAR_HOLDER.PHASE_STATUS_LIST.length; i++){
      var sid = STATICVAR_HOLDER.PHASE_STATUS_LIST[i]
      STATS.PHASE_STATUS[ sid ] = false;
      STATICVAR_HOLDER.PHASEDATA[sid].offEffect();
      STATICVAR_HOLDER.PHASEDATA[sid].cheatButton.setStatus();
    }
}

function enactCurrentStatusSettings(){
   resetStatus();
   for(var i=0; i<STATICVAR_HOLDER.PHASE_STATUS_LIST.length; i++){
     var sid = STATICVAR_HOLDER.PHASE_STATUS_LIST[i]
     if( STATS.PHASE_STATUS[ sid ] ){
       unlockStatus(sid);
     }
   }
}
GAME_GLOBAL.enactCurrentStatusSettings=enactCurrentStatusSettings;



/*

unlockStatus("bio_SUBFIELD_UNLOCK")
unlockStatus("eng_SUBFIELD_UNLOCK")
unlockStatus("psy_SUBFIELD_UNLOCK")


*/





