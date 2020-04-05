/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import * as H from 'history';
import { AppState } from '../../redux';
import { IUserData } from '../../redux/auth/auth.types';

interface Props extends RouteComponentProps {
  user: IUserData | null;
  isAuth: boolean;
  isLoading: boolean;
  history: H.History<any>;
}

const CandyUser: React.FC<Props> = ({
  isAuth, isLoading, user, history,
}) => {
  React.useEffect(() => {
    if (user === null && !isAuth) {
      history.push('/login');
    }
  }, [isAuth]);


  return (
    <div className="candyUser mt-5">
      {!isLoading && isAuth && user ? (
        <h2 className="display-2">
          Welcome
          {' '}
          {user.username}
          {' '}
        </h2>
      ) : <h2>...Loading</h2> }
    </div>
  );
};


const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
  isAuth: state.auth.isAuth,
  isLoading: state.auth.loading,
});

export default connect(mapStateToProps)(CandyUser);
