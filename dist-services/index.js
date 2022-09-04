"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8080;
const server = new server_1.Server(app);
server.start(port);
// Send index.html on root request
app.use(express_1.default.static('dist'));
app.get('/', (req, res) => {
    console.log('sending index.html');
    res.sendFile('/dist/index.html');
});
//# sourceMappingURL=index.js.map