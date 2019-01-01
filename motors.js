const gpio = require('rpi-gpio');

if (process.env.PI) {
  console.log('gpio active');
}

module.exports = (Pins) => {
  gpio.motorPins = Pins;
  gpio.motorPins.forEach(pin => gpio.setup(pin, gpio.DIR_OUT));

  this.write = (data) => {
    try {
      gpio.write(gpio.motorPins[data.target], data.status);
    } catch (e) {
      // only throw error when run on pi to avoid false-positives
      if (process.env.PI !== undefined) {
        console.log(process.env.PI);
      }
    }
  };

  return this;
};
