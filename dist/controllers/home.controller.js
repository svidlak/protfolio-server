"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
class HomeController {
    constructor() {
        this.router = express_1.default.Router();
        this.index = (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname + '/../../public/index.html'));
        };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this.index);
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.controller.js.map