import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
import { HTTP400Error } from '../utils/httpErrors';

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;

  const request = await fetch('http://authapi:4000/authapi/auth/validateToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token })
  });

  const response = await request.json();

  if (!response.isValid) {
    throw new HTTP400Error('Bad token.');
  }

  next();
}
