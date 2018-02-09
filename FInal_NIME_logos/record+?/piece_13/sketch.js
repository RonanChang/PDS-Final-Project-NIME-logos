var stars = [];
var speed;
var Radius = [];
var angle;
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
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }

  //radius,angle and color and size for the planets
  for (var i = 1; i < 10; i++) {
    var d = 30 + i * 28;
    var angle = random(0, TWO_PI);
    var clr = color(random(255), random(255), random(255));
    var size = floor(random(3, 15));
    Radius.push([d / 2, angle, clr, size]);
  }

  console.log(Radius.length);
}

function draw() {

  push();
  //speed = map(mouseX, 0, width, 0, 50);
  speed = 2;
  background(30);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }


  for (var i = 12; i >= 1; i--) {
    var d = 30 + i * 28;
    stroke(255, 150);
    //noFill();
    fill(30);
    ellipse(0, 0, d, d);

    if (i == 12 || i == 11 || i == 10) {
      noStroke();
      fill(54, 63, 72);
      ellipse(0, 0, d, d)

      noStroke();
      fill(30,178,146);
      arc(0, 0, d, d, 0, PI / 4);

      noStroke();
      fill(247,93,32);
      arc(0, 0, d, d, 2 * PI / 3, 4 * PI / 3);
    }


  }


  console.log(Radius.length);
  //sun
  noStroke();
  fill(255, 118, 64);
  ellipse(0, 0, 30, 30);

  //circles

  for (var j = 0; j < Radius.length; j++) {
    var r = Radius[j][0];
    var a = Radius[j][1];
    var c = Radius[j][2];
    var sz = Radius[j][3];


    var x = r * cos(a);
    var y = r * sin(a);
    fill(c);
    ellipse(x, y, sz, sz);

    if (j == 5) {
      push();
      translate(x, y);
      stroke(c);
      line(-sz * 0.8, sz * 0.8, sz * 0.8, -sz * 0.8);
      pop();
    }
  }
  pop();
  
  
  drawLogo();
  push();
  rectMode(CENTER);
  fill(255,150);
  noStroke();
  rect(0,height/2,500,380);
  pop();
}



function drawLogo() {
  //logo
  push();
  translate(15 * scl, 10 * scl);
  rotate(-PI / 5);

  strokeWeight(2);
  stroke(247,93,32);

  for (var i = 0; i < nime.length; i++) {
    line(nime[i][0] * scl, nime[i][1] * scl, nime[i][2] * scl, nime[i][3] * scl);
  }
  //"i"
  strokeWeight(4);
  point(4.5 * scl, -1 * scl);

  //rectangle
  push();
  translate(1 * scl, 1 * scl);
  rotate(-PI / 4);
  noStroke();
  fill(247,93,32);
  rectMode(CENTER);
  rect(-0.5 * scl, 0.1 * scl, 1.5 * scl, 0.7 * scl);
  pop();
  pop();

}


function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 10, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);

  }
}