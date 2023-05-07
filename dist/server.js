"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
if (!process.env.PORT) {
    console.log('No port provided');
    process.exit(1);
}
const requestLogger_1 = __importDefault(require("./middlewares/requestLogger"));
const routeNotFound_1 = __importDefault(require("./middlewares/routeNotFound"));
const home_controller_1 = __importDefault(require("./controllers/home.controller"));
const app = new app_1.default({
    port: parseInt(process.env.PORT),
    controllers: [
        new home_controller_1.default(),
    ],
    middleWares: [
        requestLogger_1.default,
        routeNotFound_1.default
    ]
});
app.listen();
//# sourceMappingURL=server.js.map