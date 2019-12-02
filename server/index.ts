import e, { Express } from 'express';
import { Server } from 'http';
import SocketIO from 'socket.io';

const app: Express = e();

const server: Server = new Server(app); 

const io: SocketIO.Server = SocketIO(server);

const port: number = (process.env.PORT && parseInt(process.env.PORT)) || 3000;

const rooms: { [roomCode: string]: number } = {};

io.on('connection', (socket: SocketIO.Socket) => {
    console.log('user connected');

    socket.on('new-message', (message: string) => {
        console.log(message);
        io.emit('new-message', message);
    });

    socket.on('join-room', (roomCode: string) => {
        console.log('user with roomCode [' + roomCode + '] connected');

        if (!rooms[roomCode]) {
            rooms[roomCode] = 1;
        } else {
            rooms[roomCode] += 1;
        }

        console.log(rooms);

        socket.join(roomCode);
    });

    socket.on('leave-room', (roomCode: string) => {
        console.log('user with roomCode [' + roomCode + '] left');

        if (rooms[roomCode] > 1) {
            rooms[roomCode] -= 1;
        } else if (rooms[roomCode] <= 0) {
            delete rooms[roomCode];
        }

        console.log(rooms);

        socket.leave(roomCode);
    });

});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
