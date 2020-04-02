import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Consumer } from '../entities/Consumer';
import { HTTP400Error } from '../utils/httpErrors';
import jwt from 'jsonwebtoken';

export async function findAllConsumers(req: Request, res: Response) {
  const consumerRepository = getRepository(Consumer);
  const consumers = await consumerRepository.find();

  console.log(req.cookies)

  res.status(200)
  .json(consumers);
};

export async function findConsumerById(req: Request, res: Response) {
  const { id } = req.params;

  const consumerRepository = getRepository(Consumer);
  const consumer = await consumerRepository.findOne(id);

  res.status(200)
  .json(consumer);
};

export async function createConsumer(req: Request, res: Response) {
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

export async function updateConsumer(req: Request, res: Response) {
  const consumerRepository = getRepository(Consumer);
  const consumer = {
    id: Number(req.params.id),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    adress: req.body.adress
  };

  await consumerRepository.save(consumer);

  res.status(200)
  .send({
    message: 'Resource updated.'
  });
};

export async function deleteConsumer(req: Request, res: Response) {
  const id = Number(req.params.id);

  const consumerRepository = getRepository(Consumer);
  const consumer = await consumerRepository.find({ id })
  await consumerRepository.remove(consumer);

  res.status(200)
  .send({
    message: 'Resource deleted.'
  });
};
