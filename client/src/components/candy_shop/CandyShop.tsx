import * as React from 'react';
import './candyshop.css';
import { Link } from 'react-router-dom';

interface Props {

}

const CandyShop: React.FC<Props> = () => {
  let a;
  return (
    <div className="CandyShop">
      <h2>Producer 1</h2>
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
      <h2>Producer 2</h2>
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

      <h2>Producer 3</h2>
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
export default CandyShop;
