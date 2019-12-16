
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
  createCanvas(600, 600);
}

function draw() {

noStroke()
  var now= clock()
  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  colorMode(HSB)


var dayColor= lerpColor(from, to, now.progress.day)
    background(dayColor);

  fill('black')
  circle(300,300, 3)

  // get pair of coordinates for smaller circle
  var secondAngle= map(now.progress.sec,0,1,0,360)
  var minAngle= map(now.progress.min,0,1,0,360)
  var hourAngle= map(now.progress.hour,0,1,0,360)
  var hoursAngle= map(now.progress.day,0,1,0,360)


  // get coords as single-variable for smallest circle
strokeWeight(5)
  stroke('white');

   line(0,300,600,300)
noFill();
arc(300,300,600,600,0,PI)
arc(300,300,300,300,0,PI)
arc(300,300,500,500,0,PI)


  fill('yellow')
    var pthours = pointAt(300, 0, hoursAngle, 150)
    circle(pthours.x, 300-abs(pthours.y), 300)

    fill('red')
      var pthour = pointAt(300, 0, hourAngle, 75)
      circle(pthour.x, 300+abs(pthour.y), 150)

      fill('blue')
        var ptmin = pointAt(300, 0, minAngle, 200)
        circle(ptmin.x, 300+abs(ptmin.y), 100)

 fill('green')
  var ptsec = pointAt(300, 0, secondAngle, 275)
  circle(ptsec.x, 300+abs(ptsec.y), 50)






}
