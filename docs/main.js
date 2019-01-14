

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}



var coll = document.getElementsByClassName("collapsibleTHIN");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
var coll = document.getElementsByClassName("collapsibleLV2");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function onInputMultiSliderPct(ss){
	  var cval = parseFloat(ss.value)
	  if(ss.ktotal + cval >= 10000){
	    ss.value = 10000 - ss.ktotal
		for(j = 0; j < 3; j++){
		  if(ss.othrArray[j].lockbox.checked == false){
		    ss.othrArray[j].value = 0
		  }
		  ss.othrArray[j].sdisplay.innerHTML = ss.othrArray[j].value / 100
		}
	  } else if(ss.ktotal + cval < 10000 && ss.stotal == 0) {
	    ss.value = 10000 - ss.ktotal
		for(j = 0; j < 3; j++){
		  if(ss.othrArray[j].lockbox.checked == false){
		    ss.othrArray[j].value = 1
		  }
		  ss.othrArray[j].sdisplay.innerHTML = ss.othrArray[j].value / 100
		}
		onDownMultiSliderPct(ss)
	  } else {
	    var othrVal = 10000 - ss.ktotal - cval
        for(j = 0; j < 3; j++){
          if(ss.othrArray[j].lockbox.checked == false){
            ss.othrArray[j].value = ss.ssf[j] * othrVal
          }
          ss.othrArray[j].sdisplay.innerHTML = ss.othrArray[j].value / 100
        }
	    output.innerHTML = ss.stotal / 100
	  }
	  ss.sdisplay.innerHTML = parseFloat(ss.value) / 100
}

function onDownMultiSliderPct(ss){
	  output.innerHTML = "DOWN"
      ss.stotal = 0
      ss.ktotal = 0
      ss.downval = parseFloat(ss.value);
      for(j = 0; j < 3; j++){
        if(ss.othrArray[j].lockbox.checked == true){
          ss.ssf[j] = parseFloat(ss.othrArray[j].value);
          ss.ktotal = ss.ktotal + ss.ssf[j]
        } else {
          ss.ssf[j] = parseFloat(ss.othrArray[j].value);
          ss.stotal = ss.stotal + ss.ssf[j]
        }
      }
      for(j = 0; j < 3; j++){
        ss.ssf[j] = ss.ssf[j] / ss.stotal
      }
}

var output = document.getElementById("bioSliderPctVal");
output.innerHTML = 10;

var s1 = document.getElementById("bioSliderPct1");
var s2 = document.getElementById("bioSliderPct2");
var s3 = document.getElementById("bioSliderPct3");
var s4 = document.getElementById("bioSliderPct4");
var sarray = [s1,s2,s3,s4];
var scbaNAMES = ["bioSliderCheck1","bioSliderCheck2","bioSliderCheck3","bioSliderCheck4"]
var sdisplayNAMES = ["bioSliderDisplayPct1","bioSliderDisplayPct2","bioSliderDisplayPct3","bioSliderDisplayPct4"]
var scba = []
var sdisplay = []
for(i = 0; i < 4; i++){
   scba[i] = document.getElementById(scbaNAMES[i]);
   sdisplay[i] = document.getElementById(sdisplayNAMES[i])
}

for(i = 0; i < 4; i++){
    var ss = sarray[i];
    console.log("i = "+i)
    ss.sdisplay = sdisplay[i]
    ss.othrArray = sarray.slice()
    ss.othrArray.splice(i,1)
    ss.lockbox = scba[i]
    ss.ssf = []
    ss.stotal = 0
	ss.onmousedown = function() {
	  onDownMultiSliderPct(this)
	}
	ss.onmouseup = function() {
	  output.innerHTML = "UP"
	}
	ss.oninput = function() {
      onInputMultiSliderPct(this)
	}
	ss.onchange = function() {
      onInputMultiSliderPct(this)
	}
}

