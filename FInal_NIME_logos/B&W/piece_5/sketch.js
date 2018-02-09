var yoff = 0.0;
var scl = 20;

var nime_2 = [
  [1, 1, 2, -1],
  [2, -1, 3, 1],
  [3, 1, 4, -1],
  [4, -1, 4, 1],
  [4, 1, 6, -1],
  [6, -1, 6, 0],
  [6, 0, 7, -1],
  [7, -1, 7, 1],
  //"e"
  [7, 1, 9, -1],
  [9, -1, 8, -1],
  [8, -1, 8, 1],
  [8, 1, 9, 0],
];
var positions = [];

function setup() {
  createCanvas(500, 600);
  pixelDensity(1);
  background(34);
  noStroke();
  fill(255, 0, 0);
  rect(20, 20, width - 40, height - 160);

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = x + y * width;
      var rCol = pixels[index * 4];
      if (rCol !== 255) {
        positions.push(index * 4);
      }
    }
  }

  background(34);

  for (var i = 0; i < 20; i++) {
    noFill();
    stroke(79);
    strokeWeight(1);
    var d = 50 + i * 50;
    ellipse(width / 2 + 80, height / 2 + 60, d);
    stroke(97);
    strokeWeight(4);
    var randomNum = floor(random(30, 100));
    var offset = radians(randomNum * i);
    arc(width / 2 + 80, height / 2 + 60, d, d, offset, offset + PI / 2);
  }
  loadPixels();

  for (var i = 0; i < positions.length; i++) {
    var r = positions[i];
    var g = positions[i] + 1;
    var b = positions[i] + 2;

    pixels[r] = 34;
    pixels[g] = 34;
    pixels[b] = 34;

  }

  updatePixels();
  drawLogo();
}


function drawLogo() {
  //logo_2
  push();
  translate(5 * scl, 27 * scl);
  scale(1.5);
  stroke(208,200);
  strokeWeight(4);
  for (var i = 0; i < nime_2.length; i++) {
    line(nime_2[i][0] * scl, nime_2[i][1] * scl, nime_2[i][2] * scl, nime_2[i][3] * scl);
  }
  strokeWeight(4);
  point(4 * scl, -1.5 * scl);
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