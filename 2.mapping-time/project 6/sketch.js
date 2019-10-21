
function coordsAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return [cx+cos(theta) * dist,
          cy+sin(theta) * dist]
}

function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist,
          y:cy+sin(theta) * dist}
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120)
  var now= clock()

  // draw the largest circle in the center
  circle(200,200, 3)

  // get pair of coordinates for smaller circle
  var secondAngle= map(now.sec,0,60,0,360)
  var minAngle= map(now.min,0,60,0,360)

  // get coords as single-variable for smallest circle
 fill(0)
  var ptsec = pointAt(200, 200, secondAngle, 15)
  circle(ptsec.x, ptsec.y, 30)
fill('red')
  var ptmin = pointAt(ptsec.x, ptsec.y, minAngle, 45)
  circle(ptmin.x, ptmin.y, 50)
}
