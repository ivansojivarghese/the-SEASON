
// game end
var	fxRsTb = document.getElementById("fixResTab"), // results table
	mRs = document.getElementById("mRes"), // match-result summary

	sumH = document.getElementById("sumHm"), // summary scores
	sumA = document.getElementById("sumAw"),
	
	sumHName = document.getElementById("sumHomeNm"), // summary team names
	sumAName = document.getElementById("sumAwayNm"), 

	slateMchs = document.getElementsByClassName("slateMch"), // matches that slate plays in
	otherMchs = document.getElementsByClassName("otherMch"), // other match (in each round)

	plyDetHm = document.getElementById("plDtTmHm"), // name (plyDetPg) home
	plyDetAw = document.getElementById("plDtTmAw"), // ""
	/*
	pyDtHmCr = document.getElementById("plyDetHmCir"), // circle (for color change) [home]
	pyDtAwCr = document.getElementById("plyDetAwCir"), // [away]
	*/
	hmCircleEl = document.getElementsByClassName("hm"), // home team circle elemnts (console ones change accordingly)
	awCircleEl = document.getElementsByClassName("aw"), // away team circle elemnts (console ones change accordingly)

	userPlyers = document.getElementsByClassName("user"), // players in user control (which is in slate team)
	comPlayers = document.getElementsByClassName("com"), // players in com control (other team)

	hmTmPsRk = document.getElementById("hmTmPosRnk"), // team pos detail container (home)
	awTmPsRk = document.getElementById("awTmPosRnk"), // ""

	hmInm = 1, // current color class of home team
	awInm = 0, // "" away team

	///////

	hT = "", // slate match home
	aT = "", // "" away
	oHT = "", // other match home
	oAT = "", // "" away

	//////

	hmChk = false, // check if the user is playing at home (in the following round); updates every round
	endChk = false; // check whether game (match) in ending process

// DEVELOPER TESTING

// hmChk = true;

///////////////////////


function end() { // runs at end of match, for results, points tally and table pos.

	var homeSc = document.getElementById("hmScre").innerHTML, // contains home team score
		awaySc = document.getElementById("awScre").innerHTML, // contains away team score

		hmTeamN = document.getElementById("hmName").innerHTML, // home team
		awTeamN = document.getElementById("awName").innerHTML; // ""

	endChk = true;

	sumH.innerHTML = homeSc; // interpolate scores
	sumA.innerHTML = awaySc;

	sumHName.innerHTML = hmTeamN; // interpolate team names into game summary page
	sumAName.innerHTML = awTeamN;

	mRs.style.display = "block"; // display summary

	loopInt(false, null); // stops game

	resUpdate(Number(homeSc), Number(awaySc)); // updating results (converting string values of HTML elements, as function arguments, to number to avoid concatenation issues)
}

function resUpdate(h, a) { // updating results page function
	// other match
	var otHmSc = Math.floor(Math.random() * 6), // random scores, with interger value from 0 - 5
		otAwSc = Math.floor(Math.random() * 6); // ""

	// match with slate team
	slateMchs[rnNm - 1].children[1].innerHTML = h; // home score for home team

	slateMchs[rnNm - 1].children[3].innerHTML = a; // away score for away team

	// other match

	otherMchs[rnNm - 1].children[1].innerHTML = otHmSc; // home team

	otherMchs[rnNm - 1].children[3].innerHTML = otAwSc; // away team

	tabUpdate(h, a, otHmSc, otAwSc); // updating table

}

// tabUpdate function defined in tab.js

