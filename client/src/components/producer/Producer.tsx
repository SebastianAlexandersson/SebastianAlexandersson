/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';

import { connect } from 'react-redux';
import { createProducer } from '../../redux/producer/producer.actions';

interface Props {
  createProducer: (formData: Record<string, any>) => Promise<void>;
}


const Producer: React.FC<Props> = ({ createProducer }) => {
  const [formData, setFormData] = React.useState({ name: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProducer(formData);
    setFormData({ name: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;


    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <span className="display-4">producer name</span>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleChange}
              name="name"
            />
          </label>
        </div>


        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </form>

    </div>
  );
};

export default connect(null, { createProducer })(Producer);
