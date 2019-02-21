

STATS["SEEDCAPT"] = {};
STATS.SEEDCAPT.CURRENT_SPAN = 0;
STATS.SEEDCAPT.CURRENT_LEFT = STATICVAR_HOLDER.STAR_TABLE[STATS.SEEDED.CURRENT_SPAN][4];

STATS["SEEDSENT"] = {};
STATS.SEEDSENT.CURRENT_SPAN = 0;
STATS.SEEDSENT.CURRENT_LEFT = STATICVAR_HOLDER.STAR_TABLE[STATS.SEEDED.CURRENT_SPAN][4];

STATS["ScoutedWorldBuffer"] = [ [0,0] ];

STATS["EXPLORE"] = {};
STATS.EXPLORE.CURRENT_SPAN = 0;
//STATS.EXPLORE.CURRENT_EXPL = 0;
STATS.EXPLORE.CURRENT_LEFT = STATICVAR_HOLDER.STAR_TABLE[STATS.EXPLORE.CURRENT_SPAN][4];








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
STATS["EXPLORED"].totalVolExplored = 0;
STATS["EXPLORED"].totalStarsFound = 0;


function TICKHELPER_scoutSystems(){

    //TODO: add in travel time!
    var st = this.STATICVAR_HOLDER.STAR_TABLE[this.STATS.EXPLORE.CURRENT_SPAN];
    var exploreVar = 0.1;

    //Calculate distance travelled:
    var seededSpan = this.STATS.SEEDED.CAPTURING_SPAN;
    var currSpan = this.STATS.EXPLORE.CURRENT_SPAN
    var travelDist = st[2] / 2;
    for(var i=seededSpan; i < currSpan; i++){
        travelDist = travelDist + this.STATICVAR_HOLDER.STAR_TABLE[i];
    }
    //Total travel distance = scouting endurance (distance travelled while actively scanning) + travelling distance (distanced travelled to reach search zone);
    var tripDistanceTravelled = this.STATS.SHIPSTATS.scout["endurance"] + (2*travelDist);
    //Fraction of each trip that is spent scanning:
    var tripFractionSpentScouting =  this.STATS.SHIPSTATS.scout["endurance"] / (tripDistanceTravelled);

    //Calculate expected volume explored:
    var exploreRating = this.STATS["PRODUCTIVITY_RATING"]["scout"] * this.SETTINGS["scout"+"_FRACTION"][0];
    var avgAreaExplored = this.STATS.SHIPSTATS.scout["speedWk"] * (this.STATS.SHIPSTATS.scout["sensorRange"] ^ 2) * exploreRating * tripFractionSpentScouting;
    var varAreaExplored = avgAreaExplored * exploreVar

    //Randomly determine total volume explored:
    var areaExplored = avgAreaExplored + getRandomBetween(-varAreaExplored,varAreaExplored);
    //var areaExploredPct = areaExplored / this.STATICVAR_HOLDER.STAR_TABLE[ this.STATS.EXPLORED.CURRENT_SPAN ];
    var starsExploredPotential = (st[4] * (areaExplored / st[3]));
    var starsExplored          = Math.min(starsExploredPotential,this.STATS.EXPLORE.CURRENT_LEFT);
    var starsRemaining         = this.STATS.EXPLORE.CURRENT_LEFT-starsExploredPotential; //this.STATS.EXPLORE.CURRENT_LEFT - starsExplored;

    //add scouted worlds to buffer:
    this.STATS.ScoutedWorldBuffer[this.STATS.ScoutedWorldBuffer.length - 1][1] = 
             this.STATS.ScoutedWorldBuffer[this.STATS.ScoutedWorldBuffer.length - 1][1] + starsExplored;

    //increment span, if span is finished:
    if(starsRemaining <= 0){
      this.STATS.EXPLORE.CURRENT_SPAN = this.STATS.EXPLORE.CURRENT_SPAN + 1;
      this.STATS.EXPLORE.CURRENT_LEFT = this.STATICVAR_HOLDER.STAR_TABLE[this.STATS.EXPLORE.CURRENT_SPAN][4];
      //make a new buffer element for the next tick:
      this.STATS.ScoutedWorldBuffer.push([this.STATS.EXPLORE.CURRENT_SPAN,0])
    } else {
      this.STATS.EXPLORE.CURRENT_LEFT = starsRemaining;
    }

    this.STATS["EXPLORE"]["travelDist"]              = travelDist;
    this.STATS["EXPLORE"]["travelFrac"]              = tripFractionSpentScouting;
    this.STATS["EXPLORE"]["volExploredPerTrip"]      = (this.SHIPSTATS.scout["sensorRange"] ^ 2) * this.SHIPSTATS.scout["endurance"];
    this.STATS["EXPLORE"]["tripDistance"]            = tripDistanceTravelled;
    this.STATS["EXPLORE"]["tripDuration"]            = tripDistanceTravelled / this.STATS.SHIPSTATS.scout["speed"];
    this.STATS["EXPLORE"]["volExploredThisTick"]     = avgAreaExplored;
    this.STATS["EXPLORE"]["starsFoundThisTick"]      = starsExploredPotential;
    this.STATS["EXPLORE"].totalVolExplored           = this.STATS["EXPLORE"].totalVolExplored + areaExplored
    this.STATS["EXPLORE"].totalStarsFound            = this.STATS["EXPLORE"].totalStarsFound  + starsExplored

    this.INVENTORY["WORLDS-Neutral-CT"] = this.INVENTORY["WORLDS-Neutral-CT"] + starsExplored;
    
    return starsExplored;
}

