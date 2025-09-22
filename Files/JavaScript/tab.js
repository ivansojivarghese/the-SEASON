// table

var tabBody = document.getElementById("tb"), // table body (where teams are positioned)
	tBLen = tabBody.children.length - 1, // max count (loop); number of children (rows) in table body - 1
	tBRowLen = 9, // max count (loop); number of children (cells) in each table row - 1 
	// constant numeral used as this is a constant value

	tabDetArr = [ // empty array of team details, and team pos. (in each row) - there are 4 rows
			[], // multidimensional array (arrays in an array)
			[],
			[],
			[]
	];

function updTabDet() { // function to update table information (useful when sorting)

	// updating the originally created tabDet array with cell information (team pos. as well)
	for (i = 0; i <= tBLen; i++) { // looping among rows (teams)

		for (j = 0; j <= tBRowLen; j++) { // looping details (cells) within each team (row)

			tabDetArr[i][j] = tabBody.children[i].children[j]; // updating array with cell information from table
			// tabDetArr[2][9] = pts (9 across) of team in 3rd pos. (2 down)

			if ((rnNm === 1) && (j > 2)) { // if rnNm is 1, and cell iteration has surpassed 1 (2 cells across done)
				
				tabDetArr[i][j].innerHTML = 0; // set the remaining cells to 0 value - no match has played

			}

		}

		tabDetArr[i][2].innerHTML = rnNm - 1; // display games played (which is round no.); minus 1 from gamedet rnNm

		// updating (setting) team pos. no.
		tabDetArr[i][0].innerHTML = i + 1; // pos. no. is array index (plus 1 since pos. cant be 0)

	}

}

updTabDet(); // executes on game start-up

function tabUpdate(h, a, oh, oa) { // home sc, away, other home, other away
	// which teams are home, away, etc.
	hT = slateMchs[rnNm - 1].children[0].innerHTML, // slate match home
	aT = slateMchs[rnNm - 1].children[4].innerHTML, // "" away

	oHT = otherMchs[rnNm - 1].children[0].innerHTML, // other match home
	oAT = otherMchs[rnNm - 1].children[4].innerHTML; // "" away

	rnNm += 1; // increase round number

	// record data

	tbUpd(h, a, oh, oa); // update goal, WDL, pts data for every team (in tabSec.js)
	
	// sort data

	tbSrt(); // sort table

}



