
var canvas;
var bgR = 80; bgG = 100; bgB = 200;

let input;
let img;
let imgAdd;
let imgSave;
let imgReset;

let lineColor = 255;
let bgColor = 125;
let lineWeight = 5;
let lineTrig = 0;

function setup() {

  frameRate(60);
  canvas = createCanvas((windowWidth - 400), (windowHeight - 200));
  canvas.parent('sketch-holder');

  background(bgR, bgG, bgB);
  stroke(lineColor);
  strokeWeight(lineWeight);

  imgSave = createButton('Save Image');
  imgSave.parent('save-button');
  imgSave.mousePressed(saveImage);

  imgReset = createButton('Reset Image');
  imgReset.parent('reset-button');
  imgReset.mousePressed(reset);

}

function draw() {

  genDraw();

}

function genDraw() {

  if (mouseIsPressed){
    stroke(lineColor);
    strokeWeight(lineWeight);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function saveImage() {
  saveCanvas(canvas, 'myDrawing', 'png');
}

function reset() {
  background(bgR, bgG, bgB);
}
