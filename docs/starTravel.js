

STATS["POS"] = {};
STATS.POS.CURRENT_RADIUS = 0;
STATS.POS.CURRENT_SPAN = 0;
STATS.POS.CURRENT_STAR = 0;

STATS["EXPLORED"] = {};
STATS.EXPLORE.CURRENT_LEFT = 0;
STATS.EXPLORE.CURRENT_SPAN = 0;








//STATICVAR_HOLDER.STAR_TABLE

//  0   1    2         3         4
// IR  OR thickness filledVol    CT

function pullFractionalMean(x){
  if(x > 10000){
    return Math.floor(x);
  } else {
    var extra = 0;
    var extraPct = x - Math.floor(x);
    if(extraPct > 0 && Math.random() < extraPct ){
      extra = 1;
    }
    return Math.floor(x) + extra;
  }
}

GAME_GLOBAL.pullFractionalMean = pullFractionalMean;

function TICKHELPER_scoutSystems(){

    //TODO: add in travel time!
    var exploreVar = 0.1;
    var exploreRating = this.STATS["PRODUCTIVITY_RATING"]["scout"] * this.SETTINGS["scout"+"_FRACTION"][0];
    var avgAreaExplored = this.STATS["scout-speed"] * STATS["scout-sensorrange"] * exploreRating
    var varAreaExplored = avgAreaExplored * exploreVar
    var areaExplored = avgAreaExplored + getRandomBetween(-varAreaExplored,varAreaExplored);
    //var areaExploredPct = areaExplored / this.STATICVAR_HOLDER.STAR_TABLE[ this.STATS.EXPLORED.CURRENT_SPAN ];
    var st = this.STATICVAR_HOLDER.STAR_TABLE[this.STATS.EXPLORE.CURRENT_SPAN];
    var starsExploredPotential = this.pullFractionalMean(st[4] * (areaExplored / st[3]));
    var starsExplored          = Math.min(starsExploredPotential,this.STATS.EXPLORE.CURRENT_LEFT);
    var starsRemaining         = this.STATS.EXPLORE.CURRENT_LEFT - starsExplored;
    
    //increment span, if span is finished:
    if(starsRemaining == 0){
      STATS.EXPLORE.CURRENT_SPAN = STATS.EXPLORE.CURRENT_SPAN + 1;
      STATS.EXPLORE.CURRENT_LEFT = this.STATICVAR_HOLDER.STAR_TABLE[this.STATS.EXPLORE.CURRENT_SPAN][4];
    } else {
      STATS.EXPLORE.CURRENT_LEFT = starsRemaining;
    }
    
    this.INVENTORY["WORLDS-Neutral-CT"] = this.INVENTORY["WORLDS-Neutral-CT"] + starsExplored;
    return starsExplored;
}

function TICKHELPER_seedShipCalcs(){
    
}



    //var spanAreaRemaining = Math.max(0,this.STATS.EXPLORE.CURRENT_LEFT - areaExplored)
    //var spanAreaExplored  = this.STATS.EXPLORE.CURRENT_LEFT - spanAreaRemaining;
    //var spanOverflow = Math.max(0, areaExplored - this.STATS.EXPLORE.CURRENT_LEFT) //skip overflow, not worth the trouble + processer time to add this in as a loop...
    //var starsAreaRemaining =   (spanAreaRemaining / st[3])
    //Exploration part:




