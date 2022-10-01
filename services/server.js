"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    constructor(app) {
        this.app = app;
        this.app.get("/api", (req, res) => {
            res.send("You have reached the API 1.21!");
        });
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map