function setup() {
  createCanvas(600, 600)
  translate(width / 2, height / 2);
}





function draw() {
  background(255);

  translate(p5.Vector.fromAngle(millis() / 1000, 60));
  fill(0);
  noStroke();
  circle(300, 300, 150);


  translate(p5.Vector.fromAngle(millis() / 500, 115));
  fill(0);
  noStroke();
  circle(300, 300, 80);


  translate(p5.Vector.fromAngle(millis() / 100, 55));
  fill(0);
  noStroke();
  circle(300, 300, 30);

}
