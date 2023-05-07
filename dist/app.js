"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const websocket_1 = __importDefault(require("./services/websocket"));
class App {
    constructor(appInit) {
        this.app = (0, express_1.default)();
        this.port = appInit.port;
        this.serveClient();
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.server = (0, http_1.createServer)(this.app);
        this.websocket = new websocket_1.default(this.server);
    }
    middlewares(middleWares) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }
    routes(controllers) {
        controllers.forEach(controller => {
            this.app.use(controller.router);
        });
    }
    serveClient() {
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map