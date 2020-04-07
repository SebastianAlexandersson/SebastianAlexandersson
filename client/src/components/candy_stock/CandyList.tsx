/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable import/extensions */
import * as React from 'react';

import { connect } from 'react-redux';
import { getAllProducts, setCurrent } from '../../redux/producer/producer.actions';
import { AppState } from '../../redux';
import { IProduct } from '../../redux/producer/producer.types';
import Spinner from '../layout/Spinner';
import { IUserData } from '../../redux/auth/auth.types';
import './Candy.css';
import EditForm from './EditForm';

interface Props {
  getAllProducts: () => Promise<void>;
  storeProducts: IProduct[];
  isLoading: boolean;
  user: IUserData | null;
  setCurrent: (product: IProduct) => void;
  current: null | IProduct;
}

const CandyList: React.FC<Props> = ({
  getAllProducts, storeProducts, isLoading, user, setCurrent, current,
}) => {
  React.useEffect(() => {
    getAllProducts();
  }, []);

  const producerName = user && user.username;


  return !isLoading ? (
    <ul className="mt-5 CandyList">
      <h3 className="display-3">Candy list</h3>
      {storeProducts.length > 0 && storeProducts.filter((x) => x.producer.name === producerName) && storeProducts.map((x) => (
        <li className="">
          {' '}
          Name:
          {' '}
          <span>{x.name}</span>
          {' '}

          Qty:
          {' '}
          <span>{x.qty}</span>

          Price:
          <span>
            <small className="decrease">&#8592;</small>
            {x.price}
            {' '}
            <small className="increase">&#8594;</small>
            {' '}
          </span>

          <div className="cta">
            <span id="edit-pen" onClick={() => setCurrent(x)}>
              &#9998;
            </span>
            <span id="delete-icon">
              &#10008;
            </span>
          </div>
        </li>
      )) }

      {current !== null && (
        <EditForm current={current} />
      ) }

    </ul>

  ) : <Spinner />;
};

const mapStateToProps = (state: AppState) => ({
  storeProducts: state.producer.products,
  isLoading: state.producer.loading,
  user: state.auth.user,
  current: state.producer.current,
});


export default connect(mapStateToProps, { getAllProducts, setCurrent })(CandyList);
