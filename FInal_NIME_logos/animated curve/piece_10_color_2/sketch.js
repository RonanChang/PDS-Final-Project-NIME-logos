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

var step = 0.23;

function setup() {
  createCanvas(500, 600);

}

function draw() {
  colorMode(RGB);
  var c1 = color(227, 188, 192);
  var c2 = color(182, 216, 209);
  //background(223, 51, 143);
  //background(c);
  //background(250, 200, 0);
  for (var y = 0; y < height; y+=50) {
    var cRate = map(y, 0, height, 0, 1)
    var c = lerpColor(c2, c1, cRate);
    noStroke();
    fill(c);
    rect(0, y, width, 150);
  }
  drawLogo();
  push();
  translate(width / 2, height / 2 - 50);


  xoff += 0.011;
  yoff += 0.005;
  noiseDetail(1, 0.9);

  for (var i = 1; i < 400; i += 10) {
    //colorMode(HSL);

    stroke(226, 111, 158);
    strokeWeight(noise(xoff, i) * 8);
    noFill();
    arc(0, 0, i, i, PI * (noise(xoff * i / 640) * 8), PI * (noise(yoff * i / 450) * 3));

  }

}

function drawLogo() {
  //logo_3
  push();
  translate(7 * scl, 26 * scl);
  //colorMode(RGB);

  var c3 = color(0, 255, 189);
  var c4 = color(246, 111, 158);

  strokeWeight(noise(xoff, i) * 8);

  for (var i = 0; i < nime_3.length; i++) {
    var cRt = map(i, 0, nime_3.length, 0, 1);
    var sc = lerpColor(c3, c4, cRt);
    stroke(sc);
    line(nime_3[i][0] * scl, nime_3[i][1] * scl, nime_3[i][2] * scl, nime_3[i][3] * scl);

    //strokeWeight(2);
    stroke(sc);
    line(-150 + i * 50, -20, 40 + i * 50, -20);
  }


  point(4.5 * scl, -1 * scl);
  pop();
}