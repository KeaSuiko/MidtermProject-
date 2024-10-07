let mySoundOne;
let mic;
let soundPlaying = false;
let thresholdStart= 0.1;
let thresholdStop= 0.055;

function preload() {
  mySoundOne = loadSound("assets/CREATIVECODINGMT.mp3");
}

function setup() {
  let cnv = createCanvas(400,400);
  background(200);
  
  text('tap here to play',10,20);
  mic = new p5.AudioIn();
  mic.start()

  cnv.mousePressed(canvasPressed);

  console.log("Mic Started")
}



function canvasPressed() {
  if (mySoundOne.isPlaying()) {
    mySoundOne.stop();
    soundPlaying = false;
  } else {
    mySoundOne.loop();
    soundPlaying = true;
  }
}
  


function draw() {
  let volume = mic.getLevel();
  console.log ("mic Volume" + volume);

  if (volume > thresholdStart && !soundPlaying) {
    mySoundOne.loop();
    soundPlaying = true;
    console.log("Audio Started");
  } 
    else if (volume < thresholdStop && soundPlaying) {
       mySoundOne.stop();
soundPlaying = false;
console.log("Sound Stopped");
    }
  }