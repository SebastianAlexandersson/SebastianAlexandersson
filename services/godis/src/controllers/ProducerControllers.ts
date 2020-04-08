import { Response } from 'express';
import { MyRequest } from '../types';
import { getManager } from 'typeorm';
import { Producer } from '../entities/Producer';
import { Product } from '../entities/Product';
import { HTTP400Error } from '../utils/httpErrors';

export async function getProducts(req: MyRequest, res: Response) {
  const entityManager = await getManager().transaction(async manager => {
    const producerId = req.user.godisDbId;
    const producer = await manager.findOne(Producer, producerId);

    const products = await manager.find(Product, {
      where: {
        producer,
      },
    });

    res.status(200).send(products);
  });
};

export async function createProduct(req: MyRequest, res: Response) {
  const entityManager = await getManager().transaction(async manager => {
    const { name, price, qty } = req.body;

    const producerId = req.user.godisDbId;
    const producer = await manager.findOne(Producer, producerId);
    
    const product = manager.create(Product, {
      name,
      price,
      qty,
      producer
    });
    await manager.save(product);

    res.status(200)
    .send({
      message: 'Resource created.',
      product,
    });
  });
};

export async function updateProduct(req: MyRequest, res: Response) {
  const entityManager = await getManager().transaction(async manager => {
    const { name, price, qty } = req.body;

    const producerId = req.user.godisDbId;
    const producer = await manager.findOne(Producer, producerId);

    const productId = Number(req.params.id);
    const product = await manager.findOne(Product, {
      where: {
        id: productId,
        producer,
      },
    });

    if (!product) {
      throw new HTTP400Error('No such product.');
    };

    const updatedProduct = await manager.save(Product, {
      id: productId,
      producer,
      name,
      price,
      qty,
    });

    res.status(200)
    .send({
      message: 'Resource updated.',
      updatedProduct,
    })
  })
};

export async function deleteProduct (req: MyRequest, res: Response) {
  const entityManager = await getManager().transaction(async manager => {

    const producerId = Number(req.user.godisDbId);
    const producer = await manager.findOne(Producer, producerId);

    const productId = Number(req.params.id);
    const product = await manager.findOne(Product, {
      where: {
        id: productId,
        producer,
      },
    });

    if (!product) {
      throw new HTTP400Error('No such product.');
    };

    const deletedProduct = await manager.remove(product);

    res.status(200)
    .send({
      message: 'Resource deleted.',
      deletedProduct,
    });
  });
};