/*

STATS["SEEDCAPT"] = {};
STATS.SEEDCAPT.CURRENT_SPAN = 0;
STATS.SEEDCAPT.CURRENT_LEFT = STATICVAR_HOLDER.STAR_TABLE[STATS.SEEDED.CURRENT_SPAN][4];


STATS["SEEDSENT"] = {};
STATS.SEEDSENT.CURRENT_SPAN = 0;
STATS.SEEDSENT.CURRENT_LEFT = STATICVAR_HOLDER.STAR_TABLE[STATS.SEEDED.CURRENT_SPAN][4];

*/

function TICKHELPER_seedShipCalcs(){
    //var sendSpan = this.STATS.SEEDED.CURRENT_SPAN
    //var captSpan = this.STATS.SEEDED.CAPTURING_SPAN
    //var stSend   = this.STATICVAR_HOLDER.STAR_TABLE[sendSpan];
    //var stCapt   = this.STATICVAR_HOLDER.STAR_TABLE[captSpan];
    
    ////////////////////////////////////////////////////
    //Pull landings:
    var landct = 0;
    while(this.INVENTORY["seedship-transit-buffer"].length > 0 && 
          this.INVENTORY["seedship-transit-buffer"][0][1] <= this.STATS["TICK"] ){
      landct = landct + this.INVENTORY["seedship-transit-buffer"].shift()[0];
    }
    if(landct >= this.STATS.SEEDCAPT.CURRENT_LEFT ){
        var remlandct = landct - this.STATS.SEEDCAPT.CURRENT_LEFT;
        INVENTORY["seedship-transit-buffer"].unshift([remlandct,this.STATS["TICK"]+1,0])
        //ITERATE SPAN:
        landct = this.STATS.SEEDCAPT.CURRENT_LEFT;
        var currSpanWd = STATICVAR_HOLDER.STAR_TABLE[STATS.SEEDCAPT.CURRENT_SPAN][2];
        STATS.SEEDCAPT.CURRENT_SPAN = STATS.SEEDCAPT.CURRENT_SPAN + 1;
        STATS.SEEDCAPT.CURRENT_LEFT = STATICVAR_HOLDER.STAR_TABLE[STATS.SEEDCAPT.CURRENT_SPAN][4];
        
        //EDIT TIMELEFT TO REFLECT NEW CAPTURE:
        //Set timeleft to time taken to arrive at destination from current startpoint, (if that would be shorter)
        var ix = this.INVENTORY["seedship-transit-buffer"].length - 1;
        while(ix >= 0){
          var bufferTimeTravelled = this.STATS["TICK"] - this.INVENTORY["seedship-transit-buffer"][ix]
          var bufferDistTravelled = bufferTimeTravelled * this.STATS.SHIPSTATS.seedship["speedWk"]
          if(bufferDistTravelled >= currSpanWd){
              break;
          } else {
              var skipDist = currSpanWd - bufferDistTravelled;
              var skipTime = skipDist / this.STATS.SHIPSTATS.seedship["speedWk"]
              this.INVENTORY["seedship-transit-buffer"][ix][1] = this.INVENTORY["seedship-transit-buffer"][ix][1] - skipTime
          }
          ix = ix - 1;
        }
    } else {
        STATS.SEEDCAPT.CURRENT_LEFT = STATS.SEEDCAPT.CURRENT_LEFT - landct;
    }
    this.INVENTORY["WORLDS-Fallow-CT"] = this.INVENTORY["WORLDS-Fallow-CT"] + landct;
    this.INVENTORY["seedship-transit-CT"] = this.INVENTORY["seedship-transit-CT"] - landct;
    this.INVENTORY["WORLDS-Neutral-CT"] = this.INVENTORY["WORLDS-Neutral-CT"] - landct;
    
    ////////////////////////////////////////////////////
    //LAUNCH:
    //
    //Buffer format:
    //  [batchCt, arrivalTick, sentTick]
    //
    
    var stn = this.STATICVAR_HOLDER.STAR_TABLE[this.STATS.SEEDED.CURRENT_SPAN];
    //Launch new seedships:
    //MODIFY:
    if(this.STATS.ScoutedWorldBuffer.length > 0){
      var shipsAvail = Math.floor(this.INVENTORY["SHIPS-"+"seedship"+"-CT"]);
      var worldsAvail = this.STATS.ScoutedWorldBuffer[0][1]
      var ssct = Math.min(shipsAvail, worldsAvail);
      if(shipsAvail > 0 && worldsAvail > 0){
        //STATICVAR_HOLDER.STAR_TABLE[STATS.SEEDCAPT.CURRENT_SPAN]
        var cspan = this.STATS.ScoutedWorldBuffer[0][0];
        var dist = STATICVAR_HOLDER.STAR_TABLE[cspan][2] / 2;
        for(var i=STATS.SEEDCAPT.CURRENT_SPAN; i < cspan; i++){
              dist = dist + this.STATICVAR_HOLDER.STAR_TABLE[i];
        }
        var arriveTime = Math.ceil( dist / this.STATS.SHIPSTATS.seedship["speedWk"] ) + this.STATS["TICK"]
        this.INVENTORY["seedship-transit-CT"] = this.INVENTORY["seedship-transit-CT"] + ssct;
        this.INVENTORY["seedship-transit-buffer"].push([ssct,arriveTime,this.STATS["TICK"]]);
        this.INVENTORY["SHIPS-"+"seedship"+"-CT"] = this.INVENTORY["SHIPS-"+"seedship"+"-CT"] - ssct;
      }
    }
}


