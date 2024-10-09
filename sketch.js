let outputDevice; 
let cc = 0;
let mic;
  

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

function draw() {}


function keyPressed() {
    // Send a MIDI note on message
    console.log(cc);

    outputDevice.send([176, cc, 127]); //turning on the path that cues the different sounds 

    // After a delay, send a MIDI note off message
    setTimeout(function() {
      outputDevice.send([176, cc, 0]);
    }, 1000); 
cc= (cc+1) % 3; //loop through the sounds to cue different audios 

}










//function draw() {
  //let volume = mic.getLevel();
 // console.log ("mic Volume" + volume);

  //if (volume > thresholdStart && !soundPlaying) {
   // outputDevice.send([176, 10, 10])
    //mySoundOne.loop();
   // soundPlaying = true;
    //console.log("Audio Started");
 // } 
   // else if (volume < thresholdStop && soundPlaying) {
       // outputDevice.send([176,0, 10])
       //mySoundOne.stop();
//soundPlaying = false;
//console.log("Sound Stopped");
   // }
  //}