import * as React from 'react';
import './Candy.css';
import { Link } from 'react-router-dom';
import { IProduct } from '../../redux/producer/producer.types';

interface Props {
  product: IProduct;
}

const CandyItem: React.FC<Props> = ({ product }) => (
  <>
    <div className="Candy">
      <div className="Candy-header">
        <h3>
          Candy:
          {' '}
          {product.name}
          {' '}
        </h3>
      </div>
      {/* /CandyHeader */}
      <div className="Candy-body">
        <p>
          Quantity:
          {' '}
          <span>{product.qty}</span>
        </p>
        <p>
          Price:
          {' '}
          <span>{product.price}</span>
        </p>
        <p>
          By Producer:
          {' '}
          <span>{product.producer.name}</span>
        </p>


      </div>
      {/* /Candy-body */}
      <Link className="Btn" to="/store">Buy</Link>
      {/* /Candy */}
    </div>


  </>
);
export default CandyItem;
