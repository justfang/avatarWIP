function setup() {
  createCanvas(600, 600);
  background(220);
  translate(300, 300);

  noStroke();
  fill(102, 45, 131);
  circle(0, 0, 500);
}

function draw() {
  push();

  translate(300, 300);
  fill(240);

  //wbite shirt:
  beginShape();

  vertex(-86, 119);
  quadraticVertex(-150, 155, -133, 207);
  quadraticVertex(0, 285, 133, 207);
  quadraticVertex(150, 155, 86, 119);

  endShape(CLOSE);

  //blackshirt:
  fill(0);
  noStroke();
  beginShape();

  vertex(-104, 224);
  quadraticVertex(-120, 160, -86, 120);
  quadraticVertex(-64, 110, -40, 110);
  vertex(2, 248);
  quadraticVertex(-70, 247, -104, 224);

  endShape(CLOSE);

  fill(0);
  noStroke();
  beginShape();

  vertex(104, 224);
  quadraticVertex(120, 160, 86, 120);
  quadraticVertex(64, 110, 40, 110);
  vertex(2, 248);
  quadraticVertex(70, 247, 104, 224);

  endShape(CLOSE);

  //hair

  noStroke();
  fill(82, 44, 19);
  beginShape();
  vertex(65, 109);
  vertex(-51, 109);
  vertex(-64, 142);
  vertex(-76, 124);
  vertex(-94, 33);
  quadraticVertex(-120,-80,-76, -129);
  quadraticVertex(-37, -160, 0, -160);
  quadraticVertex(37, -160, 76, -129);
  quadraticVertex(120,-80,94, 33);
  vertex(100, 50);
  vertex(90, 135);
  vertex(72, 159);

  endShape(CLOSE);

  //face\
  noStroke();
  fill(247, 186, 128);
  beginShape();
  vertex(-32, 55);
  quadraticVertex(-70, 37, -71, 0);
  quadraticVertex(-31, -22, -13, -76);
  quadraticVertex(30, -17, 85, -9);
  quadraticVertex(76, 35, 32, 55);
  vertex(40, 117);
  quadraticVertex(42, 133, 0, 140);
  quadraticVertex(-42, 113, -40, 117);

  endShape(CLOSE);

  pop();
}


function keyPressed() {
  
  save("myImage.png");
}
