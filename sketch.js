var drawing = [];

function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(255,255,255); 
   noFill();
   
  beginShape();
   for(var i = 0;i<drawing.length;i++){
     vertex(drawing[i].x,drawing[i].y);
     endShape();
   }
}
function mouseDragged() {
  var position = {x:mouseX,y:mouseY};
    drawing.push(position);
}