
var erPg = document.getElementById("errorPg"),
    mainPg = document.getElementById("mainPg");

function browserChk() { // CHECKS FOR IE
  var ua = navigator.userAgent;
  /*MSIE for IE11; Trident for IE10 and below
  if 'MSIE' or 'Trident' is present in the useragent, then browser is IE*/
  var isIE = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1 ? true : false;
/*
  if (isIE) {
    erPg.classList.add("inView");
  } else {
    mainPg.classList.add("inView");
  }*/
}
