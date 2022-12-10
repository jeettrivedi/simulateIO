import { NextFunction, Request, Response } from 'express';

class IndexController {

  index = (req: Request, res: Response, next: NextFunction) => {
    try{
      res.status(200).json({
        'message': 'Welcome to simulate IO.'
      });
    }catch(error){
      next(error);
    }
  };

}

export default IndexController;