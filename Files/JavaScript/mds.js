
// other miscellaneous functions

var trsSpd = pySpd / 2,

    shotFuncPsd = false, // 'shoot' function has not been passed

    psMnu = document.getElementById("pauseMenu"); // pause menu in game

    tmLp = ""; // team players update loop variable



function findPos(tm) { // find specifc position of a team

	for (i = 0; i <= tBLen; i++) { // looping through every team

		if (tm === tabDetArr[i][1].innerHTML) { // if argument tm name equals team name column

			var tmPos = tabDetArr[i][0].innerHTML, // team pos. number
				tmPosLstDg = tmPos.charAt(tmPos.length - 1), // team pos. last character
				tmPosSuf = ""; // team pos. suffix

			// add suffix
			if (tmPosLstDg == "1") { // if 1st place
				tmPosSuf = "st"; // 'st' suffix
			} else if (tmPosLstDg == "2") { // 2nd place
				tmPosSuf = "nd"; // 'nd' suffix
			} else if (tmPosLstDg == "3") { // 'rd' suffix
				tmPosSuf = "rd"; // 'nd' suffix
			} else if (tmPosLstDg >= "3" || tmPosLstDg == "0") { // anything else 'th' suffix
				tmPosSuf = "th"; // 'nd' suffix
			}

			return "<span>" + Number(tmPos) +"</span><sup>" + tmPosSuf + "</sup>";
		}

	}
}

function findZonalPercent(offsetX, offsetY) { // finding shooting accuracy percentage (randomised)
  var pcntX = (((-1 * tgPy.xP) + offsetX) / znDivX) * 100, // find x-positon (of player) as percentage of zone (defined as 4 quadrants above) width
      pcntY = (((-1 * tgPy.yP) + offsetY) / znDivY) * 100; // "" y-positon ""

      avgPcnt = Math.floor((pcntX + pcntY) / 2); // average shoot accuracy percentage of y-percentage and x-percentage

      return avgPcnt; // this percentage is how close the ply is to the center (HENCE, the averaging btwn x-pos and y-pos)
}

function comShtOrPs() { // finds radial distance between com. player (with ball) and both user players
  // finding distance between tgt. COM and tgt. USER
  var aVal = tgComPy.yP - tgPy.yP; // a-value (pytaghoras theorem)
  var bVal = tgComPy.xP - tgPy.xP; // b-value

  var cVal = Math.sqrt((aVal * aVal) + (bVal * bVal)); // c-value (distance)

  if (cVal <= 150 && tackled === false) { // if radial distance (between tgt. USER and tgt. COM) is less than 150
    findDirct(hmChk); // find the direction of tgt. USER in relation to tgt. COM
  }
}

function findDirct(isHome) { // finds direction
  var comX = tgComPy.xP, // x=pos. of COM. player
      comY = tgComPy.yP, // y-pos. of COM. player
      // '70' constant is the width/height of player
      appLmt = isHome ? tgPy.xP + 70 <= comX : tgPy.xP >= comX + 70; // if user playing home, head-on approach limit would be LESS in x-pos terms (than com xPos)> vice versa

  if (appLmt) { // if USER tgt. is approaching COM tgt. head on (home/away inclusive)

    if (tgPy.yP + 70 > comY && tgPy.yP + 70 < comY + 70) { // if the bottom-bnd of USER is below the top-bnd of COM + bottom-bnd of USER is above bottom-bnd of COM
      comInvPy(); // pass
    } else if (tgPy.yP > comY && tgPy.yP < comY + 70) { // "" same as above, but with bottom positions
      comInvPy(); // pass
    } else { // other direction (within the goal direction) > basically if straight on head-on
      // shoot
      if (shotFuncPsd === false) { // if function has not been passed
        shoot(tgComPy);
      }
    }

  } else { // if USER tgt. is approaching COM tgt. from other directions
    // shoot
    if (shotFuncPsd === false) {
      shoot(tgComPy);
    }
  }
}
/*
function setHmAwTm() { // sets the home/away team players
  hmTm = tgComPy; // home team player
  awTm = tgPy; // away team player
}
*/
function setHmAwTm(hmTeamN, awTeamN) { // sets the home/away team players
  hmTm = hmTeamN; // home team player
  awTm = awTeamN; // away team player
}

setHmAwTm(tgComPy, tgPy); // initial home/away fixture for slate

// tmLp = setInterval(setHmAwTm, 1000/60);

/*
function quit() { // quit game

  gmNav(event, pages[0]);

  psMnu.style.display = "none";
}
*/

// DEVELOPER TOOLS

function repeat() { // to test variable values
  console.log("shChk: " + shChk + ", blCp: " + blCp);
  // console.log("psChk: " + psChk + ", usBlCp: " + usBlCp + ", psBlFirst: " + psBlFirst + ", blCp: " + blCp);
  // console.log(attackMode);
}

// setInterval(repeat, 1000/60);
