let mySoundOne;
let mic;
let soundPlaying = false;
let thresholdStart= 0.3;
let thresholdStop= 0.2;

function preload() {
  mySoundOne = loadSound("assets/Fine Arts Building.mp3");
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
  } else {
    mySoundOne.loop();
  }
}
  


function draw() {
  let volume = mic.getLevel();
  console.log ("mic Volume" + volume);

  //let playaudio = map(volume, 0, 1, 20, 100)
 // console.log ("mapped volume" + playaudio)

  if (volume > thresholdStart && !soundPlaying) {
    mySoundOne.loop();} 
    else {
      if (volume < thresholdStop && soundPlaying) {
        mySoundOne.stop();

        //ellipse(width/2, height/2, playaudio, playaudio);
    }
   }
  }