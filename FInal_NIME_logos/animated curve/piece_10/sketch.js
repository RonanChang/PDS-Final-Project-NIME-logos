var xoff = 0.400;
var yoff = 0.300;
var scl = 20;

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

function setup() {
  createCanvas(500, 600);

}

function draw() {

  // background(245,204,96);
  background(255);
  drawLogo();
  push();
  translate(width / 2, height / 2 - 50);


  xoff += 0.011;
  yoff += 0.005;
  noiseDetail(1, 0.9);

  for (var i = 1; i < 400; i += 10) {
    //stroke(21);
    stroke(237, 105, 81);
    strokeWeight(noise(xoff, i) * 8);
    noFill();
    arc(0, 0, i, i, PI * (noise(xoff * i / 640) * 8), PI * (noise(yoff * i / 450) * 3));

  }

}

function drawLogo() {
  //logo_3
  push();
  translate(7 * scl, 26 * scl);
  stroke(51);
  strokeWeight(2);
  line(-200, -10, width, -10);
  stroke(216, 53, 31);
  strokeWeight(noise(xoff, i) * 8);
  for (var i = 0; i < nime_3.length; i++) {
    line(nime_3[i][0] * scl, nime_3[i][1] * scl, nime_3[i][2] * scl, nime_3[i][3] * scl);
  }
  //strokeWeight(4);
  point(4.5 * scl, -1 * scl);
  pop();
}