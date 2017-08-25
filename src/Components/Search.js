import React from 'react';
import Data from './Data.js';
import SearchResult from './SearchResult';

const MATCHING_ITEM_LIMIT = 9;

class Search extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        value: '',
        products: []
      };
  }

    handleSearchChange = e => {
      const value = e.target.value;

      this.setState({
        value: value
      });

      if (value === "") {
        this.setState({
          products: []
        });
      } else {


        Data.search(value, products => {
          this.setState({
            products: products.hits.hits.slice(0, MATCHING_ITEM_LIMIT)
          });
        });
      }
    };



  render() {
    return (
      <div>
        <input type="text" required placeholder="Search"
        value={this.state.value}
        onChange={this.handleSearchChange}/>
        <SearchResult products={this.state.products}/>
      </div>

    );
  }
}

export default Search;
