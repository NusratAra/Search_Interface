import React from 'react';
import '../css/style.css';
import Data from './Data.js';
import SearchResult from './SearchResult';

const MATCHING_ITEM_LIMIT = 9;

class Search extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        value: '',
      };
  }

    handleSearchChange = e => {
      const value = e.target.value;

      this.setState({
        value: value
      });

      if (value === "") {
	      this.props.onSearchFinished([]);
      } else {

        Data.search(value, products => {
          this.props.onSearchFinished(products.hits.hits.slice(0, MATCHING_ITEM_LIMIT))
        });
      }
    };



  render() {
    return (
      <div>
        <input type="text" required placeholder="Search"
        value={this.state.value}
        onChange={this.handleSearchChange}/>
      </div>

    );
  }
}

export default Search;
