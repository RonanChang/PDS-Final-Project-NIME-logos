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

function setup() {
  createCanvas(500, 600);
  //background(185, 218, 235);
  background(228, 128, 129);
  //record
  push();
  translate(width / 2, height / 2);

  var xoff = 0;
  for (var i = 25; i >= 0; i--) {

    strokeWeight(1.5);
    //stroke(228, 128, 129)
    stroke(185, 218, 235);
    beginShape();
    //fill(209, 235, 248);
    noFill();
    for (var a = 0; a < 360; a += 0.1) {

      var offset = map(noise(xoff), 0, 1, 0, 20);

      if (a > 0 && a < 90) {
        var radius = (150 + i * 8) / 2 + offset;

      } else {

        var radius = (150 + i * 9) / 2;

      }
      var x = radius * cos(radians(a));
      var y = radius * sin(radians(a));
      vertex(x, y);
      xoff += 0.03;
    }
    endShape();

  }


  noStroke();
  fill(234, 167, 167);
  arc(0, 0, 140, 140, -13 * PI / 12, -PI / 3);
  //fill(78, 49, 26);
  fill(241);
  ellipse(0, 0, 20, 20);
  pop();

  drawLogo();
}

function drawLogo() {

  //logo_2
  push();
  translate(8.5 * scl, 15 * scl);
  scale(0.8);
  stroke(78,49,26);

  //stroke(220, 150, 73);

  for (var i = 0; i < nime_2.length; i++) {
    strokeWeight(random(2.5, 6));
    line(nime_2[i][0] * scl, nime_2[i][1] * scl, nime_2[i][2] * scl, nime_2[i][3] * scl);
  }
  strokeWeight(5);
  point(4 * scl, -1.5 * scl);
  pop();

}