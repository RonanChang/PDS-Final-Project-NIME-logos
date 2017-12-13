var move = 0;;
var isBlkbg;
var scl = 20;
var nime = [
  [1, 1, 3, -2],
  [3, -2, 3, 2],
  [3, 2, 4.5, -0.5],
  [4.5, -0.5, 4.5, 0.5],
  [4.5, 0.5, 7, -2.5],
  [7, -2.5, 7.5, -1.5],
  [7.5, -1.5, 8.5, -2.2],
  [8.5, -2.2, 9, 0.5],
  [9, 0.5, 12, -1],
  //"E"
  [11, -1, 14, -2.5],
  [11, -1, 11.5, 0],
  [11.5, 0, 14.5, -1.5]
];

function setup() {
  createCanvas(500, 600);
  noFill();
  strokeCap(SQUARE);
  isBlkbg = true;
}

function draw() {
  if (isBlkbg) {
    background(50);
  } else {
    background(245);
  }

  for (var i = 1; i < 6; i++) {
    drawShape(700 - 75 * i, move * 0.3 * i);
    // drawShape(450, move * 0.6);
    // drawShape(400, move * 0.9);
    // drawShape(350, move * 1.5);
  }
  move += 0.01;

  push();
  translate(width / 2 - 150, height / 2 - 100);
  noStroke();
  fill(64);
  ellipse(0, 0, 300, 300);
  fill(238);
  ellipse(0, 0, 30, 30);
  pop();

  drawLogo();
}

function drawShape(sz, incr) {
  push();
  translate(width / 2 - 150, height / 2 - 100);
  if (isBlkbg) {
    stroke(245, 100);
  } else {
    stroke(50, 50);
  }
  strokeWeight(0.5);
  ellipse(0, 0, sz, sz);
  if (isBlkbg) {
    stroke(245);
  } else {
    stroke(50);
  }
  strokeWeight(3);
  arc(0, 0, sz, sz, incr, incr + PI);
  strokeWeight(15);
  arc(0, 0, sz, sz, -incr, -incr + PI / 2.0);
  strokeWeight(25);
  arc(0, 0, sz, sz, incr / 2, incr / 2 + PI / 6);
  pop();

}

function mousePressed() {
  isBlkbg = !isBlkbg;
}


function drawGrid() {

  //draw the grid
  for (var x = 0; x < width; x += scl) {
    for (var y = 0; y < height; y += scl) {
      stroke(51);
      line(0, y, width, y);
      line(x, 0, x, height);
    }
  }
}

function drawLogo() {

  //logo
  push();
  translate(12 * scl, 11 * scl);
  rotate(-PI / 5);
  scale(1.2);
stroke(150);
  //stroke(218, 51, 48);
  //stroke(31, 107, 170);
  var xoff = 0;
  for (var i = 0; i < nime.length; i++) {

    var sw = map(noise(xoff), 0, 1, 2, 8);
    strokeWeight(sw);
    line(nime[i][0] * scl, nime[i][1] * scl, nime[i][2] * scl, nime[i][3] * scl);
    xoff += 1;
  }
  //"i"
  strokeWeight(8);
  point(4.5 * scl, -1 * scl);

  //rectangle
  push();
  translate(1 * scl, 1 * scl);
  rotate(-PI / 4);
  noStroke();
  fill(238);
  rectMode(CENTER);
  rect(-0.5 * scl, 0.1 * scl, 1.5 * scl, 0.7 * scl);
  pop();
  pop();
}