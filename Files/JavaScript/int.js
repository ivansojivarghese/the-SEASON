
// loop variables

var highPL, // high-performance loop variable
	medPL, // med ""
	lowPL, // low ""

	lpArr, // variable for initiating and stopping loops
	lpFuncArr, // loop array containing functions

	upLp, // defining arrow key loops variables
	dnLp,
	lfLp,
	rgLp,

	cnEl = document.getElementsByClassName("conElm"), // console elements (to be toggled for game int)
	cnElLen = cnEl.length - 1; // length

function loopInt(con, spd) { // initiate loop (condition, speed)

	var lpFuncArr = [highPLoop, medPLoop, lowPLoop, upLoop, dnLoop, lfLoop, rgLoop], // array containing loop functions
		lpFuncArrLen = lpFuncArr.length - 1; // looping length

	if (con) { // if 'con' = true, then setInterval respective loops with defined speed
		var i; // looping iterator
		lpArr = setInterval(function () { // array loop (that loops through other loops in other array)

			for (i of lpFuncArr) { // loops through each function definition (take note that this is a new loop feature; ensure compatibility)
				i(); // invoking function definitions (inside in the lpFuncArr array)
			}

		}, spd); // runs function at specified speed (ms)

	} else { // else (if 'con' is false, then reverse the process (clearInterval, reducing the need for excessive functions)

		clearInterval(lpArr); // stop/pause game (or loops)
	}
}

function gmInt() { // to initiate the game
  	document.body.removeEventListener("keydown", gmInt); // removing initiation banner keydown listener

	 	conIntDis(0); // not display initiation banner

   	document.body.addEventListener("keydown", arrKeyDn); // adds listener for key down
   	document.body.addEventListener("keyup", arrKeyUp); // adds listener for key up

	loopInt(true, 1000/60);
}

function conIntDis(int) { // display initiation banner or not

  for (i = int; i <= cnElLen; i++) {
    switch (i) {
      case 0: // banner
        cnEl[i].classList.add("noView"); // not display banner
			break;
      case 1:
      case 2: // margin and game area
        cnEl[i].classList.toggle("op"); // if 'op' not present, removes it; vice versa
    }
  }

}
