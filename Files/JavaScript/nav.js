
// pages
var pages = document.getElementsByClassName("pg"), // all pages in game
	
	// game details
	rnNumEl = document.getElementById("rndNum"), // round number (in game details)
	rnNm = 1; // starts with a round number for the gmDet page (table would feature 0 in games played)

// navigation between pages
function gmNav(e, pgNav) { // function used to determine the page which nests the option
	
	var pr = e.currentTarget.parentElement, // parent element of event target
	 		z = true; // variable to continue looping

	while (z) {
		
		switch (pr.classList.contains("pg")) { // if element contains the "pg" class
			case true:
				pr.classList.remove("inView");  // not display
				pgNav.classList.add("inView"); // display
				
				switch (pgNav) { // page to redirect
					case pages[5]: // if the specified page is the console
						
						setPos(); // sets postion of console elements
						conIntDis(1); // display initiation banner
						
						// intVar(); // set variables to default
						
						document.body.addEventListener("keydown", gmInt); // adds keydown listener for game initiation
						
					break;
					case pages[4]: // if page is fix/res
						
						if (endChk) { // if game (match) in ending process
							
							// temporary adjustments during moment
							pages[4].lastElementChild.firstElementChild.style.display = "none"; // disabling 'back' button of fix/res pg
							
							pages[4].lastElementChild.lastElementChild.style.display = "block"; // enabling 'next' button of "" to redirect to table
						}
						
					break;
					case pages[3]: // if page is table
						
						if (endChk) { // ""
							
							// temporary adjustments during moment
							pages[3].lastElementChild.firstElementChild.style.display = "none"; // disabling 'back' button of table pg
							
							pages[3].lastElementChild.lastElementChild.style.display = "block"; // enabling 'next' button of "" to redirect to game details
						}	
							
					break;
					case pages[2]: // if the specified page is the game details page
						
						endChk = false; // game has ended (or not ending yet)
						
						rnNumEl.innerHTML = rnNm; // setting up round number (rnNm in gmDetPg will always be 1 more than gmes played in tbPg)
						
						for (i = 3; i <= 4; i++) { // reversing navigation changes stated above (pages[3 & 4])
							
							pages[i].lastElementChild.firstElementChild.style.display = ""; // ensuring 'back' button enabled of fix/res and table pages
						
							pages[i].lastElementChild.lastElementChild.style.display = "none"; // disabling 'next' button of ""
						}
						
					break;
				}
				
				switch (pr) {
					case pages[5]: // navigating away from console
						/*
						document.body.removeEventListener("keydown", function (event) { // removes keydown listener that interact with game (end)
							arrKeyDn(event); // 'event' argument for FIREFOX compatibility
						}); 
						document.body.removeEventListener("keyup", function (event) { // removes keyup listener that interact with game (end)
							arrKeyUp(event); // 'event' argument for FIREFOX compatibility
						}); 
						*/
						document.body.removeEventListener("keydown", arrKeyDn);
						document.body.removeEventListener("keyup", arrKeyUp);
						
						mtcReset(); // match reset 
											
					break;
				}
			z = false; // stop loop
			break;
				
			case false:
						
				pr = pr.parentElement; // new value of x is parent of old x
						
			break;
		}
	}
}
