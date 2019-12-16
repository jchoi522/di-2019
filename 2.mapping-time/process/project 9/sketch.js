function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)
}



function draw() {
background('red');
  var now = clock()
var sec = map(now.progress.sec, 0, 1, 0, 500)
var min = map(now.progress.min, 0, 1, 0, 500)
var hour = map(now.progress.hour, 0, 1, 0, 500)
var day = map(now.progress.day, 0, 1, 0, 500)
var season = map(now.progress.season, 0, 1, 0, 500)
var year = map(now.progress.year, 0, 1, 0, 500)
stroke(255,170)
strokeWeight(200)
  line(year, 0, year, 500)
stroke(204,170)
strokeWeight(87)
  line(season, 0, season, 500)
stroke(153,170)
  strokeWeight(60)
  line(day, 0, day, 500)
stroke(102,170)
  strokeWeight(35)
    line(hour, 0, hour, 500)
stroke(51,170)
strokeWeight(20)
  line(min, 0, min, 500)
stroke(0,170)
strokeWeight(10)
  line(sec, 0, sec, 500)






}
