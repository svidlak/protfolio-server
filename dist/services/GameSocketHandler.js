"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameSocketHandler = () => {
    const connectedClients = [];
    const gameQueue = [];
    const connection = (socket) => {
        console.log('cpnnected!');
        connectedClients.push(socket);
        gameQueue.push(socket);
        if (gameQueue.length == 2) {
            // this.startGame()
        }
        // socket.on('updateBoard', updateBoard)
        // socket.on('endGame', endGame)
        // socket.on('disconnect', ()=> disconnect(socket))
    };
    // const startGame = () => {
    //         const board: IBoard[][] = new Game().getBoard()
    //
    //         const room: IRoom = {
    //             name: (new Date().getTime()).toString(),
    //             players: {},
    //             board: board,
    //             turn: 1,
    //             winner: 0
    //         }
    //         gameQueue.forEach((socket: socketIO.Socket, index: number) => {
    //             socket.join(room.name)
    //             room.players[socket.id] = {
    //                 id: socket.id,
    //                 type: index ? EPlayer.black : EPlayer.white
    //             }
    //         });
    //
    //         this.rooms[room.name] = room
    //         this.Io.to(room.name).emit('startGame', room)
    //         gameQueue.length = 0
    //     }
    //
    // const updateBoard = (room: IRoom) => {
    //         this.Io.to(room.name).emit('updateBoard', room)
    //     }
    //
    // const endGame = (room: IRoom) => {
    //         this.Io.to(room.name).emit('endGame', room)
    //         Object.keys(room.players).forEach( player => {
    //             const foundPlayer = connectedClients.find( socket => socket.id === player)
    //             if(foundPlayer) foundPlayer.leave(room.name)
    //         })
    //     }
    //
    // const disconnect = (socket: socketIO.Socket) => {
    //         console.log('disconnected')
    //         const socketIndex = connectedClients.indexOf(socket)
    //         connectedClients.splice(socketIndex, 1)
    //     }
    return {
        connection
    };
};
exports.default = GameSocketHandler;
//# sourceMappingURL=GameSocketHandler.js.map