function mtcReset() { // resets match

	var hTeam = slateMchs[rnNm - 1].children[0].innerHTML, // returns both string names of home and away teams
		aTeam = slateMchs[rnNm - 1].children[4].innerHTML;

	assignSide(hTeam, aTeam); // assign 'hm/aw' class accordingly to home side players (and away side as well)

	mRs.style.display = "none"; // not display summary

	posReset(false, hmChk); // reset game object positions without timeout delay (parameter with home/away side of user)

	homeSc.innerHTML = "0"; // reset game scores
	awaySc.innerHTML = "0";

	m = 0; // reset timer
	sT = 1;
	sO = 0;

	gTm.innerHTML = m + ":" + sT + sO; // reset timer

	// add iBanner
	cnEl[0].classList.remove("noView"); // display banner

	edtTmDet(hTeam, aTeam); // edit (change) team details (in plyDet) & marker colours (in console)

	updTmNmes(hTeam, aTeam); // change score update banner in console
}

function edtTmDet(hm, aw) { // edit the team names(details) in plyDet before another match

	var tmColGrp = ["slate", "ocean", "sky", "leaf"], // group of team colours
		tmColClass = ["slateCol", "oceanCol", "skyCol", "leafCol"], // group of respective color classes
		tmColLen = tmColGrp.length - 1; // length of team colours

	// editing team names in plyDet
	plyDetHm.innerHTML = hm; // interpolating team names on ply details, based on fixture list (home) that slate plays in
	plyDetAw.innerHTML = aw; // (away)

	// editing colour borders (of the teams)
	for (i = 0; i <= tmColLen; i++) { // loop through all colours
		if (hm === tmColGrp[i]) { // if home team name corresponds with one of the team colours
			for (j = 0; j <= hmCircleEl.length - 1; j++) {
				hmCircleEl[j].classList.remove(tmColClass[hmInm]); // remove existing color class
				hmCircleEl[j].classList.add(tmColClass[i]); // "" add specified class (return true)
			}

			hmInm = i; // new existing color class
		}

		if (aw === tmColGrp[i]) { // "" away team
			for (j = 0; j <= awCircleEl.length - 1; j++) {
				awCircleEl[j].classList.remove(tmColClass[awInm]); // remove existing color class
				awCircleEl[j].classList.add(tmColClass[i]); // "" add specified class (return true)
			}

			awInm = i; // new existing color class
		}
	}

	// change rank (down the bottom)
	hmTmPsRk.innerHTML = findPos(hm); // determining rank from table
	awTmPsRk.innerHTML = findPos(aw);
}

function assignSide(hm, aw) { // assigns home/away status to teams in match of focus
	var n = 1; // number of players

	if (hm === "slate") { // if home team is slate
		setHmAwTm(tgPy, tgComPy); // set home / away team ply variables accordingly

		hmChk = true; // home check variable true

		for (i = 0; i <= n; i++) {
			// user
			if (userPlyers[i].classList.contains("aw")) { // if there is 'aw' class,
				userPlyers[i].classList.add("hm"); // add 'hm' class
				userPlyers[i].classList.remove("aw"); // remove 'aw' class
			}
			// com
			if (comPlayers[i].classList.contains("hm")) { // if there is 'hm' class,
				comPlayers[i].classList.add("aw"); // add 'aw' class
				comPlayers[i].classList.remove("hm"); // remove 'hm' class
			}
		}
	}

	if (aw === "slate") { // if away team is slate
		setHmAwTm(tgComPy, tgPy); // set home / away team ply variables accordingly

		hmChk = false; // home check variable false

		for (i = 0; i <= n; i++) {
			// user
			if (userPlyers[i].classList.contains("hm")) { // if there is 'hm' class,
				userPlyers[i].classList.add("aw"); // add 'aw' class
				userPlyers[i].classList.remove("hm"); // remove 'hm' class
			}
			// com
			if (comPlayers[i].classList.contains("aw")) { // if there is 'aw' class,
				comPlayers[i].classList.add("hm"); // add 'hm' class
				comPlayers[i].classList.remove("aw"); // remove 'aw' class
			}
		}
	}
}

function updTmNmes(hm, aw) { // update respective home/away team names in console
	var hmTeamN = document.getElementById("hmName"), // home team
			awTeamN = document.getElementById("awName"); // ""

	hmTeamN.innerHTML = hm; // interpolate string values
	awTeamN.innerHTML = aw;
}
