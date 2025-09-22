function plyTrack(mus, musNxt) {
  mus.play();
  var trkInterval = setInterval(function () {
     if (mus.ended) {
       clearInterval(trkInterval);
       plyTrack(musNxt, mus);
     } else if (gamePlay) {
       mus.pause();
     } else {
       mus.play();
     }
  }, 1000/60); // 60 times per second
}

