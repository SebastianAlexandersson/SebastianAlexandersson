/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../../redux';
import { logoutUser } from '../../../redux/auth/auth.actions';
import { IUserData } from '../../../redux/auth/auth.types';
import { ReactComponent as CartLogo } from '../../../img/cart.svg';
import useToggle from '../../../hooks/useToggle';
import DropDown from './DropDown';
import { selectUser } from '../../../redux/auth/aut.selector';
import { selectCartItemCount } from '../../../redux/cart/cart.selector';


interface Props {
  isAuth: boolean;
  isLoading: boolean;
  user: IUserData | null;
  logoutUser: () => Promise<void>;
  cartCount: number;
}

interface INavLink {
  id: number;
  text: string;
  path: string;
}

const NavList: React.FC<Props> = ({
  isAuth, isLoading, logoutUser, user, cartCount,
}) => {
  const navLinks: INavLink[] = [

    {
      id: 1,
      text: 'login',
      path: '/login',
    },
    {
      id: 2,
      text: 'register',
      path: '/register',
    },
  ];

  const [showCart, toggleCart] = useToggle(false);
  return (
    <ul id="navList">

      {!isLoading && isAuth && user?.role === 'producer' && (
        <li>
          {' '}
          <Link to="/producer">
            {' '}
            {user.username}
            {' '}
          </Link>
          {' '}
        </li>
      ) }

      {!isLoading && isAuth && user?.role === 'admin' && (
        <li>
          {' '}
          <Link to="/admin">
            {' '}
            {user.username}
            {' '}
          </Link>
          {' '}
        </li>
      ) }


      {!isLoading && isAuth && user?.role === 'user' && (
        <>
          <li>
            <Link to="/user">
              {' '}
              {user.username}
              {' '}
            </Link>
          </li>

          <li>
            <span className="Cart-logo" onClick={toggleCart}>
              <CartLogo />
              <small>{cartCount}</small>
            </span>
          </li>
        </>
      ) }


      {!isLoading && isAuth ? (
        <>
          <li>
            {' '}
            <Link to="/">Home</Link>
            {' '}
          </li>

          <li>
            <span onClick={() => {
              logoutUser();
            }}
            >
              Logout
            </span>
          </li>


        </>
      ) : navLinks.map((link) => (
        <li key={link.id}>
          {' '}
          <Link to={link.path}>{link.text}</Link>
          {' '}
        </li>
      )) }

      {showCart && <DropDown />}

    </ul>
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuth: state.auth.isAuth,
  isLoading: state.auth.loading,
  user: selectUser(state),
  cartCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, { logoutUser })(NavList);
