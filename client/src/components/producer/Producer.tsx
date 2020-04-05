import * as React from 'react';

import { connect } from 'react-redux';
import { createProducer } from '../../redux/producer/producer.actions';

interface Props {
  createProducer: (name: string) => Promise<void>;
}


const Producer: React.FC<Props> = ({ createProducer }) => {
  const [name, setName] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
    createProducer(name);
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            producer name
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e: any) => setName(e.target.value)}
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
