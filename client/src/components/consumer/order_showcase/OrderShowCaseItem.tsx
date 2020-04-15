/* eslint-disable react/prop-types */
import * as React from 'react';

interface Props {
  order: Record<string, any>;
}

const OrderShowCaseItem: React.FC<Props> = ({ order }) => (
  <div className="OrderShowCaseItem">
    <div className="Order-Header">
      <p>
        Order Created At:
        {' '}
        {order.created_at}
      </p>
    </div>
    <ul className="Order-Body">
      {order.orderProduct.map((product: any) => (
        <li key={product.id}>

          <p>
            price: $
            <span>{product.price}</span>
          </p>

          <p>
            name:
            <span>{product.product.name}</span>
          </p>

          <p>
            qty:


            <span>{product.qty}</span>

          </p>
        </li>
      ))}
    </ul>

    <div className="Order-Footer">
      <p>
        Total Price :
        {' '}
        {order.total}
        {' '}
        $
      </p>
    </div>
  </div>
);
export default OrderShowCaseItem;
