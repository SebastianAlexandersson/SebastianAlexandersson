"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
require("reflect-metadata");
const db_1 = require("./config/db");
const socket_1 = require("./config/socket");
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const routes_1 = __importDefault(require("./routes"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const app = express_1.default();
utils_1.applyMiddleware(middleware_1.default, app);
utils_1.applyRoutes(routes_1.default, app);
utils_1.applyMiddleware(errorHandlers_1.default, app);
const server = http_1.default.createServer(app);
exports.io = socket_1.socketServer(server);
db_1.connectToDb();
server.listen(5000, () => console.log('Godisapi listening on port 5000'));
//# sourceMappingURL=index.js.map