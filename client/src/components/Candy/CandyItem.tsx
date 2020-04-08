/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import * as React from 'react';
import './Candy.css';
import { connect } from 'react-redux';
import { IProduct } from '../../redux/producer/producer.types';
import { addToCart } from '../../redux/concumer/consumer.actions';
import { AppState } from '../../redux';


interface Props {
  product: IProduct;
  addToCart: (product: IProduct) => void;
}

const CandyItem: React.FC<Props> = ({ product, addToCart }) => (
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
      <button className="Btn" type="button" onClick={() => addToCart(product)}>Add To Cart</button>
      {/* /Candy */}
    </div>


  </>
);
// const mapStateToProps = (state:AppState) => {
//   return {

//   }
// }

export default connect(null, { addToCart })(CandyItem);
