/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { IProduct } from '../../redux/shop/shop.types';
import { getAllProducts } from '../../redux/shop/shop.actions';
import Spinner from '../layout/Spinner';
import './home.css';
import CandyItem from '../candy/CandyItem';
import { selectUser, selectUserToken } from '../../redux/auth/aut.selector';
import { IUserData } from '../../redux/auth/auth.types';
import { selectProducts, selectProductsIsLoading } from '../../redux/shop/shop.selector';

interface Props{
  allProducts: IProduct[];
  getAllProducts: () => Promise<void>;
  isProductsLoading: boolean;
  user: IUserData | null;
  isThereAToken: string | null | undefined;
}

const Home: React.FC<Props> = ({
  allProducts, getAllProducts, isProductsLoading, user, isThereAToken,
}) => {
  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <React.Suspense fallback={<Spinner />}>

        <div className="Home">
          <h1> Welcome to Easter Egg App </h1>
          <h3>
            <span>By</span>
            {' '}
            Sebastian the Dev ops hacker
            {' '}
            <span>and</span>
            {' '}
            Marcell the ....
            {' '}
          </h3>
          <h4>Here is the candies that are available</h4>
        </div>
        {/* {isProductsLoading && <Spinner /> } */}

        <div className="CandyGrid">
          {/* {!isProductsLoading && user?.role !== 'producer' && isThereAToken && allProducts.length > 0 && allProducts.map((prod) => (
          <CandyItem key={prod.id} product={prod} />
        )) } */}
        </div>
      </React.Suspense>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  // allProducts: state.producer.products,
  // isProductsLoading: state.producer.loading,
  user: selectUser(state),
  isThereAToken: selectUserToken(state),
  allProducts: selectProducts(state),
  isProductsLoading: selectProductsIsLoading(state),
});

export default connect(mapStateToProps, { getAllProducts })(Home);
