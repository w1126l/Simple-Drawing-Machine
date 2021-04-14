
let canvas;

let bgRedSlider, bgGreenSlider, bgBlueSlider;

let bgRed = 100, bgGreen = 80, bgBlue = 150;

let backgroundColorDiv;
let backgroundColorComp;

let lineRedSlider, lineGreenSlider, lineBlueSlider;
let lineRed = 150, lineGreen = 100, lineBlue = 80;

let lineColorDiv;
let lineColorComp;

let lineWeightSlider;

let mousePos = [];

let backgroundReset;

let imgSave;
let imgReset;

function setup() {

  frameRate(60);
  canvas = createCanvas((800), (800));
  canvas.parent('sketch-holder');

  bgRedSlider = createSlider(0, 255, 200);
  bgRedSlider.parent('background-red');
  bgRedSlider.style('width', '150px');
  bgRed = bgRedSlider.value();

  bgGreenSlider = createSlider(0, 255, 150);
  bgGreenSlider.parent('background-green');
  bgGreenSlider.style('width', '150px');
  bgGreen = bgGreenSlider.value();

  bgBlueSlider = createSlider(0, 255, 250);
  bgBlueSlider.parent('background-blue');
  bgBlueSlider.style('width', '150px');
  bgBlue = bgBlueSlider.value();

  backgroundColorDiv = createDiv();
  backgroundColorDiv.parent("color-block-background");
  backgroundColorDiv.style('width', '100%');
  backgroundColorDiv.style('height', '100%');

  backgroundReset = createButton('Update New Background Color');
  backgroundReset.parent('background-change-button');
  backgroundReset.mousePressed(reset);

  // backgroundColorComp = color(bgRed, bgGreen, bgBlue);
  // background(backgroundColorComp);

  lineRedSlider = createSlider(0, 255, 255);
  lineRedSlider.parent('line-red');
  lineRedSlider.style('width', '150px');
  lineRed = lineRedSlider.value();
  //lineRedSlider.position(10, 120);
  lineGreenSlider = createSlider(0, 255, 220);
  lineGreenSlider.parent('line-green');
  lineGreenSlider.style('width', '150px');
  lineGreen = lineGreenSlider.value();
  //lineGreenSlider.position(10, 140);
  lineBlueSlider = createSlider(0, 255, 220);
  lineBlueSlider.parent('line-blue');
  lineBlueSlider.style('width', '150px');
  lineBlue = lineBlueSlider.value();
  //lineBlueSlider.position(10, 160);

  lineColorDiv = createDiv();
  lineColorDiv.parent("color-block-line");
  lineColorDiv.style('width', '100%');
  lineColorDiv.style('height', '100%');

  // lineColorComp = color(lineRed, lineGreen, lineBlue);
  // background(lineColorComp);

  lineWeightSlider = createSlider(1, 50, 20);
  lineWeightSlider.parent('line-weight');
  lineWeightSlider.style('width', '150px');
  //lineWeightSlider.position(10, 220);

  imgSave = createButton('Save Your Drawing as a png File!');
  imgSave.parent('save-button');
  imgSave.mousePressed(saveImage);

  imgReset = createButton('Reset Image');
  imgReset.parent('reset-button');
  imgReset.mousePressed(reset);

  background(bgRed, bgGreen, bgBlue);

}

function draw() {

  genDraw();
  genColorBlock();

}

function genDraw() {

  if (mouseIsPressed){
    stroke(lineRedSlider.value(), lineGreenSlider.value(), lineBlueSlider.value());
    strokeWeight(lineWeightSlider.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
    mousePos.push([mouseX, mouseY]);
  }

}

function genColorBlock() {

  bgRed = bgRedSlider.value();
  bgGreen = bgGreenSlider.value();
  bgBlue = bgBlueSlider.value();
  backgroundColorComp = color(bgRed, bgGreen, bgBlue);
  backgroundColorDiv.style('background-color', backgroundColorComp);

  lineRed = lineRedSlider.value();
  lineGreen = lineGreenSlider.value();
  lineBlue = lineBlueSlider.value();
  lineColorComp = color(lineRed, lineGreen, lineBlue);
  lineColorDiv.style('background-color', lineColorComp);

}

function saveImage() {
  saveCanvas(canvas, 'myDrawing', 'png');
}

function reset() {
  background(bgRed, bgGreen, bgBlue);
}

function windowResized() {
  resizeCanvas((windowWidth * 0.75), (windowHeight * 0.75), true);
}
