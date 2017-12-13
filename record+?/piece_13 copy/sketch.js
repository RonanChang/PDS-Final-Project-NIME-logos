"use strict";

var stars = [];
var speed;
var Radius = [];
var angle;


var font;
var myText = "NIME";
var positions = [];
var num = 3000;
var particles = [];
var theta = 0;

function preload() {
  font = loadFont('ArialCE.ttf');
}

function setup() {
  createCanvas(500, 600);
  pixelDensity(1);
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

  //console.log(Radius.length);

  //write the text
  push();
  noStroke();
  fill(255,0,0);
  textFont(font);
  textAlign(CENTER);
  textSize(50);
  text(myText, 80, 50);


  loadPixels();

  for (var i = 0; i < num; i++) {
    var xpos = floor(random(0,width/3));
    var ypos = floor(random(0,height/2));
    var g = pixels[(xpos + ypos * width) * 4 + 1];

    if (g != 0) {
      var dir = 1;
      var choice = random(1) > 0.5;
      if (choice) {
        dir = -1;
      }
      particles.push(new Particle(xpos, ypos, dir));
    }

  }
  pop();
}

function draw() {
  
  
  //logo
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    for (var j = 0; j < particles.length; j++) {
      if (i != j) {
        p.drawLines(particles[j]);
      }
    }
    p.update();
    p.display();
  }

  theta += 0.0523;
  print(frameRate());

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
      fill(224, 64, 67);
      arc(0, 0, d, d, 0, PI / 4);

      noStroke();
      fill(173, 167, 67);
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