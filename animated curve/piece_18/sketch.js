var clrs = [];
var startPoint = [0, 0, 0, 0, 0];
var scl = 20;
var clr;
var clr2;
var bgclr;

var nime_3 = [
  [0, 1, 2.5, -2],
  [2.5, -2, 2.5, 2],
  [2.5, 2, 4.5, -0.5],
  [4.5, -0.5, 4.5, 0.5],
  [4.5, 0.5, 6.5, -2.5],
  [6.5, -2.5, 6.7, -1.5],
  [6.7, -1.5, 7.5, -2.5],
  [7.5, -2.5, 7.5, 0],
  [7.5, 0, 9, -0.5],
  //"E"
  [8, -1, 8, 0.7],
  [8, 0.7, 9, 0.2],
  [8, -1, 9, -1.5]
];
//this function has to be put before setup();
function colors() {
  var H = random(360);
  var S = random(90, 110);
  var B = random(90, 110);
  var A = 75;

  clrs[0] = color(H, S, B, A);
  clrs[1] = color(H + 50 + random(-10, 10), S, B, A);
  clrs[2] = color(H + 90 + random(-10, 10), S, B, A);
  clrs[3] = color(H + 130 + random(-10, 10), S * 0.8, B * 0.8, A);
  clrs[4] = color(H + 20, S * 0.7, B * 0.7, A);
  clr = color(H + 90 + random(-10, 10), S, B);
  clr2 = color(H + 20, S * 0.7, B * 0.7);
  bgclr = color(H + 30 + random(-10, 10), 30, 100);
}


function setup() {
  createCanvas(500, 600);
  smooth();
  noStroke();
  //colorMode(HSB);
  colorMode(HSB, 360, 100, 100, 255);
  colors();
}


function mouseClicked() {
  colors();
}

function draw() {
  push();
  colorMode(RGB);
  background(248);
  //background(bgclr);
  pop();
  
  push();
  translate(15 * scl, 12 * scl);
  for (var i = 0; i < clrs.length; i++) {
    fill(clrs[i]);
    arc(0, 0, 150 + i * 50, 150 + i * 50, startPoint[i] * PI, startPoint[i] * PI + (1.9 - i * 0.2) * PI);
  }
  startPoint[0] += 0.015;
  startPoint[1] += 0.012;
  startPoint[2] += 0.007;
  startPoint[3] += 0.005;
  startPoint[4] += 0.002;
  fill(clr, 150);
  ellipse(0, 0, 130, 130);
  stroke(clr2);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, 370, 370);

  noStroke();
  fill(0, 0, 100);
  ellipse(0, 0, 10, 10);
  pop();
  //drawGrid();
  drawLogo();
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
  //logo_3
  push();
  translate(2 * scl, 25 * scl);
  stroke(clr2);
  strokeWeight(3);
  for (var i = 0; i < nime_3.length; i++) {
    line(nime_3[i][0] * scl, nime_3[i][1] * scl, nime_3[i][2] * scl, nime_3[i][3] * scl);
  }
  strokeWeight(4);
  point(4.5 * scl, -1 * scl);
  pop();
}