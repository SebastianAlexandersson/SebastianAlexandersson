import * as controllers from '../../controllers/ProductControllers';
import { validateToken } from '../../middleware/auth';

export default [
  {
    path: '/godisapi/product',
    method: 'get',
    handler: [
      validateToken,
      controllers.getAllProducts,
    ],
  },
  {
    path: '/godisapi/product/:id',
    method: 'get',
    handler: [
      controllers.getProductById,
    ],
  },
  {
    path: '/godisapi/product/producer/:producer',
    method: 'get',
    handler: [
      controllers.getProductByProducer,
    ],
  },
  {
    path: '/godisapi/product',
    method: 'post',
    handler: [
      controllers.createProduct,
    ],
  },
  {
    path: '/godisapi/product/:id',
    method: 'put',
    handler: [
      controllers.updateProduct,
    ],
  },
  {
    path: '/godisapi/product/:id',
    method: 'delete',
    handler: [
      controllers.deleteProduct,
    ],
  },
];
