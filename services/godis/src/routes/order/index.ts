import * as controllers from '../../controllers/OrderControllers';

export default [
  {
    path: '/godisapi/order',
    method: 'post',
    handler: [
      controllers.createOrder,
    ],
  },
  {
    path: '/godisapi/order',
    method: 'get',
    handler: [
      controllers.getAllOrders,
    ],
  },
  {
    path: '/godisapi/order/:id',
    method: 'get',
    handler: [
      controllers.getOrderById,
    ],
  },
  {
    path: '/godisapi/order/consumer/:id',
    method: 'get',
    handler: [
      controllers.getOrderByConsumerId,
    ],
  },
];
