/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import { AppState } from './redux';
import { loadUser } from './redux/auth/auth.actions';
import UserProfile from './components/user/UserProfile';


let token: any;
if (Cookie.get('token')) {
  token = Cookie.get('token');
  setAuthToken(token);
}

interface Props {
  token: any;
  loadUser: () => void;
}

const App: React.FC <Props> = ({ token, loadUser }) => {
  React.useEffect(() => {
    if (!token) {
      console.log('no token');
    } else {
      loadUser();
    }
  }, []);
  return (
    <div className="App">
      <Layout>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/me" component={UserProfile} />
          </Switch>
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  token: state.auth.token,
});


export default connect(mapStateToProps, { loadUser })(App);
