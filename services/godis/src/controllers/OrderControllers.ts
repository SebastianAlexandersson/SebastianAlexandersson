import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entities/Product';
import { Order } from '../entities/Order';
import { OrderProduct } from '../entities/OrderProduct';
import { Consumer } from '../entities/Consumer';
import { HTTP400Error } from '../utils/httpErrors';

export async function createOrder(req: Request, res: Response) {
  const { consumer, products } = req.body;

  if (!consumer || !Array.isArray(products)) {
    throw new HTTP400Error('Missing paramaters in request body.');
  };

  if (products.length < 1) {
    throw new HTTP400Error('No products in product list');
  };

  const productRepository = getRepository(Product);
  const orderRepository = getRepository(Order);
  const consumerRepository = getRepository(Consumer);
  const orderProductRepository = getRepository(OrderProduct);

  const consumerObj = await consumerRepository.findOne(consumer);
  
  const productList = await productRepository.findByIds(products);
  const productListRelation = productList.map(product => orderProductRepository.create({
    product,
  }))
  await orderProductRepository.save(productListRelation);
  
  const order = orderRepository.create();
  order.consumer = consumerObj;
  order.orderProduct = productListRelation;
  await orderRepository.save(order);

  res.status(200)
  .send({
    message: 'Resource created',
    order,
  });
};

export async function getAllOrders(req: Request, res: Response) {
  const orderRepository = getRepository(Order);

  const orders = await orderRepository.find({
    relations: ['orderProduct', 'orderProduct.product', 'consumer'],
  });

  res.status(200)
  .send(orders);
};

export async function getOrderById(req: Request, res: Response) {
  const id = Number(req.params.id);

  console.log(id)

  const orderRepository = getRepository(Order);
  const orders = await orderRepository.findOne({
    where: {
      id,
    },
    relations: ['orderProduct', 'orderProduct.product', 'consumer'],
  });

  if (!orders) {
    throw new HTTP400Error('No such order.');
  }

  res.status(200)
  .send(orders);
};

export async function getOrderByConsumerId(req: Request, res: Response) {
  const id = Number(req.params.id);

  const orderRepository = getRepository(Order);
  const orders = await orderRepository.find({
    where: {
      consumer: {
        id,
      },
    },
    relations: ['orderProduct', 'orderProduct.product', 'consumer'],
  });

  res.status(200)
  .send(orders);
};

