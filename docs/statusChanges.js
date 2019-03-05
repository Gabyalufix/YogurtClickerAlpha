



//RESEARCH_PROJECTS_DIV
function deactivateSlider(ss){
            document.getElementById(ss[1]).checked = true;
            document.getElementById(ss[0]).value = 0;
}
function activateSlider(ss){
  document.getElementById(ss[1]).checked = false;
}


function standard_onEffect(){
      if(this.elemids != null){
         for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
      }
      if(this.revelemids != null){
         for(var i=0;i<this.revelemids.length; i++){
            document.getElementById(this.revelemids[i]).style.display = "none"
          }
      }
      if(this.sliders != null){
          for(var i=0;i<this.sliders.length; i++){
            document.getElementById(this.sliders[i][1]).checked = false;
          }
      }
      if(this.classids_opacitymask != null){
          this.classids_opacitymask.forEach(function(cid){
            var elemList = document.getElementsByClassName(cid);
            for(var i=0; i < elemList.length;i++){
              elemList[i].style.opacity = 1
            }
          })
      }
      if(this.elems_opacitymask != null){
          this.elems_opacitymask.forEach(function(cid){
            var elem = document.getElementById(cid[0]);
            elem.style.opacity = cid[1][0];
          })
      }
      
      if(this.classids_buttondisable != null){
          this.classids_buttondisable.forEach(function(cid){
            var elemList = document.getElementsByClassName(cid);
            for(var i=0; i < elemList.length;i++){
              elemList[i].disabled = false
            }
          })
      }
      if(this.elemElassToggle != null){
         this.elemElassToggle.forEach(function(ctt){
           var elem = document.getElementById( ctt[0] );
           elem.classList.add(    ctt[1][0] )
           elem.classList.remove( ctt[1][1] )
         })
      }
      
      if(this.elemStatWhenAllOn != null){
         if(this.allOnStat === undefined){
           this.allOnStat = [];
         }
         for(var z=0; z < this.elemStatWhenAllOn.length; z++){
           var ctt = this.elemStatWhenAllOn[z];
           var elem = document.getElementById( ctt[0] )
           var statList = ctt[1];
           var displayStatAllOn  = ctt[2];
           var displayStatAnyOff = ctt[3]
           var hasAnyOff = false;
           console.log("testing: "+ctt[0]);
           for(var i=0; i < statList.length; i++){
             console.log("    ["+statList[i]+"] : "+STATS.PHASE_STATUS[statList[i]] );
             if( ! STATS.PHASE_STATUS[statList[i]] ){
               hasAnyOff = true;
               console.log("HASANYOFF :" + hasAnyOff);
             }
           }
           if(hasAnyOff){
             console.log("    ["+elem.id+"]ANYOFF:"+displayStatAnyOff);
             elem.style.display = displayStatAnyOff
             this.allOnStat[z] = false;
           } else {
             console.log("    ["+elem.id+"]ALLON:"+displayStatAllOn);
             elem.style.display = displayStatAllOn
             this.allOnStat[z] = true;
           }
         }
      }
      
      if(this.multiStatFcn != null){
         if(this.multiStatPct === undefined){
           this.multiStatPct = [];
           this.multiStatCt = [];
         }
         for(var z=0; z < this.multiStatFcn.length; z++){
           var ctt = this.multiStatFcn[z];
           var statList = ctt[0];
           this.multiStatCt[z] = 0;
           for(var i=0; i < statList.length; i++){
             if( STATS.PHASE_STATUS[statList[i]] ){
               this.multiStatCt[z] = this.multiStatCt[z]+1
             }
           }
           this.multiStatPct[z] = this.multiStatCt[z] / statList.length;
           ctt[1].call(this,this.multiStatCt[z],this.multiStatPct[z]);
         }
      }
}
function standard_offEffect(){
      if(this.elemids != null){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }  
      }
      if(this.revelemids != null){
         for(var i=0;i<this.revelemids.length; i++){
            document.getElementById(this.revelemids[i]).style.display = "block"
          }
      }
      if(this.sliders != null){
          for(var i=0;i<this.sliders.length; i++){
            document.getElementById(this.sliders[i][1]).checked = true;
            document.getElementById(this.sliders[i][0]).value = 0;
          }
      }
      if(this.classids_opacitymask != null){
          this.classids_opacitymask.forEach(function(cid){
            var elemList = document.getElementsByClassName(cid);
            for(var i=0; i < elemList.length;i++){
              elemList[i].style.opacity = 0
            }
          })
      }
      if(this.elems_opacitymask != null){
          this.elems_opacitymask.forEach(function(cid){
            var elem = document.getElementById(cid[0]);
            elem.style.opacity = cid[1][1];
          })
      }
      if(this.classids_buttondisable != null){
          this.classids_buttondisable.forEach(function(cid){
            var elemList = document.getElementsByClassName(cid);
            for(var i=0; i < elemList.length;i++){
              elemList[i].disabled = true
            }
          })
      }
      if(this.elemElassToggle != null){
         this.elemElassToggle.forEach(function(ctt){
           var elem = document.getElementById( ctt[0] );
           elem.classList.add(    ctt[1][1] )
           elem.classList.remove( ctt[1][0] )
         })
      }
      
      if(this.elemStatWhenAllOn != null){
         if(this.allOnStat === undefined){
           this.allOnStat = [];
         }
         for(var z=0; z < this.elemStatWhenAllOn.length; z++){
           var ctt = this.elemStatWhenAllOn[z];
           var elem = document.getElementById( ctt[0] )
           var statList = ctt[1];
           var displayStatAllOn  = ctt[2];
           var displayStatAnyOff = ctt[3]
           var hasAnyOff = false;
           console.log("testing: "+ctt[0]);
           for(var i=0; i < statList.length; i++){
             console.log("    ["+statList[i]+"] : "+STATS.PHASE_STATUS[statList[i]] );
             if( ! STATS.PHASE_STATUS[statList[i]] ){
               hasAnyOff = true;
               console.log("HASANYOFF :" + hasAnyOff);
             }
           }
           if(hasAnyOff){
             console.log("    ["+elem.id+"]ANYOFF:"+displayStatAnyOff);
             elem.style.display = displayStatAnyOff
             this.allOnStat[z] = false;
           } else {
             console.log("    ["+elem.id+"]ALLON:"+displayStatAllOn);
             elem.style.display = displayStatAllOn
             this.allOnStat[z] = true;
           }
         }
      }
      
      if(this.multiStatFcn != null){
         if(this.multiStatPct === undefined){
           this.multiStatPct = [];
           this.multiStatCt = [];
         }
         for(var z=0; z < this.multiStatFcn.length; z++){
           var ctt = this.multiStatFcn[z];
           var statList = ctt[0];
           this.multiStatCt[z] = 0;
           for(var i=0; i < statList.length; i++){
             if( STATS.PHASE_STATUS[statList[i]] ){
               this.multiStatCt[z] = this.multiStatCt[z]+1
             }
           }
           this.multiStatPct[z] = this.multiStatCt[z] / statList.length;
           ctt[1].call(this,this.multiStatCt[z],this.multiStatPct[z]);
         }
      }
      
}


