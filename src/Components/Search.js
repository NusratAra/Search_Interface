import React from 'react';
import api from './api.js';
import SearchResult from './SearchResult';

const MATCHING_ITEM_LIMIT = 25;
class Search extends React.Component {
  state = {
      products: [],
      searchValue: ""
    };

    handleSearchChange = e => {
      const value = e.target.value;

      this.setState({
        searchValue: value
      });

      if (value === "") {
        this.setState({
          products: []
        });
      } else {


        api.search(value, products => {
          this.setState({
            products: products.slice(0, MATCHING_ITEM_LIMIT)
          });
        });
      }
    };



  render() {
    return (
      <div>
        <input type="text" required placeholder="Search"
        value={this.state.searchValue}
        onChange={this.handleSearchChange}/>
        <button type="submit"
        onClick={this.props.handleSearchChange}>Search</button>
        <SearchResult products={this.state.products}/>
      </div>

    );
  }
}

export default Search;
