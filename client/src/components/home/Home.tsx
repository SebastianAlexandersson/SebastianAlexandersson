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
import { selectUser, selectUserToken } from '../../redux/auth/aut.selector';
import { IUserData } from '../../redux/auth/auth.types';
import { selectProducts, selectProductsIsLoading } from '../../redux/shop/shop.selector';
import SearchBar from './SearchBar';
import useToggle from '../../hooks/useToggle';
import Title from '../title/Title';

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
            <span id="search-Icon" onClick={toggleSearch}>&#x262F;</span>
            {showSearch && <SearchBar />}
          </div>
        )}

      </div>
      {isProductsLoading && <Spinner /> }

      <div className="CandyGrid">
        {!isProductsLoading && user?.role !== 'producer' && allProducts.length > 0 && allProducts.map((prod) => (
          <CandyItem key={prod.id} product={prod} />
        )) }
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: selectUser(state),
  isThereAToken: selectUserToken(state),
  allProducts: selectProducts(state),
  isProductsLoading: selectProductsIsLoading(state),
});

export default connect(mapStateToProps, { getAllProducts })(Home);