STATICVAR_HOLDER.PHASEDATA = {

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

    research_projects:{  statID:"research_projects",
       statTitle: "research_projects", elemid:"RESEARCH_AVAIL_PROJECT_PANEL",
       onEffect: function(){
          document.getElementById(this.elemid).style.display = "block"
       },
       offEffect: function(){
          document.getElementById(this.elemid).style.display = "none"
       }
     },
    
    bio_SCIENCE_UNLOCK:{  statID:"bio_SCIENCE_UNLOCK",
              statTitle: "bio_SCIENCE_UNLOCK",elemids:["BIORESEARCH_SLIDER_PANEL"],sliders:[["greenSliderPct1","greenSliderCheck1"]], 
       onEffect: function(){
          GAME_GLOBAL.STATS.STATUS_FLAG["bio_SCIENCE"] = true;
          if(( STATS.PHASE_STATUS["bio_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SCIENCE_UNLOCK"])){
            document.getElementById("DATABANK_basic").style.display = "none";
            GAME_GLOBAL.STATS.STATUS_FLAG["BASIC_SCIENCE"] = false;
            document.getElementById("PROJECT_FILTER_PANEL").style.display = "block";
          }
          document.getElementById("DATABANK_MINI").style.display = "block";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 1;
          standard_onEffect.call(this);
          
       },
       offEffect: function(){
          GAME_GLOBAL.STATS.STATUS_FLAG["bio_SCIENCE"] = false;
          GAME_GLOBAL.STATS.STATUS_FLAG["BASIC_SCIENCE"] = true;
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("PROJECT_FILTER_PANEL").style.display = "none";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 0;
          document.getElementById("DATABANK_basic").style.display = "block";
          console.log("DATABANKMINI_"+this.sciname+": opacity=0")
          standard_offEffect.call(this);
       },sciname:"bio"
     },
     
    eng_SCIENCE_UNLOCK:{  statID:"eng_SCIENCE_UNLOCK",
              statTitle: "eng_SCIENCE_UNLOCK", elemids:["ANALYTIC_ENGINE_DIV","ANALYTIC_ENGINE_DISTRIBUTION_DISPLAY"],
       onEffect: function(){
          GAME_GLOBAL.STATS.STATUS_FLAG["eng_SCIENCE"] = true;
          if(( STATS.PHASE_STATUS["bio_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SCIENCE_UNLOCK"])){
            document.getElementById("DATABANK_basic").style.display = "none";
            GAME_GLOBAL.STATS.STATUS_FLAG["BASIC_SCIENCE"] = true;
            document.getElementById("PROJECT_FILTER_PANEL").style.display = "block";
          }
          document.getElementById("DATABANK_MINI").style.display = "block";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 1;
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
          document.getElementById("COMPUTE_DISTRIBUTION_PANEL").style.display = "block";
          if(! STATS.PHASE_STATUS["psy_SCIENCE_UNLOCK"]){
              document.getElementById("computationSliderPct").value = 0;
              document.getElementById("computationSliderPct").onchange()
          } else {
              document.getElementById("computationSliderPct").value = 5000;
              document.getElementById("computationSliderPct").onchange()
          }
       },
       offEffect: function(){
          GAME_GLOBAL.STATS.STATUS_FLAG["eng_SCIENCE"] = false;
          GAME_GLOBAL.STATS.STATUS_FLAG["BASIC_SCIENCE"] = true;
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("PROJECT_FILTER_PANEL").style.display = "none";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 0;
          document.getElementById("DATABANK_basic").style.display = "block";
          console.log("DATABANKMINI_"+this.sciname+": opacity=0")
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "none"
          }     
          if(! STATS.PHASE_STATUS["psy_SCIENCE_UNLOCK"]){
              document.getElementById("COMPUTE_DISTRIBUTION_PANEL").style.display = "none";
          }
       },sciname:"eng"
     },

    psy_SCIENCE_UNLOCK:{  statID:"psy_SCIENCE_UNLOCK",
              statTitle: "psy_SCIENCE_UNLOCK",elemids:["SOULSWARM_DIV","SOULSWARM_DISTRIBUTION_DISPLAY"],
       onEffect: function(){
          GAME_GLOBAL.STATS.STATUS_FLAG["psy_SCIENCE"] = true;
          standard_onEffect.call(this)
          if(( STATS.PHASE_STATUS["bio_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["eng_SCIENCE_UNLOCK"]) & (STATS.PHASE_STATUS["psy_SCIENCE_UNLOCK"])){
            document.getElementById("DATABANK_basic").style.display = "none";
            GAME_GLOBAL.STATS.STATUS_FLAG["BASIC_SCIENCE"] = true;
            document.getElementById("PROJECT_FILTER_PANEL").style.display = "block";
          }
          document.getElementById("COMPUTE_DISTRIBUTION_PANEL").style.display = "block";
          if(! STATS.PHASE_STATUS["eng_SCIENCE_UNLOCK"]){
              document.getElementById("computationSliderPct").value = 10000;
              document.getElementById("computationSliderPct").onchange()
          } else {
              document.getElementById("computationSliderPct").value = 5000;
              document.getElementById("computationSliderPct").onchange()
          }
          document.getElementById("DATABANK_MINI").style.display = "block";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 1;
       },
       offEffect: function(){
          GAME_GLOBAL.STATS.STATUS_FLAG["psy_SCIENCE"] = false;
          standard_offEffect.call(this)
          GAME_GLOBAL.STATS.STATUS_FLAG["BASIC_SCIENCE"] = true;
          if((! STATS.PHASE_STATUS["bio_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["eng_SUBFIELD_UNLOCK"]) & (! STATS.PHASE_STATUS["psy_SUBFIELD_UNLOCK"])){
            document.getElementById("DATABANK_MINI").style.display = "none";
          }
          document.getElementById("PROJECT_FILTER_PANEL").style.display = "none";
          document.getElementById("DATABANKMINI_"+this.sciname).style.opacity = 0;
          document.getElementById("DATABANK_basic").style.display = "block";
          console.log("DATABANKMINI_"+this.sciname+": opacity=0")
          if(! STATS.PHASE_STATUS["eng_SCIENCE_UNLOCK"]){
              document.getElementById("COMPUTE_DISTRIBUTION_PANEL").style.display = "none";
          }
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
     
    WORLDFORGE_CONSTRUCTION:{  statID:"WORLDFORGE_CONSTRUCTION",
       statTitle: "HAWKING_REACTORS", classids_buttondisable:["worldForgeButtons"],  //classids_opacitymask:["worldForgeBuildPanel"],
       onEffect: function(){
          standard_onEffect.call(this)
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    HAWKING_REACTORS:{  statID:"HAWKING_REACTORS",
       statTitle: "HAWKING_REACTORS", elemids:["HAWKING_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this)
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    soulswarm_combatsim:{  statID:"soulswarm_combatsim",
       statTitle: "soulswarm_combatsim", elemids:["COMBATSIM_SLIDERPANEL"],sliders:[["soulSliderPct3","soulSliderCheck3"]],
       onEffect: function(){
         standard_onEffect.call(this)
       },
       offEffect: function(){
         standard_offEffect.call(this);    
       }
     },
    soulswarm_espionage:{  statID:"soulswarm_espionage",
       statTitle: "soulswarm_espionage", elemids:["ESPIONAGE_SLIDERPANEL"],sliders:[["soulSliderPct2","soulSliderCheck2"]],
       onEffect: function(){
         standard_onEffect.call(this)
       },
       offEffect: function(){
         standard_offEffect.call(this);    
       }
     },
     
    deep_thought:{  statID:"deep_thought",
       statTitle: "deep_thought", elemids:["DEEPTHOUGHT_SLIDERPANEL"],sliders:[["thinkSliderPct1","thinkSliderCheck1"]],
       onEffect: function(){
          for(var i=0;i<this.elemids.length; i++){
            document.getElementById(this.elemids[i]).style.display = "block"
          }
          for(var i=0;i<this.sliders.length; i++){
            document.getElementById(this.sliders[i][1]).checked = false;
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

    BASIC_BIOMASS:{  statID:"BASIC_BIOMASS",
       statTitle: "BASIC_BIOMASS", elemids:["DIGEST_SLIDER_DIV","BIOMASS_SLIDER_DIV","Digested_MATTER_DIV1", "Digested_MATTER_DIV2", "Digested_MATTER_DIV3",
                                                                                     "FreeGreen_MATTER_DIV1","FreeGreen_MATTER_DIV2","FreeGreen_MATTER_DIV3",
                                                                                     "Biomass_MATTER_DIV1","Biomass_MATTER_DIV2","Biomass_MATTER_DIV3"],
                                   sliders:[["greenSliderPct6","greenSliderCheck6"],["greenSliderPct5","greenSliderCheck5"]],
                                   elemElassToggle:[["AGRICULTURE_MATTER_TABLE",["contentGrid4Hz","contentGrid2Hz"]]],
                                   revelemids:["Farmland_MATTER_DIV1","Farmland_MATTER_DIV2","Farmland_MATTER_DIV3"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.STATUS_FLAG["BASIC_BIOMASS"]=true;
          var aa = STATS.ACTIVE_INDUSTRY_LIST 
          var aax = aa.indexOf("YogurtFarm")
          var aay = aa.indexOf("BioResearchFarm")
          if(aax >= 0){
            aa.splice( aax, 1 )
          }
          if(aay >= 0){
            aa.splice( aay, 1 )
          }
          aa.push("Yogurt")
          aa.push("BioResearch")
       },
       offEffect: function(){
          standard_offEffect.call(this);
          STATS.STATUS_FLAG["BASIC_BIOMASS"]=false;
          var aa = STATS.ACTIVE_INDUSTRY_LIST 
          var aax = aa.indexOf("Yogurt")
          var aay = aa.indexOf("BioResearch")
          if(aax >= 0){
            aa.splice( aax, 1 )
          }
          if(aay >= 0){
            aa.splice( aay, 1 )
          }
          aa.push("YogurtFarm")
          aa.push("BioResearchFarm")
          
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
     
    green_PRODUCTIVITY_UPGRADE:{  statID:"green_PRODUCTIVITY_UPGRADE",
       statTitle: "green_PRODUCTIVITY_UPGRADE", elemids:["green_PRODUCTIVITY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
     
    green_EFFICIENCY_UPGRADE:{  statID:"green_EFFICIENCY_UPGRADE",
       statTitle: "green_EFFICIENCY_UPGRADE", elemids:["green_EFFICIENCY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
     
    yogo_PRODUCTIVITY_UPGRADE:{  statID:"yogo_PRODUCTIVITY_UPGRADE",
       statTitle: "yogo_PRODUCTIVITY_UPGRADE", elemids:["yogo_PRODUCTIVITY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
     
    bot_PRODUCTIVITY_UPGRADE:{  statID:"bot_PRODUCTIVITY_UPGRADE",
       statTitle: "bot_PRODUCTIVITY_UPGRADE", elemids:["bot_PRODUCTIVITY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
     
    bot_EFFICIENCY_UPGRADE:{  statID:"bot_EFFICIENCY_UPGRADE",
       statTitle: "bot_EFFICIENCY_UPGRADE", elemids:["bot_EFFICIENCY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },

    greenPower_PRODUCTIVITY_UPGRADE:{  statID:"greenPower_PRODUCTIVITY_UPGRADE",
       statTitle: "greenPower_PRODUCTIVITY_UPGRADE", elemids:["greenPower_PRODUCTIVITY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    greenPower_EFFICIENCY_UPGRADE:{  statID:"greenPower_EFFICIENCY_UPGRADE",
       statTitle: "greenPower_EFFICIENCY_UPGRADE", elemids:["greenPower_EFFICIENCY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },

    botPower_PRODUCTIVITY_UPGRADE:{  statID:"botPower_PRODUCTIVITY_UPGRADE",
       statTitle: "botPower_PRODUCTIVITY_UPGRADE", elemids:["botPower_PRODUCTIVITY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    botPower_EFFICIENCY_UPGRADE:{  statID:"botPower_EFFICIENCY_UPGRADE",
       statTitle: "botPower_EFFICIENCY_UPGRADE", elemids:["botPower_EFFICIENCY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },

    compute_PRODUCTIVITY_UPGRADE:{  statID:"compute_PRODUCTIVITY_UPGRADE",
       statTitle: "compute_PRODUCTIVITY_UPGRADE", elemids:["compute_PRODUCTIVITY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    compute_EFFICIENCY_UPGRADE:{  statID:"compute_EFFICIENCY_UPGRADE",
       statTitle: "compute_EFFICIENCY_UPGRADE", elemids:["compute_EFFICIENCY_PANEL"],
       onEffect: function(){
          standard_onEffect.call(this);
          STATS.UPGRADE_PANEL_UNLOCK = this.statTitle;
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     }//,
     
     /*,
     
     
     //elemStatWhenAllOn
    PSYFIELD_1:{  statID:"PSYFIELD_1",
       statTitle: "PSYFIELD_1", elemids:["PSY_RESEARCH_SLIDER_1","PSY_RESEARCH_SLIDER_1A"],sliders:[["psySliderPct1","psySliderCheck1"]],
                                elemStatWhenAllOn:[["PSY_RESEARCH_SLIDER_BASE",["PSYFIELD_1","PSYFIELD_2","PSYFIELD_3"],"none","block"]],
       onEffect: function(){
          standard_onEffect.call(this);
          if( this.allOnStat[0] ){
            deactivateSlider(["psySliderPct4","psySliderCheck4"])
          }
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    PSYFIELD_2:{  statID:"PSYFIELD_2",
       statTitle: "PSYFIELD_2", elemids:["PSY_RESEARCH_SLIDER_2","PSY_RESEARCH_SLIDER_2A"],sliders:[["psySliderPct2","psySliderCheck2"]],
                                elemStatWhenAllOn:[["PSY_RESEARCH_SLIDER_BASE",["PSYFIELD_1","PSYFIELD_2","PSYFIELD_3"],"none","block"]],
       onEffect: function(){
          standard_onEffect.call(this);
          if( this.allOnStat[0] ){
            deactivateSlider(["psySliderPct4","psySliderCheck4"])
          }
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    PSYFIELD_3:{  statID:"PSYFIELD_3",
       statTitle: "PSYFIELD_3", elemids:["PSY_RESEARCH_SLIDER_3"],sliders:[["psySliderPct3","psySliderCheck3"]],
                                elemStatWhenAllOn:[["PSY_RESEARCH_SLIDER_BASE",["PSYFIELD_1","PSYFIELD_2","PSYFIELD_3"],"none","block"]],
       onEffect: function(){
          standard_onEffect.call(this);
          if( this.allOnStat[0] ){
            deactivateSlider(["psySliderPct4","psySliderCheck4"])
          }
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
     
    BIOFIELD_1:{  statID:"BIOFIELD_1",
       statTitle: "BIOFIELD_1", elemids:["BIO_RESEARCH_SLIDER_1"],sliders:[["bioSliderPct1","bioSliderCheck1"]],
                                elemStatWhenAllOn:[["BIO_RESEARCH_SLIDER_BASE",["BIOFIELD_1","BIOFIELD_2","BIOFIELD_3"],"none","block"]],
       onEffect: function(){
          standard_onEffect.call(this);
          if( this.allOnStat[0] ){
            deactivateSlider(["bioSliderPct4","bioSliderCheck4"])
          }
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    BIOFIELD_2:{  statID:"BIOFIELD_2",
       statTitle: "BIOFIELD_2", elemids:["BIO_RESEARCH_SLIDER_2"],sliders:[["bioSliderPct2","bioSliderCheck2"]],
                                elemStatWhenAllOn:[["BIO_RESEARCH_SLIDER_BASE",["BIOFIELD_1","BIOFIELD_2","BIOFIELD_3"],"none","block"]],
       onEffect: function(){
          standard_onEffect.call(this);
          if( this.allOnStat[0] ){
            deactivateSlider(["bioSliderPct4","bioSliderCheck4"])
          }
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     },
    BIOFIELD_3:{  statID:"BIOFIELD_3",
       statTitle: "BIOFIELD_3", elemids:["BIO_RESEARCH_SLIDER_3"],sliders:[["bioSliderPct3","bioSliderCheck3"]],
                                elemStatWhenAllOn:[["BIO_RESEARCH_SLIDER_BASE",["BIOFIELD_1","BIOFIELD_2","BIOFIELD_3"],"none","block"]],
       onEffect: function(){
          standard_onEffect.call(this);
          if( this.allOnStat[0] ){
            deactivateSlider(["bioSliderPct4","bioSliderCheck4"])
          }
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     }*/
     
}

GAME_GLOBAL.STATS.STATUS_FLAG["COMPLETE_UNLOCK"] = {bio:false,eng:false,psy:false}
GAME_GLOBAL.STATS.STATUS_FLAG["PARTIAL_UNLOCK"] = {bio:false,eng:false,psy:false}


/*
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
*/

var SCITYPE_SUBFIELD_UNLOCK_CT = {bio:3, eng:3, psy: 2}


STATICVAR_HOLDER.SCIENCE_TYPES.forEach(function(scitype){
  var capSciType = scitype.toUpperCase();
  var scifreestring = scitype+"_SCIENCE_FREE"
  var scititle = STATICVAR_HOLDER["INVENTORY_DESC_FULL"][scifreestring]
  
  var SUBFIELD_DISPLAYS = []
  for(var i=0; i < SCITYPE_SUBFIELD_UNLOCK_CT[scitype];i++){
      SUBFIELD_DISPLAYS[i] = capSciType+"FIELD_"+(i+1);
  }
  
  
  function lockOrUnlockDatabanks(){
      var completeCt = 0;
      var partialCt = 0;
      console.log("TEST");
      STATICVAR_HOLDER.SCIENCE_TYPES.forEach( function(key,index){
        if( GAME_GLOBAL.STATS.STATUS_FLAG["COMPLETE_UNLOCK"][key]){
          completeCt++;
        }
        if( GAME_GLOBAL.STATS.STATUS_FLAG["PARTIAL_UNLOCK"][key]){
          partialCt++;
        }
      });
      //var thisComplete = STATUS_FLAG["COMPLETE_UNLOCK"][this.scitype];
      //var thisPartial = STATUS_FLAG["COMPLETE_UNLOCK"][this.scitype];
      if(partialCt == 0){
        document.getElementById("DATABANK_DIV").style.display = "none";
        document.getElementById("SCIENCEFOCUS_DIV").style.display="none";
      } else {
        document.getElementById("DATABANK_DIV").style.display = "block";
        document.getElementById("SCIENCEFOCUS_DIV").style.display="block";
        //document.getElementById("DATABANK_"+this.scitype).style.display = "block";
        //document.getElementById("DATABANKMINI_"+this.scitype).style.opacity = 0;
        if(completeCt == 3){
          document.getElementById("DATABANK_MINI").style.display = "none";
        } else if(partialCt > 0){
          document.getElementById("DATABANK_MINI").style.display = "block";
        }
      }
  }
  //[capSciType+"FIELD_1",capSciType+"FIELD_2",capSciType+"FIELD_3"]
  
  var getMultiStatFcn = function(){ 
    return [[SUBFIELD_DISPLAYS,function(ct,pct){
            if(pct == 1){
              document.getElementById(capSciType+"_RESEARCH_SLIDER_BASE").style.display = "none"
              deactivateSlider([scitype+"SliderPct4",scitype+"SliderCheck4"])
              //unlockStatus(scitype+"_SUBFIELD_UNLOCK")
              popupAdvanced("With the development of the third and final specialization of "+scititle+" research, "+
                            "there is no longer any real benefit in continuing unfocused research into "+scititle+". "+
                            "All future research will be directed towards one of the three specializations.",
                            {noticeTitleHTML:"Notice: Advanced "+scititle,
                             allowClose:true})
              GAME_GLOBAL.STATS.STATUS_FLAG["COMPLETE_UNLOCK"][scitype] = true;
              GAME_GLOBAL.STATS.STATUS_FLAG["PARTIAL_UNLOCK"][scitype] = true;
              document.getElementById("DATABANKMINI_"+this.scitype).style.opacity = 0;
              //document.getElementById("DATABANK_DIV").style.display = "block";
              document.getElementById("DATABANK_"+scitype).style.display = "block";
              document.getElementById(scitype+"_SLIDER_PANEL").style.display="block";
            } else if(pct == 0){
              document.getElementById(capSciType+"_RESEARCH_SLIDER_BASE").style.display = "block";
              //lockStatus(scitype+"_SUBFIELD_UNLOCK")
              GAME_GLOBAL.STATS.STATUS_FLAG["COMPLETE_UNLOCK"][scitype] = false;
              GAME_GLOBAL.STATS.STATUS_FLAG["PARTIAL_UNLOCK"][scitype] = false;
              document.getElementById("DATABANKMINI_"+this.scitype).style.opacity = 0;
              document.getElementById("DATABANK_"+scitype).style.display = "none";
              document.getElementById(scitype+"_SLIDER_PANEL").style.display="none";
            } else if(ct == 1){
              document.getElementById(capSciType+"_RESEARCH_SLIDER_BASE").style.display = "block"
              activateSlider([scitype+"SliderPct4",scitype+"SliderCheck4"])
              //unlockStatus(scitype+"_SUBFIELD_UNLOCK")
              popupAdvanced("You have developed new research methods that allow you to focus on a sub-specialization of "+
                            scititle+" research. You can now distribute your research efforts between unfocused "+scititle+" research and "+
                            "research into "+STATICVAR_HOLDER["INVENTORY_DESC_FULL"][this.subSciType]+".<br><br>"+
                            STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"][this.subSciType],
                            {noticeTitleHTML:""+STATICVAR_HOLDER["INVENTORY_DESC_FULL"][this.subSciType]+" Research:",
                             allowClose:true})
              GAME_GLOBAL.STATS.STATUS_FLAG["COMPLETE_UNLOCK"][scitype] = false;
              GAME_GLOBAL.STATS.STATUS_FLAG["PARTIAL_UNLOCK"][scitype] = true;
              document.getElementById("DATABANKMINI_"+this.scitype).style.opacity = 1;
              document.getElementById("DATABANK_"+scitype).style.display = "block";
              document.getElementById(scitype+"_SLIDER_PANEL").style.display="block";
            } else {
              document.getElementById(capSciType+"_RESEARCH_SLIDER_BASE").style.display = "block"
              activateSlider([scitype+"SliderPct4",scitype+"SliderCheck4"])
              //unlockStatus(scitype+"_SUBFIELD_UNLOCK")
              GAME_GLOBAL.STATS.STATUS_FLAG["COMPLETE_UNLOCK"][scitype] = false;
              GAME_GLOBAL.STATS.STATUS_FLAG["PARTIAL_UNLOCK"][scitype] = true;
              document.getElementById("DATABANKMINI_"+this.scitype).style.opacity = 1;
              document.getElementById("DATABANKMINI_"+this.scitype).style.opacity = 1;
              document.getElementById("DATABANK_"+scitype).style.display = "block";
              document.getElementById(scitype+"_SLIDER_PANEL").style.display="block";
            }
            
            lockOrUnlockDatabanks();
    }]]
  }
  var multiStatFcn = getMultiStatFcn();
  

  
  for(var i=0; i < 3; i++){
     var statID = capSciType+"FIELD_"+(i+1);
     STATICVAR_HOLDER.PHASEDATA[statID] = {  statID:statID, subSciType:"eng"+i+"_SCIENCE_FREE",scitype:scitype,
                          statTitle: statID, 
                          elemids:[capSciType+"_RESEARCH_SLIDER_"+(i+1)],
                          sliders:[[scitype+"SliderPct"+(i+1),scitype+"SliderCheck"+(i+1)]],
                          multiStatFcn: multiStatFcn,
                          elems_opacitymask: [["DATABANK_"+scitype+(i+1),[1,0]]],
       onEffect: function(){
          standard_onEffect.call(this);
          //unlockStatus()
          //lockOrUnlockDatabanks.call(this);
       },
       offEffect: function(){
          standard_offEffect.call(this); 
          
          //lockOrUnlockDatabanks.call(this);
       }
     }
  }
  
})

/*

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

          document.getElementById("DATABANK_DIV").style.display = "block";
          document.getElementById("DATABANK_bio").style.display = "block";
          document.getElementById("DATABANKMINI_bio").style.opacity = 0;
          document.getElementById("bio_SLIDER_PANEL").style.display="block";
          document.getElementById("SCIENCEFOCUS_DIV").style.display="block";


var engineering_multiStatFcn = 
       [[["ENGFIELD_1","ENGFIELD_2","ENGFIELD_3"],function(ct,pct){
            if(pct == 1){
              document.getElementById("ENG_RESEARCH_SLIDER_BASE").style.display = "none"
              deactivateSlider(["engSliderPct4","engSliderCheck4"])
              unlockStatus("eng_SUBFIELD_UNLOCK")
              popupAdvanced("With the development of the third and final specialization of engineering research, "+
                            "you no longer see any benefit in continuing unfocused research into engineering science. "+
                            "All future research will be directed towards one of the three specializations.",
                            {noticeTitleHTML:"Notice: Advanced Engineering",
                             allowClose:true})
            } else if(pct == 0){
              document.getElementById("ENG_RESEARCH_SLIDER_BASE").style.display = "block";
              lockStatus("eng_SUBFIELD_UNLOCK")
            } else if(ct == 1){
              document.getElementById("ENG_RESEARCH_SLIDER_BASE").style.display = "block"
              activateSlider(["engSliderPct4","engSliderCheck4"])
              unlockStatus("eng_SUBFIELD_UNLOCK")
              popupAdvanced("You have developed new research methods that allow you to focus on a sub-specialization of "+
                            "engineering research. You can now distribute your research efforts between unfocused engineering research and "+
                            "research into "+STATICVAR_HOLDER["INVENTORY_DESC_FULL"][this.subSciType]+".<br><br>"+
                            STATICVAR_HOLDER["INVENTORY_DESC_LONGFORM"][this.subSciType],
                            {noticeTitleHTML:""+STATICVAR_HOLDER["INVENTORY_DESC_FULL"][this.subSciType]+" Research:",
                             allowClose:true})
            } else {
              document.getElementById("ENG_RESEARCH_SLIDER_BASE").style.display = "block"
              activateSlider(["engSliderPct4","engSliderCheck4"])
              unlockStatus("eng_SUBFIELD_UNLOCK")
            }
        }]]

STATICVAR_HOLDER.PHASEDATA.ENGFIELD_1 = {  statID:"ENGFIELD_1", subSciType:"eng0_SCIENCE_FREE",
       statTitle: "ENGFIELD_1", elemids:["ENG_RESEARCH_SLIDER_1"],sliders:[["engSliderPct1","engSliderCheck1"]],
                                multiStatFcn: engineering_multiStatFcn,
       onEffect: function(){
          standard_onEffect.call(this);
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     }
     
STATICVAR_HOLDER.PHASEDATA.ENGFIELD_2 = {  statID:"ENGFIELD_2", subSciType:"eng1_SCIENCE_FREE",
       statTitle: "ENGFIELD_2", elemids:["ENG_RESEARCH_SLIDER_2"],sliders:[["engSliderPct2","engSliderCheck2"]],
                                multiStatFcn: engineering_multiStatFcn,
       onEffect: function(){
          standard_onEffect.call(this);
       },
       offEffect: function(){
          standard_offEffect.call(this);
       }
     },
STATICVAR_HOLDER.PHASEDATA.ENGFIELD_3 = {  statID:"ENGFIELD_3", subSciType:"eng2_SCIENCE_FREE",
       statTitle: "ENGFIELD_3", elemids:["ENG_RESEARCH_SLIDER_3"],sliders:[["engSliderPct3","engSliderCheck3"]],
                                multiStatFcn: engineering_multiStatFcn,
       onEffect: function(){
          standard_onEffect.call(this);
       },
       offEffect: function(){
          standard_offEffect.call(this);    
       }
     }
*/

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
  if(! STATS.PHASE_STATUS[sid]){
    STATS.PHASE_STATUS[sid] = true;
    STATICVAR_HOLDER.PHASEDATA[sid].onEffect();
    }
  if(STATICVAR_HOLDER.PHASEDATA[sid].cheatButton != null){
    STATICVAR_HOLDER.PHASEDATA[sid].cheatButton.setStatus();
  }
}
function lockStatus(sid, updateCheatButton = true){
  if(STATS.PHASE_STATUS[sid]){
    STATS.PHASE_STATUS[sid] = false;
    STATICVAR_HOLDER.PHASEDATA[sid].offEffect();
  }
  if(STATICVAR_HOLDER.PHASEDATA[sid].cheatButton != null){
    STATICVAR_HOLDER.PHASEDATA[sid].cheatButton.setStatus();
  }
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





