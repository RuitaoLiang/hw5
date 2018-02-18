var x = 230;
var y = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
	
	for (var index = 0; index < 5; index = index + 1) {
  colorMode(HSB);
	y[index] = 220;
  ySpeed[index] = random(0, 5);
}

}
  
function draw() {
  background(0);
  noStroke();
	// draw pipe
 rect(0, 200, x, 20);
	for (var index = 0; index < 5; index = index + 1) {
  

    y[index] = y[index] + ySpeed[index];

  
  // draw drip
  ellipse(x,  y[index], 10);
  
  
  
  // if invisible for a full “height” amount…
  if (y[index] > height*2) {
    // reset
    y[index] = 220;
  	}
	}
}
