"use strict";
class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.mass = random(1, 2);
    this.radius = 4 * this.mass;
    this.frameSpeed = random(0.005, 0.01);
    this.angle = random(TWO_PI);
  }

  display() {
    push();
    noStroke();
    translate(this.pos.x, this.pos.y);
    rotate(frameCount * this.frameSpeed + this.angle);
    beginShape();

    fill(245,187,220);
    //fill(232,131,132);
    for (var i = 0; i < 10; i++) {
      var x = cos(radians(i * 36)) * this.radius;
      var y = sin(radians(i * 36)) * this.radius;
      vertex(x, y);

      if (this.radius == 25 * this.mass) {
        this.radius = 12 * this.mass;
      } else {
        this.radius = 25 * this.mass;
      }
    }
    endShape();
    pop();
  }
}