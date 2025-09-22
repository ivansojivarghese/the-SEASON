
// game timer
var gTm = document.getElementById("gameTimer"), // game timer (during game)
		m = 0, // min
		sT = 1, // sec (tens)
		sO = 0, // sec (ones)
		tmCnt = 0, // count value for game timer

		gmStop = false; // whether game has stopped or not

gTm.innerHTML = m + ":" + sT + sO;

function tmChk() {
	if (gmStop === false) { // if game is not stopped (as in paused, or a goal have been scored, etc.)
		tmCnt++; // count no.of times function is executed
		switch (tmCnt) { // execute timer every 60th execution of gmLoop
			case 60:
				tm();
				tmCnt = 0;
			break;
		}
	}
}

function tm() {
	if (m === 0 && sT === 0 && sO === 0) { // if minute, seconds are 0
		end(); // end game
	} else if (sT === 0 && sO === 0) { // if seconds are 0
		m--; // decrement minute
		sT = 5;
		sO = 9;
	} else if (sO === 0) { // if second (one) is 0
		sT--; // decrement second (ten)
		sO = 9;
	} else { // decrement second (one) always
		sO--;
	}

	gTm.innerHTML = m + ":" + sT + sO; // interpolate
}
