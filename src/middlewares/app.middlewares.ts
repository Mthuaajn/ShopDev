import { Express } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
export default class App {
  private app: Express;
  constructor(express: Express) {
    this.app = express;
  }
  public initApp(): void {
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(compression());
  }
  public getApp(): Express {
    return this.app;
  }
}
