// ellipseMode(RADUIS);

var new_dot_one = randomize();
var new_dot_two = randomize();
var new_dot_three = randomize();



function setup() {
  var cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

function draw() {
  ambientMaterial(250);
  directionalLight(255, 255, 255, 0, 1, -2);
  noStroke();

  push();
  translate(new_dot_one[0], new_dot_one[1], new_dot_one[2]);
  sphere(10);
  pop();

  push();
  translate(new_dot_two[0], new_dot_two[1], new_dot_two[2]);
  sphere(10);
  pop();

  push();
  translate(new_dot_three[0], new_dot_three[1], new_dot_three[2]);
  sphere(10);
  pop();

}


function randomize() {
  var randomX = Math.floor(((Math.random() * (window.innerWidth - 20)) - (window.innerWidth / 2) + 10));
  var randomY = Math.floor(((Math.random() * (window.innerHeight - 20)) - (window.innerHeight / 2) + 10));
  var randomZ = Math.floor(Math.random() * -1000);

  var coordinates = [randomX, randomY, randomZ];
  console.log(coordinates);
  return coordinates;
}
