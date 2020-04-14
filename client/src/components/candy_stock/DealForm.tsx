/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { IDeal } from '../../redux/producer/producer.types';
import { createDeal, clearDeal } from '../../redux/producer/producer.actions';

interface Props {
  dealCurrent: IDeal | null;
  toggle: () => void;
  createDeal: (dela: IDeal) => Promise<void>;
  clearDeal: () => void;
}

const DealForm: React.FC<Props> = ({ dealCurrent, toggle, createDeal }) => {
  const [price, setPrice] = React.useState<string>('');

  const formatPercent = () => {
    const currentPrice = dealCurrent ? dealCurrent?.price : 0;
    const x = Number(price) / 100;
    // console.log('x', x);
    // console.log(x * currentPrice);
    return x * currentPrice;
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const deal: IDeal = { productId: Number(dealCurrent?.productId), price: Number(price) };

    createDeal(deal);
    setPrice('');
    clearDeal();
    toggle();
  };

  return (
    <form className="Deal-form" onSubmit={handleSubmit}>
      <h3>Make a deal</h3>
      <input
        type="text"
        placeholder="deal price"
        className="form-control"
        name="deal"
        value={price}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
      />
      <button type="submit">Deal</button>
    </form>
  );
};

export default connect(null, { createDeal })(DealForm);
