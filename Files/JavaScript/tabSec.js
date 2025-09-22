
// table update functions (during data processing)

function updTmGoals(scrd, cond, i) { // update scored and conceded goals for each team
	
	var gF = Number(tabDetArr[i][6].innerHTML), // gf data 
		gA = Number(tabDetArr[i][7].innerHTML); // ga data
	
	gF += scrd; // increment both with additional data points (goals)
	gA += cond; 
	
	var gD = gF - gA; // finding goal difference
	
	// interpolating new data
	tabDetArr[i][6].innerHTML = gF; // goals for
	tabDetArr[i][7].innerHTML = gA; // goals against
	tabDetArr[i][8].innerHTML = gD; // goal difference
	
}

function checkWDL(scrd, cond, i) { // check whether the match was a win, draw, or loss (depending on goals)
	// return WDL stats (for a team) as numbers
	var wC = Number(tabDetArr[i][3].innerHTML), // win column
		dC = Number(tabDetArr[i][4].innerHTML), // draw column
		lC = Number(tabDetArr[i][5].innerHTML), // loss column
		// return pts stats for team
		pts = Number(tabDetArr[i][9].innerHTML); 

	if (scrd > cond) { // if goals scored greater than conceded, then a win for team
		wC++; // increment by 1
	} else if (scrd < cond) {  // if a loss
		lC++;
	} else if (scrd === cond) { // if a draw
		dC++;
	}
	// increment pts of team
	pts = (wC * 3) + dC; // pts (for each team) is equal to no. of wins * 3 + no. of draws * 1
	
	// interpolating new data
	tabDetArr[i][3].innerHTML = wC; // wins
	tabDetArr[i][4].innerHTML = dC; // draws
	tabDetArr[i][5].innerHTML = lC; // losses
	
	tabDetArr[i][9].innerHTML = pts;
	
}

function tbUpd(h, a, oh, oa) { // update data for every team 

	for (i = 0; i <= tBLen; i++) { // looping every team in table

		if (tabDetArr[i][1].innerHTML === hT) {  // if selected team name = home team slate match
			
			updTmGoals(h, a, i); // update goals
			
			checkWDL(h, a, i); // update win/draw/loss record and pts

		} else if (tabDetArr[i][1].innerHTML === aT) { // if selected team name = away team slate match
			
			updTmGoals(a, h, i); 
			
			checkWDL(a, h, i);
			
		} else if (tabDetArr[i][1].innerHTML === oHT) { // if selected team name = home team other match
			
			updTmGoals(oh, oa, i);
			
			checkWDL(oh, oa, i); 
			
		} else if (tabDetArr[i][1].innerHTML === oAT) { // if selected team name = away team other match
			
			updTmGoals(oa, oh, i);
			
			checkWDL(oa, oh, i); 
			
		}
				
		tabDetArr[i][2].innerHTML = rnNm - 1; // display games played (which is round no.); minus 1 from gamedet rnNm
	
	}
	
}
