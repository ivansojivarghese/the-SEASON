
// difficulty increase
var difInv  = "";

function goalDif(isHome) { // checks the goal difference
  var h = hmScre.innerHTML;
  var a = awScre.innerHTML;

  var dif = isHome ? h - a : a - h; // if user is playing home, difference would be h - a, otherwise it would be a - h

  if (dif === 1) { // if goal difference is 1
    xDcrm = pySpd * 0.8; // speed of COM. players increased to 75% of pySpd
  } else if (dif === 2) { // if goal difference is 2
    xDcrm = pySpd * 1.4; // "" 140% of pySpd
  } else if (dif === 3) { // if goal difference is 3
    xDcrm = pySpd * 1.8; // "" 180% of pySpd
  } else if (dif === 0) { // if no goal difference
    xDcrm = pySpd / 2; // normal (default) speed
  }
}

difInv = setInterval(function () {
  goalDif(hmChk)
}, 1000/60);
