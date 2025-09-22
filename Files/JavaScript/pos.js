
// returning console elements as objects
var uPy1 = { el : document.getElementById("usPly1"), xP : 650, yP : 100 }, // user players (together with x and y positions)
    uPy2 = { el : document.getElementById("usPly2"), xP : 650, yP : 380 },
    cPy1 = { el : document.getElementById("comPly1"), xP : 380, yP : 100 }, // AI players
    cPy2 = { el : document.getElementById("comPly2"), xP : 380, yP : 380 },
    mtBl = { el : document.getElementById("matchBall"), xP : 560, yP : 260 }, // match ball

    csElm = [uPy1, uPy2, cPy1, cPy2, mtBl], // console elements

    tgPy = uPy1, // target and secondary players (user)
    scPy = uPy2,

    tgComPy = cPy1, // target and secondary players (computer, AI)
    scComPy = cPy2,

    hmTm = "", // home team player
    awTm = "", // away team player

    psChk = false, // pass check variable
    shChk = false; // shoot check variable

function setPos() { // setting positions of console elements
  var csElmLen = csElm.length - 1; // no. of times loop should run

  for (i = 0; i <= csElmLen; i++) {

    csElm[i].el.style.transform = "translate(" + csElm[i].xP + "px, " + csElm[i].yP + "px)"; // setting initial positons to objects

    switch (i) {
      case 4: // mtBl
        if (psChk) { // if ball is being passed
          if (usBlCp) { // if ball in USER control
            csElm[i].el.style.transition = "all " + setPsTime(tgPy, scPy, 500) + "s linear"; // add transition when passing
          } else if (cmBlCp) { // if ball in COM. control
            csElm[i].el.style.transition = "all " + setPsTime(tgComPy, scComPy, 500) + "s linear";
          }
        } else if (shChk) { // if ball is being shot
          if (usBlCp) { // if ball in USER control
            csElm[i].el.style.transition = "all " + setPsTime(tgPy, mtBl, 850) + "s linear"; // add transition when shooting
          } else if (cmBlCp) { // if ball in COM. control
            csElm[i].el.style.transition = "all " + setPsTime(tgComPy, mtBl, 850) + "s linear";
          }
        } else {
          csElm[i].el.style.transition = ""; // no transition
        }
      break;
    }
  }
}

function setPsTime(tgt, el, spd) { // set passing time
  // time is found by dividing distance (hypotenuse) by speed (pySpd)
  var aVal = tgt.yP - el.yP, // a-value of pytaghoras theorem
      bVal = tgt.xP - el.xP, // b-value ""

      cVal = Math.sqrt((aVal * aVal) + (bVal * bVal)); // c-value "", by finding square root, etc.

  return cVal / spd; // distance divide by speed to find time needed
}

function posReset(v, plySde) { // reset to normal (after shot attempt)
  // ball
  mtBl.xP = 560;
  mtBl.yP = 260;

  if (plySde) { // if playing side is true (as in slate [user] is playing home)
    plyPosCoords(650, 380); // place com players in Away side, and user players in Home side
  } else { // else if user is playing away
    plyPosCoords(380, 650); // place com players in Home side, and user players in Away side
  }

	if (v) { // if objects need to be visible back; noted by parameter
	  setTimeout(function () { // make objects visible
	    gmObInvs("block"),
	    gmStop = false // resume timer
	  }, 500);
	}
}

function plyPosCoords(comXp, userXp) { // set position coordinates of players (alternate between home and away side)
  // com. 1
  cPy1.xP = comXp;
  cPy1.yP = 100;
  // com. 2
  cPy2.xP = comXp;
  cPy2.yP = 380;
  // user 1
  uPy1.xP = userXp;
  uPy1.yP = 100;
  // user 2
  uPy2.xP = userXp;
  uPy2.yP = 380;
}

function blCtl() { // ball positions
	if (usBlCp && shChk === false) { // if ball is under user control and no shot taken
		mtBl.xP = tgPy.xP + 45; // constant values of '25' and '45' added to centralise ball within target player
		mtBl.yP = tgPy.yP + 20;
	} else if (cmBlCp && shChk === false) { // if ball is under com. control and no shot taken
		mtBl.xP = tgComPy.xP + 45;
		mtBl.yP = tgComPy.yP + 20;
	}
}
