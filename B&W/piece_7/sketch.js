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
  [10, -0.5, 13, -2],
  [10, -0.5, 10.5, 0.5],
  [10.5, 0.5, 13.5, -1]
];

function setup() {
  createCanvas(500, 600);
  background(40,36,37);
  //drawGrid();

  //circles
  push();
  translate(width / 2, height / 2 - 70);
  for (var i = 0; i < 25; i++) {
    noFill();
    stroke(255, 150);
    ellipse(0, 0, 150 + i * 10);
  }
  strokeWeight(3);
  stroke(255, 200);
  ellipse(0, 0, 130);
  ellipse(0, 0, 410);
  strokeWeight(8);
  point(0, 0);
  pop();
  drawLogo();
}

function drawLogo(){
  //logo
  push();
  translate(13 * scl, 19 * scl);
  rotate(-PI/7);
  scale(0.8);
  strokeWeight(8);
  //stroke(255,0,0);
  stroke(40,36,37);
  for (var i = 0; i < nime.length; i++) {
    line(nime[i][0] * scl, nime[i][1] * scl, nime[i][2] * scl, nime[i][3] * scl);
  }
  //"i"
  strokeWeight(8);
  point(4.5 * scl, -1 * scl);

  //rectangle
  push();
  translate(1 * scl, 1 * scl);
  rotate(-PI / 4);
  
  noStroke();
  fill(21);
  rectMode(CENTER);
  rect(-0.5 * scl, 0.1 * scl, 1.7 * scl, 1 * scl);
  pop();
  
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