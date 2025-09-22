
// check for key selection
function arrKeyDn(e) {
	
	// console.log('down');
	
	psChk = false; // remove transition after passing

	switch (e.key) {
		case "ArrowUp": // 'UP' arrow
		case "Up": // support for IE
			uP = true;
		break;
		case "ArrowRight": // 'RIGHT' arrow
		case "Right":
			rG = true;
		break;
		case "ArrowDown": // 'DOWN' arrow
		case "Down":
			dN = true;
		break;
		case "ArrowLeft": // 'LEFT' arrow
		case "Left":
			lF = true;
		break;
	}
}

// check for arrow key release
function arrKeyUp(e) {
	
	// console.log('up');
	
	switch (e.key) {
		case "ArrowUp": // 'UP' arrow
		case "Up":
			uP = false;
		break;
		case "ArrowRight": // 'RIGHT' arow
		case "Right":
			rG = false;
		break;
		case "ArrowDown": // 'DOWN' arrow
		case "Down":
			dN = false;
		break;
		case "ArrowLeft": // 'LEFT' arrow
		case "Left":
			lF = false;
		break;
	}
}
