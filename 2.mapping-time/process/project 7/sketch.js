function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)
}



function draw() {
background('white');
  var now = clock()
var sec = map(now.progress.sec, 0, 1, 0, 520)
var min = map(now.progress.min, 0, 1, 0, 520)
var hour = map(now.progress.hour, 0, 1, -20, 520)
var day = map(now.progress.day, 0, 1, -20, 520)

  rect  (0, 50, sec,40)
  rect  (0, 100, min,40)
  rect  (0, 150, hour,40)
  rect  (0, 200, day,40)


}
