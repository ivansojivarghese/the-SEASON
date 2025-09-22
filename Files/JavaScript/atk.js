
// while USER in attack mode
var atkLp = ""; // attack loop variable

function atkLoop() { // tgt. COM to follow tgt. USER
  if (attackMode && usBlCp) { // if USER has ball and in attack
    var xTargt = tgPy.xP; // follow these coords (which is TGT. USER)
    var yTargt = tgPy.yP;
    // defining the 4 quadrants of direction
    if (xTargt === tgComPy.xP && yTargt < tgComPy.yP) { // direct top
      tgComPy.yP -= xDcrm; // chase upwards (directly straight without diagonally)
    }
    if (xTargt > tgComPy.xP && yTargt < tgComPy.yP + 70) { // top right
      if (tgComPy.xP <= xTargt) { // COM. chase to target USER
        tgComPy.xP += xDcrm; // x-pos
      }
      if (tgComPy.yP >= yTargt) {
        tgComPy.yP -= xDcrm; // y-pos
      }
    } else if (xTargt > tgComPy.xP && yTargt === tgComPy.yP) { // direct right
      tgComPy.xP += xDcrm;
    } else if (xTargt > tgComPy.xP && yTargt > tgComPy.yP) { // bottom right
      if (tgComPy.xP <= xTargt) {
        tgComPy.xP += xDcrm;
      }
      if (tgComPy.yP <= yTargt) {
        tgComPy.yP += xDcrm;
      }
    } else if (xTargt === tgComPy.xP && yTargt > tgComPy.yP) { // direct bottom
      tgComPy.yP += xDcrm;
    } else if (xTargt < tgComPy.xP + 70 && yTargt > tgComPy.yP) { // bottom left
      if (tgComPy.xP >= xTargt) {
        tgComPy.xP -= xDcrm;
      }
      if (tgComPy.yP <= yTargt) {
        tgComPy.yP += xDcrm;
      }
    } else if (xTargt < tgComPy.xP && yTargt === tgComPy.yP) { // direct left
      tgComPy.xP -= xDcrm;
    } else if (xTargt < tgComPy.xP + 70 && yTargt < tgComPy.yP + 70) { // top left
      if (tgComPy.xP >= xTargt) {
        tgComPy.xP -= xDcrm;
      }
      if (tgComPy.yP >= yTargt) {
        tgComPy.yP -= xDcrm;
      }
    }
  }
}

atkLp = setInterval(atkLoop, 1000/60);
