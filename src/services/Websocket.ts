import socketIO from 'socket.io'
import ChatboxSocket from "./ChatboxSocketHandler";
import DrawSocketHandler from "./DrawSocketHandler";

const drawSocket = DrawSocketHandler();
const chatboxSocket = ChatboxSocket();

class Websocket {
    private Io: socketIO.Server

    constructor(server: any) {
        this.Io = new socketIO.Server(server, {cors: {origin: '*'}})
        this.Io.of('/draw').on('connection', drawSocket.connection)
        this.Io.of('/chatbox').on('connection', chatboxSocket.connection)
    }
}

export default Websocket
