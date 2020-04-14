/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
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
import { selectUser } from '../../redux/auth/aut.selector';
import { IUserData } from '../../redux/auth/auth.types';
import {
  selectProducts, selectProductsIsLoading,
  selectFilteredProducts,
} from '../../redux/shop/shop.selector';
import SearchBar from './SearchBar';
import useToggle from '../../hooks/useToggle';
import Title from '../title/Title';
import Label from './Label';

interface Props{
  allProducts: IProduct[];
  getAllProducts: () => Promise<void>;
  isProductsLoading: boolean;
  user: IUserData | null;
  filteredProducts: null | IProduct[];
}

const Home: React.FC<Props> = ({
  allProducts, getAllProducts, isProductsLoading, user, filteredProducts,
}) => {
  const [showSearch, toggleSearch] = useToggle(false);

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="Home">
        <Title
          title="Easter Egg App"
          spanOne="By"
          subTitle="Sebastian the Dev ops hacker"
          spanTwo="and"
          subTitle2="Marcell the ...."
        />

        {!isProductsLoading && user?.role !== 'producer' && (
          <div className="Search">
            <span id="search-Icon" onClick={toggleSearch}>&#x26B2;</span>

            {showSearch && <SearchBar />}
          </div>
        )}


      </div>
      {isProductsLoading && <Spinner /> }

      {!isProductsLoading && user?.role !== 'producer' ? (
        <>
          <div className="LabelWrapper">
            <Label allProducts={allProducts} isLoading={isProductsLoading} />
          </div>


          <div className="CandyGrid">
            {!isProductsLoading && filteredProducts !== null ? filteredProducts.map(
              (prod) => <CandyItem key={prod.id} product={prod} />,
            ) : allProducts.map(
              (prod) => <CandyItem key={prod.id} product={prod} />,
            ) }
          </div>
        </>
      ) : <div /> }
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: selectUser(state),
  allProducts: selectProducts(state),
  isProductsLoading: selectProductsIsLoading(state),
  filteredProducts: selectFilteredProducts(state),
});

export default connect(mapStateToProps, { getAllProducts })(Home);
