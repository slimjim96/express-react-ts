import {Server} from "./server";
import express, {Request, Response, Router, Express} from 'express';
const app = express();

const port = 8080;

const server = new Server(app);
server.start(port);

// Send index.html on root request
app.use(express.static('dist'));
app.get('/', (req:Request, res:Response) => {
  console.log('sending index.html');
  res.sendFile('/dist/index.html');
});
