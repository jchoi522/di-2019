
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)
}



function draw() {
background('white');
  var now = clock()

var sec = map(now.progress.sec, 0, 1, -20, 520)
var min = map(now.progress.min, 0, 1, -20, 520)
var hour = map(now.progress.hour, 0, 1, -20, 520)
var day = map(now.progress.day, 0, 1, -20, 520)

  circle  (sec, 50, 40)
  circle  (min, 100, 40)
  circle  (hour, 150, 40)
  circle  (day, 200, 40)


}
