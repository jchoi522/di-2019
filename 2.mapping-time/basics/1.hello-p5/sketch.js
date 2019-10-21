
function setup() {
  createCanvas(600, 600); // set the size of the canvas
  background(0) // fill the canvas with black pixels
  print("Hello, javascript console.")
  print(`The P5 canvas is ${width}px wide and ${height}px tall`)

  // display out greeting message in medium grey
  fill(255) // grey value between 0–255
  textSize(40) // size in pixels
  text("Time-line", 30, height/10) // (message, x, y)

  // pick a light grey fill and bright red stroke to draw shapes with
  fill(255)         // a single value is greyscale
  stroke(0, 0, 0) // three values are red/green/blue
  strokeWeight(0)   // line weight in pixels

  // draw three shapes
  square(100, 100, 40) // (x, y, size)
  square(100, 200, 40)
  square(100, 500, 40)
  circle(0, 0, 0) // (x, y, radius)
  arc(0, 0, 0, 0, -PI, -HALF_PI) // (x, y, w, h, start, stop)
  }
