"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatboxSocketHandler = () => {
    const socketClients = {};
    const connection = (socket) => {
        console.log(`Draw ${socket.id} connected`);
        socketClients[socket.id] = socket;
        socket.on('broadcastMessage', data => broadcastMessage(data, socket.id));
        socket.on('disconnect', () => disconnect(socket.id));
    };
    const disconnect = (socketId) => {
        console.log(`Draw ${socketId} disconnected`);
    };
    const broadcastMessage = (data, socketId) => {
        console.log(`Draw ${socketId} new message`);
        Object.keys(socketClients).forEach(key => {
            var _a;
            (_a = socketClients[key]) === null || _a === void 0 ? void 0 : _a.emit('broadcastMessage', {
                socketId,
                data
            });
        });
    };
    return {
        connection
    };
};
exports.default = ChatboxSocketHandler;
//# sourceMappingURL=ChatboxSocketHandler.js.map