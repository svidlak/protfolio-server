"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestLoggerMiddleware = (req, resp, next) => {
    console.log('Request logged:', req.method, req.path);
    next();
};
exports.default = requestLoggerMiddleware;
//# sourceMappingURL=requestLogger.js.map