const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 3000;

const rooms = {};

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
        console.log(message);
        io.emit('new-message', message);
    });

    socket.on('join-room', (roomCode) => {
        console.log('user with roomCode [' + roomCode + '] connected');

        if (!rooms[roomCode]) {
            rooms[roomCode] = 1;
        } else {
            rooms[roomCode] += 1;
        }

        console.log(rooms);

        socket.join(roomCode);
    });

    socket.on('leave-room', (roomCode) => {
        console.log('user with roomCode [' + roomCode + '] left');

        if (rooms[roomCode] > 1) {
            rooms[roomCode] -= 1;
        } else if (rooms[roomCode] <= 0) {
            delete rooms[roomcode];
        }

        console.log(rooms);

        socket.leave(roomCode);
    });

});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});