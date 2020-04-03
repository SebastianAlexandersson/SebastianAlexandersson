import * as React from 'react';

interface Props {

}

const CandyStock: React.FC<Props> = () => {
  let a;
  return (
    <div className="CandyStock">
      <form>
        <div className="form-group">
          <label htmlFor="candyName">Candy name</label>
          <input type="text" className="form-control" id="candyName" />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" className="form-control" id="price" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


    </div>
  );
};
export default CandyStock;
