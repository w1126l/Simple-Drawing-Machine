
var canvas;
var bgR = 80; bgG = 100; bgB = 200;

let lineR, lineG, lineB;
let lineWeight;

let input;
let img;
let imgAdd;
let imgSave;
let imgReset;

function setup() {

  frameRate(60);
  canvas = createCanvas((windowWidth - 600), (windowHeight - 300));
  canvas.parent('sketch-holder');

  bgR = createSlider(0, 255, 180);
  bgR.position(10, 20);
  bgG = createSlider(0, 255, 100);
  bgG.position(10, 40);
  bgB = createSlider(0, 255, 200);
  bgB.position(10, 60);

  background(bgR.value(), bgG.value(), bgB.value());

  lineR = createSlider(0, 255, 200);
  lineR.position(10, 120);
  lineG = createSlider(0, 255, 200);
  lineG.position(10, 140);
  lineB = createSlider(0, 255, 180);
  lineB.position(10, 160);

  lineWeight = createSlider(1, 50, 5);
  lineWeight.position(10, 220);

  imgSave = createButton('Save Image As a png');
  imgSave.parent('save-button');
  imgSave.mousePressed(saveImage);

  imgReset = createButton('Reset Image/Update New Background Color');
  imgReset.parent('reset-button');
  imgReset.mousePressed(reset);

}

function draw() {

  genKey();
  genDraw();

}

function genKey() {

  noStroke();

  fill('black');
  text('Change color of background:', 10, 5);
  text('Red', bgR.x * 2 + bgR.width, 20);
  text('Green', bgR.x * 2 + bgR.width, 40);
  text('Blue', bgR.x * 2 + bgR.width, 60);

  fill(bgR.value(), bgG.value(), bgB.value());
  rect(100 + bgR.width, 20, 40, 40);

  fill('black');
  text('Change color of drawing tool:', 10, 105);
  text('Red', lineR.x * 2 + lineR.width, 120);
  text('Green', lineR.x * 2 + lineR.width, 140);
  text('Blue', lineR.x * 2 + lineR.width, 160);

  fill(lineR.value(), lineG.value(), lineB.value());
  rect(100 + lineR.width, 120, 40, 40);

}

function genDraw() {

  if (mouseIsPressed){
    stroke(lineR.value(), lineG.value(), lineB.value());
    strokeWeight(lineWeight.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function saveImage() {
  saveCanvas(canvas, 'myDrawing', 'png');
}

function reset() {
  background(bgR.value(), bgG.value(), bgB.value());
}
