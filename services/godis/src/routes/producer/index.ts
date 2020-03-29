import { Request, Response } from 'express'

export default [
  {
    path: '/producer',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('producer');
    }
  }
]
