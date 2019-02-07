



var STAR_TYPE_SET = [{sid:"Hypergiant",startype:"Hypergiant",p:0.00000000025,thresh:0.00000000025,MASS_MIN:40,MASS_MAX:130,LUM_MIN:200000,LUM_MAX:1000000,logMASS_MIN:1.60205999132796,logMASS_MAX:2.11394335230684,logLUM_MIN:5.30102999566398,logLUM_MAX:6},
{sid:"Supergiant",startype:"Supergiant",p:0.0000001,thresh:0.00000010025,MASS_MIN:8,MASS_MAX:12,LUM_MIN:1000,LUM_MAX:500000,logMASS_MIN:0.903089986991944,logMASS_MAX:1.07918124604762,logLUM_MIN:3,logLUM_MAX:5.69897000433602},
{sid:"O",startype:"O-type",p:2.69999999913395E-07,thresh:3.70249999913395E-07,MASS_MIN:15,MASS_MAX:90,LUM_MIN:30000,LUM_MAX:250000,logMASS_MIN:1.17609125905568,logMASS_MAX:1.95424250943932,logLUM_MIN:4.47712125471966,logLUM_MAX:5.39794000867204},
{sid:"BrightGiant",startype:"Bright Giant",p:0.000001,thresh:1.3702499999134E-06,MASS_MIN:2,MASS_MAX:8,LUM_MIN:500,LUM_MAX:10000,logMASS_MIN:0.301029995663981,logMASS_MAX:0.903089986991944,logLUM_MIN:2.69897000433602,logLUM_MAX:4},
{sid:"B",startype:"B-type",p:0.00117,thresh:0.00117137024999992,MASS_MIN:2.1,MASS_MAX:16,LUM_MIN:25,LUM_MAX:30000,logMASS_MIN:0.322219294733919,logMASS_MAX:1.20411998265592,logLUM_MIN:1.39794000867204,logLUM_MAX:4.47712125471966},
{sid:"A",startype:"A-type",p:0.00540000000000007,thresh:0.00657137024999999,MASS_MIN:1.4,MASS_MAX:2.1,LUM_MIN:5,LUM_MAX:25,logMASS_MIN:0.146128035678238,logMASS_MAX:0.322219294733919,logLUM_MIN:0.698970004336019,logLUM_MAX:1.39794000867204},
{sid:"RedGiant",startype:"Red Giant",p:0.00999889975000001,thresh:0.01657027,MASS_MIN:0.3,MASS_MAX:8,LUM_MIN:100,LUM_MAX:1000,logMASS_MIN:-0.522878745280338,logMASS_MAX:0.903089986991944,logLUM_MIN:2,logLUM_MAX:3},
{sid:"F",startype:"F-type",p:0.0216,thresh:0.03817027,MASS_MIN:1.04,MASS_MAX:1.4,LUM_MIN:1.5,LUM_MAX:5,logMASS_MIN:0.0170333392987804,logMASS_MAX:0.146128035678238,logLUM_MIN:0.176091259055681,logLUM_MAX:0.698970004336019},
{sid:"G",startype:"G-type",p:0.0684,thresh:0.10657027,MASS_MIN:0.8,MASS_MAX:1.04,LUM_MIN:0.6,LUM_MAX:1.5,logMASS_MIN:-0.0969100130080564,logMASS_MAX:0.0170333392987804,logLUM_MIN:-0.221848749616356,logLUM_MAX:0.176091259055681},
{sid:"WhiteDwarf",startype:"White Dwarf",p:0.09,thresh:0.19657027,MASS_MIN:0.08,MASS_MAX:10,LUM_MIN:0.00001,LUM_MAX:0.001,logMASS_MIN:-1.09691001300806,logMASS_MAX:1,logLUM_MIN:-5,logLUM_MAX:-3},
{sid:"K",startype:"K-type",p:0.1089,thresh:0.30547027,MASS_MIN:0.45,MASS_MAX:0.8,LUM_MIN:0.08,LUM_MAX:0.6,logMASS_MIN:-0.346787486224656,logMASS_MAX:-0.0969100130080564,logLUM_MIN:-1.09691001300806,logLUM_MAX:-0.221848749616356},
{sid:"M",startype:"M-type",p:0.69452973,thresh:1,MASS_MIN:0.08,MASS_MAX:0.45,LUM_MIN:0.01,LUM_MAX:0.08,logMASS_MIN:-1.09691001300806,logMASS_MAX:-0.346787486224656,logLUM_MIN:-2,logLUM_MAX:-1.09691001300806}]


