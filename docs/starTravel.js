

STATS["POS"] = {};
STATS.POS.CURRENT_RADIUS = 0;
STATS.POS.CURRENT_SPAN = 0;
STATS.POS.CURRENT_STAR = 0;

STATS["EXPLORED"] = {};
STATS.EXPLORED.CURRPCT = 0;
STATS.EXPLORED.CURRENT_SPAN = 0;








//STATICVAR_HOLDER.STAR_TABLE

//  0   1    2         3         4
// IR  OR thickness filledVol    CT




function TICK_scoutSystems(){
    var exploreRating = this.STATS["PRODUCTIVITY_RATING"]["scout"] * this.SETTINGS["scout"+"_FRACTION"][0];
    var areaExplored = this.STATS["scout-speed"] * STATS["scout-sensorrange"] * exploreRating;
    var areaExploredPct = areaExplored / this.STATICVAR_HOLDER.STAR_TABLE[ this.STATS.EXPLORED.CURRENT_SPAN ];
    
    
    
    var meanDiscovered = areaExplored * this.STATS["explore-starDensity"];
    var varDiscovered = meanDiscovered * 0.25;
    var xx = meanDiscovered + getRandomBetween(-varDiscovered,varDiscovered);
    var xxr = Math.floor(xx);
    var rem = xx - xxr;
    if(Math.random() < rem){
      xxr = xxr + 1;
    }
    this.INVENTORY["WORLDS-Neutral-CT"] = this.INVENTORY["WORLDS-Neutral-CT"] + xxr;



}








