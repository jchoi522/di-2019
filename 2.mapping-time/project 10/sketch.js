


function setup() {
  createCanvas(600, 600);
}

function draw() {
background('red')
noStroke()
  var now= clock()
  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  colorMode(RGB)

var millisColor= lerpColor(from, to, now.progress.millis)

var secondColor= lerpColor(from, to, now.progress.second)

var minColor= lerpColor(from, to, now.progress.min)

var hourColor= lerpColor(from, to, now.progress.hour)



var dayColor= lerpColor(from, to, now.progress.day)

var weekColor= lerpColor(from, to, now.progress.week)

var seasonColor= lerpColor(from, to, now.progress.season)

var yearColor= lerpColor(from, to, now.progress.year)

fill(millisColor)
rect(0, 0, 200, 200);
fill(secondColor)
rect(200, 0, 200, 200);
fill(minColor)
rect(400, 0, 200, 200);

fill(hourColor)
rect(0, 200, 200, 200);

rect(200, 200, 200, 200);
fill(dayColor)
rect(400, 200, 200, 200);

fill(weekColor)
rect(0, 400, 200, 200);
fill(seasonColor)
rect(200, 400, 200, 200);
fill(yearColor)
rect(400, 400, 200, 200);









}
