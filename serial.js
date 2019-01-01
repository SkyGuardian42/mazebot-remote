const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0', {
  baudRate: 115200,
});

module.exports = (io) => {
  setInterval(() => io.emit('sensor', { sensor: new Date().getTime() }), 500);
  const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
  parser.on('data', console.log);
  return this;
};
