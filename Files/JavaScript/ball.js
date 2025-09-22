
var znDivY = 275, // zone y-divide (console height in half)
    znDivX = 550, // zone x-divide (console width in half)

    goalHgt = (550 / 3), // height of goals (one-third)

    homeSc = document.getElementById("hmScre"), // home score
    awaySc = document.getElementById("awScre"), // away ""

    usBlCp = false, // user ball capture check
    cmBlCp = false, // com. ball capture check

    tackled = false, // whether USER has been tackled

    psBlFirst = false, // variable to check if psBl function has already been added
    xKeyAllow = true; // variable to check x-key (avoids repetition)
    // zKeyAllow = true; // "" z-key

// detects for collision between players and match ball, (and other players/console boundary)
function colDct() {
  var tgBd = tgPy.el.getBoundingClientRect(), // user (target) player boundary
      tgCmBd = tgComPy.el.getBoundingClientRect(), // com (target) ""
      mtbBd = mtBl.el.getBoundingClientRect(); // match ball ""

  if (blCp === false) { // ball capture collision (neither player has ball)

    /*
    if (blCp === false && shChk) { // TESTING
    console.log("bl no ctrl and sht");
    }
    */

    if (tgBd.left < mtbBd.right && tgBd.top < mtbBd.bottom && tgBd.right > mtbBd.left && tgBd.bottom > mtbBd.top) { // check if user target collided with ball

      if (shChk) { // if ball is being shot meanwhile USER has collided with it


        if (psBlFirst === false) {
          document.body.addEventListener("keypress", function (event) { // 'keypress' event to avoid repetition
            psBl(event); // add psBl function for passing/shooting the ball between players/goals
          });
          psBlFirst = true;
        }
        blCp = true;
        usBlCp = true; // USER has control
        cmBlCp = false; // COM. has no control

        attackMode = true; // USER in attack mode


      } else { // if not being shot, then being passed or standstill


        if (psBlFirst === false) {
          document.body.addEventListener("keypress", function (event) { // 'keypress' event to avoid repetition
            psBl(event); // add psBl function for passing/shooting the ball between players/goals
          });
          psBlFirst = true;
        }
        blCp = true;
        usBlCp = true; // USER has control
        cmBlCp = false; // COM. has no control

        attackMode = true; // USER in attack mode


      }

    } else if (tgCmBd.left < mtbBd.right && tgCmBd.top < mtbBd.bottom && tgCmBd.right > mtbBd.left && tgCmBd.bottom > mtbBd.top) { // check if com. target ""
      blCp = true; // ball captured
      cmBlCp = true; // COM. has ball control
      usBlCp = false; // user has no control
    }
  } else { // one player has ball (to 'tackle')
    if (usBlCp) { // if USER has ball
      if (tgCmBd.left < tgBd.right && tgCmBd.top < tgBd.bottom && tgCmBd.right > tgBd.left && tgCmBd.bottom > tgBd.top) { // check if COM. tackled (collided) USER tgt. (who has ball)

        usBlCp = false;
        cmBlCp = true; // COM. now has ball; USER does not

        tackled = true; // ball tackled off

        setTimeout(function () { // time for COM. tgt. to move away from USER tgt. after tackling
          tackled = false;
        }, 1000); // time of 1 sec

      }
    }
  }
}

function psBl(e) { // passes/shoots the ball
  if (usBlCp) { // if ball under control of target (user)
    switch (e.key) {
      case "z":
      case "Z": // if key pressed is 'z'
        invPy(); // pass
      break;
      case "x":
      case "X": // if key pressed is 'x'
        shoot(tgPy); // shoot
      break;
    }
  }
}

function shoot(ply) {
  if (xKeyAllow && psChk === false) { // if x-key is not pressed and free, plus not passing
    xKeyAllow = false; // x-key is being pressed (avoid repetition)
    // zKeyAllow = false; // no doubles
    shotFuncPsd = true;
    blCp = false; // ball not in control
    if (ply === tgComPy) { // if player is COM.
      if (usBlCp === false) { // if user not controlling ball
        if (ply.xP < znDivX && ply.yP < znDivY) { // zone 1 (quadrant top-left)
          // the basic idea is that the closer the player is towards the center of the console (when shooting), the higher chances of getting the goal
          // hence, the left/top side (0%), middle (100%), rightdown (0%)
          shootAccuracy(findZonalPercent(2 * ply.xP, 2 * ply.yP), ply);
        } else if (ply.xP >= znDivX && ply.yP < znDivY) { // zone 2 (quadrant top-right)
          shootAccuracy(findZonalPercent((znDivX * 2) - 70, 2 * ply.yP), ply); // '70' (70px) is width of player
        } else if (ply.xP < znDivX && ply.yP >= znDivY) { // zone 3 (quadrant bottom-right)
          shootAccuracy(findZonalPercent(2 * ply.xP, (znDivY * 2) - 70), ply);
        } else if (ply.xP >= znDivX && ply.yP >= znDivY) { // zone 4 (quadrant bottom-left)
          shootAccuracy(findZonalPercent((znDivX * 2) - 70, (znDivY * 2) - 70), ply);
        }
      }
    } else { // if player is USER
      if (ply.xP < znDivX && ply.yP < znDivY) { // zone 1 (quadrant top-left)
        shootAccuracy(findZonalPercent(2 * ply.xP, 2 * ply.yP), ply);
      } else if (ply.xP >= znDivX && ply.yP < znDivY) { // zone 2 (quadrant top-right)
        shootAccuracy(findZonalPercent((znDivX * 2) - 70, 2 * ply.yP), ply); // '70' (70px) is width of player
      } else if (ply.xP < znDivX && ply.yP >= znDivY) { // zone 3 (quadrant bottom-right)
        shootAccuracy(findZonalPercent(2 * ply.xP, (znDivY * 2) - 70), ply);
      } else if (ply.xP >= znDivX && ply.yP >= znDivY) { // zone 4 (quadrant bottom-left)
        shootAccuracy(findZonalPercent((znDivX * 2) - 70, (znDivY * 2) - 70), ply);
      }
    }
    // zKeyAllow = true;
  }
}

