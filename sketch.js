var osc;
var fft;



function setup() {
  createCanvas(800, 400);



  osc = new p5.Oscillator();
  osc.setType('sine');
  //osc.setType('square');
  //osc.setType('triangle');
  osc.freq(220);
  osc.amp(0.4);
  osc.start();

  fft = new p5.FFT();
  fft.setInput(osc);
}

function draw() {

  background(0);
  pitch = mouseX
  osc.freq(pitch);

  var spectrum = fft.analyze();

  for (var i = 0; i < spectrum.length; i++) {
    var y = map(spectrum[i], 0, 255, height - 20, 10);
    fill(255);
    //ellipse(i*5, y, 10,10);
    vertex(i*40, y);
  }



  // console.log(spectrum.length)
  endShape()
  fill(255);
  text("Oscillator 1:" + pitch, 10, 50);

}

function mouseReleased() {
  osc1.amp(0.0);
  osc2.amp(0.0);
}