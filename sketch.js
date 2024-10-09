let outputDevice; 
let cc = 0;
let mic;
let soundPlaying = false;
let thresholdStart= 0.1;
let thresholdStop= 0.055;
  

function setup() {
    let cnv = createCanvas(400,400);
    cnv.mousePressed(userStartAudio);
    textAlign(CENTER);
    mic = new p5.AudioIn();
    mic.start();

    background(200);
    text('tap here to play',10,20);
  
  navigator.requestMIDIAccess()
  .then(function(midiAccess) {
    // Get the first available MIDI output port
    outputDevice = midiAccess.outputs.values().next().value;
    console.log(outputDevice)
  })
  .catch(function(error) {
    console.error("Error accessing MIDI devices");
  });

}

function draw() {
  let volume = mic.getLevel();
  console.log ("mic Volume" + volume);
//console.log(cc);

if (volume > thresholdStart && !soundPlaying) {
  outputDevice.send([176, cc, 127])
  soundPlaying = true;
  console.log("Audio Started");
} 
 else if (volume < thresholdStop && soundPlaying) {
  outputDevice.send([176,cc, 0])
soundPlaying = false;
console.log("Sound Stopped");
 }
cc= (cc+1) % 3; //loop through the sounds to cue different audios 

}


