 var colors;
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

   colors = [
     color(255, 0, 0),
     color(0, 255, 0),
     color(0, 0, 255)
   ];

   background(0);
   blendMode(SCREEN);


   noFill();
   strokeWeight(20);
   push();
   translate(width / 2, height / 2);

   noFill();
   for (var i = 0; i < 3; i++) {
     stroke(colors[i]);
     ellipse(random(-20, 20), random(-20, 20), 350, 350);
   }

   fill(random(255));
   ellipse(0, 0, 50, 50);

   pop();
   drawLogo();
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

 function drawLogo() {
   //logo_1
   push();
   translate(5 * scl, 8 * scl);
   scale(2);
   stroke(random(255), random(255), random(255));
   strokeWeight(4);
   for (var i = 0; i < nime_1.length; i++) {
     line(nime_1[i][0] * scl, nime_1[i][1] * scl, nime_1[i][2] * scl, nime_1[i][3] * scl);
   }
   strokeWeight(4);
   point(3 * scl, -1.5 * scl);
   pop();
 }