import express from 'express';
import App from './middlewares/app.middlewares';

class Server {
  private port: number = 3000;
  private app: App;
  private server: express.Application;
  constructor() {
    this.server = express();
    this.app = new App(express());
    this.app.initApp();
  }
  public start(): void {
    const server = this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
    process.on('SIGINT', () => {
      server.close(() => {
        console.log('Server closed');
      });
    });
  }
}

const server = new Server();
server.start();
