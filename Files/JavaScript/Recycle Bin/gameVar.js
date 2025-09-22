

/*
var mpg = document.getElementById('mainPg'); // main page
var gmpg = document.getElementById('gmMenPg'); // game menu page

var tpg = document.getElementById('tabPg'); // table page
var frpg = document.getElementById('fixResPg'); // fixtures/results page





var options = document.getElementsByClassName('options'); // all options/buttons in game

var pgArray = [mainPg, gmMenPg, plyDetPg, tabPg, fixResPg]; // stores all pages in game

var pgArrayClasses = []; // empty array
*/



/*
var js = document.getElementById("js");
var erPage = document.getElementById("errorPage");
var loadSymWrap = document.getElementById('loadSymbolWrapper'); 
var loadSym  = document.getElementById('loadSymbol'); 


var gamePg = document.getElementById('gameMenu'); // game page
var gameDet = document.getElementById('gameDet'); // game details
var gameTab = document.getElementById('gameTable'); // game table
var gameFixRes = document.getElementById('gameFixRes'); // game fixtures/results
var gameCon = document.getElementById('gameConsole'); // game console

// buttons
var plyBut = document.getElementById('playButton'); // in main page
var optPlyBut = document.getElementById('optHeadPly'); // in game options
var optTabBut = document.getElementById('optHeadTab'); // in game options
var optFixResBut = document.getElementById('optHeadFixRes'); // in game options
var detPlyBut = document.getElementById('gameDetPly'); // in fixture details
var bckButGrp = document.getElementsByClassName('bckButGrp');
// gameplay 
var userTmHome = false; 
var matchBall = document.getElementById('matchBall');
var gameTime = document.getElementById('gameTime');
var srtTime = 3; 
var gmTimeMn = 3;
var gmTimeSecTen = 0;
var gmTimeSecOne = 0;
// music
var aberMus = document.getElementById('aberMus'); // 'Aber'
var rebMus = document.getElementById('rebMus'); // 'Rebooted'
var whiSou = document.getElementById('whiSou'); // 'Whistle'
var whiSouPlayed = false;
var croSou = document.getElementById('croSou'); // 'Crowds'
var gamePlay = false;
*/
/*
var durNum = 0.5; 
loadSym.style.animationDuration = durNum + "s";
*/
/*
if (navigator.appName !== "Netscape" && navigator.appName !== "Opera") { // IE10 or earlier
	initError();
} else { // Chrome, Firefox, Safari, Opera, IE11
	init();
}

function init() {
	// plyTrack(aberMus, rebMus); 
	/*
	setTimeout(function () {
		startLoadSym(breakValCal(durNum), loopValCal(durNum));
	}, 1000);
	
  	// loadSymWrap.style.display = "none";
	// gameDet.style.display = "block";
}*/
/*
function initError() {
	loadSymWrap.style.display = "none";

	document.body.removeAttribute("class", "positionClass3");
	document.body.setAttribute("id", "posMod");

	erPage.style.display = "block";
}
*/
/*
function breakValCal(dur) { // break value calculator
	return (dur * 3/8) * 1000;
}

function loopValCal(dur) { // loop value calculator
	return (dur * 87/8) * 1000;
}

function startLoadSym(breakVal, loopVal) {
	loadSym.style.animationPlayState = "running";
	setTimeout(function () { 
		loadSym.style.display = "block";
		setTimeout(function () {
			loadSym.style.display = "none";
			setTimeout(function () {
				loadSym.style.animationPlayState = "paused";
				setTimeout(function () {
					mainPg.style.display = "block";
					loadSymWrap.style.display = "none";
					plyTrack(aberMus, rebMus); 
				}, 500);
			}, breakVal);
		}, loopVal - breakVal);
	}, breakVal);
}
*/