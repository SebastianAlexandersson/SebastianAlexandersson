/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { setCurrent, deleteProduct, getProductsByProducer } from '../../redux/producer/producer.actions';
import { AppState } from '../../redux';
import { IProduct } from '../../redux/shop/shop.types';
import Spinner from '../layout/Spinner';
import './Candy.css';
import EditForm from './EditForm';
import useToggle from '../../hooks/useToggle';
import CandyItem from './CandyItem';
import { selectProducerProducts, selectProducerIsLoading } from '../../redux/producer/producer.select';


interface Props {
  getProductsByProducer: () => Promise<void>;
  setCurrent: (product: IProduct) => void;
  deleteProduct: (productId: number) => Promise<void>;
  myProducts: IProduct[];
  isLoading: boolean;
  current: null | IProduct;
}

const CandyList: React.FC<Props> = ({
  getProductsByProducer, myProducts, isLoading, setCurrent, current, deleteProduct,
}) => {
  const fetchProducts = React.useCallback(() => {
    getProductsByProducer();
  }, [myProducts, setCurrent, current]);


  React.useEffect(() => {
    getProductsByProducer();
  }, []);

  const [showForm, toggleForm] = useToggle(false);


  const handleCurrent = (val: IProduct): void => {
    setCurrent(val);
    toggleForm();
  };

  return isLoading ? <Spinner /> : (
    <>
      <ul className="CandyList">
        <h3>Candy list</h3>


        {!isLoading && myProducts.length > 0 && myProducts.map((candy) => (
          <CandyItem
            key={candy.id}
            candy={candy}
            handleCurrent={handleCurrent}
            deleteProduct={deleteProduct}
          />
        ))}

        {showForm && current !== null && (
          <EditForm current={current} toggle={toggleForm} />
        ) }

      </ul>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  myProducts: selectProducerProducts(state),
  isLoading: selectProducerIsLoading(state),
  current: state.producer.current,
});
//


export default connect(
  mapStateToProps, { getProductsByProducer, setCurrent, deleteProduct },
)(CandyList);
