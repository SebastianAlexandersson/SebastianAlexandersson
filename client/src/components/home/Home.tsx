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
<<<<<<< HEAD
import CandyItem from '../Candy/CandyItem';
import { selectUser, selectUserToken } from '../../redux/auth/aut.selector';
=======
import CandyItem from '../candy/CandyItem';
import { selectUser } from '../../redux/auth/aut.selector';
>>>>>>> bb0afebd9083be2c30697e07e3103e268a575a41
import { IUserData } from '../../redux/auth/auth.types';
import { selectProducts, selectProductsIsLoading, selectFilteredProducts } from '../../redux/shop/shop.selector';
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

        <div className="LabelWrapper">
          <Label allProducts={allProducts} isLoading={isProductsLoading} />
        </div>

      </div>
      {isProductsLoading && <Spinner /> }

      <div className="CandyGrid">
        {!isProductsLoading && user?.role !== 'producer' && filteredProducts !== null ? filteredProducts.map(
          (prod) => <CandyItem key={prod.id} product={prod} />,
        ) : allProducts.map(
          (prod) => <CandyItem key={prod.id} product={prod} />,
        ) }
      </div>
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
