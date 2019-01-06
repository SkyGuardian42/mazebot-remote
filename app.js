// Setup basic express server
const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const motors = require('./motors.js')([29, 32, 31, 33]);

require('./serial')(io);

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('client connected');

  socket.on('motor', (data) => {
    motors.write(data);
  });
});

// setInterval(() => {
//   io.emit('sensor', { sensor: new Date().getTime()});
// }, 10);
