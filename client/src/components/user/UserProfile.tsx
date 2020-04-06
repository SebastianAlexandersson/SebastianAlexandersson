/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import * as H from 'history';
import { AppState } from '../../redux';
import { IUserData } from '../../redux/auth/auth.types';
import './User.css';
import CandyStock from '../candy_stock/CandyStock';
import CandyShop from '../candy_shop/CandyShop';
import CandyList from '../candy_stock/CandyList';
import CandyAuth from '../candy_stock/CandyAuth';
import CandyUser from '../candy_shop/CandyUser';

interface Props extends RouteProps{
  user: IUserData | null;
  isLoading: boolean;
  isAuth: boolean;
  history: H.History<any>;
}

const UserProfile: React.FC<Props> = ({
  user, isLoading, isAuth, history,
}) => (


  <div className="UserProfile" />
);

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
  isAuth: state.auth.isAuth,
  isLoading: state.auth.loading,
});
export default connect(mapStateToProps)(UserProfile);
