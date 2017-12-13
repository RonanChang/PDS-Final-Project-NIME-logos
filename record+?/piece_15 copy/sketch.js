var positions = [];
var scl = 20;
var nime_1 = [
  [1, 2, 2, -2],
  [2, -2, 2, 5],
  [2, 5, 3, -1],
  [3, -1, 3, 1],
  [3, 1, 4, -0.5],
  [4, -0.5, 4.5, 0.5],
  [4.5, 0.5, 5, -0.5],
  [5, -0.5, 5.5, 0.5],
  [5.5, 0.5, 6.5, -0.5],
  [6, -0.5, 6, 0.5],
  [6, -0.5, 6.5, -1],
  [6, 0.5, 6.5, 0]
];

function setup() {
  createCanvas(500, 600);
  pixelDensity(1);
  background(255);
  //drawGrid();

  push();

  translate(width / 2, height / 2);

  stroke(0);
  strokeWeight(3);
  line(30, -180, 30, 180);
  // pop();
  // updatePixels();


  // push();
  //translate(width / 2, height / 2);
  noStroke();
  fill(0);
  ellipse(-50, 150, 220, 220);
  fill(255, 0, 0);
  ellipse(-50, 150, 80, 80);
  fill(0);
  ellipse(-50, 150, 20, 20);


  pop();



  loadPixels();
  //console.log(pixels.length);
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = x + y * width;
      var rn = floor(random(-30, 30));
      var nextIndex = x + rn + y * width;
      var nextIndex_2 = x + (y + rn) * width;
      var nextX = x + rn;
      var r = pixels[index * 4];

      pixels[nextIndex * 4] = pixels[index * 4];
      pixels[nextIndex * 4 + 1] = pixels[index * 4 + 1];
      pixels[nextIndex * 4 + 2] = pixels[index * 4 + 2];


      pixels[nextIndex_2 * 4] = pixels[index * 4];
      pixels[nextIndex_2 * 4 + 1] = pixels[index * 4 + 1];
      pixels[nextIndex_2 * 4 + 2] = pixels[index * 4 + 2];


    }
  }
  updatePixels();
  drawLogo();

  //   loadPixels();
  // //console.log(pixels.length);
  // for (var x = 0; x < width; x++) {
  //   for (var y = 0; y < height; y++) {
  //     var index = x + y * width;
  //     var rn = floor(random(-10, 10));
  //     var nextIndex = x + rn + y * width;
  //     var nextIndex_2 = x + (y + rn) * width;
  //     var nextX = x + rn;
  //     var r = pixels[index * 4];

  //     pixels[nextIndex * 4] = pixels[index * 4];
  //     pixels[nextIndex * 4 + 1] = pixels[index * 4 + 1];
  //     pixels[nextIndex * 4 + 2] = pixels[index * 4 + 2];


  //     pixels[nextIndex_2 * 4] = pixels[index * 4];
  //     pixels[nextIndex_2 * 4 + 1] = pixels[index * 4 + 1];
  //     pixels[nextIndex_2 * 4 + 2] = pixels[index * 4 + 2];
  //   }
  // }

  // updatePixels();

}

function drawLogo() {
  //logo_1
  push();
  translate(13 * scl, 5 * scl);
  //rotate(-PI/6);
  //scale(2);
  stroke(0);
  strokeWeight(2.5);
  for (var i = 0; i < nime_1.length; i++) {
    line(nime_1[i][0] * scl, nime_1[i][1] * scl, nime_1[i][2] * scl, nime_1[i][3] * scl);
  }
  strokeWeight(4);
  point(3 * scl, -1.5 * scl);
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