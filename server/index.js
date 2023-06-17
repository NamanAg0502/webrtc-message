const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected:- ' + socket.id);

  socket.on('message', (message) => {
    console.log(message);
    socket.broadcast.emit('receive_message', message);
  });
});

app.use(cors());

server.listen(4000, () => {
  console.log('SERVER RUNNING ON PORT 4000');
});
