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

interface Props extends RouteProps{
  user: IUserData | null;
  isLoading: boolean;
  isAuth: boolean;
  history: H.History<any>;
}

const UserProfile: React.FC<Props> = ({
  user, isLoading, isAuth, history,
}) => {
  React.useEffect(() => {

  }, []);
  return (


    <div className="UserProfile">
      <div className={`${!isLoading && user && user.role === 'admin' ? 'Admin-role' : 'User-role'} user-header`}>
        <h3>
          welcome
          {' '}
          {!isLoading && user && user.username}
        </h3>
        <h5>
          Role:
          {' '}
          {!isLoading && user && user.role.toUpperCase()}
          {' '}
        </h5>
      </div>
      <div className="options">
        {!isLoading && user?.role === 'admin' ? (
          <>
            <h3>Add new candy</h3>
            <CandyStock />
            <CandyList />
          </>
        )
          : (
            <>
              <h3>Buy some candy</h3>
              <CandyShop />
            </>
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
  isAuth: state.auth.isAuth,
  isLoading: state.auth.loading,
});
export default connect(mapStateToProps)(UserProfile);
