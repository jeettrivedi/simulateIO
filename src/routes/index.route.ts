import { Router } from 'express';
import IndexController from '@controllers/index.controllers';
import { Routes } from '@interfaces/routes.interface';

class IndexRoutes implements Routes{
  path = '/';
  router = Router();
  indexController = new IndexController();

  initializeRoutes(){
    this.router.get('/', this.indexController.index)
  }

  constructor(){
    this.initializeRoutes();
  }

}

export default IndexRoutes;