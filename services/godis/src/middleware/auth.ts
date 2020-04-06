import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
import { HTTP400Error } from '../utils/httpErrors';

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.token

  const request = await fetch('http://localhost/authapi/validateToken', {
    method: "POST",
    headers: {
      "ContentType": "application/json"
    },
    body: JSON.stringify({ token }),
  })
  .catch(err => {
    throw err;
  })

  const response = await request.json();

  if (!response.isValid) {
    throw new HTTP400Error('Invalid JSON web token');
  }

  next()
};
