//---------------------------------
// Handle GPIO to motor controller
//---------------------------------

// Library imports
const rpio = require('rpio');

// Global variables
let pins = [];

// If not used on Pi, enable mock environment
if (process.env.PI) {
  console.log('Enabling GPIO');
} else {  
  console.log('GPIO running in mock environment');

  rpio.init({
    rpio.init({mock: 'raspi-3'});
  });
}

module.exports = (pins) => {
  pins = this.pins;

  // Initialize Pins
  pins.forEach(pin => rpio.open(pin, rpio.OUTPUT, rpio.LOW));

  this.write = (data) => {
    // Log GPIO change to console
    console.log('writing: ');
    console.log(data);
    
    // Write to GPIO
    rpio.write(pins[data.target], data.status);
  }
  
  return this;
}
