"use strict";

class Particle {
  constructor(x, y, dir) {
    this.radius = floor(random(5, 10));
    this.org = createVector(x, y);
    this.loc = createVector(0, 0);
    this.offset = random(TWO_PI);
    this.size = 2;
    this.a;
    this.s;
    this.dir = dir;
    this.d = 20;
    //this.count;
    this.connection = [num];
  }

  update() {
    this.loc.x = this.org.x + sin(theta * this.dir + this.offset) * this.radius;
    this.loc.y = this.org.y + cos(theta * this.dir + this.offset) * this.radius;
  }

  drawLines(other) {
    this.count = 1;

    var distance = this.loc.dist(other.loc);
    if (distance > 0 && distance < this.d) {
      this.a = map(this.count, 0, 10, 30, 255);
      stroke(255, this.a);
      push();
      line(this.loc.x, this.loc.y, other.loc.x, other.loc.y);
      pop();
      this.count++;

    }

  }
  display() {
    push();
    translate(this.loc.x, this.loc.y);
    noStroke();
    fill(255, 200);
    ellipse(0, 0, this.size);
  
    // if (random(1) > 0.9) {
    //   rectMode(CENTER);
    //   noFill();
    //   stroke(255, 255, 0);
    //   rect(0, 0, 10, 10);
    // }
    pop();
  }


}