
// table sort
var lLm = tBLen - 1, // loop limit
		ptsDf = function(pos) { // pts difference btwn 2 consecutive teams
			return rtnPts(pos + 1) - rtnPts(pos);
		},
		gdDf = function(pos) { // gd difference
			return rtnGd(pos) - rtnGd(pos + 1); // return the difference in GD values btwn 2 consecutive teams
		},
		gfDf = function(pos) { // gf difference
			return rtnGf(pos + 1) - rtnGf(pos); // return the difference in GF values btwn 2 consecutive teams
		},
		tnDf = function(pos) { // team name (first letter) difference
			if (rtnTn(pos) > rtnTn(pos + 1)) {
				return true; // anomaly present
			} else {
				return false;
			}
		};

function tbSrt() { // sort with points first, then if equalities occur, proceed to next stage

	// SORT POINTS
	do { // do this function once
		for (i = 0; i <= lLm; i++) { // doing comparison checks between any 2 pts values (from top to bottom)

			if (rtnPts(i) < rtnPts(i + 1)) { // if one place pts less than next place pts
				if (i < lLm) { // proceed if only the first 3 rows are being checked (so that the last row would be placed last, with the null value statement)
					tabBody.insertBefore(tabBody.children[i], tabBody.children[i + 2]); // place before
				} else {
					tabBody.insertBefore(tabBody.children[i], null); // place at the end
				}
			} //else if (i <= lLm) { // if team on the loop is not the last (i = 3)
				else if (rtnPts(i) === rtnPts(i + 1)) { // if both consecutive pts are same,

				// SORT GD
				if (rtnGd(i) < rtnGd(i + 1)) { // if one place GD less than next place GD
					tabBody.insertBefore(tabBody.children[i], tabBody.children[i + 2]); // place before
				} else if (rtnGd(i) === rtnGd(i + 1)) { // else if both GD are the same

					// SORT GF
					if (rtnGf(i) < rtnGf(i + 1)) { // if one place GF less than the next place GF
						tabBody.insertBefore(tabBody.children[i], tabBody.children[i + 2]); // place before
					} else if (rtnGf(i) === rtnGf(i + 1)) { // if these 2 also are same

						// SORT ALPHATBETICAL (TEAM NAME)
						if (rtnTn(i) > rtnTn(i + 1)) { // if string first character is greater than one below
							tabBody.insertBefore(tabBody.children[i], tabBody.children[i + 2]); // place before
						}
					}
				}
			}
		}
	}
	while (chkPtsDsc()); // then continue if there's an anomaly with the descending pattern

	updTabDet(); // update table info
}

function chkPtsDsc() { // check for any anomalies
	var anomChk = false; // anomaly check

	for (i = 0; i <= lLm; i++) {
		if (ptsDf(i) > 0) { // if there's a difference
			anomChk = true; // there is anomaly
			break; // stop loop
		} else if (ptsDf(i) === 0 && gdDf(i) < 0) { // if no difference, AND difference in GD vaLues incorrect
			anomChk = true; // there is anomaly
			break; // stop
		} else if (ptsDf(i) === 0 && gdDf(i) === 0 && gfDf(i) > 0) { // if no difference again; and difference in GF values incorrect
			anomChk = true; // there is anomaly
			break; // stop
		} else if (ptsDf(i) === 0 && gdDf(i) === 0 && gfDf(i) === 0 && tnDf(i)) { // if everything else  if ok, except the ALPHATBETICAl listing (as last resort)
			anomChk = true; // there is anomaly
			break; // stop
		}
	}

	return anomChk;
}

function rtnPts(pos) { // return pts of a specified team pos. in real time
	return Number(tabBody.children[pos].children[9].innerHTML); // return pts
}

function rtnGd(pos) { // "" GD
	return Number(tabBody.children[pos].children[8].innerHTML); // return GD
}

function rtnGf(pos) { // "" GF
	return Number(tabBody.children[pos].children[6].innerHTML); // return GF
}

function rtnTn(pos) { // "" team name first character
	return tabBody.children[pos].children[1].innerHTML.charAt(0); // return team name 1st character
}
/*
function devCtrl() {
	tabBody.children[0].children[9].innerHTML = "3";
	tabBody.children[1].children[9].innerHTML = "3";
	tabBody.children[2].children[9].innerHTML = "0";
	tabBody.children[3].children[9].innerHTML = "0";

	tabBody.children[0].children[8].innerHTML = "3";
	tabBody.children[1].children[8].innerHTML = "2";
	tabBody.children[2].children[8].innerHTML = "-3";
	tabBody.children[3].children[8].innerHTML = "-3";

	tabBody.children[0].children[6].innerHTML = "6";
	tabBody.children[1].children[6].innerHTML = "3";
	tabBody.children[2].children[6].innerHTML = "0";
	tabBody.children[3].children[6].innerHTML = "0";
}

function devCtrl2() {
	tabBody.children[0].children[9].innerHTML = "9";
	tabBody.children[1].children[9].innerHTML = "6";
	tabBody.children[2].children[9].innerHTML = "4";
	tabBody.children[3].children[9].innerHTML = "1";
}
*/
