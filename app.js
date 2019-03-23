// ellipseMode(RADUIS);

let x = 0;

var new_dot_one = randomize();
var new_dot_two = randomize();
var new_dot_three = randomize();




function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

function draw() {
  fill(255);
  ellipse(new_dot_one[0], new_dot_one[1], 10, 10);
  ellipse(new_dot_two[0], new_dot_two[1], 10, 10);
  ellipse(new_dot_three[0], new_dot_three[1], 10, 10);
}


function randomize() {
  var randomX = Math.round((Math.random() * (window.innerWidth - 20)) + 10);
  var randomY = Math.round((Math.random() * (window.innerHeight - 20)) + 10);
  var coordinates = [randomX, randomY];
  console.log(coordinates);
  // randomZ = Math.round(Math.random() * 10);
  return coordinates;
}
