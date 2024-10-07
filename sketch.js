let outputDevice; 
let cc = 0;
  

function setup() {
    let cnv = createCanvas(400,400);
    background(200);
    text('tap here to play',10,20);

  // try to setup WebMIDI and set outputDevice to the first available device
  navigator.requestMIDIAccess()
  .then(function(midiAccess) {
    // Get the first available MIDI output port
    outputDevice = midiAccess.outputs.values().next().value;
    console.log(outputDevice)
  })
  .catch(function(error) {
    console.error("Error accessing MIDI devices");
    //console.error(error);
    
  //mic = new p5.AudioIn();
  //mic.start()
  //cnv.mousePressed(canvasPressed);

  //console.log("Mic Started")
  });
}


function draw() {}


// if a key is pressed, send a 1 second long note
function keyPressed() {
    // Send a MIDI note on message
    console.log(cc);

    outputDevice.send([176, cc, 127]); // Note on, middle C, velocity 127

    // After a delay, send a MIDI note off message
    setTimeout(function() {
      outputDevice.send([176, cc, 0]); // Note off, middle C
    }, 1000); // 1000 milliseconds == 1 second
cc= (cc+1) % 3; 
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