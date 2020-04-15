import * as React from 'react';

interface Props {
  order: Record<string, any>;
}

const OrderShowCaseItem: React.FC<Props> = ({ order }) => (
  <div>
    {' '}
    <h1> Legia CWSKS </h1>
    {' '}
  </div>
);
export default OrderShowCaseItem;
