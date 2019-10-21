function setup() {
  createCanvas(600, 600)
  background(255)
}


function draw() {
  background(255);
 noFill();

  translate(p5.Vector.fromAngle(millis() / 1000, 60));
  noFill();
  arc(300,300, 50, 50, 0, HALF_PI);


  translate(p5.Vector.fromAngle(millis() / 1000, 60));
  noFill();
  arc(300,300, 60, 60, HALF_PI, PI);

  translate(p5.Vector.fromAngle(millis() / 1000, 60));
  noFill();
  arc(300,300, 60, 60, HALF_PI, PI);

  translate(p5.Vector.fromAngle(millis() / 1000, 60));
  noFill();
  arc(300,300, 80, 80, PI + QUARTER_PI, TWO_PI);
}
