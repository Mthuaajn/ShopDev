import express from 'express';
import App from './middlewares/app.middlewares';
import Database from './services/Database.services';
import dotenv from 'dotenv';
import checkConnect from './helper/check.connect';
dotenv.config();

class Server {
  private port: number = 3000;
  private app: App;
  private server: express.Application;
  private db = Database;
  constructor() {
    this.server = express();
    this.app = new App(express());
    this.app.initApp();
    this.db.connect('mongodb');
  }
  public start(): void {
    const server = this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });

    // function check connection database and check overload
    // checkConnect.checkOverLoad();
    process.on('SIGINT', () => {
      server.close(() => {
        console.log('Server closed');
      });
    });
  }
}

const server = new Server();
server.start();
