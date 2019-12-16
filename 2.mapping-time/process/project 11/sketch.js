function setup() {
  createCanvas(500, 500)
}



function draw() {

var now = clock()

  background(255);

  noStroke()

  fill(0,240,150);
var angle4 = map(now.progress.hour, 0, 1, 0, TWO_PI)
arc(250, 250, 470, 470, -HALF_PI, angle4-HALF_PI);

fill(255, 240, 0);
var angle = map(now.progress.day, 0, 1, 0, TWO_PI)
arc(250, 250, 440, 440, -HALF_PI, angle-HALF_PI);

fill(0, 180, 250);
var angle2 = map(now.day, 0, 30, 0, TWO_PI)
arc(250, 250, 400, 400, -HALF_PI, angle2-HALF_PI);

fill(190, 0, 150);
var angle3 = map(now.month, 0, 12, 0, TWO_PI)
arc(250, 250, 350, 350, -HALF_PI, angle3-HALF_PI);


}
