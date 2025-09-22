
var	uP = false, // variables to check if the up/down/left/right keys are pressed
		dN = false,
		lF = false,
		rG = false,

		blCp = false, // ball capture variable

		pySpd = 4, // player speed

		plyMv = false; // check if player (user) is moving



//////////// variable-function loops

// high, medium and low priority (performance) loops; these run in order of importance (every execution)
var highPLoop = function() { blCtl(); setPos(); }, // setting positions of ball and objects

	medPLoop = function() { colDct(); cmPyMv(); }, // collision detect and COM./USER. sec control

	lowPLoop = function() { plyMvDect(); tmChk(); }, // user move detect & countdown timer
	
	
// loops detecting pressing of arrow keys (all are independent of each other, which is why 4 different functions)

	upLoop = function() { // 'UP'
		switch (uP) {
			case true: // run code block only when 'UP' key is pressed
				plyMv = true;
				switch (tgPy.yP >= pySpd) { // speed used as constant to determine the console boundary
					case true:
						tgPy.yP -= pySpd; // decrement y-pos
					break;
					case false:
						tgPy.yP = 0; // if boundary is reached, default to 0 (top)
					break;
				}
			break;
		}
	},

	rgLoop = function() { // 'RIGHT'
		switch (rG) {
			case true:
				plyMv = true;
				// zKeyAllow = true;
				// xKeyAllow = true;
				switch (tgPy.xP <= 1030 - pySpd) { // '1030' is the width of the console subtracted by the '70' (player width)
					case true:
						tgPy.xP += pySpd; // increment x-pos
					break;
					case false:
						tgPy.xP = 1030; // if boundary is reached, default to 1030 (right)
					break;
				}
			break;
		}
	},

	dnLoop = function() { // 'DOWN'
		switch (dN) {
			case true:
				plyMv = true;
				// zKeyAllow = true;
				// xKeyAllow = true;
				switch (tgPy.yP <= 480 - pySpd) { // SAME METHOD AS ABOVE
					case true:
						tgPy.yP += pySpd;
					break;
					case false:
						tgPy.yP = 480;
					break;
				}
			break;
		}
	}, 

	lfLoop = function() { // 'LEFT'
		 switch (lF) {
		 	case true:
				plyMv = true;
				// zKeyAllow = true;
				// xKeyAllow = true;
				switch (tgPy.xP >= pySpd) { // SAME METHOD AS ABOVE
					case true:
						tgPy.xP -= pySpd;
					break;
					case false:
						tgPy.xP = 0;
					break;
				}
		 	break;
		 }
	};
