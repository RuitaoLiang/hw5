var squares = [];

function setup() {
  createCanvas(400, 400);
	for (var index = 0; index < 100; index = index + 1) {

    squares[index] = {
      x: random(200, 300),
      y: random(290, 350),
      xd: random(-10, -1),
      yd: random(-10, -1),
      r:  random(0, 50),
    }
  }
}
  
function draw() {
  background(0);
  noStroke();
	
	 for (var index = 0; index < 100; index = index + 1) {

    var square = squares[index];

  // draw smokestack
	
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  push();
  fill(square.y);
  translate(square.x, square.y);
  rotate(square.r);
  rect(square.xd, square.yd, 20, 20);
  pop();
  print(square.y);
  // up 3 pixels
  square.y -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  square.r += 0.05
  
  // if reach past the top a bunch
  if (square.y < -150) {
    squares.y = 290;

  	}
	}
}
