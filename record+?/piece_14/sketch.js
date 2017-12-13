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
  background(238);

  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < 5; i++) {
    noFill();
    stroke(51);

    var radius = (200 + i * 30) / 2;
    beginShape();
    for (var a = 10; a < 330; a++) {
      var x = radius * cos(radians(a));
      var y = radius * sin(radians(a));
      vertex(x, y);

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

  fill(38);
  ellipse(0, 0, 25, 25);

  push();
  rotate(-PI / 4);
  textSize(100);
  text("𝄞", 40, 140);
  pop();

  pop();


  //drawLogo();
}

function drawLogo() {
  //logo_1
  push();
  translate(5 * scl, 8 * scl);
  stroke(255, 0, 0);
  strokeWeight(2);
  for (var i = 0; i < nime_1.length; i++) {
    line(nime_1[i][0] * scl, nime_1[i][1] * scl, nime_1[i][2] * scl, nime_1[i][3] * scl);
  }
  strokeWeight(4);
  point(3 * scl, -1.5 * scl);
  pop();
}