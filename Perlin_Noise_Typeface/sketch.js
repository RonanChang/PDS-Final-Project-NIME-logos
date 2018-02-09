var inc = 0.1;
var scl = 10;
var cols, rows;
var h = 0;
var zoff = 0;
var fr;
var particles = [];
var flowfield;
var angle;


function setup() {
  createCanvas(500, 250);
  //colorMode(HSL);
  background(0);

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 500; i++) {
    particles.push(new Particle());
  }


  //draw the text
  fill(255);
  textSize(125);
  text("IMA", 175, 175);
  loadPixels();

  //for each small grid
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;

      var count = 0;
      //for each pixel in every small grid
      for (var j = x * scl; j < (x + 1) * scl; j++) {
        for (var i = y * scl; i < (y + 1) * scl; i++) {
          
          //debug
          if (pixels[(i * width + j) * 4] != 0) {
            console.log(pixels[(i * width + j) * 4]);
          }

          if (pixels[(i * width + j) * 4] == 255) {
            count++;
          }
        }
      }

      if (count >= 50) {
        angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      } else {
        angle = PI / 4;
      }

      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;


      //draw the vectors
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      strokeWeight(1);
      stroke(random(255), random(255), random(255));
      // if(angle == 0){
      //   stroke(51);
      // }
      h++;
      if (h > 25) {
        h = 0;
      }
      line(0, 0, scl, 0);
      pop();

    }
    yoff += inc;
    zoff += 0.0003;
  }

}


function draw() {
  
  for (var a = 0; a < particles.length; a++) {
    particles[a].follow(flowfield);
    particles[a].update();
    particles[a].edges();
    //particles[a].show(flowfield);
  }

  fr.html(floor(frameRate()));
}