function shootAccuracy(percentVal, ply) { // defining the shoot accuracy
  var rdmNum = Math.floor(Math.random() * 100 + 1); // returns a random number between 1 to 100 (both inclusive)
  // if random number is within (equal to or less than) the defined percentage, then the shot would become a goal
  if (rdmNum <= percentVal) { // the theory is that the higher the percentage value, the more chance of the random number coming within it, thus creating the goal
    toGoal(ply, hmChk); // translate ball to goal (considering home/away status of user/com)
  } else { // if not a goal
    notToGoal(ply, hmChk); // translate ball to boundary
  }
}

function toGoal(ply, isHome) { // translation of ball to goal while being shot (goal given)
  var rdmNum = Math.floor(Math.random() * 9), // returns a random between 0 to 9 (inclusive)
      usBlSht = isHome ? 1150 : -30, // if user playing home, then ball (when shot) should translate to the right (xPos of 1150) > vice versa
      cmBlSht = isHome ? -30 : 1150; // if com playing home ""

  shChk = true; // ball is being shot

  if (ply === tgPy) { // if shot by USER
    mtBl.xP = usBlSht; // hides beyond goal
    mtBl.yP = goalHgt + ((goalHgt / 10) * rdmNum); // increments of 10 equal divisions (to determine which area of the goal ball will be shot at; totally random)

    setTimeout(function () {
      postGlRst(ply, true) // reset
    }, (setPsTime(tgPy, mtBl, 850) * 1000) + 1000);

  } else if (ply === tgComPy) { // else if shot by COM.
    mtBl.xP = cmBlSht; // hides beyond goal as well
    mtBl.yP = goalHgt + ((goalHgt / 10) * rdmNum);
    setTimeout(function () {
      postGlRst(ply, true) // reset
    }, (setPsTime(tgComPy, mtBl, 850) * 1000) + 1000);

  }
}

function notToGoal(ply, isHome) { // translation of ball outside of goal (no goal given)
  var rdmNum1 = Math.floor(Math.random() * 2 + 1), // returns a number between 1 to 2 (inclusive)
      rdmNum2 = Math.floor(Math.random() * 2 + 1), // returns a number between 1 to 4 (inclusive)
      usBlSht = isHome ? 1090 : 25, // if user playing home, then ball (when shot) should translate to the right (xPos of 1090) > vice versa
      cmBlSht = isHome ? 25 : 1090; // if com playing at home, ""

  shChk = true; // ball is being shot

  if (rdmNum1 === 1) { // if random number is 1
    if (ply === tgPy) { // shot by USER
      mtBl.xP = usBlSht; // touches boundary
      mtBl.yP = goalHgt - ((goalHgt / 10) * rdmNum2); // shoot ball to top side of console area (outside goal)

      setTimeout(function () {
        postGlRst(ply, false) // reset
      }, (setPsTime(tgPy, mtBl, 850) * 1000) + 1000);

    } else if (ply === tgComPy) { // shot by COM.
      mtBl.xP = cmBlSht; // touches boundary (but on other side)
      mtBl.yP = goalHgt - ((goalHgt / 10) * rdmNum2);

      setTimeout(function () {
        postGlRst(ply, false) // reset
      }, (setPsTime(tgComPy, mtBl, 850) * 1000) + 1000);

    }
  } else { // random number is 2
    if (ply === tgPy) { // shot by USER
      mtBl.xP = usBlSht; // touches boundary
      mtBl.yP = (goalHgt * rdmNum1) + ((goalHgt / 10) * rdmNum2); // shoot ball to bottom side of console area (outside goal)

      setTimeout(function () {
        postGlRst(ply, false) // reset
      }, (setPsTime(tgPy, mtBl, 850) * 1000) + 1000);

    } else if (ply === tgComPy) { // shot by COM.
      mtBl.xP = cmBlSht;
      mtBl.yP = (goalHgt * rdmNum1) + ((goalHgt / 10) * rdmNum2);

      setTimeout(function () {
        postGlRst(ply, false) // reset
      }, (setPsTime(tgComPy, mtBl, 850) * 1000) + 1000);

    }
  }
}

function invPy() { // inverses target and secondary players when ball is passed
  // zKeyAllow = false; // avoid repetition
  // xKeyAllow = false;
  if (plyMv !== true) { // if user player is not moving
    psChk = true; // ball is being passed (gives clearance to add transition property)
    switch (this.tgPy) {
      case uPy1:  // if 'tgPy' variable in the window is uPy1, then set it to uPy2 (opposite)
        tgPy = uPy2;
        scPy = uPy1;
      break;
      case uPy2:
        tgPy = uPy1;
        scPy = uPy2;
      break;
    }
  } else { // if player is moving (foward pass)
    fwdPs();
  }
  // zKeyAllow = true;
  // xKeyAllow = true;
}

function fwdPs() { // foward passing (only when player moving)

}


function plyMvDect() { // loop detecting movement of user player
	if (uP || rG || dN || lF) { // if any one of the arrow keys are pressed
		plyMv = true; // player is moving
	} else {
		plyMv = false; // player not moving
	}
}
