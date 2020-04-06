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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;


    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>{formData.name}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            producer name
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleChange}
              name="name"
            />
          </label>
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  );
};

export default connect(null, { createProducer })(Producer);
