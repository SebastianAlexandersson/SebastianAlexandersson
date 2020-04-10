import * as React from 'react';

interface Props {

}

const SearchBar: React.FC<Props> = () => (
  <>
    <label htmlFor="Searchbar">
      <input type="text" id="Searchbar" />
    </label>
  </>
);
export default SearchBar;
