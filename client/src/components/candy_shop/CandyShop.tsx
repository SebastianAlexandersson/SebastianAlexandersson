import * as React from 'react';
import './candyshop.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducers } from '../../redux/concumer/consumer.actions';
import { AppState } from '../../redux';
import { IProducer } from '../../redux/producer/producer.types';


interface Props {
  getProducers: () => Promise<void>;
  producers: IProducer[];
}

const CandyShop: React.FC<Props> = ({ getProducers, producers }) => {
  React.useEffect(() => {
    getProducers();
  }, []);

  return (
    <div className="CandyShop">
      <h2>{producers && producers.length > 0 && producers[0] ? producers[0].name : 'producer 1'}</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Candy</th>
            <th scope="col">Increase</th>
            <th scope="col">Decrease</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Daim</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


          <tr>
            <th scope="row">2</th>
            <td>Skum tomte</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


          <tr>
            <th scope="row">3</th>
            <td>Marabou</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


        </tbody>
      </table>
      <h2>{producers && producers.length > 0 && producers[1] ? producers[1].name : 'producer 2'}</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Candy</th>
            <th scope="col">Increase</th>
            <th scope="col">Decrease</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Daim</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


          <tr>
            <th scope="row">2</th>
            <td>Skum tomte</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


          <tr>
            <th scope="row">3</th>
            <td>Marabou</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


        </tbody>
      </table>

      <h2>{producers && producers.length > 0 && producers[2] ? producers[2].name : 'producer 3'}</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Candy</th>
            <th scope="col">Increase</th>
            <th scope="col">Decrease</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Daim</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


          <tr>
            <th scope="row">2</th>
            <td>Skum tomte</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


          <tr>
            <th scope="row">3</th>
            <td>Marabou</td>
            <td>
              <button type="button" className="btn-primary btn">+</button>
            </td>
            <td>
              <button type="button" className="btn-danger btn">-</button>
            </td>
            <td>3</td>
            <td>12</td>
          </tr>


        </tbody>
      </table>
      <Link to="/checkout">
        {' '}
        <button type="button" className="btn btn-outline-dark btn-lg mt-5">Checkout</button>
        {' '}
      </Link>
    </div>
  );
};
const mapStateToProps = (state: AppState) => ({
  producers: state.consumer.producers,
});
export default connect(mapStateToProps, { getProducers })(CandyShop);
