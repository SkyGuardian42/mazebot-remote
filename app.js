// Library imports 
const express  = require('express'),
      socketio = require('socket.io');

// Global variables
const app    = express(),
      server = require('http').createServer(app),
      io     = socketio(server),
      motors = require('./motors.js')([11, 13, 15, 16]),
			port   = 3000,
			serial = require('./serial')(io);

// Listen ro requests
server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

// Serve HTML-files
app.use(express.static('./public'));

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('client connected');

  socket.on('motor', (data) => {
    motors.write(data);
  });
});
