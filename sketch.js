
let canvas;

// background stuff
let bgRedSlider, bgGreenSlider, bgBlueSlider; // sliders for background colors
let bgRed, bgGreen, bgBlue; // background color variables
// background color block stuff
let backgroundColorDiv; // div for background color block
let backgroundColorComp; // combined color of background rgb colors

// line stuff
let lineRedSlider, lineGreenSlider, lineBlueSlider; // sliders for line colors
let lineRed, lineGreen, lineBlue; // line color variables
// line color block stuff
let lineColorDiv; // div for line color block
let lineColorComp; // combined color of line rgb colors

// line weight stuff
let lineWeightSlider; // slider for line weight
let lineWeight; // line weight variable

// buttons
let backgroundReset; // resets sketch to show new background color
let imgSave; // saves image
let imgReset; // resets sketch

let mousePos = []; // 3.5 array of old mouse positions

//let bgFade; // 3.10 variable for alpha fade

//let n; // 3.12 variable for perlin noise

function setup() {

  // canvas setup
  frameRate(60);
  canvas = createCanvas((800), (800));
  //canvas = createCanvas(windowWidth, windowHeight); // 3.9 making canvas fullscreen
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

  lineRedSlider = createSlider(0, 255, 255);
  lineRedSlider.parent('line-red');
  lineRedSlider.style('width', '150px');
  lineRed = lineRedSlider.value();

  lineGreenSlider = createSlider(0, 255, 220);
  lineGreenSlider.parent('line-green');
  lineGreenSlider.style('width', '150px');
  lineGreen = lineGreenSlider.value();

  lineBlueSlider = createSlider(0, 255, 220);
  lineBlueSlider.parent('line-blue');
  lineBlueSlider.style('width', '150px');
  lineBlue = lineBlueSlider.value();

  lineColorDiv = createDiv();
  lineColorDiv.parent("color-block-line");
  lineColorDiv.style('width', '100%');
  lineColorDiv.style('height', '100%');

  lineWeightSlider = createSlider(1, 50, 20);
  lineWeightSlider.parent('line-weight');
  lineWeightSlider.style('width', '150px');
  lineWeight = lineWeightSlider.value();

  imgSave = createButton('Save Your Drawing as a png File!');
  imgSave.parent('save-button');
  imgSave.mousePressed(saveImage);

  imgReset = createButton('Reset Image');
  imgReset.parent('reset-button');
  imgReset.mousePressed(reset);

  background(bgRed, bgGreen, bgBlue);

  //n = 0; // 3.12 variable for perlin noise
}

function draw() {

  genDraw(); // line drawing
  genColorBlock(); // color blocks

}

function genDraw() {

  if(mouseIsPressed){

    strokeWeight(lineWeight);

    if(mouseButton === LEFT) {
      // bgFade = color(bgRed, bgGreen, bgBlue, 5); // 3.10 variable for alpha fade
      // background(bgFade); // 3.10 for alpha fade
      //stroke((lineRed * noise(n+10)), (lineGreen * noise(n+15)), (lineBlue * noise(n+20))); // 3.12 variable for perlin noise
      stroke(lineRed, lineGreen, lineBlue);
      //n += 0.01;
    }

    if(keyIsPressed === true) {
      stroke(bgRed, bgGreen, bgBlue);
    }

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
