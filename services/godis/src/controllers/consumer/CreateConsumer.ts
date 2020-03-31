import { getRepository, getTreeRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Consumer } from '../../entities/Consumer';
import { HTTP400Error } from '../../utils/httpErrors';

export default async function createConsumer(req: Request, res: Response) {
  const { firstName, lastName, adress } = req.body

  if (!firstName || !lastName || !adress) {
    throw new HTTP400Error('Missing paramaters in request body.');
  };

  const consumerRepository = getRepository(Consumer);
  const consumer = {
    firstName,
    lastName,
    adress
  };
  
  await consumerRepository.save(consumer)
    .then(() => {
      res.status(200)
      .send({ message: 'Resource created.' })
    })
    .catch(err => {
      throw err
    });
};
