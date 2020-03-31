import { Request, Response } from 'express';
import controllers from '../../controllers/consumer';

export default [
  {
    path: '/godisapi/consumer',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        res.send('consumer');
      },
    ],
  },
  {
    path: '/godisapi/consumer',
    method: 'post',
    handler: [
      controllers.createConsumer,
    ],
  },
];
