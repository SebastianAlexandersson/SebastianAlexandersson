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

const Consumer: React.FC<Props> = ({ user, userLoading, addConsumerProfile }) => {
  const [formData, setformData] = React.useState({
    firstName: '',
    lastName: '',
    adress: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log(formData);
    addConsumerProfile(formData);

    setformData({
      firstName: '',
      lastName: '',
      adress: '',
    });
  };


  return (
    <div>
      {' '}
      <h1>
        {' '}
        Hello
        {' '}
        {!userLoading && user && user.username }
        {' '}
        Create your profile
        {' '}
      </h1>


      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <span>firstName</span>
          <input type="text" name="firstName" placeholder="firstName" value={formData.firstName} onChange={handleChange} />
        </label>

        <label htmlFor="lastName">
          <span>lastName</span>
          <input type="text" name="lastName" placeholder="lastName" value={formData.lastName} onChange={handleChange} />
        </label>

        <label htmlFor="address">
          <span>address</span>
          <input type="text" name="adress" placeholder="address" value={formData.adress} onChange={handleChange} />
        </label>


        <button type="submit" className="btn btn-lg btn-primary">submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
  userLoading: state.auth.loading,
});


export default connect(mapStateToProps, { addConsumerProfile })(Consumer);
