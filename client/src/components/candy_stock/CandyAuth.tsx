import * as React from 'react';
import * as H from 'history';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import CandyList from './CandyList';
import CandyStock from './CandyStock';
import { AppState } from '../../redux';
import { IUserData } from '../../redux/auth/auth.types';


interface Props extends RouteComponentProps {
  user: IUserData | null;
  isAuth: boolean;
  isLoading: boolean;
  history: H.History<any>;
}

const CandyAuth: React.FC<Props> = ({
  user, isAuth, isLoading, history,
}) => {
  React.useEffect(() => {
    if (user === null && !isAuth) {
      history.push('/login');
    }
  }, [isAuth]);

  return (
    <div className="CandyAuth mt-5 ">
      {!isLoading && isAuth && user ? (
        <h2 className="display-2">
          Welcome
          {' '}
          {user.username}
          {' '}
        </h2>
      ) : <h2>...Loading</h2> }
      <CandyStock />
      <CandyList />
    </div>
  );
};


const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
  isAuth: state.auth.isAuth,
  isLoading: state.auth.loading,
});
export default connect(mapStateToProps)(CandyAuth);
