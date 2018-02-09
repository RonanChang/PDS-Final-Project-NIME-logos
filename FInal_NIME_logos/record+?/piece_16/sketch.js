"use strict";
var scl = 20;
var circles = [];
var num = 1000;
var positions = [];
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


function setup() {
  createCanvas(500, 600);
  pixelDensity(1);
  background(0);


  for (var i = 0; i < num; i++) {
    circles.push(new Circle());
  }


  push();
  translate(width / 2, height / 2);
  noStroke();
  var d1 = 300;
  var d2 = 130;
  var d3 = 30;

  fill(0, 0, 255);
  arc(10, -10, d1, d1, radians(290), radians(340), PIE);
  fill(0, 255, 0);
  arc(10, -10, d1 - 40, d1 - 40, radians(290), radians(340), PIE);


  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      var g = pixels[index + 1];
      var b = pixels[index + 2];

      if (g !== 255 && b !== 255) {
        positions.push(index);
      }
    }
  }

  background(249, 225, 168);

  fill(249, 209, 127);
  arc(10, -10, d1 - 40, d1 - 40, radians(290), radians(340), PIE);
  pop();

  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    c.check(circles);
    c.display();
  }

  loadPixels();
  for (var j = 0; j < positions.length; j++) {
    var index2 = positions[j];
    pixels[index2] = 248;
    pixels[index2 + 1] = 232;
    pixels[index2 + 2] = 232;
  }

  updatePixels();
  push();
  translate(width / 2, height / 2);
  noStroke();
  fill(0);
  arc(0, 0, d1, d1, radians(-20), radians(290));

  fill(225, 62, 36);
  arc(0, 0, d2, d2, radians(-20), radians(290));


  fill(0);
  arc(0, 0, d3, d3, radians(-20), radians(290));
  pop();
    
  //drawGrid();
  drawLogo();
}

function drawLogo() {

  //logo_2
  push();
  translate(1 * scl, 3 * scl);
  stroke(255, 64, 71);
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