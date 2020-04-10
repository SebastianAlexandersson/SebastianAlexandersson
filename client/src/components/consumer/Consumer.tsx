/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { IUserData } from '../../redux/auth/auth.types';
import Spinner from '../layout/Spinner';
import './Consumer.css';
import { Link } from 'react-router-dom';

interface Props {
  user: IUserData | null;
  isLoading: boolean;

}

const Consumer: React.FC<Props> = ({ user, isLoading }) => (!isLoading ? (
  <div className="Consumer">
    {' '}
    <h1>
      {' '}
      Hello
      {' '}
      {!isLoading && user && user.username }
      {' '}

      {' '}
    </h1>

    <h3> Let's shop some Candy </h3>
    <Link to="/" className="Btn candy-cta"> Candies </Link>
  </div>
) : <Spinner />);


const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
  isLoading: state.auth.loading,
});


export default connect(mapStateToProps)(Consumer);
