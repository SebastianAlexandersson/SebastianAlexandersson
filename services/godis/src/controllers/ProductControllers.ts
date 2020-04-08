import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entities/Product';
import { Producer } from '../entities/Producer';
import { HTTP400Error } from '../utils/httpErrors';
import { validateProducer } from '../middleware/auth';

export async function getAllProducts(req: Request, res: Response) {
  const productRepository = getRepository(Product);

  const products = await productRepository.find({
    relations: ['producer'],
  });

  res.status(200).json(products);
};

export async function getProductById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const productRepository = getRepository(Product);
  const product = await productRepository.findOne({
    where: {
      id,
    },
    relations: ['producer'],
  });

  if (!product) {
    throw new HTTP400Error('No such product.');
  }

  res.status(200).json(product);
}

export async function getProductByProducer(req: Request, res: Response) {
  const { producer } = req.params;

  const productRepository = getRepository(Product);
  const producerRepository = getRepository(Producer);

  const producerId = await producerRepository.findOne({
    where: { name: producer },
  });

  if (!producerId) {
    throw new HTTP400Error('No such producer.');
  }

  const products = await productRepository.find({
    relations: ['producer'],
    where: {
      producer: { id: producerId.id },
    },
  });

  res.status(200).json(products);
};
