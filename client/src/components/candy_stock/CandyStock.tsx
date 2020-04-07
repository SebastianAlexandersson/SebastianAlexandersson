/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { addNewProduct } from '../../redux/producer/producer.actions';


interface Props {
  addNewProduct: Function;
}


const CandyStock: React.FC<Props> = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  return (
    <div className="CandyStock">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Candy name
            <input type="text" className="form-control" id="name" value="name" onChange={handleChange} name="name" />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="price">
            Price
            <input type="text" className="form-control" id="price" value="price" onChange={handleChange} name="price" />
          </label>
        </div>
        <div className="form-group">

          <label htmlFor="qty">
            qty
            <input type="text" className="form-control" id="qty" value="qty" onChange={handleChange} name="qty" />
          </label>
        </div>


        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </form>

    </div>
  );
};


export default connect(null, { addNewProduct })(CandyStock);
