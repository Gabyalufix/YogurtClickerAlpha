

var PROCTEXT = {
   
   procdata_test1: ["I am the "],
   
   procdata_test2: ["I am the ",
                        ["#RAND","king","lord","magestrix","counsellor","minister"],
                        " of ",
                        ["#RAND","Oz","hilbert-space","the universe","civilization","The People"]
                   ],
   
   procdata_test3: ["I am the ",
                        ["#V.SET","LEADER.TITLE",["#RAND","king","lord","magestrix","counsellor","minister"]],
                        " of ",
                        ["#V.SET","CIV.NAME",["#RAND","Oz","hilbert-space","the universe","civilization","The People"]]
                   ],
                   
   procdata_test4: ["I am the ",
                        ["#V.SET","LEADER.TITLE",["#RAND","king","lord","magestrix","counsellor","minister"]],
                        " of ",
                        ["#V.SET","CIV.NAME",["#RAND","Oz","hilbert-space","the universe","civilization","The People"]],
                        ", and as the ",
                        ["#V.GET","LEADER.TITLE"],
                        " of ",
                        ["#V.GET","CIV.NAME"],
                        ", I must ask you to cease!"
                   ],
   
   LEADER_BASE:[["#RAND","King","Master","Magestrix","Mistress","Counsellor","Attorney","Minister","President","Prince","Queen","Regent",
                         "Priest","Priestess","Chairman","Speaker-to-Animals","Speaker","Voice","Voicebox","Larynx",
                         "Poobah","Chancellor","Vizier","Shah","Pope","Duke","Imperatrix","Sultan","Emperor"]],
   
   LEADER_PREFIX:[["#RAND","High ","High","Grand High ","Supreme ","Mega","Giga","Yotta","God-",""]],
   
   LEADER_PREFIXFULL:[["#GLOBAL.GET","LEADER_PREFIX"],["#RANDOR","0.25",["#GLOBAL.GET","LEADER_PREFIXFULL"],[""]]],

   
   LEADER_FULL:[["#GLOBAL.GET","LEADER_PREFIXFULL"],["#GLOBAL.GET","LEADER_BASE"]]
   
}



