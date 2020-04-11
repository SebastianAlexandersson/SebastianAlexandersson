import * as controllers from '../../controllers/ProducerControllers';
import { validateProducer } from '../../controllers/AuthControllers';

export default [
  {
    path: '/godisapi/producer',
    method: 'get',
    handler: [
      validateProducer,
      controllers.getProducts,
    ],
  },
  {
    path: '/godisapi/producer',
    method: 'post',
    handler: [
      validateProducer,
      controllers.createProduct,
    ],
  },
  {
    path: '/godisapi/producer/:id',
    method: 'put',
    handler: [
      validateProducer,
      controllers.updateProduct,
    ],
  },
  {
    path: '/godisapi/producer/:id',
    method: 'delete',
    handler: [
      validateProducer,
      controllers.deleteProduct,
    ],
  },
];
