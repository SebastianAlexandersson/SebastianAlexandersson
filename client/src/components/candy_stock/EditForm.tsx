/* eslint-disable react/prop-types */
import * as React from 'react';
import { IProduct } from '../../redux/producer/producer.types';

interface Props {
  current: null | IProduct;
}

const EditForm: React.FC<Props> = ({ current }) => (
  <form>
    <div className="form-group">
      <label htmlFor="name">
        <strong>{ current && current.name}</strong>
        <input type="text" className="form-control" placeholder={current?.name.toString()} />
      </label>
    </div>

    <div className="form-group">
      <label htmlFor="qty">
        <strong>{current && current.qty.toString()}</strong>
        <input type="text" className="form-control" placeholder={current?.qty.toString()} />
      </label>
    </div>

    <div className="form-group">
      <label htmlFor="price">
        <strong>{current && current.price.toString()}</strong>
        <input type="text" className="form-control" placeholder={current?.price.toString()} />
      </label>
    </div>

    <button type="submit" className="btn btn-primary">Update</button>
  </form>
);
export default EditForm;