for(var i=0, imax=STAR_TYPE_SET.length; i<imax; i++){
   STAR_TYPE_SET[i].logMASS_SPAN = STAR_TYPE_SET[i].logMASS_MAX - STAR_TYPE_SET[i].logMASS_MIN;
   STAR_TYPE_SET[i].logLUM_SPAN = STAR_TYPE_SET[i].logLUM_MAX - STAR_TYPE_SET[i].logLUM_MIN;
   STAR_TYPE_SET[i].logMASS_MID = (STAR_TYPE_SET[i].logMASS_MAX + STAR_TYPE_SET[i].logMASS_MIN)/2;
   STAR_TYPE_SET[i].logLUM_MID  = (STAR_TYPE_SET[i].logLUM_MAX  + STAR_TYPE_SET[i].logLUM_MIN)/2;
   STAR_TYPE_SET[i].logMASS_HSPAN = STAR_TYPE_SET[i].logMASS_SPAN / 2
   STAR_TYPE_SET[i].logLUM_HSPAN = STAR_TYPE_SET[i].logLUM_SPAN / 2
}

function getRandStar(){
	var R = Math.random();
	var ML = Math.random();
	var sidx = -1;
	for(var i=0, imax=STAR_TYPE_SET.length; i<imax; i++){
		if( STAR_TYPE_SET[i].thresh <= R){
			sidx = i;
		}
	}
	var st = STAR_TYPE_SET[sidx];
	var mass = Math.pow(10, st.logMASS_SPAN * ML + st.logMASS_MIN );
	var lum = Math.pow(10, st.logLUM_SPAN * ML + st.logLUM_MIN );
	return [st.sid, mass, lum];
}
function randSign(){
	return Math.floor(Math.random() - 0.5)*2+1;
}

function getRandStarBatch(ct,baseVar){
	var vv = baseVar / (Math.log10(ct)+1);
	var starCt = [];
	var mass = 0;
	var lum = 0;
	var totalCt = 0;
	for(var i=0, imax=this.length; i<imax; i++){
	   var ss = this[i]
       var variation = ss.p * Math.random() * vv;
       var sign = Math.floor(Math.random() - 0.5)*2+1
       var cc = (ss.p + (variation * sign)) * ct;
       var baseCt = Math.floor(cc);
       var remCt = cc - Math.floor(cc);
       var sct = baseCt;
       if(Math.random() < remCt){
		   sct = sct + 1;
	   }
	   totalCt = totalCt + sct;
	   if(sct > 0){
         var RND = Math.random()
         var RNDSN = (Math.floor(Math.random() - 0.5)*2+1)
         var massvar =  RNDSN * ( ss.logMASS_HSPAN * RND / (Math.log10(sct)+1) )
         var currmass = sct * Math.pow(10,  ( ss.logMASS_MID + massvar ))
         mass = mass + currmass;
         var lumvar =  RNDSN * ( ss.logLUM_HSPAN * RND / (Math.log10(sct)+1) )
         var currlum = sct * Math.pow(10, ( ss.logLUM_MID + lumvar ))
         lum = lum + currlum;
         starCt.push( [ss.sid,sct,currmass,currlum] );
	   }
	}


	return [totalCt,starCt, mass, lum];
}

//getRandStarBatch_GLOBAL(1,0.2)

//var ct = 1
//var baseVar = 0.2

STAR_TYPE_SET.getRandStarBatch = getRandStarBatch;
STAR_TYPE_SET.STARS_PER_SYSTEM = 1.6;

//var N = 1000000000
//var xx = STAR_TYPE_SET.getRandStarBatch(N * STAR_TYPE_SET.STARS_PER_SYSTEM,1);
//xx[2] / N

