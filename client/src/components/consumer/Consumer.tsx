/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { IUserData } from '../../redux/auth/auth.types';
import { addConsumerProfile } from '../../redux/concumer/consumer.actions';
import { IConsumer } from '../../redux/concumer/consumer.types';

interface Props {
  user: IUserData | null;
  userLoading: boolean;
  addConsumerProfile: (formData: IConsumer) => Promise<void>;
}

const Consumer: React.FC<Props> = ({ user, userLoading, addConsumerProfile }) => (
  <div>
    {' '}
    <h1 className="display-1">
      {' '}
      Hello
      {' '}
      {!userLoading && user && user.username }
      {' '}

      {' '}
    </h1>

    <h3 className="display-3"> Let's shop some Candy </h3>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
  userLoading: state.auth.loading,
});


export default connect(mapStateToProps, { addConsumerProfile })(Consumer);
