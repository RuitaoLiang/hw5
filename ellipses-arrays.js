var circles = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for (var index = 0; index < 50; index = index + 1) {
   circles[index] = {
      x: random(width/4,width),
      y: random(height/4,height),
		 	d: random(3,40),
      xd: random(-2, 2),
      yd: random(-2, 2),
      c: color(random(255), random(255), random(255))
	}
}
}

function draw() {
  background(255);
  noStroke();

	
  for (var index = 0; index < 50; index = index + 1) {
  var circle = circles[index];
  fill(circle.c);
  ellipse(circle.x, circle.y, circle.d);

  if (random() < 0.001) {

    circle.d = random(10, 400);
  }
  

  if (random() < 0.002) {

    circle.d = random(10, 400);
  	}
	 }
	}
