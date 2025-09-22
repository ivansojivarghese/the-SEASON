
// game reset (when goal is scored)

function postGlRst(ply, goalScored) { // reset game objects post goal attempt
  gmStop = true; // stop timer
  blCp = false; // ball in control
  usBlCp = false; // user capture inactive
  cmBlCp = false; // com. capture inactive
  shChk = false; // shooting not evident
  shotFuncPsd = false; // 'shoot' function pass check reset
  xKeyAllow = true; // x-key is allowed
  attackMode = true; // USER is attacking (at first) by default

  tgPy = uPy1; // reset target and secondary players to default
  scPy = uPy2;

  tgComPy = cPy1; // reset ""
  scComPy = cPy2;

  gmObInvs("none"); // make game objects invisible

  if (goalScored === true) { // if goal has been scored
    // increment score
    if (ply === hmTm) { // if player is from home team
      increScre(homeSc); // increment home score
    } else if (ply === awTm) { // if player is from away team
      increScre(awaySc); // increment away score
    }
  }

  setTimeout(function () { posReset(true, hmChk) }, 500); // reset game objects
}

function gmObInvs(value) { // invisible game objects
  var csElmLen = csElm.length - 1, // no. of times loop should run
      i; // initialise loop

  for (i = 0; i <= csElmLen; i++) {
    csElm[i].el.style.display = value;
  }
}

function increScre(team) { // increment score
  var x = team.innerHTML;
  x++;
  team.innerHTML = x;
}
