import { Request, Response } from 'express'

export default [
  {
    path: '/consumer',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        res.send('consumer');
      },
    ],
  },
];
