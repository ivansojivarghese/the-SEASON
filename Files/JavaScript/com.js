
var attackMode = true, // whether USER is in attack or defense mode
    // notTackled = true, // whether the USER was tackled
    xDcrm = pySpd / 2; // movement (COM.) speed (50% of pySpd)

function cmPyMv() {
  scPyMv(hmChk); // sec. USER (moving in direction according to home/away)
  tgCmPyMv(hmChk); // tgt. COM
  scCmPyMv(hmChk); // sec. COM
}

// movement tgt. COM player
function tgCmPyMv(isHome) {
  var dir = isHome ? -1 * xDcrm : xDcrm, // if the USER is playing home, COM should move against it
      mod = isHome ? -1 : 1; // 'mod' is the modifier to either left [-1] (AWAY) or right [1] (HOME)

  if (cmBlCp) { // if ball is captured by com. player
    if (tackled) { // if USER has been recently tackled
      tgComPy.xP += dir; // move COM tgt. towards goal
    } else { // if COM. hasn't tackled USER recently
      comShtOrPs(); // find distance (and shoot/pass if necessary)
    }

    attackMode = false; // USER is in defense mode

  } else {
    tgComPy.xP += mod; // move diagonally (based on direction)
    tgComPy.yP++;
  }
}

// movement sec. COM player (fixed movement along console)
function scCmPyMv(isHome) {
  var dir = isHome ? -1 * xDcrm : xDcrm, // if the USER is playing home, COM should move against it
      posLmt = isHome ? scComPy.xP > 130 : scComPy.xP < 900; // if com is away (user is home), posLmt (comparison) variable holds (> 130), otherwise (< 900)

  if (posLmt) {
    scComPy.xP += dir; // move right if x-pos less than 900; alternatively move left if x-pos greater than 130 (if user is home)
  }
}

// movement sec. USER players (fixed movement along console)
function scPyMv(isHome) {
  var posLmt = isHome ? scPy.xP < 830 : scPy.xP > 200, // if user is home, posLmt (comparison) variable holds (< 830), otherwise (> 200)
      oppLmt = isHome ? scPy.xP > 630 : scPy.xP < 400; // if user is home, oppLmt (comparison) holds (< 400), otherwise (> 630)
      mod = isHome ? 1 : -1; // 'mod' is the modifier to either left [-1] (AWAY) or right [1] (HOME)

  if (posLmt) { // if position is within limits (see above)
    scPy.xP += mod; // continue moving scPy user
    if (oppLmt) { // if within opposite side limit (as in nearing the goal of the opponent team)
      if (scPy.yP > 240) {
        scPy.yP--; // move up if x-pos less than 400 (or greater than 630); and until 240px
      }
    }
  }

  /*
  if (attackMode === false) { // defense mode
    if (scPy.yP > 240) { // reach the other side (counter attack)
      scPy.yP--;
    }
    if (scPy.xP > 200) {
      scPy.xP--;
    }

    // finding the direction of sec. COM in relation to tgt. COM
    if (tgComPy.xP >= scComPy.xP && tgComPy.yP <= scComPy.yP) { // towards the right upper side
      transPlyMv(scPy, scComPy.xP + 70, scComPy.yP - 70);
    } else if (tgComPy.xP >= scComPy.xP && tgComPy.yP > scComPy.yP) { // towards the right bottom side
      transPlyMv(scPy, scComPy.xP + 70, scComPy.yP + 70);
    } else if (tgComPy.xP < scComPy.xP && tgComPy.yP <= scComPy.yP) { // towards the left upper side
      transPlyMv(scPy, scComPy.xP - 70, scComPy.yP - 70);
    } else if (tgComPy.xP < scComPy.xP && tgComPy.yP > scComPy.yP) { // towards the left bottom side
      transPlyMv(scPy, scComPy.xP - 70, scComPy.yP + 70);
    }
*/
}

function comInvPy() { // inverses COM. players (for passing)
  psChk = true; // sets transition when passing
  blCp = false;
  switch (this.tgComPy) {
    case cPy1: // if 'tgComPy' variable is cPy1
      tgComPy = cPy2; // then, inverse
      scComPy = cPy1;
    break;
    case cPy2: // if 'tgComPy' variable is cPy2
      tgComPy = cPy1; // then, inverse
      scComPy = cPy2;
    break;
  }
}
