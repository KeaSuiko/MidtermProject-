let mySoundOne;
let loopStart = 5;
let loopDuration = 2;

function preload() {
  mySoundOne = loadSound("assets/Fine Arts Building.mp3");
}

function setup() {
  let cnv = createCanvas(100,100);
  cnv.mousePressed(canvasPressed) ;
  background(220);
  text('tap here to play',10,20);

function canvasPressed() {
  mySoundOne.play();
}
}
