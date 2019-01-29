

var PROCTEXT = {
   
   LEADER_BASE:[["#RAND","King","Master","Magestrix","Mistress","Counsellor","Attorney","Minister","President","Prince","Queen","Regent",
                         "Priest","Priestess","Chairman","Speaker-to-Animals","Speaker","Voice","Voicebox","Larynx",
                         "Poobah","Chancellor","Vizier","Shah","Pope","Duke","Imperatrix","Sultan","Emperor"]],
   LEADER_PREFIX:[["#RAND","High ","High","Grand High ","Supreme ","Mega","Giga","Yotta","God-",""]],
   LEADER_PREFIXFULL:[["#GLOBAL.GET","LEADER_PREFIX"],["#RANDOR","0.25",["#GLOBAL.GET","LEADER_PREFIXFULL"],[""]]],
   LEADER_FULL:[["#GLOBAL.GET","LEADER_PREFIXFULL"],["#GLOBAL.GET","LEADER_BASE"]],
   
   SCRAMBLE_SYLLABLE:[["#RAND","da","fa","ga","ha","ja","ka","la","ma","na","pa","qua","ra","sa","ta","va","ya",
                              "di","fi","gi","hi","ji","ki","li","mi","ni","pi","qui","ri","si","ti","vi","yi",
                              "de","fe","ge","he","je","ke","le","me","ne","pe","que","re","se","te","ve","ye",
                              "dei","fei","gei","hei","jei","kei","lei","mei","nei","pei","quei","rei","sei","tei","vei","yei",
                              "dai","fai","gai","hai","jai","kai","lai","mai","nai","pai","quai","rai","sai","tai","vai","yai"]],
   SCRAMBLE_SYLLABLE_WORD:[["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#RANDOR","0.5",["#GLOBAL.GET","SCRAMBLE_SYLLABLE_WORD"],[""]]],
   SCRAMBLE_SYLLABLE_WORD_SHORT:[["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#RANDOR","0.25",["#GLOBAL.GET","SCRAMBLE_SYLLABLE_WORD_SHORT"],[""]]],
   SCRAMBLE_SYLLABLE_WORD_LONG:[["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#GLOBAL.GET","SCRAMBLE_SYLLABLE"],
                           ["#RANDOR","0.85",["#GLOBAL.GET","SCRAMBLE_SYLLABLE_WORD_LONG"],[""]]],
   NATION_NAME:["Augustus-1","Naovi"]
   
}



