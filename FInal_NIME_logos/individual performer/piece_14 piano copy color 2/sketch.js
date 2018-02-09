"use strict";
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

var stars = [];

function setup() {
  createCanvas(500, 600);
  background(187,221,239);

  for (var i = 0; i < 5; i++) {
    stars.push(new Star(random(width), random(height)));
  }

}

function draw() {
  // var c1 = color(168, 199, 192);
  // var c2 = color(25, 162, 182);
  // var c1 = color(220, 227, 230);
  // var c2 = color(94, 176, 189);
  // for (var y = 0; y < height; y += 20) {
  //   var cRate = map(y, 0, height, 0, 1)
  //   var c = lerpColor(c1, c2, cRate);
  //   noStroke();
  //   fill(c);
  //   rect(0, y, width, 150);
  // }
  background(187,221,239);

  push();
  translate(width / 2 - 50, height / 2 + 100);
  
  for (var i = 0; i < 5; i++) {
    noFill();

    stroke(241);
    strokeWeight(2);

    beginShape();
    for (var a = -8; a < 330; a++) {
      var radius = (200 + i * 30) / 2 - a * 0.1;
      var x = radius * cos(radians(a));
      var y = radius * sin(radians(a));
      vertex(x, y);
      if (a == -8) {
        line(x, y, x, -350);
      }

      if (a == 329 && i < 4) {
        push();
        var xpos_2 = (radius + 15) * cos(radians(a));
        var ypos_2 = (radius + 15) * sin(radians(a));
        strokeWeight(5);
        line(x, y, xpos_2, ypos_2);
        pop();
      }

      if (a == 325 && i < 4) {
        push();
        var xpos_2 = (radius + 15) * cos(radians(a));
        var ypos_2 = (radius + 15) * sin(radians(a));
        line(x, y, xpos_2, ypos_2);
        pop();
      }

      if (a == 323 && i < 4 && i > 1) {
        push();
        var xpos_2 = (radius - 10) * cos(radians(a));
        var ypos_2 = (radius - 10) * sin(radians(a));
        strokeWeight(4);
        point(xpos_2, ypos_2);
        pop();
      }
    }
    endShape();
  }

  fill(239,119,187);
  ellipse(0, 0, 25, 25);

  push();
  translate(20,-290);
  rotate(-PI / 2);
  textSize(100);
  text("𝄞", 40, 140);
  pop();
  pop();


  for (var i = 0; i < stars.length; i++) {
    stars[i].display();
  }

  drawLogo();
}

function drawLogo() {
  //logo_2
  push();
  translate(16.5 * scl, 18 * scl);
  rotate(-PI / 2);
  scale(1.5);
  stroke(249,228,92);
  // stroke(232,138,132);
  strokeWeight(3);
  for (var i = 0; i < nime_2.length; i++) {
    line(nime_2[i][0] * scl, nime_2[i][1] * scl, nime_2[i][2] * scl, nime_2[i][3] * scl);
  }
  strokeWeight(4);
  point(4 * scl, -1.5 * scl);
  pop();
}