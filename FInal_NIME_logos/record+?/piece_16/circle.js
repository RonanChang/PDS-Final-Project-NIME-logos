"use strict";
class Circle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    //this.r = floor(random(20, 30));
    this.r = 20;
    this.d = 2 * this.r;
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(225, 62, 36);
    ellipse(0, 0, this.d, this.d);
    pop();
  }

  check(others) {

    for (var i = others.length - 1; i >= 0; i--) {
      var other = others[i];
      var distance = this.pos.dist(other.pos);
      if (distance < this.r + other.r) {
        others.splice(i, 1);
      }
    }
  }
}