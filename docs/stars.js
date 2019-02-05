












/*
Stellar pop:
#main sequence:             LUM
# O >15M,       0.0000003   (30k - 500k)
# B 2.1-16M,    0.0013      (25Lum - 30kLum)
# A 1.4-2.1M,   0.006       (5-25Lum)
# F 1.04-1.4,   0.03        (1.5-5Lum)
# G 0.8-1.04,   0.076       (0.6-1.5Lum)
# K 0.24-0.8,   0.12        (0.08-0.6Lum)
# M 0.08-0.45,  0.76        (0.01-0.08Lum)
#


#
#90% are main sequence
#9% white dwarfs
#0.5% red giants
#0.5% everything else

#Hypergiants: 0.25 per billion. 30-130 MassSun (200,000-500,000)
#Supergiants: 2 per billion. 30-130 MassSun (10,000-100,000)
#Red Giants: same distro as main sequence * 0.9 (~100-1000Lum)
#White Dwarfs: same distro as main sequence * 0.75, very low energy output (0.02-0.0001Lum)

*/



function getMainSequenceType(){
  var ms = Math.random();
  if(ms < 0.76){
    //M-type
    return ["M-type",getRandomBetween(0.08,0.45),getRandomBetween(0.01,0.08)]
  } else if(ms < 88){
    //K type
    return ["K-type",getRandomBetween(0.45,0.8),getRandomBetween(0.08,0.6)]
  } else if(ms < 0.956){
    //G
    return ["G-type",getRandomBetween(0.8,1.04),getRandomBetween(0.6,1.5)]

  } else if(ms < 0.98){
    //F
    return ["F-type",getRandomBetween(1.04,1.4),getRandomBetween(1.5,5)]

  } else if(ms < 0.986){
    //A
    return ["A-type",getRandomBetween(1.4,2.1),getRandomBetween(5,25)]

  } else if(ms < 0.9873){
    //B
    return ["B-type",getRandomBetween(2.1,16),getRandomBetween(25,30000)]
  } else {
    //O
    return ["O-type",getRandomBetween(15,90),getRandomBetween(30000,250000)]  
  }
}
function getWhiteDwarf(){
  var ms = Math.random();
  if(ms < 0.76){
    //M-type
    return ["White Dwarf",getRandomBetween(0.08,0.45),getRandomBetween(0.000001,0.03)]
  } else if(ms < 88){
    //K type
    return ["White Dwarf",getRandomBetween(0.45,0.8),getRandomBetween(0.000001,0.03)]
  } else if(ms < 0.956){
    //G
    return ["White Dwarf",getRandomBetween(0.8,1.04),getRandomBetween(0.000001,0.03)]

  } else if(ms < 0.98){
    //F
    return ["White Dwarf",getRandomBetween(1.04,1.4),getRandomBetween(0.000001,0.03)]

  } else if(ms < 0.986){
    //A
    return ["White Dwarf",getRandomBetween(1.4,2.1),getRandomBetween(0.000001,0.03)]
  } else {
    //B
    return ["White Dwarf",getRandomBetween(2.1,9),getRandomBetween(0.000001,0.03)]
  }
}
/*
#Hypergiants: 0.25 per billion. 30-130 MassSun (200,000-500,000)
#Supergiants: 2 per billion. 30-130 MassSun (10,000-100,000)
#Red Giants: same distro as main sequence * 0.9 (~100-1000Lum)
#White Dwarfs: same distro as main sequence * 0.75, very low energy output (0.02-0.0001Lum)
*/

function getRedGiant(){
  var ms = getRandomBetween(0.6,1)
  if(ms < 0.76){
    //M-type
    return ["Red Giant",getRandomBetween(0.3,0.45),getRandomBetween(100,200)]
  } else if(ms < 88){
    //K type
    return ["Red Giant",getRandomBetween(0.45,0.8),getRandomBetween(200,300)]
  } else if(ms < 0.956){
    //G
    return ["Red Giant",getRandomBetween(0.8,1.04),getRandomBetween(200,400)]
  } else if(ms < 0.98){
    //F
    return ["Red Giant",getRandomBetween(1.04,1.4),getRandomBetween(300,600)]
  } else if(ms < 0.986){
    //A
    return ["Red Giant",getRandomBetween(1.4,2.1),getRandomBetween(500,700)]
  } else {
    //B
    return ["Red Giant",getRandomBetween(2.1,8),getRandomBetween(600,1000)]
  }
}
function getGiant(){
  var ms = getRandomBetween(0,1000000000);
  if(ms < 50){
     //hypergiant
     return ["Hypergiant",getRandomBetween(40,130),getRandomBetween(200000,1000000)]
  } else if(ms < 200){
     //supergiant
     return ["Supergiant",getRandomBetween(8,12),getRandomBetween(1000,500000)]
  } else if(ms < 1000){
     //bright giant
     return ["Supergiant",getRandomBetween(8,12),getRandomBetween(1000,20000)]
  } else {
     //red giant
     return getRedGiant()
  }
}


function getRandomStar(){
    var sc = Math.random();
    if(sc < 0.9){
      // main sequence:
      return getMainSequenceType();
    } else if(sc < 0.99){
      // white dwarf
      return getWhiteDwarf();
    } else {
      return getGiant();
    }
}




/*

function getRareGiantBatch(ct){
  
  if(ct < 1000000){
    var ms = getRandomBetween(0,1000000000) / ct;
    if(ms < 50){
       //hypergiant
       return [["Hypergiant",getRandomBetween(40,130),getRandomBetween(200000,1000000)]]
    } else if(ms < 200){
       //supergiant
       return [["Supergiant",getRandomBetween(8,12),getRandomBetween(1000,500000)]]
    } else if(ms < 1000){
       //bright giant
       return [["Bright Giant",getRandomBetween(8,12),getRandomBetween(1000,20000)]]
    } else {
       return [];
    }
  } else {
  
  }
}
*/


function getWhiteDwarfBatch(ct){
  if(ct < 1){
    if(Math.random < ct){
      return [getWhiteDwarf()];
    } else {
      return [];
    }
  } else if(ct < 10){
    var M=0;
    var L=0;
    for(var i=0; i< ct; i++){
      var xx = getWhiteDwarf();
      M = M + xx[1];
      L = L + xx[2];
    }
    return [["White Dwarf",M,L]]
  } else {
    var massVarSpan = 0.35 / ct;
    var lumVarSpan  = 0.01 / ct;
    var M = 0.3505 + getRandomBetween(-massVarSpan,massVarSpan);
    var L = 0.015  + getRandomBetween(-lumVarSpan,lumVarSpan);
    return [["White Dwarf",M,L]]
  }
}





function getRandomStarBatch(ct){
    
}




var M=0;
var L=0;

for(var i=0; i<1000; i++){

   var xx = getRandomStar();
   console.log(xx)
   M = M + xx[1];
   L = L + xx[2];
   
}

/*
var M=0;
var L=0;

for(var i=0; i<10000; i++){

   var xx = getWhiteDwarf();
   console.log(xx)
   M = M + xx[1];
   L = L + xx[2];
   
}
White dwarf:

Mean mass: 0.3505
Mean Lum: 0.015




*/





