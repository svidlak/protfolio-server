"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const ChatboxSocketHandler_1 = __importDefault(require("./ChatboxSocketHandler"));
const DrawSocketHandler_1 = __importDefault(require("./DrawSocketHandler"));
const drawSocket = (0, DrawSocketHandler_1.default)();
const chatboxSocket = (0, ChatboxSocketHandler_1.default)();
class Websocket {
    constructor(server) {
        this.Io = new socket_io_1.default.Server(server, { cors: { origin: '*' } });
        this.Io.of('/draw').on('connection', drawSocket.connection);
        this.Io.of('/chatbox').on('connection', chatboxSocket.connection);
    }
}
exports.default = Websocket;
//# sourceMappingURL=websocket.js.map