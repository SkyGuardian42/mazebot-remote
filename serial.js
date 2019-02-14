const SerialPort = require('serialport'),
      Readline  = require('@serialport/parser-readline'),
      port      = new SerialPort('/dev/ttyACM0', {
        baudRate: 115200,
      }),
      parser = port.pipe(new Readline({ delimiter: '\r\n' }));

module.exports = (io) => {
  // Send mock data
  setInterval(() => io.emit('sensor', { sensor: new Date().getTime() }), 500);
  
  // Log serial data to console
  parser.on('data', console.log);
  return this;
};
