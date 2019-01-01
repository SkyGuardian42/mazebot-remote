let gpio = {};
let pins = [];

if (process.env.PI) {
  // eslint-disable-next-line global-require
  gpio = require('rpi-gpio');

  console.log('gpio active');
  pins.forEach(pin => gpio.setup(pin, gpio.DIR_OUT));
} else {
  gpio.write = () => { };
}

module.exports.set = Pins => pins = Pins;

module.exports.write = (data) => {
  gpio.write(pins[data.target], data.status);
};
