import express from 'express';

import { NODE_ENV, PORT } from '@config';
import { Routes } from '@interfaces/routes.interface';
import { logger, stream } from '@utils/logger';
import errorMiddleware from '@middlewares/error.middleware';

class App {

    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]){
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.info(`App listening on the port ${this.port}`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeRoutes(routes: Routes[]){
        routes.forEach(route => {
          this.app.use('/', route.router);
        });
    }

    private initializeErrorHandling() {
      this.app.use(errorMiddleware);
    }

}

export default App;
