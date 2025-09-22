
// game pausing

function pause() { // pause

  for (i = 0; i <= cnElLen; i++) { // make game console elm fade
    switch (i) {
      case 1:
      case 2: // margin and game area
        cnEl[i].classList.add("op"); // add opacity from background elements
    }
  }

  loopInt(false, null); // pause game (essentially implement clearInterval statements on currently running loops

  psMnu.style.display = "block"; // display pause menu
}

function resume() { // resume

  for (i = 0; i <= cnElLen; i++) { // make game console elm normal
    switch (i) {
      case 1:
      case 2: // margin and game area
        cnEl[i].classList.remove("op"); // remove opacity from background elements
    }
  }

  psMnu.style.display = "none"; // not display pause menu

  loopInt(true, 1000/60); // resumes game (or loops)
}