/*
    var ssct = Math.min( Math.floor(this.INVENTORY["SHIPS-"+"seedship"+"-CT"]), this.INVENTORY["WORLDS-Neutral-CT"]-this.INVENTORY["seedship-transit-CT"] );

    if(ssct > 0){
      var arriveTime = ( this.STATS["seedship-distToNextStar"] / this.STATS["seedship-speed"] ) + this.STATS["TICK"]
      this.INVENTORY["seedship-transit-CT"] = this.INVENTORY["seedship-transit-CT"] + ssct;
      this.INVENTORY["seedship-transit-buffer"].push([ssct,arriveTime]);
      this.INVENTORY["SHIPS-"+"seedship"+"-CT"] = this.INVENTORY["SHIPS-"+"seedship"+"-CT"] - ssct;
    }
    var landct = 0;
    while(this.INVENTORY["seedship-transit-buffer"].length > 0 && this.INVENTORY["seedship-transit-buffer"][0][1] <= this.STATS["TICK"]){
      landct = landct + this.INVENTORY["seedship-transit-buffer"].shift()[0];
    }
    this.INVENTORY["WORLDS-Fallow-CT"] = this.INVENTORY["WORLDS-Fallow-CT"] + landct;
    this.INVENTORY["seedship-transit-CT"] = this.INVENTORY["seedship-transit-CT"] - landct;
    this.INVENTORY["WORLDS-Neutral-CT"] = this.INVENTORY["WORLDS-Neutral-CT"] - landct;

    this.seedshipsInTransit_SPAN.textContent =  fmtSIintNoPct(this.INVENTORY["seedship-transit-CT"]);
    if(this.INVENTORY["seedship-transit-buffer"].length > 0){
       this.timeToNextLanding_SPAN.textContent =  this.getTimeStringFromTick(this.INVENTORY["seedship-transit-buffer"][0][1] - this.STATS["TICK"])
    } else {
       this.timeToNextLanding_SPAN.textContent =  "N/A"
    }
*/
    //var spanAreaRemaining = Math.max(0,this.STATS.EXPLORE.CURRENT_LEFT - areaExplored)
    //var spanAreaExplored  = this.STATS.EXPLORE.CURRENT_LEFT - spanAreaRemaining;
    //var spanOverflow = Math.max(0, areaExplored - this.STATS.EXPLORE.CURRENT_LEFT) //skip overflow, not worth the trouble + processer time to add this in as a loop...
    //var starsAreaRemaining =   (spanAreaRemaining / st[3])
    //Exploration part:



