import { Router,Response } from 'express';

class Routes {
    static define(router: Router): Router {
      router.use('/api/v1', (res:Response) =>{
          res.status(200).send({message:"ok"})
        });
        return router;
    }
}

export default Routes.define(Router());