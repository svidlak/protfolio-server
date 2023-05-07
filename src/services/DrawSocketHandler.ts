const DrawSocketHandler = () => {
    const socketClients = {};

    const connection = (socket) => {
        socketClients[socket.id] = socket

        socket.on('broadcastMessage', data => broadcastMessage(data, socket.id))
        socket.on('disconnect', () => disconnect(socket.id))
    }

    const disconnect = (socketId) => {
        socketClients[socketId] = undefined
    }

    const broadcastMessage = (data, socketId) => {
        Object.keys(socketClients).forEach(key => {
            socketClients[key]?.emit('broadcastMessage', {
                socketId,
                data
            })
        })
    }

    return {
        connection
    }
}

export default DrawSocketHandler
