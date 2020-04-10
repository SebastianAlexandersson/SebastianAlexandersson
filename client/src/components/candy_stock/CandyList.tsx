/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { setCurrent, deleteProduct } from '../../redux/producer/producer.actions';
import { getAllProducts } from '../../redux/shop/shop.actions';
import { AppState } from '../../redux';
import { IProduct } from '../../redux/producer/producer.types';
import Spinner from '../layout/Spinner';
import { IUserData } from '../../redux/auth/auth.types';
import './Candy.css';
import EditForm from './EditForm';
import useToggle from '../../hooks/useToggle';
import { selectProductsIsLoading, selectProducts } from '../../redux/shop/shop.selector';
import CandyItem from './CandyItem';


interface Props {
  getAllProducts: () => Promise<void>;
  setCurrent: (product: IProduct) => void;
  deleteProduct: (productId: number) => Promise<void>;
  storeProducts: IProduct[];
  isLoading: boolean;
  user: IUserData | null;
  current: null | IProduct;
}

const CandyList: React.FC<Props> = ({
  getAllProducts, storeProducts, isLoading, user, setCurrent, current, deleteProduct,
}) => {
  const fetchProducts = React.useCallback(() => {
    getAllProducts();
  }, [storeProducts, setCurrent, current]);


  React.useEffect(() => {
    // getAllProducts();
    fetchProducts();
  }, []);

  const [showForm, toggleForm] = useToggle(false);

  const producerName = user && user.username;

  const handleCurrent = (val: IProduct): void => {
    setCurrent(val);
    toggleForm();
  };

  return isLoading ? <Spinner /> : (
    <>
      <ul className="CandyList">
        <h3>Candy list</h3>
        {!isLoading && storeProducts.length === 0 && <h3 className="display-3">No products, in Stock </h3> }
        {!isLoading && storeProducts.length > 0 && storeProducts && storeProducts.filter(
          (x) => x.producer && x.producer.name === producerName,
        ).map((candy) => <CandyItem candy={candy} deleteProduct={deleteProduct} handleCurrent={handleCurrent} />) }

        {showForm && current !== null && (
          <EditForm current={current} toggle={toggleForm} />
        ) }

      </ul>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  storeProducts: selectProducts(state),
  isLoading: selectProductsIsLoading(state),
  user: state.auth.user,
  current: state.producer.current,
});


export default connect(mapStateToProps, { getAllProducts, setCurrent, deleteProduct })(CandyList);
