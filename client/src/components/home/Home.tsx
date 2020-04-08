/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { IProduct } from '../../redux/producer/producer.types';
import { getAllProducts } from '../../redux/producer/producer.actions';
import Spinner from '../layout/Spinner';
import './home.css';
import CandyItem from '../candy/CandyItem';

interface Props{
  allProducts: IProduct[];
  getAllProducts: () => Promise<void>;
  isLoading: boolean;
}

const Home: React.FC<Props> = ({ allProducts, getAllProducts, isLoading }) => {
  React.useEffect(() => {
    getAllProducts();
  }, []);
  console.log(allProducts);
  return (
    <>
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
      {isLoading && <Spinner /> }

      <div className="CandyGrid">
        {!isLoading && allProducts.length > 0 && allProducts.map((prod) => (
          <CandyItem key={prod.id} product={prod} />
        )) }
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  allProducts: state.producer.products,
  isLoading: state.producer.loading,
});

export default connect(mapStateToProps, { getAllProducts })(Home);
