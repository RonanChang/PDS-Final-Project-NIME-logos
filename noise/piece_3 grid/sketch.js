var yoff = 0.0;
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
  //background(70,168,180);
  //background(238);
  background(249, 242, 114);
  //background(229,170,157);
  //drawGrid();
  drawRecord(width / 2 + 20, height / 2 - 75, 5, 70);
  drawRecord(width / 2 - 100, height / 2 + 110, 3, 60);
  drawRecord(width / 2 + 65, height / 2 + 200, 3, 40);
  drawRecord(width / 2 + 180, height / 2 + 230, 3, 20);

}


function draw() {

  Rotate(width / 2 + 20, height / 2 - 75, 150,16);
  Rotate(width / 2 - 100, height / 2 + 110, 140,14);
  Rotate(width / 2 + 65, height / 2 + 200, 80,8);
  Rotate(width / 2 + 180, height / 2 + 230, 50,5);
  drawLogo();
}

function drawLogo() {

  //logo
  push();
  translate(15 * scl, 10 * scl);
  rotate(-PI / 5);

  //stroke(232, 23, 23);
  stroke(255, 78, 78);
  var xoff = 0;
  for (var i = 0; i < nime.length; i++) {

    var sw = map(noise(xoff), 0, 1, 2, 7);
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
  fill(0);
  rectMode(CENTER);
  rect(-0.5 * scl, 0.1 * scl, 1.5 * scl, 0.7 * scl);
  pop();
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

function drawRecord(x, y, r, n) {

  push();
  //translate(width / 2+20, height / 2-75);
  translate(x, y);
  //var radius = 5;
  var radius = r;
  noStroke();

  var xoff = 0;
  for (var i = n; i > 0; i--) {
    fill(random(0, 75));
    beginShape();
    for (var a = 0; a < TWO_PI; a += 0.1) {

      var offset = map(noise(xoff, yoff), 0, 1, -5, 5);
      var r = radius + i * 2 + offset;
      var x = r * cos(a);
      var y = r * sin(a);
      vertex(x, y);
      xoff += 0.5;

    }
    endShape();
  }
  pop();

}

function Rotate(x, y, d,ts) {
  push();
  //translate(width / 2+20, height / 2-75);
  translate(x, y);
  //fill(70,168,180);
  //fill(229,170,157);
  //fill(238);
  //fill(255);
  //fill(240,221,166);
  noStroke();
  fill(29, 117, 171);
  ellipse(0, 0, d, d);

  //draw the arc
  push();
  fill(31, 107, 150);
  rotate(frameCount * 0.03);
  arc(0, 0, d, d, -PI / 4, PI / 4);
  scale(-1, 1);
  arc(0, 0, d, d, -PI / 4, PI / 4);

  fill(238);
  textSize(ts);
  text(" NIME", 5, 5);
  text(" Concert", 3, -10);
  pop();
  //fill(51);
  fill(238);
  ellipse(0, 0, 10, 10);

  pop();
}