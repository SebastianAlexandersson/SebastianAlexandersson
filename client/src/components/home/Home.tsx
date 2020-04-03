import * as React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../redux/auth/auth.actions';
import { AppState } from '../../redux';

interface Props {
  loadUser: () => void;
  isAuth: boolean;
}

const Home: React.FC<Props> = ({ loadUser, isAuth }) => {
  React.useEffect(() => {
    if (isAuth) {
      loadUser();
    } else {
      console.log('no token');
    }
  }, []);
  return (
    <div>
      <h1> Welcome </h1>
    </div>
  );
};


const mapStateToProps = (state: AppState) => ({

  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { loadUser })(Home);
